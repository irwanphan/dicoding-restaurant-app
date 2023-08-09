import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../sass/main.sass';

console.log('Hello Coders! :)');

import restaurantsObj from '../public/data/DATA.json';

const initiate = async () => {
    let isLoading = true
    const initialData = async () => {
        const restaurants = restaurantsObj.restaurants;
        console.log(restaurants);
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
            <div class="card">
                <div class="card-header">
                    <span>${restaurant.city}</span>
                    <img src="./images/heros/hero-image_1.jpg" width="450" alt="">
                </div>
                <div class="card-description">
                    <span class="rating">Rating: 4.5</span>
                    <span class="title">Lorem Ipsum</span>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        `;
    }

    await initialData();
};

window.addEventListener('DOMContentLoaded', async () => {
    initiate();
});