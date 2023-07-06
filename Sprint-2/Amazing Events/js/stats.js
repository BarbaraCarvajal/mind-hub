// Función para calcular el porcentaje de asistencia
function calculateAttendancePercentage(attendance, capacity) {
  return (attendance / capacity) * 100;
}

// Función para llenar una tabla con eventos
function fillEventsTable(table, events) {
  events.forEach((event) => {
    const row = table.insertRow();
    const eventNameCell = row.insertCell();
    eventNameCell.textContent = event.name;
  });
}

// Función para llenar una tabla de estadísticas con datos de eventos por categoría
function fillStatisticsTable(table, categories) {
  for (const category in categories) {
    const { revenue, attendance, count } = categories[category];
    const row = table.insertRow();
    const categoryCell = row.insertCell();
    const revenueCell = row.insertCell();
    const attendanceCell = row.insertCell();

    categoryCell.textContent = category;
    revenueCell.textContent = `$${revenue}`;
    attendanceCell.textContent = `${Math.round((attendance / count) * 100)}%`;
  }
}

// Obtener una referencia a las tablas en el DOM
const highestAttendanceTable = document.getElementById('highestAttendanceTable').getElementsByTagName('tbody')[0];
const lowestAttendanceTable = document.getElementById('lowestAttendanceTable').getElementsByTagName('tbody')[0];
const largerCapacityTable = document.getElementById('largerCapacityTable').getElementsByTagName('tbody')[0];
const upcomingEventsTable = document.getElementById('upcomingEventsTable').getElementsByTagName('tbody')[0];
const pastEventsTable = document.getElementById('pastEventsTable').getElementsByTagName('tbody')[0];

// Realizar una solicitud a la API para obtener los eventos
axios.get('https://mindhub-xj03.onrender.com/api/amazing')
  .then(response => {
    const events = response.data; // Obtener los datos de eventos de la respuesta

    // Obtener los eventos con el porcentaje de asistencia más alto
    const highestAttendanceEvents = events.sort((a, b) => {
      const attendancePercentageA = calculateAttendancePercentage(a.assistance, a.capacity);
      const attendancePercentageB = calculateAttendancePercentage(b.assistance, b.capacity);
      return attendancePercentageB - attendancePercentageA;
    }).slice(0, 10);
    fillEventsTable(highestAttendanceTable, highestAttendanceEvents);

    // Obtener los eventos con el porcentaje de asistencia más bajo
    const lowestAttendanceEvents = events.sort((a, b) => {
      const attendancePercentageA = calculateAttendancePercentage(a.assistance, a.capacity);
      const attendancePercentageB = calculateAttendancePercentage(b.assistance, b.capacity);
      return attendancePercentageA - attendancePercentageB;
    }).slice(0, 10);
    fillEventsTable(lowestAttendanceTable, lowestAttendanceEvents);

    // Obtener el evento con mayor capacidad
    const eventWithLargerCapacity = events.reduce((maxCapacityEvent, event) => {
      return event.capacity > maxCapacityEvent.capacity ? event : maxCapacityEvent;
    });
    fillEventsTable(largerCapacityTable, [eventWithLargerCapacity]);

    // Obtener los eventos futuros y pasados
    const currentDate = new Date('2023-03-10');
    const upcomingEvents = events.filter((event) => new Date(event.date) > currentDate);
    const pastEvents = events.filter((event) => new Date(event.date) < currentDate);

    // Obtener las categorías de eventos y calcular las estadísticas por categoría
    const upcomingEventCategories = {};
    upcomingEvents.forEach((event) => {
      if (!upcomingEventCategories[event.category]) {
        upcomingEventCategories[event.category] = {
          revenue: 0,
          attendance: 0,
          count: 0
        };
      }
      upcomingEventCategories[event.category].revenue += event.price * event.assistance;
      upcomingEventCategories[event.category].attendance += event.assistance;
      upcomingEventCategories[event.category].count++;
    });

    const pastEventCategories = {};
    pastEvents.forEach((event) => {
      if (!pastEventCategories[event.category]) {
        pastEventCategories[event.category] = {
          revenue: 0,
          attendance: 0,
          count: 0
        };
      }
      pastEventCategories[event.category].revenue += event.price * event.assistance;
      pastEventCategories[event.category].attendance += event.assistance;
      pastEventCategories[event.category].count++;
    });

    // Llenar las tablas de estadísticas para eventos futuros y pasados por categoría
    fillStatisticsTable(upcomingEventsTable, upcomingEventCategories);
    fillStatisticsTable(pastEventsTable, pastEventCategories);
  })
  .catch(error => {
    console.error('Error al obtener los eventos:', error);
  });
