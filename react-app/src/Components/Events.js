import React from 'react';
import Calendar from '@ericz1803/react-google-calendar';


const API_KEY = "AIzaSyDevoj3pAgyaJtJqCCzj3CFTiRXEu8tipU";
const CALENDAR_ID = "longhorngaming.gg_biorbbnr3sg9jciq876j2vsnss@group.calendar.google.com";

function Events() {
    return (
        <div>
            <h1>Welcome to LG's Events Page!</h1>
            <Calendar apiKey={API_KEY} calendarId={CALENDAR_ID} />
        </div>
    )
}

export default Events;