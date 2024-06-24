from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import mysql.connector
from werkzeug.utils import secure_filename
import os
import time
from mysql.connector import Error

app = Flask(__name__)
CORS(app)

class Formulario:
    
    
    def __init__(self, host, user, password, database):
        try:
            self.connection = mysql.connector.connect(
                host=host,
                user=user,
                password=password,
                database=database,
                port= 3308
            )
            if self.connection.is_connected():
                print("Conexión exitosa")
        except Error as e:
            print(f"Error al conectar a la base de datos: {e}")
            raise e
        
        self.cursor = self.connection.cursor()
        
        try:
            self.cursor.execute(f"USE {database}")
        except mysql.connector.Error as err:
            if err.errno == mysql.connector.errorcode.ER_BAD_DB_ERROR:
                self.cursor.execute(f"CREATE DATABASE {database}")
                self.connection.database = database
            else:
                raise err
        
        self.cursor.execute('''CREATE TABLE IF NOT EXISTS formulario (
            codigo INT AUTO_INCREMENT PRIMARY KEY,
            nombre VARCHAR(255) NOT NULL,
            apellido VARCHAR(255) NOT NULL,
            edad INT NOT NULL,
            email VARCHAR(255) NOT NULL,
            telefono VARCHAR(15),
            dni INT(8),
            cantidad_personas INT, 
            fecha_entrada DATE,
            fecha_salida DATE )''')
        self.connection.commit()
        
        self.cursor.close()
        self.cursor = self.connection.cursor(dictionary=True)
        
        
        
        
    
    def registrar(self, nombre, apellido, edad, email, telefono, dni, cant_personas, fecha_entrada, fecha_salida):
        
        edad = int(edad)
        if edad < 18:
            return False
        sql = "INSERT INTO formulario (nombre, apellido, edad, email, telefono, dni, cantidad_personas, fecha_entrada, fecha_salida) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
        values = (nombre, apellido, edad, email, telefono, dni, cant_personas, fecha_entrada, fecha_salida)
        
        self.cursor.execute(sql, values)
        self.connection.commit()
        
        return(self.cursor.lastrowid)


form = Formulario('localhost', 'root', '', 'database_formulario')



@app.route("/reservar", methods=["POST"])
def reservar():
    
    nombre = request.form['name']
    apellido = request.form['surname']
    edad = request.form['age']
    email = request.form['email']
    telefono = request.form['phone']
    dni = request.form['dni']
    cant_personas = request.form['cabaña']
  # Si se seleccionó "otro", obtenemos el valor del campo de texto
    if cant_personas == 'otro':
        cant_personas = request.form.get('cabaña_otro')
    fecha_entrada = request.form['dateIn']
    fecha_salida = request.form['dateOut']
    
    registrado = form.registrar(nombre, apellido, edad, email, telefono, dni, cant_personas, fecha_entrada, fecha_salida)
    
    if registrado:
        return jsonify({"mensaje": "Producto agregado correctamente."}), 201
    else:
        return jsonify({"mensaje": "Error al agregar el producto."}), 500


@app.route("/reserva", methods=["GET"])
def formulario_reservar():
    return render_template('formulario.html')
  

if __name__ == "__main__":
    app.run(debug=True)