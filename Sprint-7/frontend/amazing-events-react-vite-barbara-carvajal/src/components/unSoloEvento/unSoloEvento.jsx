/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CardPrincipal(props) {
  let [evento, setEvento] = useState([]);

  useEffect(() => {
    setEvento(props.evento);
  }, [props.evento]);
  return (
    <Card style={{ width: "100%", margin: "0.5em", fontSize: "0.85em", borderRadius: "1rem" }} className="text-center">
      <div className="row">
        <div className="col-md-4">
          <Card.Img variant="top" src={evento.image} />
        </div>
        <div className="col-md-4">
          <Card.Body>
            <Card.Title>{evento.name}</Card.Title>
            <Card.Text>Category: {evento.category}</Card.Text>
            <Card.Text>Date: {evento.date}</Card.Text>
            <Card.Text>Location: {evento.place}</Card.Text>
            <Card.Text>Description: {evento.description}</Card.Text>
            <Card.Text>Price: {evento.price}</Card.Text>
            <Card.Text>Capacity: {evento.capacity}</Card.Text>
            <Card.Text>Assistance: {evento.assistance}</Card.Text>
            <Card.Text>Estimate: {evento.estimate}</Card.Text>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default CardPrincipal;


