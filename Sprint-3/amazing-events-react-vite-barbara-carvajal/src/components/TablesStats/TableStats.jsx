import 'bootstrap/dist/css/bootstrap.min.css';

function TableStats(props) {
  const eventsApi = props.events;

  // Verificar si se han cargado los datos de los eventos
  if (eventsApi.length === 0) {
    return <div>Loading...</div>;
  }

  // Encontrar el evento con mayor capacidad
  let eventoConMayorCapacidad = null;
  let mayorCapacidad = 0;

  eventsApi.forEach((evento) => {
    if (evento.capacity > mayorCapacidad) {
      mayorCapacidad = evento.capacity;
      eventoConMayorCapacidad = evento;
    }
  });

  // Encontrar el evento con menor porcentaje de asistencia
  let eventoConMenorPorcentaje = null;
  let menorPorcentaje = Infinity;

  eventsApi.forEach((evento) => {
    const porcentajeAsistencia = (evento.assistance / evento.capacity) * 100;
    if (porcentajeAsistencia < menorPorcentaje) {
      menorPorcentaje = porcentajeAsistencia;
      eventoConMenorPorcentaje = evento;
    }
  });

  // Encontrar el evento con mayor porcentaje de asistencia
  let eventoConMayorPorcentaje = null;
  let mayorPorcentaje = 0;

  eventsApi.forEach((evento) => {
    const porcentajeAsistencia = (evento.assistance / evento.capacity) * 100;
    if (porcentajeAsistencia > mayorPorcentaje) {
      mayorPorcentaje = porcentajeAsistencia;
      eventoConMayorPorcentaje = evento;
    }
  });

  return (
    <section>
      <table className="table table-bordered table-striped table-hover">
        <thead className="bg-info">
          <tr>
            <th colSpan={3}>Events Statistics</th>
          </tr>
          <tr>
            <th>Event with the highest percentage of attendance</th>
            <th>Event with the lowest percentage of attendance</th>
            <th>Event with the largest capacity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{eventoConMayorPorcentaje?.name}</td>
            <td>{eventoConMenorPorcentaje?.name}</td>
            <td>{eventoConMayorCapacidad?.name}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default TableStats;