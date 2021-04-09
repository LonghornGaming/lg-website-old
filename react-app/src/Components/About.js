import React from "react";
import { Card, Container, Row, Col, Accordion, Button } from "react-bootstrap";
import testImg from "../assets/dog.jpg";

const cardStyle = {
    height: "200px",
};

const rowStyle = {
    paddingBottom: "20px",
};

function AccordianCard(props) {
    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Card.Header} eventKey={props.event}>
                    {props.title}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={props.event}>
                <Card.Body>{props.body}</Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

function About() {
    return (
        <Container>
            <Row style={rowStyle}>
                <h1>About LG</h1>
            </Row>
            <Accordion>
                <AccordianCard
                    title="We are..."
                    body="Longhorn Gaming aims to connect gamers of any and all backgrounds, redefine negative stigmas of the gaming community, and support the future generation of the gaming industry. Our organization plans to accomplish this by fostering a community united by a passion for video games while also building a foundation for them to pursue and realize their passions within the gaming community, from esports to content creation, and much more. We hope to cater to casual and competitive gamers alike and as well as support and embrace exploration of the many paths you can find throughout the gaming industry."
                    event="0"
                />
                <AccordianCard
                    title="History"
                    body="haha go brr somewhere else"
                    event="1"
                />
                <AccordianCard
                    title="Events"
                    body="Longhorn Gaming provides access to a wide variety of events. Longhorn gaming itself runs weekly game nights, primarily including party games such as jackbox, skribbl.io, and broken picturephone. Longhorn gaming also hosts a bigger event every month. These events can include but are not limited to LAN parties, Larger tournaments, and fundraisers, and often include collaboration with other student organizations and sponsorships from companies in the gaming industry such as Riot. Additionally, Longhorn Gaming offers connections to our communities where Game Ambassadors, the head representative of their communities, run events in relation to their game about once a month. Finally, members of the LG Family system get access to additional biweekly family game nights, where LG families compete for points. "
                    event="2"
                />
                <AccordianCard
                    title="Esports"
                    body="Longhorn Gaming supports a wide variety of both club and varsity teams. Our teams compete in the highest levels of collegiate esports and have found great success in both regional and national competitions. With currently 18+ teams, Longhorn Gaming aims to be the one of the most comprehensive student-led esports organizations nationwide, providing real experience and invaluable opportunities to network. For any students interested in pursuing esports in or after college, Longhorn Gaming’s esports team is the place to be!"
                    event="3"
                />
                <AccordianCard
                    title="Discord Community"
                    body="Longhorn Gaming is nearly entirely run through our community Discord server. Discord is a free communication platform similar to Slack or Zoom where users talk in text and voice channels at their convenience. Discord allows our organization to deliver announcements, host events, and communicate directly with our community all in one place. Longhorn Gaming has a network of servers for games with larger communities at UT and a multitude of text channels on our main server for smaller interests. With nearly 2,500 members, there’s almost certainly a community that plays the games you’re interested in."
                    event="4"
                />
                <AccordianCard
                    title="Goals"
                    body={
                        <div>
                            <p>
                                Longhorn Gaming aims to be the central student
                                organization for gaming communities and esports
                                teams at the University of Texas at Austin. We
                                look to accomplish this through the following
                                goals:
                            </p>
                            <ul>
                                <li>
                                    Building a foundation for members to pursue
                                    and realize their passions within the gaming
                                    community
                                </li>
                                <li>
                                    Fostering and maintaining a community that
                                    showcases camaraderie and friendly
                                    competition
                                </li>
                                <li>
                                    Spreading awareness of the gaming
                                    communities at The University of Texas at
                                    Austin
                                </li>
                                <li>
                                    Supporting and embracing exploration of the
                                    many paths found throughout the gaming
                                    industry
                                </li>
                            </ul>
                        </div>
                    }
                    event="5"
                />
            </Accordion>

            <Row style={rowStyle}>
                {" "}
                <h1>Advisors</h1>{" "}
            </Row>
            <Row style={rowStyle}>
                <Col>
                    <Card>
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
                    </Card>
                </Col>
                <Col>
                    <Card>
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
                    </Card>
                </Col>
                <Col>
                    <Card>
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
                    </Card>
                </Col>
            </Row>
            <Row style={rowStyle}>
                {" "}
                <h1>Cabinet</h1>{" "}
            </Row>
            <Row style={rowStyle}>
                <Col>
                    <Card>
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
                    </Card>
                </Col>
                <Col>
                    <Card>
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
                    </Card>
                </Col>
                <Col>
                    <Card>
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
                    </Card>
                </Col>
            </Row>
            <Row style={rowStyle}>
                <Col>
                    <Card>
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
                    </Card>
                </Col>
                <Col>
                    <Card>
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
                    </Card>
                </Col>
            </Row>
            <Row style={rowStyle}>
                {" "}
                <h1>Directors</h1>{" "}
            </Row>
            <Row style={rowStyle}>
                <Col>
                    <Card>
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
                    </Card>
                </Col>
                <Col>
                    <Card>
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
                    </Card>
                </Col>
                <Col>
                    <Card>
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
                    </Card>
                </Col>
            </Row>
            <Row style={rowStyle}>
                <Col>
                    <Card>
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
                    </Card>
                </Col>
                <Col>
                    <Card>
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
                    </Card>
                </Col>
                <Col>
                    <Card>
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
                    </Card>
                </Col>
            </Row>

            <Row style={rowStyle}>
                {" "}
                <h1>Crew</h1>{" "}
            </Row>
            <Row style={rowStyle}>
                <Col>
                    haha
                    <br />
                    haha
                    <br />
                    haha
                    <br />
                    haha
                    <br />
                    haha
                    <br />
                </Col>
                <Col>
                    haha
                    <br />
                    haha
                    <br />
                    haha
                    <br />
                    haha
                    <br />
                    haha
                    <br />
                </Col>
                <Col>
                    haha
                    <br />
                    haha
                    <br />
                    haha
                    <br />
                    haha
                    <br />
                    haha
                    <br />
                </Col>
            </Row>

            <Row style={rowStyle}>
                {" "}
                <h1>Join Us</h1>{" "}
            </Row>
            <Row style={rowStyle}>
                <Col>
                    Operations–Tristique mus feugiat hendrerit a vitae a massa
                    fermentum rhoncus.
                    <br />
                    Public Relations–Tristique mus feugiat hendrerit a vitae a
                    massa fermentum rhoncus.
                    <br />
                    Events–Tristique mus feugiat hendrerit a vitae a massa
                    fermentum rhoncus.
                    <br />
                    Esports–Tristique mus feugiat hendrerit a vitae a massa
                    fermentum rhoncus.
                    <br />
                    Digital Production–Tristique mus feugiat hendrerit a vitae a
                    massa fermentum rhoncus.
                    <br />
                    Creative–Tristique mus feugiat hendrerit a vitae a massa
                    fermentum rhoncus.
                    <br />
                    Web Development–Tristique mus feugiat hendrerit a vitae a
                    massa fermentum rhoncus.
                    <br />
                    Family–Tristique mus feugiat hendrerit a vitae a massa
                    fermentum rhoncus.
                    <br />
                </Col>
                <Col>yes apply here i dont wanna make a button rn</Col>
            </Row>
        </Container>
    );
}

export default About;
