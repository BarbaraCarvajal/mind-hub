let eventList = document.getElementById('eventList');

function createCard(event) {
  let card = document.createElement("div");
  card.classList.add("card", "small-card"); 
  card.innerHTML = `
    <img src="${event.image}" class="card-img-top" alt="Imagen del evento">
    <div class="card-body">
      <h5 class="card-title">${event.name}</h5>
      <p class="card-text">${event.description}</p>
      <p class="card-price">$${event.price}</p>
      <p class="card-date">Date: ${event.date}</p>
      <a href="details.html?name=${encodeURIComponent(event.name)}&date=${encodeURIComponent(event.date)}&description=${encodeURIComponent(event.description)}&category=${encodeURIComponent(event.category)}&place=${encodeURIComponent(event.place)}&capacity=${encodeURIComponent(event.capacity)}&assistance=${encodeURIComponent(event.assistance)}&price=${encodeURIComponent(event.price)}" class="btn btn-primary">Ver más</a>
    </div>
  `;
  eventList.appendChild(card);
}

async function loadPastEvents() {
  try {
    const response = await axios.get('https://mindhub-xj03.onrender.com/api/amazing');
    const events = response.data.events;

    const pastEvents = events.filter((event) => {
      const eventDate = new Date(event.date);
      const cutoffDate = new Date("2023-03-10");
      return eventDate < cutoffDate;
    });

    pastEvents.forEach((event) => {
      createCard(event);
    });
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener('DOMContentLoaded', loadPastEvents);
