import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

const Foglalas = () => {
  const { szobaId } = useParams();
  const [foglalas, setFoglalas] = useState({
    kezdet: "",
    vege: "",
    vendeg_nev: "",
  });

  const handleChange = (e) => {
    setFoglalas({ ...foglalas, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/foglalas", { ...foglalas, szoba_id: szobaId })
      .then(() => alert("Foglalás sikeres!"))
      .catch((error) => console.error("Hiba a foglalás során:", error));
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Foglalás</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Vendég neve</Form.Label>
          <Form.Control
            type="text"
            name="vendeg_nev"
            value={foglalas.vendeg_nev}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Érkezés dátuma</Form.Label>
          <Form.Control
            type="date"
            name="kezdet"
            value={foglalas.kezdet}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Távozás dátuma</Form.Label>
          <Form.Control
            type="date"
            name="vege"
            value={foglalas.vege}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Foglalás küldése
        </Button>
      </Form>
    </Container>
  );
};

export default Foglalas;
