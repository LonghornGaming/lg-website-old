import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import testImg from '../assets/dog.jpg';

const cardStyle = {
    height: '300px',
};

function About() {
    return (
        <CardDeck>
            <Card>
                <Card.Img style={cardStyle} variant="top" src={testImg}/>
                <Card.Body>
                    <Card.Title>Hunter</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">President</Card.Subtitle>
                    <Card.Text>
                        Hunter is a senior Archeology major. His favorite games
                        are fetch and belly rubs.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img style={cardStyle} variant="top" src={testImg}/>
                <Card.Body>
                    <Card.Title>Hunter</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">President</Card.Subtitle>
                    <Card.Text>
                        Hunter is a senior Archeology major. His favorite games
                        are fetch and belly rubs.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img style={cardStyle} variant="top" src={testImg}/>
                <Card.Body>
                    <Card.Title>Hunter</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">President</Card.Subtitle>
                    <Card.Text>
                        Hunter is a senior Archeology major. His favorite games
                        are fetch and belly rubs.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </CardDeck>
    );
}

export default About;
