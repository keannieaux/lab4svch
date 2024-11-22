import React from 'react';
import './Footer.css';
import image1 from './image/facebook.svg';
import image2 from './image/instagram.svg';
import image3 from './image/twitter.svg';
import { Container, Row, Col } from 'react-bootstrap';

function Footer () {
    return (
        <footer className="footer">
            <div className="block-footer">
                <div className="block-footer1">
                    <div className="block-footer2">
                        <p>Join our newsletter</p>
                        <div className="button-pole">
                            <div className="pole"></div>
                            <div className="button-sub">
                                <p>Subscribe</p>
                            </div>
                        </div>
                    </div>
                    <div className="block-footer3">
                        <div className="block-contact">
                        <Container>
                        <Row>
                        <Col>
                            <p>© Learnico by Your Name</p>
                            </Col>
                            </Row>
                            </Container>
                            <div className="img-contact">
                                <img src={image1} alt="facebook" />
                                <img src={image3} alt="twitter" />
                                <img src={image2} alt="instagram" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
