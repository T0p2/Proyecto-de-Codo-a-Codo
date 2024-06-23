//Funcion para comprobar la edad del usuario a la hora de cargar
//sus datos en el formulario
function comprobarEdad() {
    let edadBlank = document.getElementById("age"); //DOM del input
    let edad = parseInt(edadBlank.value, 10); //Valor del Input como número entero
    let resultado = document.getElementById("resultado");
    
    
    console.log(edad);
    
    if (edadBlank.value.trim() === "") {
        alert("Ingrese una edad porfavor!");
        return false; // Detener el envío del formulario
    }
    
    if (edad < 18) {
        alert("Usted no puede continuar con el proceso de registro ya que es menor de edad. Lo sentimos!");
        return false; // Detener el envío del formulario
    }
    return true; // Continuar con el envío del formulario si la validación pasa
}


//---------- O --------------


//este es el script para poder poner la fecha minima como mañana para seleccionar el turno.




const datePickerIdin = document.getElementById("dateIn");
const datePickerIdOut = document.getElementById("dateOut");

// Establecemos la fecha mínima inicial para datePickerIdin como hoy.
//Establecemos la fecha de salida minima como mañana, independientemente de que despues pueda cambiar con el evento.
const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

datePickerIdin.min = today.toISOString().split("T")[0];
datePickerIdOut.min = tomorrow.toISOString().split("T")[0]; // Establecemos la fecha mínima como mañana.


// Cuando el usuario elija una fecha en datePickerIdin, actualizamos la fecha mínima de datePickerIdOut.
datePickerIdin.addEventListener('change', function () {
    const selectedDate = new Date(datePickerIdin.value);
    const minDateOut = new Date();
    minDateOut.setDate(selectedDate.getDate() + 1); // +2 para que la minima sea mañana y no incluya el hoy
    datePickerIdOut.min = minDateOut.toISOString().split("T")[0];
});





//-------- codigo para busqueda de cabañas--------

function busquedaCabañas() {
    const radios = document.getElementsByName('cabaña');

    // Itera a través de los botones para encontrar el seleccionado
    let valorSeleccionado = null;
    radios.forEach((radio) => {
        
        if (radio.checked) {
            if(radio.value === "otro"){
                valorSeleccionado = document.getElementById("otroInput").value;
            }else{
                valorSeleccionado = radio.value;
            }
            
        }
    });

    // Ahora 'valorSeleccionado' contiene el valor del botón de radio seleccionado
    console.log('Valor seleccionado:', valorSeleccionado);

}




const URL = "http://127.0.0.1:5000/"

// Capturamos el evento de envío del formulario
document.getElementById('formulario').addEventListener('submit',
    function (event) {

        event.preventDefault(); // Evitamos que se envie el form

        var formData = new FormData(this);
        // Realizamos la solicitud POST al servidor
        fetch(URL + 'reservar', {
            method: 'POST',
            body: formData // Aquí enviamos formData. Dado queformData puede contener archivos, no se utiliza JSON.

        })
        //Después de realizar la solicitud POST, se utiliza el método


        .then(function (response) {
            if (response.ok) {
//Si la respuesta es exitosa, convierte los datos de la respuesta a formato JSON.

                return response.json();
            } else {
                // Si hubo un error, lanzar explícitamente unaexcepción

                // para ser "catcheada" más adelante
                throw new Error('Error al agregar el producto.');
            }
        })
//Respuesta OK, muestra una alerta informando que el producto se agregó correctamente y limpia los campos del formulario para que puedan ser utilizados para un nuevo producto.

        .then(function (data) {
            alert('Producto agregado correctamente.');
        })

// En caso de error, mostramos una alerta con un mensaje de error.

        .catch(function (error) {
            alert('Error al agregar el producto.');
        })
            // Limpiar el formulario en ambos casos (éxito o error)
        .finally(function () {
                document.getElementById('name').value = "";
                document.getElementById('surname').value = "";
                document.getElementById('age').value = "";
                document.getElementById('email').value = "";
                document.getElementById('phone').value ="";
                document.getElementById('DNI').value ="";
                document.getElementById('cabaña').value ="";
                document.getElementById('dateIn').value ="";
                document.getElementById('dateOut').value ="";
            });
    })
