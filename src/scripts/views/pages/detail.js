/* eslint-disable no-alert */
/* eslint-disable no-underscore-dangle */
import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import CONFIG from '../../globals/config';
import PostReview from '../../utils/post-review';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainDetail').focus();
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        backdrop_path: CONFIG.BASE_IMAGE_URL + restaurant.pictureId,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        city: restaurant.city,
      },
    });

    const submit = document.querySelector('#submit');
    const formName = document.querySelector('#form-name');
    const formReview = document.querySelector('#form-review');
    submit.addEventListener('click', async (event) => {
      event.preventDefault();
      if (formName.value === '' || formReview.value === '') {
        alert('Inputan tidak boleh ada yang kosong');
        formName.value = '';
        formReview.value = '';
      } else {
        PostReview(url, formName.value, formReview.value);
        alert('Sukses Menambahkan review');
        formName.value = '';
        formReview.value = '';
      }
    });
  },
};

export default Detail;
