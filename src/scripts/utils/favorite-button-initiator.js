import { templateFaveButton, templateUnfaveButton } from '../views/templates/template';

const FaveButtonInitiator = {
  async init({ faveButtonContainer, favoriteRestaurants, restaurant }) {
    this._faveButtonContainer = faveButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;

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
    const restaurant = await this._favoriteRestaurants.getFavorite(id);
    return !!restaurant;
  },

  _renderFave() {
    this._faveButtonContainer.innerHTML = templateFaveButton();

    const faveButton = document.querySelector('#faveButton');
    faveButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putFavorite(this._restaurant);
      this._renderButton();
    });
  },

  _renderFaved() {
    this._faveButtonContainer.innerHTML = templateUnfaveButton();

    const faveButton = document.querySelector('#faveButton');
    faveButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteFavorite(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FaveButtonInitiator;
