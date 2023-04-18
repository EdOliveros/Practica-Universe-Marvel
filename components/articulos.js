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


                <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#${articulos[i].id}">
                    Leer Articulo Completo
                </button>
            </div>

      
        </div>


        <div class="modal fade" id="${articulos[i].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <div>
          <h1>${articulos[i].title}</h1>
          <p>fecha</p>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      
        <article class="card">
          <div class="card-body">
            <img src="${articulos[i].src}" class="card-img-top" alt="Descripción de la imagen">
            <p class="card-text">Contenido del artículo</p>
          </div>
        </article>
      


    </div>
  </div>
</div>

    `
}

export const articulosCompleto = `
    <div class="container-fluit d-flex flex-wrap py-5" id='art'>
        ${articulo}
    </div>
`