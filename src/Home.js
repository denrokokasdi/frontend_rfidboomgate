import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBeer, FaCoffee, FaApple, FaAndroid } from 'react-icons/fa';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <Container className="custom-container" class="bgcolor-warning">
      <Row className="custom-row">
        <Col xs={12} md={3}>
          <Card className="text-center">
            <Card.Body className="icon-hover">
              <FaBeer size={50} />
              <Card.Title>Beerr</Card.Title>
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
    </Container>
  );
};

export default Home;


// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://rfidboomgate.vercel.app/api/data/');
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   fetchData();
// }, []);
