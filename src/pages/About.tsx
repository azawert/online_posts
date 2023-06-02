import { FC } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

export const About: FC = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Обо мне</Card.Title>
              <Card.Text>
                Привет! Меня зовут Игорь Бадуркин и я фронтенд-разработчик с
                опытом в создании веб-приложений. Я увлечен программированием и
                постоянно изучаю новые технологии и инструменты (например, такие
                как redux-saga :D).
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Навыки</Card.Title>
              <ListGroup variant='flush'>
                <ListGroup.Item>HTML</ListGroup.Item>
                <ListGroup.Item>CSS</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>React</ListGroup.Item>
                <ListGroup.Item>Node.js</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
