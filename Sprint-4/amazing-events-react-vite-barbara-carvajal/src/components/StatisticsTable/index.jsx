import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const StatisticsTable = ({ eventos, eventoConMayorCapacidad, eventoConMenorPorcentaje, eventoConMayorPorcentaje }) => {
  // Filtrar los eventos por categoría única
  const uniqueCategories = [...new Set(eventos.map(event => event.category))];

  return (
    <table className="table table-bordered table-striped table-hover">
      <thead className="bg-info">
        <tr>
          <th colSpan="3">Events Statistics</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Evento con el mayor porcentaje de asistencia</td>
          <td>Evento con el menor porcentaje de asistencia</td>
          <td>Evento con la mayor capacidad</td>
        </tr>
        <tr>
          <td>{eventoConMayorPorcentaje.name}</td>
          <td>{eventoConMenorPorcentaje.name}</td>
          <td>{eventoConMayorCapacidad.name}</td>
        </tr>
      </tbody>
      <thead className="bg-info">
        <tr>
          <th colSpan="3">Upcoming Events Statistics by Category</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Categories</td>
          <td>Revenues</td>
          <td>Percentage of Attendance</td>
        </tr>
        {uniqueCategories.map(category => {
          // Filtrar eventos futuros de la categoría actual
          const futureCategoryEvents = eventos.filter(
            event => event.category === category && new Date(event.date) > new Date('2023-03-10')
          );
          // Calcular ganancias totales para eventos futuros de la categoría actual
          const futureTotalRevenue = futureCategoryEvents.reduce((sum, event) => sum + (event.revenue || 0), 0);
          // Calcular la capacidad total para eventos futuros de la categoría actual
          const futureTotalCapacity = futureCategoryEvents.reduce((sum, event) => sum + (event.capacity || 0), 0);
          // Calcular la asistencia total para eventos futuros de la categoría actual
          const futureTotalAttendance = futureCategoryEvents.reduce((sum, event) => sum + (event.assistance || 0), 0);
          // Calcular el porcentaje de asistencia para eventos futuros de la categoría actual
          const futurePercentageAttendance = futureTotalCapacity !== 0 ? (futureTotalAttendance / futureTotalCapacity) * 100 : 0;
            console.log(futurePercentageAttendance)
          return (
            <tr key={category}>
              <td>{category}</td>
              <td>${futureTotalRevenue}</td>
              <td>{futurePercentageAttendance.toFixed(2)}%</td>
            </tr>
          );
        })}
      </tbody>
      <thead className="bg-info">
        <tr>
          <th colSpan="3">Past Events Statistics by Category</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Categories</td>
          <td>Revenues</td>
          <td>Percentage of Attendance</td>
        </tr>
        {uniqueCategories.map(category => {
          // Filtrar eventos pasados de la categoría actual
          const pastCategoryEvents = eventos.filter(
            event => event.category === category && new Date(event.date) < new Date('2023-03-10')
          );
          // Calcular ganancias totales para eventos pasados de la categoría actual
          const pastTotalRevenue = pastCategoryEvents.reduce((sum, event) => sum + (event.revenue || 0), 0);
          // Calcular la capacidad total para eventos pasados de la categoría actual
          const pastTotalCapacity = pastCategoryEvents.reduce((sum, event) => sum + (event.capacity || 0), 0);
          // Calcular la asistencia total para eventos pasados de la categoría actual
          const pastTotalAttendance = pastCategoryEvents.reduce((sum, event) => sum + (event.assistance || 0), 0);
          // Calcular el porcentaje de asistencia para eventos pasados de la categoría actual
          const pastPercentageAttendance = pastTotalCapacity !== 0 ? (pastTotalAttendance / pastTotalCapacity) * 100 : 0;

          return (
            <tr key={category}>
              <td>{category}</td>
              <td>${pastTotalRevenue}</td>
              <td>{pastPercentageAttendance.toFixed(2)}%</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StatisticsTable;
