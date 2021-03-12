import React from 'react';
import {Card, CardDeck, Container} from "react-bootstrap"
import {Link } from 'react-router-dom';

import images from '../assets/images';

var cardStyle = {

    width: '18rem'

}

function ESports() {
    return (
        <div>
            <h1>Welcome to LG's Esports Page!</h1>
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