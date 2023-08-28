import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { templateRestaurantDetail } from '../templates/template';
import FaveButtonInitiator from '../../utils/favorite-button-initiator';
import CONFIG from '../../global/config';
import API_ENDPOINT from '../../global/api-endpoint';

async function submitReview(data) {
  const url = API_ENDPOINT.REVIEW;
  const headers = {
      "Content-Type": "application/json",
  };

  const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
  });

  if (!response.ok) {
      throw new Error("Failed to submit review");
  }
}

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
        pictureId: restaurant.pictureId,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });

    const reviewForm = document.getElementById("reviewForm");

    reviewForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const name = reviewForm.elements.name.value;
      const review = reviewForm.elements.review.value;
      const restaurantId = url.id;

      const data = {
        id: restaurantId,
        name: name,
        review: review,
      };

      try {
        // console.log(data);
        await submitReview(data);
        alert("Review submitted successfully! Thank You.");
        reviewForm.reset();
        location.reload();
      } catch (error) {
        alert("An error occurred while submitting the review.");
        console.error(error);
      }
    });
  }
};

export default Detail;
