import RestaurantDBSource from '../data/restaurantdb-source';

const PostReview = (url, name, review) => {
  const input = {
    id: url.id,
    name,
    review,
  };
  RestaurantDBSource.postReview(input);
};

export default PostReview;
