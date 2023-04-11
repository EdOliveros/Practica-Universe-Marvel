import { getData } from './api.js';
  
document.addEventListener("DOMContentLoaded", () =>{
    render();
})

let result = ''

export async function render() {
    const data = await getData();
    console.log(data);
    
    const marvel = data.data.results.map((i) =>{
        return i
    });
    console.log(marvel[0]);
    const d = document.getElementById('data')
    let html = '';
    
    data.data.results.forEach(element => {
        const { id, name , thumbnail } = element;
        
        html += `
        <div class="card" style="width: 18rem;">
        <img src="${thumbnail.path}.${thumbnail.extension}" class="card-img-top" alt="...">
        <div class="card-body" >
        <h5 class="card-title">${name}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" id="${id}" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        `;
        d.innerHTML = html
    });
} 

export const cards = `
    <div id="data" class="container d-flex flex-wrap content-fluid"></div>
`