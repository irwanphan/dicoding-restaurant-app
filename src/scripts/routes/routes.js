import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import AboutUs from '../views/pages/about-us';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home,
  '/favorite': Favorite,
  '/about-us': AboutUs,
  '/detail/:id': Detail,
};

export default routes;
