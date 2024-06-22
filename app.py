import mysql.connector
from mysql.connector import Error

class Catalogo:
    def __init__(self, host, user, password, database):
        self.host = host
        self.user = user
        self.password = password
        self.database = database
        self.connection = None
        self.cursor = None

        try:
            self.connection = mysql.connector.connect(
                host=self.host,
                user=self.user,
                password=self.password,
                database=self.database
            )
            if self.connection.is_connected():
                print("Conexión exitosa")
        except Error as e:
            print(f"Error al conectar a la base de datos: {e}")
            raise e

        # Creamos el cursor
        self.cursor = self.connection.cursor(dictionary=True)

        # Creamos la tabla productos si no existe
        self.cursor.execute('''CREATE TABLE IF NOT EXISTS productos (
            codigo INT AUTO_INCREMENT PRIMARY KEY,
            descripcion VARCHAR(255) NOT NULL,
            cantidad INT NOT NULL,
            precio DECIMAL(10, 2) NOT NULL,
            imagen_url VARCHAR(255),
            proveedor INT(4))''')
        
        self.connection.commit()
        
        
        
        
        
    def agregar_producto(self, descripcion, cantidad, precio, imagen, proveedor):
        sql = "INSERT INTO productos (descripcion, cantidad, precio, imagen_url, proveedor) VALUES (%s, %s,%s,%s, %s)"
        values = (descripcion, cantidad, precio, imagen, proveedor)
        
        self.cursor.execute(sql, values)
        self.connection.commit()
        return print(f'El ultimo id agregado: {self.cursor.lastrowid}')
        
        
        
        
    def modificar_productos(self, codigo, descripcion, cantidad, precio, imagen, proveedor):
        
        sql = "UPDATE productos SET descripcion = %s, cantidad = %s, precio = %s, imagen_url = %s, proveedor = %s WHERE codigo = %s"        
        values = (descripcion, cantidad, precio, imagen, proveedor, codigo)
        
        self.cursor.execute(sql, values)
        self.connection.commit()
        if self.cursor.rowcount > 0:
            print(f"Se modifico correctamente el procducto con el codigo {codigo}")
        else:
            print(f"no se encontro producto con el codigo {codigo}")
        
        
        
        
        
    def eliminar_producto(self, codigo):
# Eliminamos un producto de la tabla a partir de su código
        self.cursor.execute(f"DELETE FROM productos WHERE codigo ={codigo}")
        self.conn.commit()
        #se elimino mas de 0 registros = TRUE
        return self.cursor.rowcount > 0
    
    
    
    
    
    def obtener_codigos(self):
        sql = "SELECT codigo FROM productos"
        self.cursor.execute(sql)
        
        query_result = self.cursor.fetchone()
        while query_result is not None:
            print(f"Código.....: {query_result['codigo']}")
            query_result = self.cursor.fetchone()  # Mover al siguiente resultado

            
            
        
        
        
        
    def listar_productos(self, codigo):
        sql = f"SELECT * FROM productos WHERE codigo = {codigo}"
        self.cursor.execute(sql)
        
        # Me devolverá None si no encuentra nada
        query_result = self.cursor.fetchone()
        
        if query_result is not None:
            print("-" * 40)
            print(f"Código.....: {query_result['codigo']}")
            print(f"Descripción: {query_result['descripcion']}")
            print(f"Cantidad...: {query_result['cantidad']}")
            print(f"Precio.....: {query_result['precio']}")
            print(f"Imagen.....: {query_result['imagen_url']}")
            print(f"Proveedor..: {query_result['proveedor']}")
            print("-" * 40)
        else:
            print("No se encontró ningún producto con ese código")

        
        
        
    def cerrar_conexion(self):
        if self.connection.is_connected():
            self.cursor.close()
            self.connection.close()
            print("Conexión cerrada")
            
            
            
            

#MAIN
catalogo = Catalogo('127.0.0.1', 'root', '', 'test')

#catalogo.agregar_producto('Teclado USB 101 teclas', 10, 4500,'teclado.jpg', 101)
#catalogo.agregar_producto('Mouse USB 3 botones', 5, 2500, 'mouse.jpg',102)
#catalogo.agregar_producto('Monitor LED', 5, 25000, 'monitor.jpg', 102)

catalogo.obtener_codigos()
catalogo.listar_productos(13)

# Probar la función modificar_productos con el código 36

resultado = catalogo.modificar_productos(38, "Nuevo producto", 10, 99.99, "", 12)



# Cuando termines de trabajar con la base de datos, cierra la conexión
catalogo.cerrar_conexion()
