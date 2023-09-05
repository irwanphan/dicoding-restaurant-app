import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import { templateFaveButton, templateUnfaveButton } from '../views/templates/template';

const FaveButtonInitiator = {
  async init({ faveButtonContainer, restaurant }) {
    this._faveButtonContainer = faveButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderFaved();
    } else {
      this._renderFave();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getFavorite(id);
    return !!restaurant;
  },

  _renderFave() {
    this._faveButtonContainer.innerHTML = templateFaveButton();

    const faveButton = document.querySelector('#faveButton');
    faveButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putFavorite(this._restaurant);
      this._renderButton();
    });
  },

  _renderFaved() {
    this._faveButtonContainer.innerHTML = templateUnfaveButton();

    const faveButton = document.querySelector('#faveButton');
    faveButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteFavorite(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FaveButtonInitiator;
