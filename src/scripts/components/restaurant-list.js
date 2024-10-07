class RestaurantList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    let descriptionLength;

    if (window.innerWidth <= 425) {
      descriptionLength = 120;
    } else if (window.innerWidth <= 768) {
      descriptionLength = 200;
    } else {
      descriptionLength = 250;
    }

    try {
      const response = await fetch('/data/DATA.json');
      if (!response.ok) {
        throw new Error('Failed to load data');
      }
      const data = await response.json();
      const restaurantsData = data.restaurants;

      this.innerHTML = '';
      restaurantsData.forEach((restaurant) => {
        const restaurantItem = document.createElement('div');
        restaurantItem.setAttribute('tabindex', 0);
        restaurantItem.classList.add('restaurant-item');
        restaurantItem.innerHTML = `
            <img src="${restaurant.pictureId}" alt="${
          restaurant.name
        }" class="restaurant-image">
            <div class="restaurant-info">
            <h2>${restaurant.name}</h2>
            <div> 
              <p>${restaurant.city},</p>
              <p>${restaurant.rating} &#9733;</p>
            </div>
            <p>${restaurant.description.substring(0, descriptionLength)}...</p>
            </div>
          `;
        this.appendChild(restaurantItem);
      });
    } catch (error) {
      console.error('Error fetching restaurants data:', error);
    }
  }
}

customElements.define('restaurant-list', RestaurantList);
