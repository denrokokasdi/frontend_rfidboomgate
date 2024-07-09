import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaBeer, FaCoffee, FaApple, FaAndroid } from 'react-icons/fa';
import axios from 'axios';
import './Home.css'; // Import the CSS file

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");

  const fetchUser = async () => {
    console.log("username");
    try {
      // Extract username from the URL path
      const usernamed = window.location.pathname.split('/').pop(); // This will extract 'karimbenzema' from '/api/data/karimbenzema'
      console.log("usernameddd" + usernamed);
      const response = await axios.get(`https://rfidboomgate-backend.vercel.app/api/data`);
      // Handle response data here
      console.log(response.data); // Assuming you want to log the response data  
      if (response && response.data) {
        console.log("Hasilnyaaa==========================")
        console.log(response.data.username)
        setData(response.data.username);
        setUsername(response.data.username);
        setError(null);
      } else {
        setError('No data received from the API');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
      setData(null);
    }
  };

  useEffect(() => {
    fetchUser(); // Initialize data fetching on component mount
  }, []);

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
          <p>{username}</p>
        </Row>
      )}
    </Container>
  );
};

export default Home;
