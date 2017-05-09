const fetch = require('node-fetch');

const key = 'AIzaSyD9-k50LdAnOJxGcJpjji-gkRkX9BmYoAE';
const secret = 'test';
const calendars = ['max.orlovsky@gmail.com', 'anya.orlovsky@gmail.com'];
const vars = {
    calendarsUpdate: {
        "max.orlovsky@gmail.com": 0,
        "anya.orlovsky@gmail.com": 0
    }
}

for (calendar of calendars) {
    checkCalendar(calendar);
}

console.log(vars);

setInterval(() => {
    for (calendar of calendars) {
        checkCalendar(calendar);
    }

    console.log(vars);
}, 15000);

function checkCalendar(calendarId) {
    fetch('https://www.googleapis.com/calendar/v3/calendars/' + calendarId + '/events?key=' + key)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        if (vars.calendarsUpdate[calendarId] === 0) {
            vars.calendarsUpdate[calendarId] = json.updated;
        } else if (vars.calendarsUpdate[calendarId] !== json.updated) {
            
        }
    });
}