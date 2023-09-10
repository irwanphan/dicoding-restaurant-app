import { templateCard } from '../templates/template';

const preloadHeroImage = (src) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      resolve(image);
    };
    image.onerror = () => {
      reject(new Error('Failed to preload hero image.'));
    };
    image.src = src;
  });
};

const Home = {
  async render() {
    return `
      <section class="hero-image">
        <picture>
          <source media="(max-width: 640px)" >
          <img width="960" height="540"/>
        </picture>
        <span class="hero-image__title">Best Restaurants Reference</span>
      </section>
      <section class="container">
        <h3 class="section-title">Explore Restaurants</h3>
        <div class="cards-holder" id="recordRestaurants">...Loading</div>
      </section>
    `;
  },

  async afterRender() {
    try {
      const { default: RestaurantDbSource } = await import('../../data/restaurantdb-source');
      const restaurants = await RestaurantDbSource.home();

      const heroImageSrcset = './images/hero-image-small.jpg';
      const heroImageSrc = './images/hero-image-large.jpg';
      await preloadHeroImage(heroImageSrc);

      const heroImageSmall = document.querySelector('.hero-image picture source');
      const heroImage = document.querySelector('.hero-image picture img');
      heroImageSmall.srcset = heroImageSrcset;
      heroImage.src = heroImageSrc;
      heroImage.alt = 'Selamat Datang di Yell-Owl';

      populateDataToCard(restaurants);
    } catch (error) {
      const restaurantsContainer = document.querySelector('#recordRestaurants');
      restaurantsContainer.innerHTML = 'Error loading restaurant list.';
      console.error(error);
    }
  },
};

const populateDataToCard = (restaurants = null) => {
  if (!Array.isArray(restaurants)) {
    throw new Error('Parameter restaurants should be an array.');
  }
  const recordRestaurants = document.querySelector('#recordRestaurants');
  recordRestaurants.innerHTML = '';

  restaurants.forEach((restaurant) => {
    recordRestaurants.innerHTML += templateCard(restaurant);
  });
};

export default Home;
