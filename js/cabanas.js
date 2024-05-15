document.addEventListener('DOMContentLoaded', function(){
    const tarjeta = `
        <div class="card">
            <div class="card-image"></div>
            <div class="card-text">
                <span class="date">Publicado hace 4 dias</span>
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
    
    
    

