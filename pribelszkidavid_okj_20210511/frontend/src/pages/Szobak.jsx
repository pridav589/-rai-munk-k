import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import SzobaCard from "../components/SzobaCard";

const Szobak = () => {
  const [szobak, setSzobak] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/szobak")
      .then((response) => setSzobak(response.data))
      .catch((error) => console.error("Hiba a szobák lekérésekor:", error));
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Szobák</h2>
      <Row>
        {szobak.map((szoba) => (
          <Col key={szoba.id} md={4} className="mb-4">
            <SzobaCard szoba={szoba} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Szobak;
