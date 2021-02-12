import React from 'react';
import axios from "axios";
import BlogCard from "./BlogCard"

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true, blogs: undefined };

    }

    componentDidMount() {
        axios.get("http://localhost:1000/api?collection=blogs").then(response => {
            this.setState({ blogs: response.data });
            this.setState({ isLoading: false });
        });
    }

    createBlogCard(data){
        return BlogCard(data)
    }

    createBlogCards(data){
        let returnObject = [];
        data.forEach(blog => {
            console.log(blog);
            returnObject.push(this.createBlogCard(blog));
        });
        return returnObject;
    }

    render(){
        const {isLoading, blogs} = this.state;

        if (isLoading) {
            return <div className="App">Loading...</div>;
        }

        return (
            <div>
                <h1>Welcome to LG's Blog Page!</h1>
                {this.createBlogCards(blogs).map((s) => (
                    <div className="image-type">{s}</div>
                ))}
            </div>

        )
    }
}

export default Blog;