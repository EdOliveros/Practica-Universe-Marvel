export const header = `
<header>
<nav class="navbar navbar-expand-lg navbar-light bg-transparent">
    <div class="container-fluid">
        
        <a class="navbar-brand" href="index.html">
            <img class='logo' src='src/img/logo.png' alt='logo'></img>
        </a>

        <div class='ms-auto d-none d-lg-block'>
            <ul class="navbar-nav ms-auto offcanvas-body">
                    <li class="nav-item ms-auto">
                        <a class="nav-link" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item ms-auto">
                        <a class="nav-link" href="series.html">Series</a>
                    </li>
                    <li class="nav-item ms-auto">
                        <a class="nav-link" href="comics.html">Comics</a>
                    </li>
                    <li class="nav-item ms-auto">
                        <a class="nav-link" href="characters.html">Characters</a>
                    </li>
                    <li class="nav-item ms-auto">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item ms-auto">
                        <div class='btn-container-lg'>
                            <button class="sub nav-link" href="#">
                                <a>Subscribe!</a>
                            </button>
                        </div>
                    </li>
                    <li class="nav-item ms-auto">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
            </ul>
        </div>


        <button class="btn-despliegue navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="material-symbols-outlined">
                drag_handle
            </span>
        </button>


        <div class="ancho offcanvas offcanvas-end" tabindex="-1" id="navbarNav" aria-labelledby="navbarNavLabel">

            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="navbarNavLabel">Menú</h5>
                <button type="button" class="btn-close text-reset btn-despliegue" data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
            </div>

            <ul class="navbar-nav offcanvas-body">
                <li class="nav-item mx-auto">
                    <a class="nav-link" aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item mx-auto">
                    <a class="nav-link" href="series.html">Series</a>
                </li>
                <li class="nav-item mx-auto">
                    <a class="nav-link" href="comics.html">Comics</a>
                </li>
                <li class="nav-item mx-auto">
                    <a class="nav-link" href="characters.html">Characters</a>
                </li>
                <li class="nav-item mx-auto">
                    <a class="nav-link" href="about.html">About</a>
                </li>
                <li class="nav-item mx-auto">
                    <div class='btn-container'>
                        <button class="sub nav-link" href="#">
                            <a>Subscribe!</a>
                        </button>
                    </div>
                </li>
                <li class="nav-item mx-auto">
                    <a class="nav-link" href="contact.html">Contact</a>
                </li>
            </ul>

        </div>
    </div>
</nav>
</header>

<style>
    body {

    }
    .ancho {
        width: 250px;
    }
    .sub {
        border-radius: 30px;
        border: none;
        width: 120px;
    }
    .btn-container {
        border-top: 1px solid grey;
        padding: 30px 0 0 0;
        margin-top: 20px;
    }
    .btn-container-lg {
        border-left: 1px solid grey;
        padding:0 0 0 30px;
        margin-left: 20px;
    }
    .btn-despliegue:focus, .btn-despliegue:active, .btn-despliegue:focus-visible {
        box-shadow: none !important;
        outline: none !important;
        border: none !important;
    }
    .logo {
        width: 150px;
    }
      
</style>


<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
` 