document.addEventListener("DOMContentLoaded", function() {
  const eventImageElement = document.getElementById("eventImage");

  // Obtener los parámetros de la URL y los detalles del evento
  const urlParams = new URLSearchParams(window.location.search);
  const eventName = urlParams.get("name");
  const eventDate = urlParams.get("date");
  const eventDescription = urlParams.get("description");
  const eventCategory = urlParams.get("category");
  const eventPlace = urlParams.get("place");
  const eventCapacity = urlParams.get("capacity");
  const eventAssistance = urlParams.get("assistance");
  const eventEstimate = urlParams.get("estimate");
  const eventPrice = urlParams.get("price");
  const eventImage = urlParams.get("image");

  // Asignar los valores obtenidos a los elementos correspondientes en la página de detalles
  document.getElementById("eventName").textContent = eventName;
  document.getElementById("eventDate").textContent = eventDate;
  document.getElementById("eventDescription").textContent = eventDescription;
  document.getElementById("eventCategory").textContent = eventCategory;
  document.getElementById("eventPlace").textContent = eventPlace;
  document.getElementById("eventCapacity").textContent = eventCapacity;

  // Mostrar la asistencia o la estimación de asistencia según corresponda
  if (eventAssistance) {
    document.getElementById("eventAssistanceOrEstimate").textContent = eventAssistance;
  } else if (eventEstimate) {
    document.getElementById("eventAssistanceOrEstimate").textContent = eventEstimate + " (estimado)";
  }

  document.getElementById("eventPrice").textContent = "$" + eventPrice;

  // Realizar la solicitud fetch para obtener la imagen y asignarla al elemento de imagen
  fetch(eventImage)
    .then(response => response.blob())
    .then(blob => {
      const imageUrlObject = URL.createObjectURL(blob);
      eventImageElement.src = imageUrlObject;
    })
    .catch(error => {
      console.error(error);
    });
});
