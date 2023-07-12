import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StatisticsTable from '../components/StatisticsTable';

const Statistics = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('https://mindhub-xj03.onrender.com/api/amazing')
      .then(response => {
        setEvents(response.data.events);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

    // Verificar si se han cargado los datos de los eventos
    if (events.length === 0) {
        return <div>Loading...</div>;
    }

    // Encontrar el evento con mayor Capacidad
    let eventoConMayorCapacidad = null;
    let mayorCapacidad = 0;

    events.forEach(evento => {
        if (evento.capacity > mayorCapacidad) {
            mayorCapacidad = evento.capacity;
            eventoConMayorCapacidad = evento;
        }
    });

    // Encontrar el evento con menor porcentaje de asistencia
    let eventoConMenorPorcentaje = null;
    let menorPorcentaje = Infinity;

    events.forEach(evento => {
        const porcentajeAsistencia = (evento.assistance / evento.capacity) * 100;
        if (porcentajeAsistencia < menorPorcentaje) {
            menorPorcentaje = porcentajeAsistencia;
            eventoConMenorPorcentaje = evento;
        }
    });

    // Encontrar el evento con mayor porcentaje de asistencia
    let eventoConMayorPorcentaje = null;
    let mayorPorcentaje = 0;

    events.forEach(evento => {
        const porcentajeAsistencia = (evento.assistance / evento.capacity) * 100;
        if (porcentajeAsistencia > mayorPorcentaje) {
            mayorPorcentaje = porcentajeAsistencia;
            eventoConMayorPorcentaje = evento;
        }
    });




    return (
        <div>
            <h1>Estadísticas</h1>
            <StatisticsTable
                eventos={events}
                eventoConMayorCapacidad={eventoConMayorCapacidad}
                eventoConMenorPorcentaje={eventoConMenorPorcentaje}
                eventoConMayorPorcentaje={eventoConMayorPorcentaje}
            />

        </div>
    );
};

export default Statistics;
