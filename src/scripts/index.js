import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../sass/main.sass'

import App from './views/app'
import './components/app-footer.js'

import axios from 'axios'

const app = new App({
    button: document.querySelector('#navigationToggleButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});
   
window.addEventListener('load', () => {
    app.renderPage();
});

// const fetchData = async () => {
//     try {
//         const { data } = await axios.get('https://restaurant-api.dicoding.dev/list')
//         const response = await data.restaurants
//         // console.log(response)
//         return response
//     } catch (error) {
//         throw(error)
//     }
// }

// const initiateHome = async () => {
//     let isLoading = true
//     const initialData = async () => {
//         const restaurants = await fetchData()
//         console.log('restaurants: ', restaurants)
//         populateDataToCard(restaurants)
//         isLoading = false
//     }

//      const populateDataToCard = (restaurants = null) => {
//         if (!Array.isArray(restaurants)) {
//             throw new Error('Parameter restaurants should be an array.')
//         }

//         const recordRestaurants = document.querySelector('#recordRestaurants')
//         recordRestaurants.innerHTML = ''

//         restaurants.forEach((restaurant) => {
//             recordRestaurants.innerHTML += templateCard(restaurant)
//         })
//     }

//     const templateCard = (restaurant) => {
//         return `
//             <div class="card" key=${restaurant.id}>
//                 <div class="card-header">
//                     <span>${restaurant.city}</span>
//                     <img src="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}" width="450" alt="Foto ${restaurant.name}">
//                 </div>
//                 <div class="card-description">
//                     <span class="rating">Rating: ${restaurant.rating}</span>
//                     <span class="title">${restaurant.name}</span>
//                     <p>${restaurant.description}</p>
//                     <a href="#">
//                         Explore &#9658
//                     </a>
//                 </div>
//             </div>
//         `
//     }

//     await initialData()
// }

// window.addEventListener('DOMContentLoaded', async () => {
//     initiateHome()
// })