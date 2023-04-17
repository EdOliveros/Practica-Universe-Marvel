import { getData } from './api.js';
  
document.addEventListener("DOMContentLoaded", () =>{
    render();
})

export async function render() {
    const data = await getData();
    console.log(data);
    
    const marvel = data.data.results.map((i) =>{
        return i
    });
    console.log(marvel[0]);
    const d = document.getElementById('data')
    const d2 = document.getElementById('data2')
    let html = `
        <div class="carousel-item active">
        <div class="row">
            <div class="col-12">
                <div class="card carousel-card">
                <img src="${marvel[0].thumbnail.path}.${marvel[0].thumbnail.extension}" alt="${marvel[0].name}e" class="card-img-top">
                <div class="card-body">
                    <h3 class="card-title">${marvel[0].name}</h3>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary">Ver más</a>
                </div>
            </div>
        </div>
        </div>
        </div>
    `;
    let html2 = '';
    

    for (let index = 1; index < 5; index++) {
        console.log(marvel[index]);

        html += `
        <div class="carousel-item">
              <div class="row">
                  <div class="col-12">
                      <div class="card carousel-card">
                        <img src="${marvel[index].thumbnail.path}.${marvel[index].thumbnail.extension}" alt="${marvel[index].name}e" class="card-img-top">
                        <div class="card-body">
                            <h3 class="card-title">${marvel[index].name}</h3>
                            <p class="card-text"></p>
                            <a href="characters.html" class="btn btn-primary">Ver más</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        d.innerHTML = html
   
    }   

    for (let index = 0; index < 3; index++) {
        console.log(marvel[index]);

        html2 += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${marvel[index].thumbnail.path}.${marvel[index].thumbnail.extension}" alt="Imagen de personaje" class="card-img-top">
                <div class="card-body">
                    <h3 class="card-title">${marvel[index].name}</h3>
                    <p class="card-text">Únete a Natasha Romanoff en sus misiones como agente de S.H.I.E.L.D.</p>
                    <a href="characters.html" class="btn btn-primary">Ver más</a>
                </div>
            </div>
        </div>
        `;
        d2.innerHTML = html2
   
    }   
}
        
    
 

export const favoritesCharacters = `
    <div class="carousel-inner" id='data'>luygyug</div>
`
export const favoritesCharacters2 = `
<div class="row" id='data2'>luygyug</>
`