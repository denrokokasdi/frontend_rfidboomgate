import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaBeer, FaCoffee, FaApple, FaAndroid } from 'react-icons/fa';
import axios from 'axios';
import './Home.css'; // Import the CSS file

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://rfidboomgate.vercel.app/api/data');
      setData(response.data);
      setError(null);
    } catch (error) {
      setError('Error fetching data');
      setData(null);
    }
  };

  return (
    <Container className="custom-container bgcolor-warning">
      <Row className="custom-row">
        <Col xs={12} md={3}>
          <Card className="text-center">
            <Card.Body className="icon-hover">
              <FaBeer size={50} />
              <Card.Title>Beer</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3}>
          <Card className="text-center">
            <Card.Body className="icon-hover">
              <FaCoffee size={50} />
              <Card.Title>Coffee</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3}>
          <Card className="text-center">
            <Card.Body className="icon-hover">
              <FaApple size={50} />
              <Card.Title>Apple</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3}>
          <Card className="text-center">
            <Card.Body className="icon-hover">
              <FaAndroid size={50} />
              <Card.Title>Android</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="custom-row">
        <Col xs={12} md={3}>
          <Button onClick={fetchData}>Fetch Data</Button>
        </Col>
      </Row>
      {error && (
        <Row className="custom-row">
          <Col>
            <p>{error}</p>
          </Col>
        </Row>
      )}
      {data && (
        <Row className="custom-row">
          <Col>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Home;
