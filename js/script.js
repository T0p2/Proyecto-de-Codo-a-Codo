//Funcion para comprobar la edad del usuario a la hora de cargar
//sus datos en el formulario
function comprobarEdad() {
    let edadBlank = document.getElementById("age"); //DOM del input
    let edad = document.getElementById("age").value; //Valor del Input
    let resultado = document.getElementById("resultado");
    console.log(edad);
    if (edadBlank.value.trim() === "") {
        alert("Ingrese una edad porfavor!")
        //resultado.textContent = "Ingrese edad";
        return;
    }
    if (edadBlank.value < 18) {
        // Obtén los elementos del formulario por su ID
        var name = document.getElementById('name');
        var surname = document.getElementById('surname');
        var age = document.getElementById('age');
        var email = document.getElementById('email');
        var phone = document.getElementById('phone');
        var dni = document.getElementById('DNI');
        var cabaña = document.getElementById('cabaña');
        var dateIn = document.getElementById('dateIn');
        var dateOut = document.getElementById('dateOut');


        // Establece el valor de cada elemento en blanco
        name.value = '';
        surname.value = '';
        age.value = '';
        email.value = '';
        phone.value = '';
        dni.value = '';
        cabaña.value= '';
        dateIn.value = '';
        dateOut.value= '';

        alert("Usted no puede continuar con el proceso de registro ya que es menor de edad. Lo sentimos!")
    }
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
datePickerIdin.addEventListener('change', function() {
    const selectedDate = new Date(datePickerIdin.value);
    const minDateOut = new Date();
    minDateOut.setDate(selectedDate.getDate() + 2); // +2 para que la minima sea mañana y no incluya el hoy
    datePickerIdOut.min = minDateOut.toISOString().split("T")[0];
});
