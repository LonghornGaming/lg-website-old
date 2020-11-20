import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

class PlayerCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: "Hello World"
        };
    }
    //After render
    async componentDidMount(){
        //setState
        const response = await axios.get("http://localhost:1000/api?collection=players&search=Testman");
        console.log(response)
    }

    render(){
        return(
            <div>
                <Card>data</Card>
            </div>
        );
    }
}

export default PlayerCard;