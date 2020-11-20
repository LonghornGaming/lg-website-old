import React from 'react';
import axios from 'axios';

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
        const response = await axios.get("http://localhost:1000/api")
        console.log(response)
    }

    render(){
        return(
            <div>{this.state.data}</div>
        );
    }
}

export default PlayerCard;