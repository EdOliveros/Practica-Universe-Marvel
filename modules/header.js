export const header = `
<header>
<nav class="navbar navbar-expand-lg navbar-light bg-transparent">
    <div class="container-fluid">
        
        <a class="navbar-brand" href="#">Marvel Universe</a>

        <div class='ms-auto d-none d-lg-block'>
            <ul class="navbar-nav ms-auto offcanvas-body">
                    <li class="nav-item ms-auto">
                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li class="nav-item ms-auto">
                        <a class="nav-link" href="#">Acerca de</a>
                    </li>
                    <li class="nav-item ms-auto">
                        <a class="nav-link" href="#">Contacto</a>
                    </li>
            </ul>
        </div>


        <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <img src='...' alt='.'></img>
        </button>


        <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarNav" aria-labelledby="navbarNavLabel">

            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="navbarNavLabel">Menú</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
            </div>

            <ul class="navbar-nav offcanvas-body">
                <li class="nav-item mx-auto">
                    <a class="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item mx-auto">
                    <a class="nav-link" href="#">Characters</a>
                </li>
                <li class="nav-item mx-auto">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item mx-auto">
                    <button class="nav-link" href="#">Subscribe!</button>
                </li>
                <li class="nav-item mx-auto">
                    <a class="nav-link" href="#">Contact</a>
                </li>
            </ul>

        </div>
    </div>
</nav>
</header>

<style>
    body {
        background-color: red;
    }

</style>

` 