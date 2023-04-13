export const footer = `
<footer class="bg-light text-center text-lg-start">
<div class="container-fluid p-4">
    <div class='row'>
        <div class='col-12 col-md-8 order-2 order-md-1'>
            <div class="row">
                <div class="col-6 col-lg-3 d-flex flex-column text-center">
                    <h5 class="text-uppercase">Contacto</h5>
                    <p>
                        Puedes contactarme en:
                    </p>
                    <ul class="list-unstyled mb-0">
                        <li>
                            <a href="#!" class="text-dark">Correo electrónico</a>
                        </li>
                        <li>
                            <a href="#!" class="text-dark">Redes sociales</a>
                        </li>
                    </ul>
                </div>

                <div class="col-6 col-lg-3 d-flex flex-column text-center">
                    <h5 class="text-uppercase">Acerca de</h5>
                    <p>
                        Información sobre el sitio web.
                    </p>
                </div>
                <div class="col-6 col-lg-3 d-flex flex-column text-center">
                    <h5 class="text-uppercase">Acerca de</h5>
                    <p>
                        Información sobre el sitio web.
                    </p>
                </div>
                <div class="col-6 col-lg-3 d-flex flex-column text-center">
                    <h5 class="text-uppercase">Acerca de</h5>
                    <p>
                        Información sobre el sitio web.
                    </p>
                </div>
            </div>
        </div>

        <div class='col-12 col-md-4 order-1 order-md-2'>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class='c-img' src="src/img/capitan.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img class='c-img' src="src/img/iron.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img class='c-img' src="src/img/st.png" class="d-block w-100" alt="...">
                </div>
            </div>
            </div>
        </div>
    </div>
</div>

<div class="text-center p-3">
    © 2023 Todos los derechos reservados.
</div>

<style>
    .c-img {
        height: 900px;
    }
    @media(max-width: 768px) {
        .c-img {
            height: 500px;
        }
    }
</style>
</footer>

`