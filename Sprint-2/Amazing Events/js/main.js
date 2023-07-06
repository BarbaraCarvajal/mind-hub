let cardPrincipal = document.getElementById('cardPrincipal');
let eventsData; // Variable para almacenar los eventos obtenidos de la API

function createCard(events) {
  cardPrincipal.innerHTML = "";

  events.forEach(function (event) {
    let card = document.createElement("div");
    card.classList.add("card", "small-card"); 
    card.innerHTML = `
      <img src="${event.image}" class="card-img-top" alt="Imagen del evento">
      <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <p class="card-price">$${event.price}</p>
        <a href="details.html?name=${encodeURIComponent(event.name)}&date=${encodeURIComponent(event.date)}&description=${encodeURIComponent(event.description)}&category=${encodeURIComponent(event.category)}&place=${encodeURIComponent(event.place)}&capacity=${encodeURIComponent(event.capacity)}&assistance=${encodeURIComponent(event.assistance)}&price=${encodeURIComponent(event.price)}" class="btn btn-primary">Ver más</a>
      </div>
    `;
    cardPrincipal.appendChild(card);
  });
}

axios.get('https://mindhub-xj03.onrender.com/api/amazing')
  .then(function (response) {
    eventsData = response.data.events; // Almacena los eventos obtenidos de la API

    createCard(eventsData); // Muestra todos los eventos al cargar la página
  })
  .catch(function (error) {
    console.error(error);
  });

// Función para filtrar y mostrar los eventos según los criterios seleccionados
function filterAndShowEvents() {
  const selectedCategories = Array.from(categoryCheckboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);

  const nameFilter = nameFilterInput.value.toLowerCase();

  // Filtrar eventos según los criterios seleccionados
  const filteredEvents = eventsData.filter(event => {
    // Filtrar por categoría
    if (selectedCategories.length > 0 && !selectedCategories.includes(event.category)) {
      return false;
    }

    // Filtrar por nombre
    if (nameFilter && !event.name.toLowerCase().includes(nameFilter)) {
      return false;
    }

    return true;
  });

  createCard(filteredEvents); // Mostrar los eventos filtrados
}

// Obtener referencias a los elementos del DOM
const categoryCheckboxes = document.querySelectorAll(".category-filter-checkbox");
const nameFilterInput = document.getElementById("nameFilter");

// Manejar eventos de cambio en los checkboxes y el campo de texto
categoryCheckboxes.forEach(checkbox => {
  checkbox.addEventListener("change", filterAndShowEvents);
});

nameFilterInput.addEventListener("input", filterAndShowEvents);
