import { openDB } from 'idb';
import CONFIG from '../global/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestaurantIdb = {
  async getFavorite(id) {
    if (!id) {
      return 1;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllFavorites() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putFavorite(restaurant) {
    if (!Object.prototype.hasOwnProperty.call(restaurant, 'id')) {
      return 1;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },
  async deleteFavorite(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteRestaurantIdb;
