import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

import ut_image from '../assets/ut.jpg';

const styles = {
    paddingTop:    '200px',
    paddingBottom: '200px',

    backgroundImage:    'url(' + ut_image + ')',
    backgroundPosition: 'center center',
    backgroundRepeat:   'no-repeat',
    backgroundSize:     'cover',
};

function Home() {
    return (
        <Jumbotron style={styles}>
            <h1>Welcome to Longhorn Gaming</h1>
            <p>
                The central hub for casual and competitive gaming at the University of Texas at Austin.
            </p>
        </Jumbotron>
    )
}

export default Home;