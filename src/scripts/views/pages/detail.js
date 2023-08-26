import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { templateRestaurantDetail } from '../templates/template';
 
const Detail = {
  async render() {
    return `
      <div id="restaurant"></div>
    `;
  },
 
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantDbSource.restaurantDetail(url.id);
    console.log(restaurant)
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = templateRestaurantDetail(restaurant);
  },
};
 
export default Detail;