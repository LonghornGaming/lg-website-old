import React from 'react';
import {Card, CardDeck, Container, Jumbotron, Row, Col} from "react-bootstrap"
import {Link } from 'react-router-dom';

import images from '../assets/images';

var cardStyle = {
    width: '18rem'
}
const jumboStyle = {
    paddingTop: "200px",
    paddingBottom: "200px",
    borderRadius: '0px',
    backgroundColor: '#202426',
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};

const jumboHeader = {
    color: 'white',
    display: 'inline',
};

const jumboText = {
    color: 'white',
    display: 'inline',
    verticalAlign: 'middle',
    
    
};

function ESports() {
    return (
        <div>

            <Jumbotron style={jumboStyle}>
            
            <Row style={{width: '80%'}}>
                <Col style={{textAlign: 'right'}}>
                    <h1 style={jumboHeader}>History of Esports</h1>
                </Col>
                <Col style={{paddingLeft: '50px'}}>
                    <p style={jumboText}>
                        Longhorn Gaming provides access to a wide variety of events. Longhorn gaming itself runs weekly game nights, primarily including party games such as jackbox, skribbl.io, and broken picturephone. Longhorn gaming also hosts a bigger event every month. These events can include but are not limited to LAN parties, Larger tournaments, and fundraisers, and often include collaboration with other student organizations and sponsorships from companies in the gaming industry such as Riot. Additionally, Longhorn Gaming offers connections to our communities where Game Ambassadors, the head representative of their communities, run events in relation to their game about once a month. Finally, members of the LG Family system get access to additional biweekly family game nights, where LG families compete for points. 
                    </p>
                </Col>
            </Row> 
            </Jumbotron>
            
                        
            <Container>

            <CardDeck>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={images.apexLegends}/>
                    <Card.Body>

                        <Card.Title>
                            <nav>
                                <Link to={"/esport?id=test"}>
                                    Apex Legends
                                </Link>
                            </nav>
                        </Card.Title>
                    </Card.Body>
                </Card>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={images.beatsaber}/>
                    <Card.Body>
                        <Card.Title>Beat Saber</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={images.brawlstars}/>
                    <Card.Body>
                        <Card.Title>Brawl Stars</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={images.callofduty}/>
                    <Card.Body>
                        <Card.Title>Call of Duty</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={images.csgo}/>
                    <Card.Body>
                        <Card.Title>CS:GO</Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>

            <br/>

            <CardDeck>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={images.dota}/>
                    <Card.Body>
                        <Card.Title>Dota 2</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={images.fortnite}/>
                    <Card.Body>
                        <Card.Title>Fornite</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={images.hearthstone}/>
                    <Card.Body>
                        <Card.Title>Hearthstone</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={images.herosofthestorm}/>
                    <Card.Body>
                        <Card.Title>Heroes of the Storm</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={images.leagueoflegends}/>
                    <Card.Body>
                        <Card.Title>League of Legends</Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>

            <br/>

            <CardDeck>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={images.madden}/>
                    <Card.Body>
                        <Card.Title>Madden 21</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={images.nba2k}/>
                    <Card.Body>
                        <Card.Title>NBA 2K21</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={images.osu}/>
                    <Card.Body>
                        <Card.Title>osu!</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={images.overwatch}/>
                    <Card.Body>
                        <Card.Title>Overwatch</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={images.pubg}/>
                    <Card.Body>
                        <Card.Title>PlayerUnknown's Battlegrounds</Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>

            <br/>

            <CardDeck>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={images.rainbow6}/>
                    <Card.Body>
                        <Card.Title>Rainbow Six Siege</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={images.rocketleague}/>
                    <Card.Body>
                        <Card.Title>Rocket League</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={images.smashmelee}/>
                    <Card.Body>
                        <Card.Title>Super Smash Bros. Melee</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={images.smashultimate}/>
                    <Card.Body>
                        <Card.Title>Super Smash Bros. Ultimate</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={cardStyle}>
                    <Card.Img variant="top" src={images.starcraft2}/>
                    <Card.Body>
                        <Card.Title>Starcraft 2</Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>

            <br/>
            <div>
                <CardDeck>

                        <Card style={cardStyle}>
                            <Card.Img variant="top" src={images.streetfighter5}/>
                            <Card.Body>
                                <Card.Title>Street Fighter V</Card.Title>
                            </Card.Body>
                        </Card >

                        <Card style={cardStyle}>
                            <Card.Img variant="top" src={images.undernight}/>
                            <Card.Body>
                                <Card.Title>Under Night In-Birth</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card style={cardStyle}>
                            <Card.Img variant="top" src={images.valorant}/>
                            <Card.Body>
                                <Card.Title>Valorant</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card style={{visibility:'hidden'}}>
                            <Card.Img variant="top" src={images.valorant}/>
                            <Card.Body>
                                <Card.Title>Valorant</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card style={{visibility:'hidden'}}>
                            <Card.Img variant="top" src={images.valorant}/>
                            <Card.Body>
                                <Card.Title>Valorant</Card.Title>
                            </Card.Body>
                        </Card>

                </CardDeck>
            </div>

            </Container>

        </div>
    )
}

export default ESports;