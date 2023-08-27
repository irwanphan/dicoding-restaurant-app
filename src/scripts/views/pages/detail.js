import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { templateRestaurantDetail } from '../templates/template';
import FaveButtonInitiator from '../../utils/favorite-button-initiator';
 
const Detail = {
  async render() {
    return `
      <div id="restaurant"></div>
    `;
  },
 
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantDbSource.restaurantDetail(url.id);
    // console.log(restaurant)
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = templateRestaurantDetail(restaurant);

    FaveButtonInitiator.init({
      faveButtonContainer: document.querySelector('#faveButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating
      }
    });
  },
};
 
export default Detail;