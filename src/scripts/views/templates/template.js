const templateCard = (restaurant) => {
    return `
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
    `
}

const templateRestaurantDetail = (restaurant) => {
    return `
        <section class="hero-image">
            <img src="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}" width="450" alt="Foto ${restaurant.name}">
            <button class="toggle-favorite">&#129293; &#129505;</button>
        </section>
        <section class="container">
            <h3 class="section-title">${restaurant.name}</h3>
            <small>
                ${restaurant.address}, at <strong>${restaurant.city}</strong>
            </small>
            <p>${restaurant.description}</p>
            <p>Foods</p>
            <div class="restaurant-menu-container">
                ${restaurant.menus.foods.map((food) => {
                    return `<div class="restaurant-menu-item">${food.name}</div>`
                }).join('')}
            </div>
            <p>Drinks</p>
            <div class="restaurant-menu-container">
                ${restaurant.menus.drinks.map((drink) => {
                    return `<div class="restaurant-menu-item">${drink.name}</div>`
                }).join('')}
            </div>
            <hr/>
            <p>Customer Reviews</p>
            ${restaurant.customerReviews.map((review) => {
                return `
                    <div class="review-card">
                        <small>
                            <strong>${review.name}</strong> on ${review.date}
                        </small>
                        <p>${review.review}</p>
                    </div>
                `
            }).join('')}
        </section>
    `
}

export {
    templateCard,
    templateRestaurantDetail
}