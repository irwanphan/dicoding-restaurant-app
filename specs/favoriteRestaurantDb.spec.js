import { itActsAsFavoriteRestaurantModel } from "./favoriteRestaurant.contract";
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
    afterEach(async () => {
        (await FavoriteRestaurantIdb.getAllFavorites()).forEach(async (restaurant) => {
            await FavoriteRestaurantIdb.deleteFavorite(restaurant.id);
        });
    });

    itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});