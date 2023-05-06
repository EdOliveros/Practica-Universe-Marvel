import { articulos } from "./dataBaseBlog.js"

let articulosHome = ''

for (let index = 0; index < 2; index++) {
    articulosHome += `
        <div class="col-md-6 mb-4">
            <div class="card">
                <img src=${articulos[index].src} alt="Imagen de noticia" class="card-img-top">
                <div class="card-body">
                    <h3 class="card-title">${articulos[index].title}</h3>
                    <a href="blog.html" class="btn btn-primary">Leer más</a>
                </div>
            </div>
        </div>
    `
}

export const blogDestacadoHome = `
<section>
    <h2 class="mb-5">Blog</h2>
    <div class="row">
        ${ articulosHome }
    </div>
</section>
`