import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../sass/main.sass';

import restaurantsObj from '../public/data/DATA.json';

const initiate = async () => {
    let isLoading = true
    const initialData = async () => {
        const restaurants = restaurantsObj.restaurants;
        // console.log(restaurants);
        populateDataToCard(restaurants);
        isLoading = false;
    }

     const populateDataToCard = (restaurants = null) => {
        if (!Array.isArray(restaurants)) {
            throw new Error('Parameter restaurants should be an array.');
        }

        const recordRestaurants = document.querySelector('#recordRestaurants');
        recordRestaurants.innerHTML = '';

        restaurants.forEach((restaurant) => {
            recordRestaurants.innerHTML += templateCard(restaurant);
        });
    }

    const templateCard = (restaurant) => {
        return `
            <div class="card" key=${restaurant.id}>
                <div class="card-header">
                    <span>${restaurant.city}</span>
                    <img src="${restaurant.pictureId}" width="450" alt="Foto ${restaurant.name}">
                </div>
                <div class="card-description">
                    <span class="rating">Rating: ${restaurant.rating}</span>
                    <span class="title">${restaurant.name}</span>
                    <p>${restaurant.description}</p>
                    <a href="#">
                        Explore &#9658;
                    </a>
                </div>
            </div>
        `;
    }

    await initialData();
};

window.addEventListener('DOMContentLoaded', async () => {
    initiate();
});