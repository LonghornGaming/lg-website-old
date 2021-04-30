import React from "react";
import { Card, CardDeck, CardGroup, Container, Row, Col, Image } from "react-bootstrap";
import ReactPlayer from "react-player";
import axios from "axios";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import NewsletterForm from './NewsletterForm';

import testImg from "../assets/dog.jpg";

import { ReactComponent as Discord }   from "../assets/icons/discord_alt.svg";
import { ReactComponent as Facebook }  from "../assets/icons/facebook_alt.svg";
import { ReactComponent as Instagram } from "../assets/icons/instagram_alt.svg";
import { ReactComponent as Twitter }   from "../assets/icons/twitter_alt.svg";
import { ReactComponent as Youtube }   from "../assets/icons/youtube_alt.svg";
import { ReactComponent as Linkedin }  from "../assets/icons/linkedin_alt.svg";
import { ReactComponent as Steam }     from "../assets/icons/steam_alt.svg";
import { ReactComponent as Twitch }    from "../assets/icons/twitch_alt.svg";
import { ReactComponent as Beepo }     from "../assets/icons/beepo.svg";
import { ReactComponent as Logo}       from "../assets/icons/longhorn_alt.svg";
import { ReactComponent as Reddit}       from "../assets/icons/reddit_alt.svg";

const cardStyle = {
    height: "200px",
};

const rowStyle = {
    paddingBottom: "20px",
};

const showcaseStyle = {
    width: 203,
    height: 203
}

const iconStyle = {
    marginTop: "auto",
    marginBottom: "auto"
}

function Icon(props) {
    
    return (
        <a style={{display: 'flex', justifyContent: 'center'}} href={props.url} target="_blank" rel="noreferrer">
            {props.icon}
        </a>
    );
}

const icons = [
    {
        url: "https://www.discord.gg/longhorngaming",
        icon: <Discord height="55%" width="55%" />
    },
    {
        url: "https://www.twitch.tv/utlonghorngaming",
        icon: <Twitch height="55%" width="55%" />
    },
    {
        url: "https://www.youtube.com/longhorngaming",
        icon: <Youtube height="55%" width="55%" />
    },
    {
        url: "https://www.instagram.com/longhorngaming/",
        icon: <Instagram height="55%" width="55%" />
    },
    {
        url: "http://steamcommunity.com/groups/LonghornGaming",
        icon: <Steam height="55%" width="55%" />
    },
    {
        url: "https://twitter.com/longhorn_gaming",
        icon: <Twitter height="55%" width="55%" />
    },
    {
        url: "https://utexas.campuslabs.com/engage/organization/longhorngaming",
        icon: <Logo height="55%" width="55%" />
    },
    {
        url: "https://www.facebook.com/ut.longhorn.gaming",
        icon: <Facebook height="55%" width="55%" />
    },
    {
        url: "https://www.linkedin.com/company/longhorn-gaming/",
        icon: <Linkedin height="55%" width="55%" />
    },
    {
        url: "https://www.reddit.com/r/LonghornGaming/",
        icon: <Reddit height="55%" width="55%" />
    },
];

//Use somewhere later??????
function discInvite() {
        console.log("hello")
        axios.get('https://discordapp.com/api/invites/QQgUJ4J4fy?with_counts=true').then(result=>{
            console.log(result)
            return(result)
        })
}


class Socials extends React.Component {
    constructor(props){
        super(props);
        this.state = { isLoading: true, streamers: undefined, communities: undefined };
    }

    componentDidMount(){
        axios.get('./streamers.json').then(response => {
            this.setState({streamers: response.data}) ;
        });

        axios.get('./community.json').then(response => {
            this.setState({isLoading:false, communities: response.data});
        });
    }

    generateIcons(icons) {
        let o = [];
        icons.forEach(icon => {
            o.push(
                <Col style={iconStyle}>
                    <Icon url={icon.url} icon={icon.icon}/>
                </Col>)
        });
        return o;
    }

    generateStreamers(streamers){
        let decks = [];
        for(let i = 0; i < streamers.length; i += 3) {

            decks.push(this.createStreamerDeck(streamers.slice(i, i + 3)));
        }
        return decks;
    }

    createStreamerDeck(streamers){
        let cols = [];
        streamers.forEach(streamer => {
            cols.push(this.createStreamer(streamer));
        });

        let remainder = 0;
        if(streamers.length < 3)
            remainder = 3 - streamers.length;

        for(let i = 0; i < remainder; i++){
            cols.push(
                <Col><Card style={{visibility:'hidden'}}/></Col>
            );
        }
        return <CardDeck style={rowStyle}>{cols}</CardDeck>
    }

