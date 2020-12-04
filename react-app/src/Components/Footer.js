import React     from "react";
import Container from "react-bootstrap/Container";
import Row       from "react-bootstrap/Row";
import Col       from "react-bootstrap/Col";
import { Link }  from "react-router-dom";

import logo      from "../assets/Orange_Logo-p-500.png";
import Home      from "./Home";

import { ReactComponent as Discord }   from "../assets/icons/discord.svg";
import { ReactComponent as Facebook }  from "../assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";
import { ReactComponent as Twitter }   from "../assets/icons/twitter.svg";
import { ReactComponent as Youtube }   from "../assets/icons/youtube.svg";
import { ReactComponent as Linkedin }  from "../assets/icons/linkedin.svg";
import { ReactComponent as Steam }     from "../assets/icons/steam.svg";
import { ReactComponent as Twitch }    from "../assets/icons/twitch.svg";
import { ReactComponent as Beepo }     from "../assets/icons/beepo.svg";
import { ReactComponent as Logo}       from "../assets/icons/logo.svg";

import { footerStyle } from "../public/style";
import "bootstrap/dist/css/bootstrap.min.css";

function Icon(props) {
    return (
        <a href={props.url} target="_blank" rel="noreferrer">
            {props.icon}
        </a>
    );
}

function Footer() {
    return (
        <div style={footerStyle}>
            <Container style={{paddingTop: "20px"}}>
                <Row style={{display: 'flex', justifyContent: 'center'}}>
                    <Link to="/home">
                        <Icon
                            url=""
                            icon=<Logo height="40%" width="40%" />
                        />
                    </Link>
                </Row>
                <Row>
                    <Col>
                        <Icon
                            url="https://www.discord.gg/longhorngaming"
                            icon=<Discord height="55%" width="55%" />
                        />
                    </Col>
                    <Col>
                        <Icon
                            url="https://www.twitch.tv/utlonghorngaming"
                            icon=<Twitch height="55%" width="55%" />
                        />
                    </Col>
                    <Col>
                    <   Icon
                            url="https://www.youtube.com/longhorngaming"
                            icon=<Youtube height="55%" width="55%" />
                        />
                    </Col>
                    <Col>
                        <Icon
                            url="https://www.instagram.com/longhorngaming/"
                            icon=<Instagram height="55%" width="55%" />
                        />
                    </Col>
                    <Col>
                        <Icon
                            url="http://steamcommunity.com/groups/LonghornGaming"
                            icon=<Steam height="55%" width="55%" />
                        />
                    </Col>
                    <Col>
                        <Icon
                            url="https://twitter.com/longhorn_gaming"
                            icon=<Twitter height="55%" width="55%" />
                        />
                    </Col>
                    <Col>
                        <Icon
                            url="https://utexas.campuslabs.com/engage/organization/longhorngaming"
                            icon=<Beepo height="55%" width="55%" />
                        />
                    </Col>
                    <Col>
                        <Icon
                            url="https://www.facebook.com/ut.longhorn.gaming"
                            icon=<Facebook height="55%" width="55%" />
                        />
                    </Col>
                    <Col>
                        <Icon
                            url="https://www.linkedin.com/company/longhorn-gaming/"
                            icon=<Linkedin height="55%" width="55%" />
                        />
                    </Col>
                </Row>
            </Container>


            {/* <Container>
                <Row>
                    <Col style={{paddingTop: "20px"}}>
                        <Link to="/home">
                            <img src={logo} width="20%" height="40%"></img>
                        </Link>
                        <br/>
                        Copyright © Longhorn Gaming
                    </Col>

                    <Col>
                        <h4>Join Our Communities</h4>
                        <br/>
                        <ul>
                            <li>
                                <a
                                    href={
                                        "https://discord.com/invite/longhorngaming"
                                    }
                                >
                                    Discord
                                </a>
                            </li>
                            <li>
                                <a
                                    href={
                                        "https://utexas.campuslabs.com/engage/organization/longhorngaming"
                                    }
                                >
                                    HornsLink
                                </a>
                            </li>
                            <li>
                                <a
                                    href={
                                        "http://steamcommunity.com/groups/LonghornGaming"
                                    }
                                >
                                    Steam Group
                                </a>
                            </li>
                        </ul>
                    </Col>

                    <Col>
                        <h4>Connect With Us</h4>
                        <br/>
                        <ul>
                            <li>
                                <a
                                    href={
                                        "https://www.facebook.com/ut.longhorn.gaming"
                                    }
                                >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href={
                                        "https://www.instagram.com/longhorngaming/"
                                    }
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href={"https://twitter.com/longhorn_gaming"}>
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href={
                                        "https://www.linkedin.com/company/longhorn-gaming/"
                                    }
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </Col>

                    <Col>
                        <h4>Watch Our Content</h4>
                        <br/>
                        <ul>
                            <li>
                                <a
                                    href={
                                        "https://www.youtube.com/longhorngaming"
                                    }
                                >
                                    Youtube
                                </a>
                            </li>
                            <li>
                                <a
                                    href={
                                        "https://www.twitch.tv/utlonghorngaming"
                                    }
                                >
                                    Twitch
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container> */}
        </div>
    );
}

export default Footer;
