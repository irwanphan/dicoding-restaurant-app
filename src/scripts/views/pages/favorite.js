import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { templateCard } from '../templates/template';

const populateDataToCard = (restaurants = null) => {
  if (!Array.isArray(restaurants)) {
    throw new Error('Parameter restaurants should be an array.');
  }
  const recordRestaurants = document.querySelector('#favedRestaurants');
  recordRestaurants.innerHTML = '';

  if (restaurants.length === 0) {
    recordRestaurants.innerHTML = 'You have no favorite restaurant :(';
    return;
  }

  restaurants.forEach((restaurant) => {
    recordRestaurants.innerHTML += templateCard(restaurant);
  });
};

const Favorite = {
  async render() {
    return `
      <div class="space"></div>
      <section class="container">
        <h3 class="section-title">Your Favorites</h3>
        <div class="cards-holder" id="favedRestaurants">...Loading</div>
      </section>
    `;
  },

  async afterRender() {
    try {
      const restaurants = await FavoriteRestaurantIdb.getAllFavorites();
      populateDataToCard(restaurants);
    } catch (error) {
      const restaurantsContainer = document.querySelector('#favedRestaurants');
      restaurantsContainer.innerHTML = 'Error loading restaurant list.';
      console.error(error);
    }
  },
};

export default Favorite;
