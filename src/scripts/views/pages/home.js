import RestaurantDbSource from "../../data/restaurantdb-source";
import { templateCard } from "../templates/template";

const populateDataToCard = (restaurants = null) => {
    if (!Array.isArray(restaurants)) {
        throw new Error('Parameter restaurants should be an array.')
    }
    const recordRestaurants = document.querySelector('#recordRestaurants')
    recordRestaurants.innerHTML = ''

    restaurants.forEach((restaurant) => {
        recordRestaurants.innerHTML += templateCard(restaurant)
    })
}

const Home = {
    async render() {
        return `
            <section class="hero-image">
                <img src="./images/heros/hero-image_2.jpg" width="450" alt="Selamat Datang di Yell-Owl">
                <span class="hero-image__title">Best Restaurants Reference</span>
            </section>

            <section class="container">
                <h3 class="section-title">Explore Restaurants</h3>
                <div class="cards-holder" id="recordRestaurants"></div>
            </section>
        `;
    },

    async afterRender() {
        const restaurants = await RestaurantDbSource.home()
        populateDataToCard(restaurants);
    },
};
   
export default Home;