import page from '../components/page.js'
import { hero } from '../modules/hero.js'
import { encabezado } from '../components/encabezado.js'
import { favoritesCharactersContainer } from '../modules/favoritesCharactersContainer.js'
import { blogDestacadoHome } from '../modules/blogDestacadoHome.js'

page(`
  ${hero}
  <main class="p-5">
    ${encabezado}
    ${favoritesCharactersContainer}
    ${blogDestacadoHome}
  </main>
`)

// <!-- Sección de comics destacados -->
// <section>
//   <h2 class="mb-5">Comics destacados</h2>
//   <div class="row">
//     <div class="col-md-4 mb-4">
//       <div class="card">
//         <img src="https://via.placeholder.com/500x350" alt="Imagen de comic" class="card-img-top">
//         <div class="card-body">
//           <h3 class="card-title">Civil War</h3>
//           <p class="card-text">Lee sobre la épica batalla entre los héroes de Marvel en la Guerra Civil.</p>
//           <a href="#" class="btn btn-primary">Ver más</a>
//         </div>
//       </div>
//     </div>
//     <div class="col-md-4 mb-4">
//       <div class="card">
//         <img src="https://via.placeholder.com/500x350" alt="Imagen de comic" class="card-img-top">
//         <div class="card-body">
//           <h3 class="card-title">Infinity Gauntlet</h3>
//           <p class="card-text">Sigue a los héroes de Marvel mientras intentan detener a Thanos en Infinity Gauntlet.</p>
//           <a href="#" class="btn btn-primary">Ver más</a>
//         </div>
//       </div>
//     </div>
//     <div class="col-md-4 mb-4">
//       <div class="card">
//         <img src="https://via.placeholder.com/500x350" alt="Imagen de comic" class="card-img-top">
//         <div class="card-body">
//           <h3 class="card-title">Spider-Verse</h3>
//           <p class="card-text">Descubre el universo arácnido en Spider-Verse.</p>
//           <a href="#" class="btn btn-primary">Ver más</a>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>