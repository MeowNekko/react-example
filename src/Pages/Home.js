import React, {Component} from 'react';
import Slider from "../Components/Slider";
import {Button, Card, CardGroup, Col, Container, Row} from "react-bootstrap";
import team1 from "../assets/Team/team-1.jpg";
import team2 from "../assets/Team/team-2.jpg";
import team3 from "../assets/Team/team-3.jpg";

class Home extends Component {
    render() {
        return (
            <>
                <Slider/>
                <Container className="mt-5">
                    <h2 className="text-center">Our Team</h2>
                    <Row xs={1} md={3} className="mt-1 g-4">
                        <Col>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={team1}
                                />
                                <Card.Body>
                                    <Card.Title>Developers</Card.Title>
                                    <Card.Text>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </Card.Text>
                                    <Button variant="primary">About team</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Developers</Card.Title>
                                    <Card.Text>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </Card.Text>
                                    <Button variant="primary">About team</Button>
                                </Card.Body>
                                <Card.Img
                                    variant="bottom"
                                    src={team2}
                                />
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={team3}
                                />
                                <Card.Body>
                                    <Card.Title>Developers</Card.Title>
                                    <Card.Text>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </Card.Text>
                                    <Button variant="primary">About team</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Home;
