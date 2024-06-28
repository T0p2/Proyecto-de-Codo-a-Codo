let cabecera = `
    <nav class="navbar">
        <a href="index.html">
            <h1 class="logo">CABAÑAS FANINA</h1>
        </a>
        <label class="label_hamburguesa" for="menu_hamburguesa">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="list_icon" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
        </label>

        <input class="menu_hamburguesa" type="checkbox" name="" id="menu_hamburguesa">

        <ul class="ul_links">
            <li class="li_links">
                <a href="index.html" class="link">INICIO</a>
            </li>
            <li class="li_links">
                <a href="cabanas.html" class="link">CABAÑAS</a>
            </li>
            <li class="li_links">
                <a href="servicios.html" class="link">SERVICIOS</a>
            </li>
            <li class="li_links">
                <a href="contacto.html" class="link">CONTACTO</a>
            </li>
        </ul>
    </nav>
`;
document.getElementById("cabecera").innerHTML= cabecera;

let pie = `
    <div class="redsocial">
        <a href="https://www.facebook.com" target="_blank">
            <img src="img/facebook.png" alt="facebook">
        </a>
        <a href="https://www.twitter.com" target="_blank">
            <img src="img/twitter.png" alt="twitter">
        </a>
        <a href="https://www.instagram.com" target="_blank">
            <img src="img/instagram.png" alt="instagram">
        </a>
    </div>
    <div class="derechos">
        <p>Derechos reservados @2024</p>
    </div>
`;
document.getElementById("pie").innerHTML = pie;



//------------------------Script para flask-----------------------------------



const URL = "http://127.0.0.1:5000/"

// Capturamos el evento de envío del formulario
document.getElementById('contacto').addEventListener('submit', function (event) {

        event.preventDefault(); // Evitamos que se envie el form

        var formData = new FormData(this);
        // Realizamos la solicitud POST al servidor
        fetch(URL + '/contacto', {
            method: 'POST',
            body: formData // Aquí enviamos formData. Dado queformData puede contener archivos, no se utiliza JSON.

        })
        //Después de realizar la solicitud POST, se utiliza el método


        .then(function (response) {
            if (response.ok) {
                // Si la respuesta es exitosa, convierte los datos de la respuesta a formato JSON.
                return response.json();
            } else {
                // Si hubo un error, lanzar explícitamente una excepción
                // para ser "catcheada" más adelante
                throw new Error('Error al realizar la reserva.');
            }
        })
        // Respuesta OK, muestra una alerta informando que la reserva se agregó correctamente y limpia los campos del formulario para que puedan ser utilizados para una nueva reserva.
        .then(function (data) {
            alert(data.mensaje);
        })
        // En caso de error, mostramos una alerta con un mensaje de error.
        .catch(function (error) {
            alert(error.message);
        })


            // Limpiar el formulario en ambos casos (éxito o error)
        .finally(function () {
                document.getElementById('name').value = "";
                document.getElementById('surname').value = "";
                document.getElementById('email').value = "";
                document.getElementById('phone').value ="";
                document.getElementById('texto-consulta').value = "";
            });
    })
