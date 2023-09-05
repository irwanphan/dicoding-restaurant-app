import FaveButtonInitiator from "../src/scripts/utils/favorite-button-initiator";
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";
import { createFaveButtonPresenterWithRestaurant } from "./testFactory";

describe("Unfaving a Restaurant", () => {
    const addFaveButtonContainer = () => {
        document.body.innerHTML = '<div id="faveButtonContainer"></div>';
    }

    beforeEach(async () => {
        addFaveButtonContainer();
        await FavoriteRestaurantIdb.putFavorite({ id: '1' });
    });

    afterEach(async () => {
        await FavoriteRestaurantIdb.deleteFavorite('1');
    });

    it('show full heart on the fave button when the restaurant has been set as favorite before', async () => {
        await createFaveButtonPresenterWithRestaurant({ id: '1' });

        expect(document.querySelector('[aria-label="remove favorite"]')).toBeTruthy();
    });

    it('should not show empty heart fave button when the restaurant has not been set as favorite before', async () => {
        await createFaveButtonPresenterWithRestaurant({ id: '1' });

        expect(document.querySelector('[aria-label="add as favorite"]')).toBeFalsy();
    });

    it('should be able to remove restaurant from favorite', async () => {
        await createFaveButtonPresenterWithRestaurant({ id: '1' });

        document.querySelector('[aria-label="remove favorite"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantIdb.getAllFavorites()).toEqual([]);
    });

    it('should not throw error if the unfaved restaurant is not in the list', async () => {
        await createFaveButtonPresenterWithRestaurant({ id: '1' });
        
        // delete it, simulate the condition where it is not in the list
        await FavoriteRestaurantIdb.deleteFavorite('1');
        document.querySelector('[aria-label="remove favorite"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantIdb.getAllFavorites()).toEqual([]);
    });
})