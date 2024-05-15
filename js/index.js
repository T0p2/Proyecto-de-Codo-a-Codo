document.addEventListener('DOMContentLoaded', function(){
    const cuerpo = `
    <section id="inicio">
        <h3>BIENVENIDOS A CABAÑAS FANIFRANA</h3>
        <p class="texto-completo">Te invitamos a nuestro lugar en el mundo donde podrás descansar, desconectarte de la rutina y disfrutar de nuestra bellísima Patagonia. Somos apasionados de las experiencias de viajes y con la atención cálida y cuidadosa de nuestro staff vamos a hacer todo lo posible para que disfrutes de la espectacular naturaleza y que esta experiencia sea un recuerdo inolvidable. Te esperamos!</p>
        <p class="texto-corto">Te invitamos a nuestro lugar en el mundo donde podrás descansar, desconectarte de la rutina y disfrutar de nuestra bellísima Patagonia.</p>
    </section>
    <div class="article">
        <article class="image-container" id="cabañas">
            <a href="cabanas.html">
                <img src="/img/cabañas.png" alt="cabañas">
                <div class="image-text">
                    <h2>LAS CABAÑAS</h2>
                    <p>Te invitamos a conocer nuestras cabañas totalmente equipadas</p>
                </div>
            </a>
        </article>
        <article class="image-container" id="servicios">
            <a href="servicios.html">
                <img src="img/servicios.png" alt="servicios">
                <div class="image-text">
                    <h2>PASION POR EL SERVICIO</h2>
                    <p>Te atenderemos encantados para ofrecerte lo mejor</p>
                </div>
            </a>
        </article>
    </div>
    `;
    const seccion = document.getElementById('section');
    seccion.innerHTML = cuerpo;
});