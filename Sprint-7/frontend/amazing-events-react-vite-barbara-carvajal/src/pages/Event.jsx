import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Agregar esta importación
import CardPrincipal from "../components/unSoloEvento/unSoloEvento";
import axios from "axios";

const Details = () => {
  const [evento, setEvento] = useState(null);
  const { id } = useParams(); // Aquí utilizamos useParams

  useEffect(() => {
    // Función para obtener el evento desde la API
    const fetchEvento = async () => {
      try {
        const response = await axios.get(`http://localhost:9095/api/eventos/${id}`);
        setEvento(response.data);
      } catch (error) {
        console.log(error);
        // Manejar el error en caso de que el evento no exista o haya un problema con la API
      }
    };

    fetchEvento();
  }, [id]);

  // Mientras se carga el evento, mostrar un mensaje de carga o un loader
  if (!evento) {
    return <h1>Cargando evento...</h1>;
  }

  return (
    <>
      <CardPrincipal evento={evento} />
    </>
  );
};

export default Details;

