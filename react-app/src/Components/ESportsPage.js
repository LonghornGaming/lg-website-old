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
            <Card style={{ width: '18rem', color:'white'}} bg={'dark'}>
                <Card.Title>{player.name}</Card.Title>
                <Card.Subtitle>{player.role}</Card.Subtitle>
                <Card.Text>{player.description}</Card.Text>
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
                <Row>
                    <Col>
                        <h1>{data.name}</h1>
                    </Col>

                    <Col>
                        <p>{data.description}</p>
                    </Col>
                </Row>

                <br/>

                <Row>
                    <h3>Recent Achievements</h3>
                </Row>

                <Row>
                    <Col>
                        <img style={{width:435, height:416}} src={data.photo}></img>
                    </Col>

                    <Col>
                        <ul>
                            {this.achievementsToArray()}
                        </ul>
                    </Col>
                </Row>

                <br/>

                <Row>
                    <h3>Players</h3>
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