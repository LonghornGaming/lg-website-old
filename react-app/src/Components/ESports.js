import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

import images from '../assets/images';

function ESports() {
    return (
        <div><h1>Welcome to LG's Esports Page!</h1>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={images.apexLegends}/>
                    <Card.Body>
                        <Card.Title>Apex Legends</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={images.beatsaber}/>
                    <Card.Body>
                        <Card.Title>Beat Saber</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={images.brawlstars}/>
                    <Card.Body>
                        <Card.Title>Brawl Stars</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={images.callofduty}/>
                    <Card.Body>
                        <Card.Title>Call of Duty</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={images.csgo}/>
                    <Card.Body>
                        <Card.Title>CS:GO</Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>

            <br>
            </br>

            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={images.dota}/>
                    <Card.Body>
                        <Card.Title>Dota 2</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={images.fortnite}/>
                    <Card.Body>
                        <Card.Title>Fornite</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={images.hearthstone}/>
                    <Card.Body>
                        <Card.Title>Hearthstone</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={images.herosofthestorm}/>
                    <Card.Body>
                        <Card.Title>Heroes of the Storm</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={images.leagueoflegends}/>
                    <Card.Body>
                        <Card.Title>League of Legends</Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    )
}

export default ESports;