import RestaurantListed from '../views/pages/restaurant-list';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': RestaurantListed, // default page
  '/restaurant-list': RestaurantListed,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
