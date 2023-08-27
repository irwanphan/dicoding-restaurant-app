const AboutUs = {
  async render() {
    return `
      <div class="space"></div>
      <div class="about-profile-image">
        <img src="https://avatars.githubusercontent.com/u/4739199?v=4" />
      </div>
      <section class="container">
        <h1>Hi, I Am Irwan</h1>
        <p>
          This app is built based on what I learn on Dicoding Course: Become A Front-End Web Developer Expert (Menjadi Front-End Web Developer Expert). Things I learned in this course are the concept of PWA, creating App-Shell, utilizing Service Worker, caching, and working with IndexedDB.
        </p>
        <p>
          Contact me via my email on:
          <a href="mailto:irwanphan@gmail.com">irwanphan@gmail.com</a>
        </p>
        <p>
          This github repo is on
          <a href="https://github.com/irwanphan/dicoding-restaurant-app">https://github.com/irwanphan/dicoding-story-app</a>
        </p>
        <p>
          My personal portfolio page is on
          <a href="https://irwanphan.github.io">https://irwanphan.github.io</a>
        </p>
      </section>
    `;
  },

  async afterRender() {
    //
  },
};

export default AboutUs;
