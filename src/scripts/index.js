import 'regenerator-runtime';
import '../styles/main.css';
import '../sass/main.sass';

import App from './views/app';
import './components/app-footer';

import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#navigationToggleButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
  body: document.querySelector('#body'),
  header: document.querySelector('#header'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
