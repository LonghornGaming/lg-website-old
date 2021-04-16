import React from "react";
import axios from 'axios';
import {Container, Row, Col, Card, CardDeck} from 'react-bootstrap';

class CommunityPage extends React.Component {
    constructor(props) {
        super(props);
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let foo = params.get('id');
        foo = './CommunityData/' + foo + '.json'
        this.state = {isLoading: true, id: foo, data: undefined};
    }

    componentDidMount() {
        axios.get(this.state.id).then(response => {
            this.setState({data: response.data, isLoading: false});
        });
    }

    achievementsToArray() {
        let achievements = this.state.data.achievements;
        let o = [];
        achievements.forEach(achievement => {
            o.push(<li>{achievement}</li>)
        });
        return o;
    }

    render(){
        const data = this.state.data;
        if(this.state.isLoading){
            return <div className="App">Loading...</div>;
        }

        return(
            <Container>
                <Row style={{marginTop: "143px", position: "relative", right: "20px"}}>
                    <Col>
                        <h1 style={{font: "Futura", fontStyle: "normal", fontWeight: "bold", fontSize: "48", lineHeight: "56px"}}>{data.name}</h1>
                    </Col>

                    <Col>
                        <p style={{font: "Futura", fontSize: "18px", fontWeight: "500", lineHeight: "27px"}}>{data.description}</p>
                    </Col>
                </Row>

                <br/>

                <Row style={{marginTop: "74px"}}>
                    <h3 style={{font: "Futura", fontWeight:"bold", fontSize: "28px", lineHeight: "36px"}}>Recent Achievements</h3>
                </Row>

                <Row>
                    <Col>
                        <img style={{width:435, height:416, position: "relative", right:"14px"}} src={data.photo}></img>
                    </Col>

                    <Col style={{marginTop: "155px"}}>
                        <ul style={{font: "Futura", fontSize: "18px", fontWeight: "500", lineHeight: "27px"}}>
                            {this.achievementsToArray()}
                        </ul>
                    </Col>
                </Row>

                <br/>

                <Row style={{marginTop: "270px", marginBottom: "16px"}}>
                    <h3 style={{font: "Futura", fontWeight:"bold", fontSize: "28px", lineHeight: "36px", marginBottom: "16px"}}>Players</h3>
                </Row>

                <br/>

                <Row>
                    <Col>
                        <h3>Related Communities</h3>
                    </Col>

                    <Col>
                        <p>{data.communities}</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default CommunityPage;