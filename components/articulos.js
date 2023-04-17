import { articulos } from "../modules/dataBaseBlog.js";

let articulo = ''

for(let i = 0; i < articulos.length; i++) {
    articulo += `
        <div class="col-3 p-2">
            <div class="card h-100">
                <div class="card-body">
                    <h2 class="card-title">${articulos[i].title}</h2>
                    <small class="text-muted">Fecha del artículo 1</small>
                    <img src="${articulos[i].src}" class="card-img-top" alt="Descripción de la imagen">
                </div>
            </div>
        </div>
    `
}

export const articulosCompleto = `
    <div class="container-fluit d-flex flex-wrap" id='art'>
        ${articulo}
    </div>
`