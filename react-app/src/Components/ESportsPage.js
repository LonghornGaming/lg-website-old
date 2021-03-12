import React from "react";
import axios from 'axios';

class ESportsPage extends React.Component{
    constructor(props) {
        super(props);
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let foo = params.get('id');
        foo = './EsportsData/' + foo + '.json'
        this.state = { isLoading: true, id: foo, data: undefined };
        console.log(this.state.id)
    }

    componentDidMount() {
        axios.get('./test.json').then(response => {
            this.setState({data:response.data, isLoading:false});
            console.log(response.data);
        });
    }

    render(){
        if(this.state.isLoading){
            return <div className="App">Loading...</div>;
        }

        return(
            <div>Works</div>
        )
    }
}

export default ESportsPage