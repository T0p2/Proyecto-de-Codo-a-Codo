from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import mysql.connector
from werkzeug.utils import secure_filename
import os
import time
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from mysql.connector import Error
from dotenv import load_dotenv


load_dotenv()  # Cargar variables de entorno desde el archivo .env


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
                port = 3308
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


# Inicializar la clase Formulario con las variables de entorno
form = Formulario('localhost', 'root', '', 'database_formulario')



@app.route("/reserva", methods=["GET", "POST"])
def reservar():
    if request.method == "POST":
        # Manejar la solicitud POST (procesar los datos del formulario)
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
            enviar_correo_confirmacion(email, nombre)
            return jsonify({"mensaje": "Producto agregado correctamente."}), 201
        else:
            return jsonify({"mensaje": "Error al agregar el producto."}), 500
    else:
         # Manejar la solicitud GET (mostrar el formulario HTML)
        return render_template('formulario.html')#tiene que coicidir con el nombre del HTML
    


def enviar_correo_confirmacion(email, nombre):
    remitente = 'nachoayerbe2003@gmail.com'
    destinatario = email
    asunto = 'Confirmación de Registro'
    cuerpo = f'Hola {nombre},\n\nTu registro ha sido exitoso. Gracias por registrarte.\n\nSaludos,\nEquipo de Soporte'

    mensaje = MIMEMultipart()
    mensaje['From'] = remitente
    mensaje['To'] = destinatario
    mensaje['Subject'] = asunto
    mensaje.attach(MIMEText(cuerpo, 'plain', 'utf-8'))  # Especificar codificación utf-8

    try:
        servidor = smtplib.SMTP('smtp.gmail.com', 587)
        servidor.starttls()
        servidor.login(remitente, 'gkhm xsei frvu akje')  # Cambia 'tu_contraseña' por tu contraseña real
        texto = mensaje.as_string()
        servidor.sendmail(remitente, destinatario, texto)
        servidor.quit()
        print("Correo enviado exitosamente")
    except Exception as e:
        print(f"Error al enviar el correo: {e}")


if __name__ == "__main__":
    app.run(debug=True)