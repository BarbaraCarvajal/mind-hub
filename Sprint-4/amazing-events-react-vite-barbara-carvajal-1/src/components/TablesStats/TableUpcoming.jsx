import 'bootstrap/dist/css/bootstrap.min.css';

function TableUpcoming(props) {
    const eventosPasados = props.events;
    const categories = Array.from(new Set(eventosPasados.map(event => event.category)));

    const gananciasPorCategoria = [];
    const porcentajeAsistencia = [];

    categories.forEach(categoryEvento => {
        const rowCategory = eventosPasados.filter(event => event.category === categoryEvento);

        // Obtener los datos necesarios de los eventos en una sola función de mapeo
        const categoryData = rowCategory.map(event => {
            const revenue = event.price * event.estimate;
            const capacity = event.capacity;
            const assistance = event.estimate;
            return { revenue, capacity, assistance };
        });

        // Obtener arrays separados para ganancias, capacidad y asistencia
        const revenues = [];
        const capacityArray = [];
        const assistanceArray = [];

        categoryData.forEach(data => {
            revenues.push(data.revenue);
            capacityArray.push(data.capacity);
            assistanceArray.push(data.assistance);
        });

        const revenuesCat = revenues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        gananciasPorCategoria.push(revenuesCat);

        const capacityCategory = capacityArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const assistanceCat = assistanceArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        const assistancePer = (assistanceCat * 100) / capacityCategory;
        porcentajeAsistencia.push(Math.round(assistancePer));
    });

    return (
        <section>
            <table className="table table-bordered table-striped table-hover">
                <thead className="bg-info">
                    <tr>
                        <th colSpan="3">Estadísticas de próximos eventos por categoría</th>
                    </tr>
                    <tr>
                        <th>Categorías</th>
                        <th>Ingresos</th>
                        <th>Porcentaje de asistencia</th>
                    </tr>
                </thead>
                <tbody id="upcomingStats">
                    {categories.map((cat, index) => (
                        <tr key={index}>
                            <td>{cat}</td>
                            <td>${gananciasPorCategoria[index]}</td>
                            <td>{porcentajeAsistencia[index]}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default TableUpcoming;
