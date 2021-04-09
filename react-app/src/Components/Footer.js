import React     from "react";
import Container from "react-bootstrap/Container";
import Row       from "react-bootstrap/Row";
import Col       from "react-bootstrap/Col";
import { Link }  from "react-router-dom";

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
import { ReactComponent as Reddit}     from "../assets/icons/reddit.svg";

import { footerStyle, centerStyle } from "../public/style";
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

            <Container style={{paddingTop: "80px", height: "200px"}}>
                <Row className="justify-content-md-center">
                    <Col>
                        <Icon
                            url="https://www.discord.gg/longhorngaming"
                            icon=<Discord />
                        />
                    </Col>
                    <Col>
                        <Icon
                            url="https://www.twitch.tv/utlonghorngaming"
                            icon=<Twitch />
                        />
                    </Col>
                    <Col>
                    <   Icon
                            url="https://www.youtube.com/longhorngaming"
                            icon=<Youtube />
                        />
                    </Col>
                    <Col>
                        <Icon
                            url="https://www.instagram.com/longhorngaming/"
                            icon=<Instagram />
                        />
                    </Col>
                    <Col>
                        <Icon
                            url="http://steamcommunity.com/groups/LonghornGaming"
                            icon=<Steam />
                        />
                    </Col>
                    <Col>
                        <Link to="/home">
                            <Icon
                                url=""
                                icon=<Logo />
                            />
                        </Link>
                    </Col>
                    <Col style={centerStyle}>
                        <Icon
                            url="https://www.reddit.com/r/LonghornGaming/"
                            icon=<Reddit />
                        />
                    </Col>
                    <Col>
                        <Icon
                            url="https://twitter.com/longhorn_gaming"
                            icon=<Twitter />
                        />
                    </Col>
                    <Col>
                        <Icon
                            url="https://utexas.campuslabs.com/engage/organization/longhorngaming"
                            icon=<Beepo />
                        />
                    </Col>
                    <Col>
                        <Icon
                            url="https://www.facebook.com/ut.longhorn.gaming"
                            icon=<Facebook />
                        />
                    </Col>
                    <Col>
                        <Icon
                            url="https://www.linkedin.com/company/longhorn-gaming/"
                            icon=<Linkedin />
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
