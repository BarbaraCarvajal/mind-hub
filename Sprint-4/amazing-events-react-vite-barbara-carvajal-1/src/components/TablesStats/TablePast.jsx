import 'bootstrap/dist/css/bootstrap.min.css';

function TablePast(props) {
  // Obtener eventos pasados del props
  let eventosPasados = props.events;

  // Crear un array de categorías sin duplicados
  let categories = [];
  eventosPasados.forEach((event) => {
    if (!categories.includes(event.category)) {
      categories.push(event.category);
    }
  });

  // Arrays para almacenar ganancias por categoría y porcentaje de asistencia
  let gananciasPorCategoria = [];
  let porcentajeAsistencia = [];

  // Calcular ganancias y porcentaje de asistencia por cada categoría
  categories.forEach((categoryEvento) => {
    // Filtrar eventos de la categoría actual
    let rowCategory = eventosPasados.filter((event) => event.category === categoryEvento);

    // Calcular ganancias multiplicando precio por asistencia para cada evento
    let revenues = rowCategory.map(event => event.price * event.assistance);

    // Obtener arrays de capacidad y asistencia para cada evento
    const { capacityArray, assistanceArray } = rowCategory.reduce((acc, event) => {
      acc.capacityArray.push(event.capacity);
      acc.assistanceArray.push(event.assistance);
      return acc;
    }, { capacityArray: [], assistanceArray: [] });

    // Calcular la suma de ganancias
    let revenuesCat = revenues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    gananciasPorCategoria.push(revenuesCat);

    // Calcular la suma de capacidad y asistencia para calcular el porcentaje de asistencia
    let capacityCategory = capacityArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let assistanceCat = assistanceArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // Calcular el porcentaje de asistencia redondeado
    let assistancePer = (assistanceCat * 100) / capacityCategory;
    porcentajeAsistencia.push(Math.round(assistancePer));
  });

  return (
    <section>
      <table className="table table-bordered table-striped table-hover">
        <thead className="bg-info">
          <tr>
            <th colSpan={3} className="text-center">
              Past events statistics by category
            </th>
          </tr>
          <tr>
            <th>Categories</th>
            <th>Revenues</th>
            <th>Percentage of attendance</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat, index) => (
            <tr key={index}>
              <td>{categories[index]}</td>
              <td>${gananciasPorCategoria[index]}</td>
              <td>{porcentajeAsistencia[index]}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default TablePast;
