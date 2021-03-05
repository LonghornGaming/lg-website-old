import React from "react";
import BlogCard from "./BlogCard";
import {CardDeck, Container} from "react-bootstrap"
class BlogDeck extends React.Component{
    constructor(props){
        super(props)
    }

    createBlogCard(data){
            return BlogCard(data)
    }

    createBlogCards(data){
        let returnObject = [];
        data.forEach(blog => {
            returnObject.push(this.createBlogCard(blog));
        });
        return returnObject;
    }

    render(){
        return(
            <div>
                <Container>
                    <CardDeck >
                    {this.createBlogCards(this.props.blogs)}
                    </CardDeck>
                </Container>
                <br/>
            </div>
        )


    }
}


export default BlogDeck;