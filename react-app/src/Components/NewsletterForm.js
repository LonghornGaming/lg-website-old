import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React from "react";

class NewsletterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { email: '' };
    }

    handleChange = (event) => {
        this.setState({email: event.target.value});
    }

    handleSubmit = (event) => {
        //TEMP
        //console.log(this.state);
        fetch('http://localhost:1000/api', {
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state),
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        }).then(function(response) {
            return response.json();
        })

        event.preventDefault();
    }

    render() {
        return (


        <Form onSubmit={this.handleSubmit}>
            <Row>
                <Col xs={9}>
                    <Form.Group controlId="formBasicEmail" >
                        <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange}/>
                    </Form.Group>
                </Col>
                <Col xs={3}>
                    <Button variant="primary" type="submit">
                        Sign up for our Newsletter
                    </Button>
                </Col>

            </Row>
        </Form>
        );
    }
}

export default NewsletterForm;


