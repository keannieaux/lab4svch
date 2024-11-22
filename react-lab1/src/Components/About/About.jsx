import './About.css';
import image1 from '../../images/pr1.png';
import React, { useState } from 'react'; 
import { Card, Button, Form, Modal, Alert, Badge, ListGroup, ProgressBar  } from 'react-bootstrap';

const About = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="about">
      <div className="progres">
        <p>Прогресс</p>
      <ProgressBar now={60} />
      <div>
      <Button variant="primary" onClick={handleShow}>
        Узнать больше о прогрессе
      </Button>
      </div>
      </div>
      <Alert variant="danger">
    Не забывайте о курсе!
  </Alert>
      <h1> About <Badge variant="secondary">Us</Badge></h1>
      <p>
        Welcome to Learnico! We are dedicated to helping you become a no-code expert. 
        Our platform offers a variety of courses taught by industry leaders. 
        Whether you're a beginner looking to learn the basics or an experienced professional wanting to expand your skills, 
        we have something for you.
      </p>
      <img src={image1} alt="pr1" />
      <p>
        Our mission is to provide high-quality, accessible education to everyone. 
        Join us on this journey to enhance your skills and find the career of your dreams!
      </p>
                          <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="image.jpg" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Form>
                  <h1>Заполните данные для регистрации на курс</h1>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  <ListGroup>
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Прогресс</Modal.Title>
        </Modal.Header>
        <Modal.Body>Достигните прогресса вместе с нашим курсом!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default About;
