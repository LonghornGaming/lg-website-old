import React from 'react';
import axios from "axios";
import BlogDeck from "./BlogDeck"
import {Container} from 'react-bootstrap'

class Blogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true, blogs: undefined };

    }

    componentDidMount() {
        axios.get("http://localhost:1000/api?collection=blogs").then(response => {
            this.setState({ blogs: response.data });
            this.setState({ isLoading: false });
        }).catch(error => {
            console.log(error);
        });
    }

    createCardDeck(data){
        return <BlogDeck blogs={data}/>
    }

    createBlogCards(data){
        let returnObject = [];
        for(let i = 0; i < data.length; i += 3){
            returnObject.push(this.createCardDeck(data.slice(i, i + 3)))
        }
        return returnObject;
    }

    render(){
        const {isLoading, blogs} = this.state;

        if (isLoading) {
            return <div className="App">Loading...</div>;
        }

        return (
            <div>
                <Container>
                    <h1>Blog</h1>
                    {this.createBlogCards(blogs).map((s) => (
                        <div className="image-type">{s}</div>
                    ))}
                </Container>
            </div>

        )
    }
}

export default Blogs;