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
                        <Form.Control style ={{position: "relative", right: "64px",height: "65px", width: "899px", backgroundColor:"#D9D9D9", color:"black", font:"Futura", fontSize: "20px"}} type="email" placeholder="Enter email" onChange={this.handleChange}/>
                    </Form.Group>
                </Col>
                <Col xs={3}>
                    <Button style={{position: "relative",backgroundColor: "#202426", borderColor: "#202426", font: "Futura", fontWeight: "500px", fontSize: "20px", lineHeight: "28px", height: "65px", width: "433px", textAlign: "center"}} variant="primary" type="submit">
                        Sign up for our Newsletter
                    </Button>
                </Col>

            </Row>
        </Form>
        );
    }
}

export default NewsletterForm;


