const templateCard = (restaurant) => `
        <div class="card" key=${restaurant.id}>
            <div class="card-header">
                <span>${restaurant.city}</span>
                <img src="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}" width="450" alt="Foto ${restaurant.name}">
            </div>
            <div class="card-description">
                <span class="rating">Rating: ${restaurant.rating}</span>
                <span class="title">${restaurant.name}</span>
                <p>${restaurant.description}</p>
                <a href="/#/detail/${restaurant.id}">
                    Explore &#9658
                </a>
            </div>
        </div>
    `;

const templateRestaurantDetail = (restaurant) => `
        <section class="hero-image">
            <img src="https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}" width="450" alt="Picture of ${restaurant.name}">
            <div id="faveButtonContainer"></div>
        </section>
        <section class="container">
            <h3 class="section-title">${restaurant.name}</h3>
            <small>
                ${restaurant.address}, at <strong>${restaurant.city}</strong>
            </small>
            <p>${restaurant.description}</p>
            <p>Foods</p>
            <div class="restaurant-menu-container">
                ${restaurant.menus.foods.map((food) => `<div class="restaurant-menu-item">${food.name}</div>`).join('')}
            </div>
            <p>Drinks</p>
            <div class="restaurant-menu-container">
                ${restaurant.menus.drinks.map((drink) => `<div class="restaurant-menu-item">${drink.name}</div>`).join('')}
            </div>
            <hr/>
            <p>Customer Reviews</p>
            ${restaurant.customerReviews.map((review) => `
                    <div class="review-card">
                        <small>
                            <strong>${review.name}</strong> on ${review.date}
                        </small>
                        <p>${review.review}</p>
                    </div>
                `).join('')}
            <div class="review-form">
                <h4>Add Review</h4>
                <form id="reviewForm">
                    <input type="text" name="name" placeholder="Your name" required>
                    <textarea name="review" placeholder="Your review" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    `;

const templateFaveButton = () => `
    <button aria-label="add as favorite" id="faveButton" class="favorite-toggle">
        &#129293;
    </button>
`;

const templateUnfaveButton = () => `
    <button aria-label="remove favorite" id="faveButton" class="favorite-toggle">
        &#129505;
    </button>
`;

export {
  templateCard,
  templateRestaurantDetail,
  templateFaveButton,
  templateUnfaveButton,
};
