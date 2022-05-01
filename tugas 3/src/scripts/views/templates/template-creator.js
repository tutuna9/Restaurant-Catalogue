import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
  <div class="restaurant-info__content"
  <h3>Information</h3>
    <h4 id="mainDetail" tabindex="0">Kota</h4>
    <p tabindex="0">${restaurant.city}</p>
    <h4 tabindex="0">Alamat</h4>
    <p tabindex="0">${restaurant.address}</p>
    <h4 tabindex="0">Menu Makanan</h4>
    <ul>${restaurant.menus.foods.map((food) => `<li tabindex="0">${food.name}</li>`).join('')} </ul>
    <h4 tabindex="0">Menu Minuman</h4>
    <ul>${restaurant.menus.drinks.map((drink) => `<li tabindex="0">${drink.name}</li>`).join('')} </ul>
    <h4 tabindex="0">Rating</h4>
    <p tabindex="0">${restaurant.rating}</p>
    <h4 tabindex="0">Customer Review</h4>
    <div>
    ${restaurant.customerReviews.map((review) => `
        <div>
            <h4 tabindex="0">${review.name}</h6>
            <p tabindex="0">${review.review}</p>
            <p tabindex="0">${review.date}</p>
        </div>
    `).join('')}
    </div>
  </div>
  </div>
  <div class="restaurant__overview">
  <h3 tabindex="0">Add Review</h3>
  <div class="form">
    <div class="form-group form-title">
      <label for="form-name">Nama</label>
      <input type="text" id="form-name" name="form-name" required>
    </div>
    <div class="form-group form-title">
      <label for="form-review">Review</label>
      <input type="text" id="form-review" name="form-review" required>
    </div>
    <button id="submit" class="btn-submit">Submit</button>
  </div>
  <div class="restaurant-info__content".
    <h3><b>Deskripsi</b></h3>
    <p tabindex="0">${restaurant.description}</p>
  </div>
  </div>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
            data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3><a id="mainItem" tabindex="0" href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
