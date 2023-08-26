

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
                <a href="#">
                    Explore &#9658
                </a>
            </div>
        </div>
    `
}

export {
    templateCard
}