import React from 'react';
import { Card, Container, Row, Col, Image } from "react-bootstrap";

let BlogCard = function statelessFunctionComponentClass(props) {

    return(
    <Card>
        <Card.Body>
            <Card.Title>
                <a>{props.title}</a>
            </Card.Title>
            <Card.Body>Date: {props.date}</Card.Body>
            <Card.Text>Author:{props.author}</Card.Text>
        </Card.Body>
    </Card>
    )

}

export default BlogCard;