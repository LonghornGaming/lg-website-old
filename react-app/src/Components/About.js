import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import testImg from "../assets/dog.jpg";

const cardStyle = {
    height: "200px",
};

const rowStyle = {
    paddingBottom: "20px",
};

function About() {
    return (
        <Container>
            <Row style={rowStyle}>
                <h1>About LG</h1>
            </Row>
            <Row style={rowStyle}>
                <Col xs={3}>
                    <h2>We are...</h2>
                </Col>
                <Col xs={9}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                </Col>
            </Row>
            <Row style={rowStyle}>
                <Col xs={3}>
                    <h3>History of LG</h3>
                </Col>
                <Col xs={9}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                </Col>
            </Row>
            <Row style={rowStyle}>
                <Col xs={3}>
                    <h3>Events</h3>
                </Col>
                <Col xs={9}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                </Col>
            </Row>
            <Row style={rowStyle}>
                <Col xs={3}>
                    <h3>Esports</h3>
                </Col>
                <Col xs={9}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                </Col>
            </Row>
            <Row style={rowStyle}>
                <Col xs={3}>
                    <h3>Discord Community</h3>
                </Col>
                <Col xs={9}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                </Col>
            </Row>
            <Row style={rowStyle}>
                <Col xs={3}>
                    <h3>Goals</h3>
                </Col>
                <Col xs={9}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                </Col>
            </Row>
            <Row style={rowStyle}>
                <Col xs={3}>
                    <h3>Achievements</h3>
                </Col>
                <Col xs={9}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                </Col>
            </Row>


            <Row style={rowStyle}> <h1>Advisors</h1> </Row>
            <Row style={rowStyle}>
                <Col><Card>
                        <Card.Img
                            style={cardStyle}
                            variant="top"
                            src={testImg}
                        />
                        <Card.Body>
                            <Card.Title>Hunter</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                President
                            </Card.Subtitle>
                            <Card.Text>
                                Hunter is a senior Archaeology major. His
                                favorite games are fetch and belly rubs.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card></Col>
                <Col><Card>
                        <Card.Img
                            style={cardStyle}
                            variant="top"
                            src={testImg}
                        />
                        <Card.Body>
                            <Card.Title>Hunter</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                President
                            </Card.Subtitle>
                            <Card.Text>
                                Hunter is a senior Archaeology major. His
                                favorite games are fetch and belly rubs.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card></Col>
                <Col><Card>
                        <Card.Img
                            style={cardStyle}
                            variant="top"
                            src={testImg}
                        />
                        <Card.Body>
                            <Card.Title>Hunter</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                President
                            </Card.Subtitle>
                            <Card.Text>
                                Hunter is a senior Archaeology major. His
                                favorite games are fetch and belly rubs.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card></Col>
            </Row>
            <Row style={rowStyle}> <h1>Cabinet</h1> </Row>
            <Row style={rowStyle}>
                <Col><Card>
                        <Card.Img
                            style={cardStyle}
                            variant="top"
                            src={testImg}
                        />
                        <Card.Body>
                            <Card.Title>Hunter</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                President
                            </Card.Subtitle>
                            <Card.Text>
                                Hunter is a senior Archaeology major. His
                                favorite games are fetch and belly rubs.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card></Col>
                <Col><Card>
                        <Card.Img
                            style={cardStyle}
                            variant="top"
                            src={testImg}
                        />
                        <Card.Body>
                            <Card.Title>Hunter</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                President
                            </Card.Subtitle>
                            <Card.Text>
                                Hunter is a senior Archaeology major. His
                                favorite games are fetch and belly rubs.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card></Col>
                <Col><Card>
                        <Card.Img
                            style={cardStyle}
                            variant="top"
                            src={testImg}
                        />
                        <Card.Body>
                            <Card.Title>Hunter</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                President
                            </Card.Subtitle>
                            <Card.Text>
                                Hunter is a senior Archaeology major. His
                                favorite games are fetch and belly rubs.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card></Col>
            </Row>
            <Row style={rowStyle}>
                <Col><Card>
                        <Card.Img
                            style={cardStyle}
                            variant="top"
                            src={testImg}
                        />
                        <Card.Body>
                            <Card.Title>Hunter</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                President
                            </Card.Subtitle>
                            <Card.Text>
                                Hunter is a senior Archaeology major. His
                                favorite games are fetch and belly rubs.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card></Col>
                <Col><Card>
                        <Card.Img
                            style={cardStyle}
                            variant="top"
                            src={testImg}
                        />
                        <Card.Body>
                            <Card.Title>Hunter</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                President
                            </Card.Subtitle>
                            <Card.Text>
                                Hunter is a senior Archaeology major. His
                                favorite games are fetch and belly rubs.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card></Col>
            </Row>
            <Row style={rowStyle}> <h1>Directors</h1> </Row>
            <Row style={rowStyle}>
                <Col><Card>
                        <Card.Img
                            style={cardStyle}
                            variant="top"
                            src={testImg}
                        />
                        <Card.Body>
                            <Card.Title>Hunter</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                President
                            </Card.Subtitle>
                            <Card.Text>
                                Hunter is a senior Archaeology major. His
                                favorite games are fetch and belly rubs.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card></Col>
                <Col><Card>
                        <Card.Img
                            style={cardStyle}
                            variant="top"
                            src={testImg}
                        />
                        <Card.Body>
                            <Card.Title>Hunter</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                President
                            </Card.Subtitle>
                            <Card.Text>
                                Hunter is a senior Archaeology major. His
                                favorite games are fetch and belly rubs.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card></Col>
                <Col><Card>
                        <Card.Img
                            style={cardStyle}
                            variant="top"
                            src={testImg}
                        />
                        <Card.Body>
                            <Card.Title>Hunter</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                President
                            </Card.Subtitle>
                            <Card.Text>
                                Hunter is a senior Archaeology major. His
                                favorite games are fetch and belly rubs.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card></Col>
            </Row>
            <Row style={rowStyle}>
                <Col><Card>
                        <Card.Img
                            style={cardStyle}
                            variant="top"
                            src={testImg}
                        />
                        <Card.Body>
                            <Card.Title>Hunter</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                President
                            </Card.Subtitle>
                            <Card.Text>
                                Hunter is a senior Archaeology major. His
                                favorite games are fetch and belly rubs.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card></Col>
                <Col><Card>
                        <Card.Img
                            style={cardStyle}
                            variant="top"
                            src={testImg}
                        />
                        <Card.Body>
                            <Card.Title>Hunter</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                President
                            </Card.Subtitle>
                            <Card.Text>
                                Hunter is a senior Archaeology major. His
                                favorite games are fetch and belly rubs.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card></Col>
                <Col><Card>
                        <Card.Img
                            style={cardStyle}
                            variant="top"
                            src={testImg}
                        />
                        <Card.Body>
                            <Card.Title>Hunter</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                President
                            </Card.Subtitle>
                            <Card.Text>
                                Hunter is a senior Archaeology major. His
                                favorite games are fetch and belly rubs.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card></Col>
            </Row>

            <Row style={rowStyle}> <h1>Crew</h1> </Row>
            <Row style={rowStyle}>
                <Col>
                    haha<br/>
                    haha<br/>
                    haha<br/>
                    haha<br/>
                    haha<br/>
                </Col>
                <Col>
                haha<br/>
                    haha<br/>
                    haha<br/>
                    haha<br/>
                    haha<br/>
                </Col>
                <Col>
                    haha<br/>
                    haha<br/>
                    haha<br/>
                    haha<br/>
                    haha<br/>
                </Col>
            </Row>

            <Row style={rowStyle}> <h1>Join Us</h1> </Row>
            <Row style={rowStyle}>
                <Col>
                Operations–Tristique mus feugiat hendrerit a vitae a massa fermentum rhoncus.<br/>
                Public Relations–Tristique mus feugiat hendrerit a vitae a massa fermentum rhoncus.<br/>
                Events–Tristique mus feugiat hendrerit a vitae a massa fermentum rhoncus.<br/>
                Esports–Tristique mus feugiat hendrerit a vitae a massa fermentum rhoncus.<br/>
                Digital Production–Tristique mus feugiat hendrerit a vitae a massa fermentum rhoncus.<br/>
                Creative–Tristique mus feugiat hendrerit a vitae a massa fermentum rhoncus.<br/>
                Web Development–Tristique mus feugiat hendrerit a vitae a massa fermentum rhoncus.<br/>
                Family–Tristique mus feugiat hendrerit a vitae a massa fermentum rhoncus.<br/>
                </Col>
                <Col>
                    yes apply here i dont wanna make a button rn
                </Col>
            </Row>
        </Container>
    );
}

export default About;
