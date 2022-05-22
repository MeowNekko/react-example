import React, {Component} from 'react';
import {Card, CardGroup, CardImg, Col, Container, ListGroup, Row} from "react-bootstrap";
import post1 from "../assets/Post/post-1.jpg";

class Blog extends Component {
    render() {
        return (
            <Container>
                <Row className="mt-3">
                    <Col md={9}>
                        <Row>
                            <Col xs={"auto"}>
                                <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src={post1}
                                alt="post"
                                />
                            </Col>
                            <Col>
                                <h5>Why do we use it?</h5>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col xs={"auto"}>
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src={post1}
                                    alt="post"
                                />
                            </Col>
                            <Col>
                                <h5>Why do we use it?</h5>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col xs={"auto"}>
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src={post1}
                                    alt="post"
                                />
                            </Col>
                            <Col>
                                <h5>Why do we use it?</h5>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <h5 className="text-center">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>Side Widget</Card.Title>
                                <Card.Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Blog;
