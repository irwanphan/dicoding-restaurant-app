import 'regenerator-runtime'
import '../styles/main.css'
import '../sass/main.sass'

import App from './views/app'
import './components/app-footer.js'

const app = new App({
    button: document.querySelector('#navigationToggleButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});
   
window.addEventListener('load', () => {
    app.renderPage();
});