    createStreamer(streamer){
       let icons = [];
       if(streamer.socials.twitch !== ""){
           icons.push(
               <Col>
                   <Icon url={streamer.socials.twitch}
                         icon=<Twitch height="55%" width="55%" />/>
               </Col>
           )
       } else {
           icons.push(
               <Col style={{visibility:'hidden'}}>
                   <Icon icon=<Twitch height="55%" width="55%"/>/>
               </Col>
           )
       }
        if(streamer.socials.youtube !== ""){
            icons.push(
                //Center Youtube icon be because its weird
                <Col style={iconStyle}>
                    <Icon url={streamer.socials.youtube}
                          icon=<Youtube height="55%" width="55%" />/>
                </Col>
            )
        } else {
            icons.push(
                <Col style={{visibility:'hidden'}}>
                    <Icon icon=<Twitch height="55%" width="55%"/>/>
                </Col>
            )
        }
        if(streamer.socials.twitter !== ""){
            icons.push(
                //Twitter icon is also not centered
                <Col style={iconStyle}>
                    <Icon url={streamer.socials.twitter}
                          icon=<Twitter height="55%" width="55%" />/>
                </Col>
            )
        } else {
            icons.push(
                <Col style={{visibility:'hidden'}}>
                    <Icon icon=<Twitch height="55%" width="55%"/>/>
                </Col>
            )
        }

        return(

                <Card bg='dark' text='white'>
                    <Card.Body>
                        <Card.Title>{streamer.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {streamer.game}
                        </Card.Subtitle>
                        <Card.Text>
                            {streamer.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer><Row>{icons}</Row></Card.Footer>
                </Card>

        )
    }

    generateCommunities(communities){
        let decks = [];
        for(let i = 0; i < communities.length; i += 3) {

            decks.push(this.createCommunitiesDeck(communities.slice(i, i + 3)));
        }
        return decks;
    }

    createCommunitiesDeck(communities){
        let cols = [];
        communities.forEach(community => {
           cols.push(this.createCommunity(community));
        });

        let remainder = 0;
        if(communities.length < 3)
            remainder = 3 - communities.length;

        for(let i = 0; i < remainder; i++){
            cols.push(
                <Card style={{visibility:'hidden'}}/>
            );
        }

        return <CardDeck style={rowStyle}>{cols}</CardDeck>;
    }

    createCommunity(community){
        let icons = [];
        if(community.socials.discord !== ""){
            icons.push(
                <Col>
                    <Icon url={community.socials.discord}
                          icon=<Discord height="55%" width="55%" />/>
                </Col>
            )
        } else {
            icons.push(
                <Col style={{visibility:'hidden'}}>
                    <Icon icon=<Twitch height="55%" width="55%"/>/>
                </Col>
            )
        }
        if(community.socials.longhorn !== ""){
            icons.push(
                <Col style={iconStyle}>
                    <Icon url={community.socials.longhorn}
                          icon=<Logo height="55%" width="55%" />/>
                </Col>
            )
        } else {
            icons.push(
                <Col style={{visibility:'hidden'}}>
                    <Icon icon=<Twitch height="55%" width="55%"/>/>
                </Col>
            )
        }
        if(community.socials.facebook !== ""){
            icons.push(
                <Col>
                    <Icon url={community.socials.facebook}
                          icon=<Facebook height="55%" width="55%" />/>
                </Col>
            )
        } else {
            icons.push(
                <Col style={{visibility:'hidden'}}>
                    <Icon icon=<Twitch height="55%" width="55%"/>/>
                </Col>
            )
        }
        if(community.socials.instagram !== ""){
            icons.push(
                <Col>
                    <Icon url={community.socials.instagram}
                          icon=<Instagram height="55%" width="55%" />/>
                </Col>
            )
        } else {
            icons.push(
                <Col style={{visibility:'hidden'}}>
                    <Icon icon=<Twitch height="55%" width="55%"/>/>
                </Col>
            )
        }

        return(

            <Card>
                <Row>
                    <Col xs={4}>
                        <Card.Img variant="left" src={community.image}/>
                    </Col>
                    <Col xs={8}>
                        <Card.Body>
                            <Card.Title>{community.name}</Card.Title>
                            <Card.Text>{community.description}</Card.Text>
                        </Card.Body>
                    </Col>

                </Row>
                <Card.Footer><Row>{icons}</Row></Card.Footer>
            </Card>
        )
    }

    render(){
        const {isLoading, streamers, communities} = this.state;

        if (isLoading) {
            return <div className="App">Loading...</div>;
        }

        return (
            <Container>

                <h1 style={{marginTop: "163px", marginLeft: "25px", marginBottom: "50px"}}> Welcome to LG's Socials Page!</h1>
                <p1 style={{marginTop: "56px", marginLeft: "27px"}} >stay connected w/ the coolest</p1>

                    <Row style={{marginTop: "84px", marginBottom: "64px"}}>
                        {this.generateIcons(icons)}
                    </Row>
                    <Row>
                        <Col>
                            <div style={{marginRight: "0px", marginTop: "100px"}}>
                                <ReactPlayer
                                    url="https://www.twitch.tv/UTLonghornGaming" width="140%" height="100%" style={{position: "absolute", top:"0", left:"0"}}

                                />
                            </div>
                        </Col>

                        <Col>
                            <div style={{marginLeft: "240px", marginTop: "0px"}}>
                                <TwitterTimelineEmbed
                                    sourceType="profile"
                                    screenName="Longhorn_Gaming"
                                    options={{ height: 435, width: 482 }}

                                />
                            </div>
                        </Col>
                    </Row>

                    <Row style={{marginTop:"60px", marginBottom:"60px"}}>
                        <NewsletterForm/>
                    </Row>

                    <Row style={{marginBottom: "20px"}}>
                        <h2>Streamers</h2>
                    </Row>

                    <Row style={{marginBottom: "20px"}}>
                        {this.generateStreamers(streamers.data)}
                    </Row>

                    <Row style={{marginBottom: "20px"}}>
                        <h2>Community Showcase</h2>
                    </Row>
                    
                    <Row style={{marginBottom: "20px"}}>
                        {this.generateCommunities(communities.data)}
                    </Row>
            </Container>
        );
    }
}

export default Socials;
