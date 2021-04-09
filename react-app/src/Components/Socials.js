import React from "react";
import { Card, CardDeck, Container, Row, Col, Image } from "react-bootstrap";
import ReactPlayer from "react-player";
import axios from "axios";
import { TwitterTimelineEmbed } from "react-twitter-embed";

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

function Icon(props) {
    
    return (
        <a href={props.url} target="_blank" rel="noreferrer">
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
        this.state = { isLoading: true, streamers: undefined };
    }

    componentDidMount(){
        axios.get('./streamers.json').then(response => {
            console.log(response.data);
            this.setState({isLoading: false, streamers: response.data}) ;
        });
    }

    generateIcons(icons) {
        let o = [];
        icons.forEach(icon => {
            o.push(
                <Col>
                    <Icon url={icon.url} icon={icon.icon}/>
                </Col>)
        });
        return o;
    }

    generateStreamers(streamers){
        let decks = [];
        for(let i = 0; i < streamers.length; i += 3) {

            decks.push(this.createDeck(streamers.slice(i, i + 3)));
        }
        return decks;
    }

    createDeck(streamers){
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
                <Col>
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
                <Col>
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

                <Card style={{width: '18rem'}}>
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

    render(){
        const {isLoading, streamers} = this.state;

        if (isLoading) {
            return <div className="App">Loading...</div>;
        }

        return (
            <Container>

                <h1 style={{marginTop: "163px", marginLeft: "25px", marginBottom: "50px"}}> Welcome to LG's Socials Page!</h1>
                <p1 style={{marginTop: "56px", marginLeft: "27px"}} >stay connected w the coolest</p1>
                <Container style={{marginTop: "25px"}}>
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

                    <Row style={{marginTop:"60px", marginBottom:"100px"}}>
                        <form>
                            <input type="text" size="106" placeholder="  Enter your email here" />
                        </form>
                        <button type="button" style={{marginLeft: "15px", paddingLeft:"40px", paddingRight:"40px"}}>
                            Sign up for our newsletter!
                        </button>
                    </Row>

                    <Row style={{marginBottom: "20px"}}>
                        <h2>Streamers</h2>
                    </Row>

                    {this.generateStreamers(streamers.data)}

                </Container>
            </Container>
        );
    }
}

export default Socials;
