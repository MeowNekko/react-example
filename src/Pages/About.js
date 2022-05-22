import React, {Component} from 'react';
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";

import design from "../assets/About/design.png"
import team from "../assets/About/team.jpeg"
import programming from "../assets/About/programming.jpeg"
import frameworks from "../assets/About/frameworks.jpeg"
import libraries from "../assets/About/libraries.jpeg"

class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs" defaultActiveKey="design">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="design">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="team">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="programming">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="frameworks">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="libraries">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="design">
                                    <img src={design}
                                         height="400"
                                         className="d-inline-block align-top"
                                         alt="design"/>
                                    <h3>Design</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey="team">
                                    <img src={team}
                                         height="400"
                                         className="d-inline-block align-top"
                                         alt="team"/>
                                    <h3>Team</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey="programming">
                                    <img src={programming}
                                         height="400"
                                         className="d-inline-block align-top"
                                         alt="programming"/>
                                    <h3>Programming</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey="frameworks">
                                    <img src={frameworks}
                                         height="400"
                                         className="d-inline-block align-top"
                                         alt="frameworks"/>
                                    <h3>Frameworks</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey="libraries">
                                    <img src={libraries}
                                         height="400"
                                         className="d-inline-block align-top"
                                         alt="libraries"/>
                                    <h3>Libraries</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;
