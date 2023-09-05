import FaveButtonInitiator from "../src/scripts/utils/favorite-button-initiator";

const createFaveButtonPresenterWithRestaurant = async (restaurant) => {
    await FaveButtonInitiator.init({
        faveButtonContainer: document.querySelector('#faveButtonContainer'),
        restaurant,
    });
};

export { createFaveButtonPresenterWithRestaurant };