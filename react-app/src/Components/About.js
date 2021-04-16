import React from "react";
import {Card, Container, Row, Col, CardDeck, Button} from "react-bootstrap";
import axios from "axios";

import { ReactComponent as Twitter }   from "../assets/icons/twitter_alt.svg";
import { ReactComponent as Linkedin }  from "../assets/icons/linkedin_alt.svg";

function Icon(props) {

    return (
        <a href={props.url} target="_blank" rel="noreferrer">
            {props.icon}
        </a>
    );
}

const cardStyle = {
    height: "200px",
};

const rowStyle = {
    paddingBottom: "20px",
};

function Blurb(props) {
    return (
        <Row style={rowStyle}>
            <Col xs={3}>
                <h2>{props.header}</h2>
            </Col>
            <Col xs={9}>{props.body}</Col>
        </Row>
    );
}

class About extends React.Component {
    constructor(props){
        super(props);
        this.state = { isLoading: true, officers: undefined, crew: undefined};
    }

    componentDidMount(){
        axios.get('./officers.json').then(response => {
            this.setState({officers: response.data}) ;
        });

        axios.get('./crew.json').then(response => {
            this.setState({isLoading: false, crew: response.data}) ;
        });
    }

    createOfficers(officers){
        console.log(officers);
        let decks = [];
        for(let i = 0; i < officers.length; i += 3) {

            decks.push(this.createOfficerDeck(officers.slice(i, i + 3)));
        }
        return decks;
    }

    createOfficerDeck(officers){
        let cols = [];
        officers.forEach(officer => {
            cols.push(this.createOfficerCard(officer));
        });

        let remainder = 0;
        if(officers.length < 3)
            remainder = 3 - officers.length;

        for(let i = 0; i < remainder; i++){
            cols.push(
                <Col><Card style={{visibility:'hidden'}}/></Col>
            );
        }
        return <CardDeck style={rowStyle}>{cols}</CardDeck>
    }

    createOfficerCard(officer){
        return(
            <Card>
                <Card.Img
                    style={cardStyle}
                    variant="top"
                    src={officer.image}
                />
                <Card.Body>
                    <Card.Title>{officer.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        {officer.role}
                    </Card.Subtitle>
                    <Card.Text>
                        {officer.description}
                    </Card.Text>
                    <Card.Footer><Row>{this.createSocials(officer.socials)}</Row></Card.Footer>
                </Card.Body>
            </Card>
        );
    }

    createSocials(socials){
        let icons = [];
        if(socials.linkedin !== ""){
            icons.push(
                <Col>
                    <Icon url={socials.linkedin}
                          icon=<Linkedin height="55%" width="55%" />/>
                </Col>
            )
        } else {
            icons.push(
                <Col style={{visibility:'hidden'}}>
                    <Icon icon=<Linkedin height="55%" width="55%"/>/>
                </Col>
            )
        }
        if(socials.twitter !== ""){
            icons.push(
                <Col>
                    <Icon url={socials.twitter}
                          icon=<Twitter height="55%" width="55%" />/>
                </Col>
            )
        } else {
            icons.push(
                <Col style={{visibility:'hidden'}}>
                    <Icon icon=<Linkedin height="55%" width="55%"/>/>
                </Col>
            )
        }
        return icons;
    }

    createCrew(crew){
        let o = [];
        crew.forEach(team => {
            o.push(
                this.createTeam(team)
            );
        });
        return o;
    }

    createTeam(team){
        let memberCol = [];
        for(let i = 0; i < team.members.length; i += 3){
            memberCol.push(this.createMemberCol(team.members.slice(i, i+3)));
        }
        return(
            <Container>
                <Row>{team.name}</Row>
                <Row>{memberCol}</Row>
            </Container>
        )
    }

    createMemberCol(members){
        let list = [];
        members.forEach(member => {
           list.push(<li>{member}</li>)
        });
        return(
            <Col>
                <ul>{list}</ul>
            </Col>
        )
    }

    render(){
        const {isLoading, officers, crew} = this.state;

        if (isLoading) {
            return <div className="App">Loading...</div>;
        }

        return (
            <Container>
                <Row style={rowStyle}>
                    <h1>About LG</h1>
                </Row>
                <Blurb
                    header="We are..."
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                />
                <Blurb
                    header="History of LG"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                />
                <Blurb
                    header="Events"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                />
                <Blurb
                    header="Esports"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                />
                <Blurb
                    header="Discord Community"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                />
                <Blurb
                    header="Goals"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                />
                <Blurb
                    header="Achievements"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                />

                <Row style={rowStyle}>
                    {" "}
                    <h1>Advisors</h1>{" "}
                </Row>
                <Row style={rowStyle}>
                    {this.createOfficers(officers.advisors)}
                </Row>
                <Row style={rowStyle}>
                    {" "}
                    <h1>Cabinet</h1>{" "}
                </Row>
                <Row style={rowStyle}>
                    {this.createOfficers(officers.cabinet)}
                </Row>
                <Row style={rowStyle}>
                    {" "}
                    <h1>Directors</h1>{" "}
                </Row>
                <Row style={rowStyle}>
                    {this.createOfficers(officers.directors)}
                </Row>

                <Row style={rowStyle}>
                    {" "}
                    <h1>Crew</h1>{" "}
                </Row>
                <Row style={rowStyle}>
                    {this.createCrew(crew.data)}
                </Row>

                <Row style={rowStyle}>
                    {" "}
                    <h1>Join Us</h1>{" "}
                </Row>
                <Row style={rowStyle}>
                    <Col sm={8}>
                        <dl>
                            <dt>Creative</dt>
                            <dd>- Creative is responsible for our media content, which includes (but is not limited to) graphic design, video production, and photography.</dd>

                            <dt>Digital Production</dt>
                            <dd>- Digital Production is in charge of our digital content, which includes streaming, clip/montage production, and casting. The team is currently looking for someone to help stream games on Twitch.</dd>

                            <dt>Esports</dt>
                            <dd>- Esports promotes Longhorn Gaming by participating in competitive tournaments and leagues for a wide variety of games. If you are interested in becoming a team manager, talk directly to our esports director, Tyler (tylermeff#3938).</dd>

                            <dt>Events</dt>
                            <dd>- The events team works on putting on the events that make up LG. Events team members are responsible for planning schedules and running the events "on the ground". If you like hands on work, interacting with members, and are good at time management, this team is for you!</dd>

                            <dt>Family</dt>
                            <dd>- The Family team is in charge of overseeing LG's family system; planning events, coordinating with family heads, and generally making sure the system runs like it is supposed to.</dd>

                            <dt>Public Relations</dt>
                            <dd>- Every team in our crew is responsible for creating value for Longhorn Gaming, our partners, and our members; Public Relations is responsible for communicating that value. We are in charge of LG's social media platforms, marketing campaigns, conflict management, and sponsor relationships. </dd>

                            <dt>Web Development</dt>
                            <dd>- The web dev team manages the development of the Longhorn Gaming website (https://longhorngaming.gg).</dd>
                        </dl>
                    </Col>
                    <Col sm={4}>
                        <p>It takes a village to raise a community. Whether you’re interested in esports or casual gaming, LG provides connections, experience, and opportunities to develop your unique skill set so you can go right into the industry after you graduate!
                        </p>
                        <br/>
                        <Button href={"https://forms.gle/zgJU8CrXwF5oSLRY9"}>Apply</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default About;
