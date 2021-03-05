import React from "react";
import axios from "axios";

class Blog extends React.Component {
    constructor(props) {
        super(props);
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let foo = params.get('id');
        this.state = { isLoading: true, id: foo, html: undefined };
    }

    componentDidMount() {
        axios.get("http://localhost:1000/api?collection=blogs&id="+this.state.id).then(response => {
            this.setState({ html: response.data.html });
            this.setState({ isLoading: false });
        });
    }

    render(){
        const {isLoading} = this.state;
        if (isLoading) {
            return <div className="App">Loading...</div>;
        }

        return(
            <div dangerouslySetInnerHTML={{ __html: this.state.html}} />
        )
    }
}

export default Blog;