/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.notFound');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.notFound');
  I.amOnPage('/');

  I.seeElement('.restaurant-item__content a');
  
  const firstResto = locate('.restaurant-item__content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');

  I.seeElement('.restaurant-item__content a');
  const firstRestoLike = locate('.restaurant-item__content a').first();
  const firstRestaurantTitleLike = await I.grabTextFrom(firstRestoLike);
  I.click(firstRestoLike);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.see('Tidak ada restoran untuk ditampilkan', '.notFound');

  assert.strictEqual(firstRestaurantTitle, firstRestaurantTitleLike,);
});
