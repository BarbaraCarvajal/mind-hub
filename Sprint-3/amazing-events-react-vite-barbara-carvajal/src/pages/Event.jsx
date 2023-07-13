import { useParams } from 'react-router-dom';

function Event({ events }) {
    const { id } = useParams();
    const event = events.find(event => event._id === parseInt(id));

    if (!event) {
        return <h1>No existe este evento 😥</h1>;
    }

    return (
        <div className="container">
            <div className="card" style={{ backgroundColor: '#e2f1ff' }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={event.image} className="card-img img-thumbnail" alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">{event.name}</h1>
                            <p className="card-text">{event.description}</p>
                            <p className="card-text">Categoría: {event.category}</p>
                            <p className="card-text">Lugar: {event.place}</p>
                            <p className="card-text">Capacidad: {event.capacity}</p>
                            <p className="card-text">Asistencia: {event.assistance}</p>
                            <p className="card-text">Precio: ${event.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event;
