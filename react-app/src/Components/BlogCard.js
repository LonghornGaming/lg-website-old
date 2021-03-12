import React from 'react';
import { Card} from "react-bootstrap";
import {Link } from 'react-router-dom';

let BlogCard = function statelessFunctionComponentClass(props) {

    return(
        <div>
            <Card bg='dark' text='white' style={{ width: '18rem' }}>
                <div className="embed-responsive embed-responsive-16by9">
                    <img alt="Card image cap" className="card-img-top embed-responsive-item" src={props.image}/>
                </div>
                <Card.Body>
                    <Card.Title>
                        <nav>
                            <Link style={{ color: '#FFF' }} to={'/blog?id=' + props._id}>{props.title}</Link>
                        </nav>
                    </Card.Title>
                    <Card.Text>Date: {props.date}</Card.Text>
                    <Card.Text>Author:{props.author}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )

}

export default BlogCard;