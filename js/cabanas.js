/* Selecciona el elemento donde deseas agregar los bloques <div> con la clase "card"
const contenedorCard = document.querySelector('.contenedor');
// Cantidad de veces que deseas repetir el bloque <div> interno
const repeticiones = 3;
for(let i = 0; i < repeticiones; i++){
    // Crea un nuevo elemento <div> interno con la clase card
    const nuevoDivInterno = document.createElement('div');
    nuevoDivInterno.classList.add('card');
    const nuevoDivInterno1 = document.createElement('div');
    nuevoDivInterno1.classList.add('card-image');
    nuevoDivInterno.appendChild(nuevoDivInterno1);
    const nuevoDivInterno2 = document.createElement('div');
    nuevoDivInterno2.classList.add('card-text');
    nuevoDivInterno1.appendChild(nuevoDivInterno2);
    const nuevoSpamInterno = document.createElement('spam');
    nuevoSpamInterno.classList.add('date');
    nuevoSpamInterno.textContent='Hace 4 dias';
    nuevoDivInterno2.appendChild(nuevoSpamInterno);
    const nuevoH2 = document.createElement('h2');
    nuevoH2.classList.add('titulo-cabana');
    nuevoH2.textContent = 'Cabaña Ensueño';
    nuevoDivInterno2.appendChild(nuevoH2);
    const nuevoParrafo = document.createElement('p')
    nuevoParrafo.classList.add('descripcion-cabana');
    nuevoParrafo.textContent = 'Acogedora, rústica y encantadora. Rodeada de naturaleza, porche cubierto, chimenea cálida, cocina equipada, dormitorio confortable, baño relajante y aromas frescos.'
    nuevoDivInterno2.appendChild(nuevoParrafo);
    const nuevoDivInterno3 = document.createElement('div');
    nuevoDivInterno3.classList.add('card-stats');
    nuevoDivInterno1.appendChild(nuevoDivInterno3);
    const nuevoDivInterno4 = document.createElement('div');
    nuevoDivInterno4.classList.add('stat');
    nuevoDivInterno3.appendChild(nuevoDivInterno4);
    const nuevoDivInterno5 = document.createElement('div');
    nuevoDivInterno5.classList.add('value');
    nuevoDivInterno5.textContent = '$40.000'
    nuevoDivInterno4.appendChild(nuevoDivInterno5);
    const nuevoDivInterno6 = document.createElement('div');
    nuevoDivInterno6.classList.add('type');
    nuevoDivInterno6.textContent = 'diarios';
    nuevoDivInterno4.appendChild(nuevoDivInterno6);
    const nuevoDivInterno7 = document.createElement('div');
    nuevoDivInterno7.classList.add('stat border');
    nuevoDivInterno3.appendChild(nuevoDivInterno7);
    const nuevoDivInterno8 = document.createElement('div');
    nuevoDivInterno8.classList.add('value');
    nuevoDivInterno8.textContent = '40';
    nuevoDivInterno7.appendChild(nuevoDivInterno8);
    const nuevoDivInterno9 = document.createElement('div');
    nuevoDivInterno9.classList.add('type');
    nuevoDivInterno9.textContent = 'Visitas';
    nuevoDivInterno7.appendChild(nuevoDivInterno9);
    const nuevoDivInterno10 = document.createElement('div');
    nuevoDivInterno10.classList.add('stat');
    nuevoDivInterno3.appendChild(nuevoDivInterno10);
    const nuevoDivInterno11 = document.createElement('div');
    nuevoDivInterno11.classList.add('value');
    nuevoDivInterno11.textContent = '32';
    nuevoDivInterno10.appendChild(nuevoDivInterno11);
    const nuevoDivInterno12 = document.createElement('div');
    nuevoDivInterno12.classList.add('type');
    nuevoDivInterno12.textContent = 'Me gusta';
    nuevoDivInterno10.appendChild(nuevoDivInterno12);
    const nuevoDivInterno13 = document.createElement('div');
    nuevoDivInterno13.classList.add('card-price');
    nuevoDivInterno1.appendChild(nuevoDivInterno13);
    const nuevoDivInterno14 = document.createElement('div');
    nuevoDivInterno14.classList.add('state');
    nuevoDivInterno13.appendChild(nuevoDivInterno14);
    const nuevoA = document.createElement('a');
    nuevoA.href('#');
    nuevoA.classList.add('btn-gradient red block');
    nuevoA.textContent = 'Alquilar';
    nuevoDivInterno14.appendChild(nuevoA);

    


    contenedorCard.innerHTML(nuevoDivInterno);
    
}*/
document.addEventListener('DOMContentLoaded', function(){
    const tarjeta = `
        <div class="card">
            <div class="card-image"></div>
            <div class="card-text">
                <span class="date">Hace 4 dias</span>
                <h2>Cabaña Ensueño</h2>
                <p> Acogedora, rústica y encantadora. Rodeada de naturaleza, porche cubierto, chimenea cálida, cocina equipada, dormitorio confortable, baño relajante y aromas frescos.</p>
            </div>
            <div class="card-stats">
                <div class="stat">
                    <div class="value">$40.000</div>
                    <div class="type">diarios</div>
                </div>
                <div class="stat border">
                    <div class="value">40</div>
                    <div class="type">Visitas</div>
                </div>
                <div class="stat">
                    <div class="value">32</div>
                    <div class="type">Me gusta</div>
                </div>
            </div>
            <div class="card-price">
                <div class="state">
                    <a href="#" class="btn-gradient red block">Alquilar</a>
                </div>
            </div>
        </div>
    `;
    const container = document.getElementById('contenedor');
    for(let i=0; i<6; i++){
        container.innerHTML += tarjeta;
        console.log('N°', i);
        
    }
});
    
    
    

