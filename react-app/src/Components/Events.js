import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { Card, Container, Row, Col, Jumbotron } from "react-bootstrap";
import images from "../assets/images.js";
import testImg from "../assets/dog.jpg";

const { calKey, calID } = require("../keys.js");

const jumboStyle = {
    paddingTop: "200px",
    paddingBottom: "200px",

    backgroundImage: "url(" + images.eventsLandscape + ")",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};

function EventCard(props) {
    return (
        <Card class='w-30'>
            <Card.Img style={{height:200, width:300}} variant="top" src={props.img} />
            <Card.Body>
                <Card.Title> {props.title} </Card.Title>
                <Card.Text> {props.text} </Card.Text>
            </Card.Body>
        </Card>
    );
}

function Events() {
    return (
        <div>
            <Jumbotron style={jumboStyle}>
                <h1>Upcoming Events</h1>
                <Row>
                    <Col>
                        <EventCard img={testImg} title="haha" text="haha" />
                    </Col>
                    <Col>
                        <EventCard img={testImg} title="haha" text="haha" />
                    </Col>
                    <Col>
                        <EventCard img={testImg} title="haha" text="haha" />
                    </Col>
                </Row>
            </Jumbotron>

            <Row>
                <Col xs={3}>
                    <h2>General Events</h2>
                </Col>
                <Col xs={9}>
                    Competitive, casual, family semper erat ultrices duis
                    dapibus egestas purus auctor lorem. Consectetur fermentum,
                    eget nulla dolor. Gravida dolor rutrum ultrices semper nulla
                    nisl non. Velit ac, et mattis aliquet. Tortor suscipit
                    bibendum gravida diam nisi dolor. Mauris, mauris donec non
                    ac egestas at lectus vitae. Semper erat ultrices duis
                    dapibus egestas purus auctor lorem. Consectetur fermentum,
                    eget nulla dolor. Gravida dolor rutrum ultrices semper nulla
                    nisl non. Velit ac, et mattis aliquet. Tortor suscipit
                    bibendum gravida diam nisi dolor. Mauris, mauris donec non
                    ac egestas at lectus vitae. Semper erat ultrices duis
                    dapibus egestas purus auctor lorem. Consectetur fermentum,
                    eget nulla dolor. Gravida dolor rutrum ultrices semper nulla
                    nisl non. Velit ac, et mattis aliquet. Tortor suscipit
                    bibendum gravida diam nisi dolor. Mauris, mauris donec non
                    ac egestas at lectus vitae.
                </Col>
            </Row>

            <Calendar apiKey={calKey} calendarId={calID} />

            <h1>Latest Events</h1>
            <Row>
                <Col>
                    <EventCard img={testImg} title="haha" text="haha" />
                </Col>
                <Col>
                    <EventCard img={testImg} title="haha" text="haha" />
                </Col>
                <Col>
                    <EventCard img={testImg} title="haha" text="haha" />
                </Col>
            </Row>
        </div>
    );
}

export default Events;
