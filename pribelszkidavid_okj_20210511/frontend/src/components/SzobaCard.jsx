import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SzobaCard = ({ szoba }) => {
  return (
    <Card className="shadow">
      <Card.Body>
        <Card.Title>{szoba.nev}</Card.Title>
        <Card.Text>{szoba.leiras}</Card.Text>
        <Card.Text className="fw-bold">{szoba.ar} Ft/éj</Card.Text>
        <Link to={`/foglalas/${szoba.id}`}>
          <Button variant="primary">Foglalás</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default SzobaCard;
