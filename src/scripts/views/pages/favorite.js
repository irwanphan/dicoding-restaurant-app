import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { templateCard } from '../templates/template';

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
      const restaurantsContainer = document.querySelector('#favedRestaurants');

      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML = templateCard(restaurant);
      });
    } catch (error) {
      const restaurantsContainer = document.querySelector('#favedRestaurants');
      restaurantsContainer.innerHTML = 'Error loading restaurant list.';
      console.error(error);
    }
  },
};

export default Favorite;
