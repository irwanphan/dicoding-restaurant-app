import RestaurantDbSource from "../../data/restaurantdb-source";

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

const templateCard = (restaurant) => {
    return `
        <div class="card" key=${restaurant.id}>
            <div class="card-header">
                <span>${restaurant.city}</span>
                <img src="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}" width="450" alt="Foto ${restaurant.name}">
            </div>
            <div class="card-description">
                <span class="rating">Rating: ${restaurant.rating}</span>
                <span class="title">${restaurant.name}</span>
                <p>${restaurant.description}</p>
                <a href="#">
                    Explore &#9658
                </a>
            </div>
        </div>
    `
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