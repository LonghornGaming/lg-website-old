import React from "react";
import axios from 'axios';
import {Container, Row, Col, Card, CardDeck} from 'react-bootstrap';

class ESportsPage extends React.Component{
    constructor(props) {
        super(props);
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let foo = params.get('id');
        foo = './EsportsData/' + foo + '.json'
        this.state = { isLoading: true, id: foo, data: undefined };
    }

    componentDidMount() {
        axios.get('./test.json').then(response => {
            this.setState({data:response.data, isLoading:false});
        });
    }

    achievementsToArray(){
        let achievements = this.state.data.achievements;
        let o = [];
        achievements.forEach(achievement => {
            o.push(<li>{achievement}</li>)
        });
        return o;
    }

    createDecks(players){
        let decks = [];
        for(let i = 0; i < players.length; i += 3) {
            decks.push(this.createDeck(players.slice(i, i + 3)));
        }
        return decks;
    }

    createDeck(players){
        let cards = [];
        players.forEach(player => {
           cards.push(this.createPlayer(player));
        });
        return <CardDeck>{cards}</CardDeck>
    }

    createPlayer(player){
        return(
            <Card style={{ width: '435px', height: "129px", color:'white', marginBottom: "28px", marginRight: "26px"}} bg={'dark'}>
                <Card.Title style={{position: "relative", top: "16px", left: "30px", fontWeight: "700"}}>{player.name}</Card.Title>
                <Card.Subtitle style={{position: "relative", top: "13px", left: "30px", fontSize: "18px"}}>{player.role}</Card.Subtitle>
                <Card.Text style={{position: "relative", top:"16px", left: "30px", fontSize: "14px"}}>{player.description}</Card.Text>
            </Card>
        )
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
                        <h1 style={{font: "Futura", fontStyle: "normal", fontWeight: "bold", fontSize: "48", fontWeight: "700", lineHeight: "56px"}}>{data.name}</h1>
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

                <Row>
                    {this.createDecks(data.players)}
                </Row>

                <br/>

                <Row>
                    <Col>
                        <h3>Tryouts Info</h3>
                    </Col>

                    <Col>
                        <p>{data.tryout}</p>
                    </Col>
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

export default ESportsPage