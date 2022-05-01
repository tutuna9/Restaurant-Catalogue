import FavoriteRestaurantIdb from '../../data/favoriteRestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Restaurant</h2>
        <div class="notFound">

        </div>
        <div id="restaurants" class="restaurants">
          
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    if (restaurants.length === 0) {
      document.querySelector('.notFound').innerHTML = `
        <h2>Tidak ada restoran untuk ditampilkan</h2>
      `;
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        const skipLinkElem = document.querySelector('.skip-link');
        skipLinkElem.addEventListener('click', (event) => {
          event.preventDefault();
          document.querySelector('#mainItem').focus();
        });
      });
    }
  },
};

export default Like;
