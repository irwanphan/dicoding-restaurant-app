import FaveButtonInitiator from "../src/scripts/utils/favorite-button-initiator";
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";

const createFaveButtonPresenterWithRestaurant = async (restaurant) => {
    await FaveButtonInitiator.init({
        faveButtonContainer: document.querySelector('#faveButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant,
    });
};

export { createFaveButtonPresenterWithRestaurant };