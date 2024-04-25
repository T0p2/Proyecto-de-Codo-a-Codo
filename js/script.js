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
        dateOut= '';

        alert("Usted no puede continuar con el proceso de registro ya que es menor de edad. Lo sentimos!")
    }
}


//---------- O --------------


//este es el script para poder poner la fecha minima como mañana para seleccionar el turno.
const datePickerIdin = document.getElementById("dateIn");
const datePickerIdOut = document.getElementById("dateOut");
const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);// Calculamos la fecha de mañana.
today.setDate(today.getDate());
datePickerIdOut.min = tomorrow.toISOString().split("T")[0]; // Establecemos la fecha mínima como mañana.
datePickerIdin.min = today.toISOString().split("T")[0]; 