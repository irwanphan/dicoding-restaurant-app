import FaveButtonInitiator from "../src/scripts/utils/favorite-button-initiator";
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";

describe("Faving a Restaurant", () => {
    const addFaveButtonContainer = () => {
        document.body.innerHTML = '<div id="faveButtonContainer"></div>';
    }

    beforeEach(() => {
        addFaveButtonContainer();
    });

    it('show empty heart on the fave button when the restaurant has not been set as favorite before', async () => {
        await FaveButtonInitiator.init({
            faveButtonContainer: document.querySelector('#faveButtonContainer'),
            restaurant: {
                id: '1',
            },
        });
        expect(document.querySelector('[aria-label="add as favorite"]')).toBeTruthy();
    });

    it('should not show full heart un-fave button when the restaurant has not been set as favorite before', async () => {
        await FaveButtonInitiator.init({
            faveButtonContainer: document.querySelector('#faveButtonContainer'),
            restaurant: {
                id: '1',
            },
        });
        expect(document.querySelector('[aria-label="remove favorite"]')).toBeFalsy();
    });

    it('should be able to set restaurant as favorite', async () => {
        await FaveButtonInitiator.init({
            faveButtonContainer: document.querySelector('#faveButtonContainer'),
            restaurant: {
                id: '1',
            },
        });
        document.querySelector('#faveButton').dispatchEvent(new Event('click'));
        const restaurant = await FavoriteRestaurantIdb.getFavorite('1');
        expect(restaurant).toEqual({ id: '1' });

        await FavoriteRestaurantIdb.deleteFavorite('1');
    });
    
    it('should not add a fave again if it\'s already added as favorite', async () => {
        await FaveButtonInitiator.init({
            faveButtonContainer: document.querySelector('#faveButtonContainer'),
            restaurant: {
                id: '1',
            },
        });
        await FavoriteRestaurantIdb.putFavorite({ id: '1' });
        document.querySelector('#faveButton').dispatchEvent(new Event('click'));
        // console.log(await FavoriteRestaurantIdb.getAllFavorites());
        expect(await FavoriteRestaurantIdb.getAllFavorites()).toEqual([{ id: '1' }]);

        await FavoriteRestaurantIdb.deleteFavorite('1');
    });

    it('should not add a restaurant when it has no id', async () => {
        await FaveButtonInitiator.init({
            faveButtonContainer: document.querySelector('#faveButtonContainer'),
            restaurant: {},
        });
        document.querySelector('#faveButton').dispatchEvent(new Event('click'));
        expect(await FavoriteRestaurantIdb.getAllFavorites()).toEqual([]);
    });
})