import React from "react";
import {Card, Container, Row, Col, CardDeck, Button, Accordion} from "react-bootstrap";
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

const accordionStyle = {
    width: "100%",
    paddingLeft: "35%",
};

const toggleStyle = {
    background: "black",
    color: "white",
};

function AccordianCard(props) {
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey={props.event} style={toggleStyle}>
                {props.title}
            </Accordion.Toggle>
            
            <Accordion.Collapse eventKey={props.event}>
                <Card.Body>{props.body}</Card.Body>
            </Accordion.Collapse>
        </Card>
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

                <Accordion style={accordionStyle}>
                    <AccordianCard
                        title="We are..."
                        body="Longhorn Gaming aims to connect gamers of any and all backgrounds, redefine negative stigmas of the gaming community, and support the future generation of the gaming industry. Our organization plans to accomplish this by fostering a community united by a passion for video games while also building a foundation for them to pursue and realize their passions within the gaming community, from esports to content creation, and much more. We hope to cater to casual and competitive gamers alike and as well as support and embrace exploration of the many paths you can find throughout the gaming industry."
                        event="0"
                    />
                    <AccordianCard
                        title="History"
                        body="haha go brr somewhere else"
                        event="1"
                    />
                    <AccordianCard
                        title="Events"
                        body="Longhorn Gaming provides access to a wide variety of events. Longhorn gaming itself runs weekly game nights, primarily including party games such as jackbox, skribbl.io, and broken picturephone. Longhorn gaming also hosts a bigger event every month. These events can include but are not limited to LAN parties, Larger tournaments, and fundraisers, and often include collaboration with other student organizations and sponsorships from companies in the gaming industry such as Riot. Additionally, Longhorn Gaming offers connections to our communities where Game Ambassadors, the head representative of their communities, run events in relation to their game about once a month. Finally, members of the LG Family system get access to additional biweekly family game nights, where LG families compete for points. "
                        event="2"
                    />
                    <AccordianCard
                        title="Esports"
                        body="Longhorn Gaming supports a wide variety of both club and varsity teams. Our teams compete in the highest levels of collegiate esports and have found great success in both regional and national competitions. With currently 18+ teams, Longhorn Gaming aims to be the one of the most comprehensive student-led esports organizations nationwide, providing real experience and invaluable opportunities to network. For any students interested in pursuing esports in or after college, Longhorn Gaming’s esports team is the place to be!"
                        event="3"
                    />
                    <AccordianCard
                        title="Discord Community"
                        body="Longhorn Gaming is nearly entirely run through our community Discord server. Discord is a free communication platform similar to Slack or Zoom where users talk in text and voice channels at their convenience. Discord allows our organization to deliver announcements, host events, and communicate directly with our community all in one place. Longhorn Gaming has a network of servers for games with larger communities at UT and a multitude of text channels on our main server for smaller interests. With nearly 2,500 members, there’s almost certainly a community that plays the games you’re interested in."
                        event="4"
                    />
                    <AccordianCard
                        title="Goals"
                        body={
                            <div>
                                <p>
                                    Longhorn Gaming aims to be the central student
                                    organization for gaming communities and esports
                                    teams at the University of Texas at Austin. We
                                    look to accomplish this through the following
                                    goals:
                                </p>
                                <ul>
                                    <li>
                                        Building a foundation for members to pursue
                                        and realize their passions within the gaming
                                        community
                                    </li>
                                    <li>
                                        Fostering and maintaining a community that
                                        showcases camaraderie and friendly
                                        competition
                                    </li>
                                    <li>
                                        Spreading awareness of the gaming
                                        communities at The University of Texas at
                                        Austin
                                    </li>
                                    <li>
                                        Supporting and embracing exploration of the
                                        many paths found throughout the gaming
                                        industry
                                    </li>
                                </ul>
                            </div>
                        }
                        event="5"
                    />
                </Accordion>

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
