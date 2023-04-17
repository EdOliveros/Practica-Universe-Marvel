import { favoritesCharacters, favoritesCharacters2 } from "../components/favoritesCharacters.js" 

export const favoritesCharactersContainer = `
    <section>
        <h2 class="mb-5">Personajes destacados</h2>
        <div class="d-md-none carousel slide" data-bs-ride="carousel" data-bs-interval="false" id="personajes-carousel" style="overflow:hidden;">
            ${favoritesCharacters}
            <button class="carousel-control-prev" type="button" data-bs-target="#personajes-carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#personajes-carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="d-none d-md-block">
            ${favoritesCharacters2}
        </div>
    </section>

`

