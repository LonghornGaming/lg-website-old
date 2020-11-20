import React     from "react";
import Container from "react-bootstrap/Container";
import Row       from "react-bootstrap/Row";
import Col       from "react-bootstrap/Col";
import { Link }  from "react-router-dom";

import logo      from "../assets/Orange_Logo-p-500.png";
import Home      from "./Home";

import { footerStyle } from "../public/style";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
    return (
        <div style={footerStyle}>
            <Container>
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
            </Container>
        </div>
    );
}

export default Footer;
