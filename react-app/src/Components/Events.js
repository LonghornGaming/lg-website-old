import React from 'react';
import Calendar from '@ericz1803/react-google-calendar';
const { calKey, calID } = require('../keys.js');

function Events() {
    return (
        <div>
            <h1>Welcome to LG's Events Page!</h1>
            <Calendar apiKey={calKey} calendarId={calID} />
        </div>
    )
}

export default Events;