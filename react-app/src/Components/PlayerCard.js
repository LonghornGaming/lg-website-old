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
    componentDidMount(){
        //setState
        axios.get('http://localhost:1000/index').then(response => {
            console.log(response.data);
            this.setState({data: response.data.result});
        }).catch(error => {
            this.setState({data: error.message});
        });
    }

    render(){
        return(
            <div>{this.state.data}</div>
        );
    }
}

export default PlayerCard;