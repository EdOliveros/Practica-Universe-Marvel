import { articulos } from "../modules/dataBaseBlog.js";

let articulo = ''

for(let i = 0; i < articulos.length; i++) {
    articulo += `
        <div class="p-2">
            <div class="card h-100 w">
                <div class="card-body">
                    <h2 class="card-title">${articulos[i].title}</h2>
                    <small class="text-muted">${articulos[i].fecha}</small>
                    <img src="${articulos[i].src}" class="card-img-top img-t" alt="Descripción de la imagen">
                    <div class='btn-container'>
                      <button type="button" class="btn btn-secondary myBtn" data-bs-toggle="modal" data-bs-target="#${articulos[i].id}">
                      Leer más
                      </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="${articulos[i].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <div>
          <h1>${articulos[i].title}</h1>
          <small class="text-muted">${articulos[i].fecha}</small>
          </div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
        <article class="card">
          <div class="card-body">
            <img src="${articulos[i].src}" class="card-img-top img-art" alt="Descripción de la imagen">
            <p class="card-text">${articulos[i].text}</p>
          </div>
        </article>
 
    </div>
  </div>
</div>


  <style>
    .img-t {
      height: 100px;
      object-fit: cover;
    }
    .img-art {
      height: 100px;
      object-fit: cover;
      margin-bottom: 50px;
    }
    .w {
      width: 300px;
      height: 200px;
    }
    .btn-container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }
    .myBtn {
      width: 100px;
    }
  </style>

    `
}

export const articulosCompleto = `
    <div class="content-fluit d-flex flex-wrap justify-content-center py-2" id='art'>
        ${articulo}
    </div>
`