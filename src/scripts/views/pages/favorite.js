import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import { templateCard } from "../templates/template";

const Favorite = {
  async render() {
    return `
      <section class="container">
        <h3 class="section-title">Your Favorites</h3>
        <div class="cards-holder" id="favedRestaurants"></div>
      </section>
    `;
  },
   
  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllFavorites();
    const restaurantsContainer = document.querySelector('#favedRestaurants');
    
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += templateCard(restaurant);
    });
  },
};
  
export default Favorite;