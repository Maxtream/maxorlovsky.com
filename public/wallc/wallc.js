let events = [];

$('#calendar').fullCalendar({
    googleCalendarApiKey: 'AIzaSyD9-k50LdAnOJxGcJpjji-gkRkX9BmYoAE',
    header: {
        left: 'prev next',
        center: 'title',
        right: 'month,agendaWeek'
    },
    contentHeight: 'auto',
    firstDay: 1,
    timeFormat: 'H:mm',
    eventSources: [
        {
            googleCalendarId: 'ht3jlfaac5lfd6263ulfh4tql8@group.calendar.google.com',
            className: 'moon-days'
        },
        {
            googleCalendarId: 'max.orlovsky@gmail.com',
            className: 'morlovsky'
        },
        {
            googleCalendarId: 'anya.orlovsky@gmail.com',
            className: 'aorlovsky'
        },
        {
            googleCalendarId: 'en.latvian#holiday@group.v.calendar.google.com',
            className: 'lv-holidays'
        },
        {
            googleCalendarId: 'en.mt#holiday@group.v.calendar.google.com',
            className: 'malta-holidays'
        }
    ],
    fixedWeekCount: false,
    events: events
});

var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[10];
msg.voiceURI = 'native';
msg.volume = 1; // 0 to 1
msg.rate = 0.7; // 0.1 to 10
msg.pitch = 1.1; //0 to 2
msg.lang = 'en-US';
msg.onend = function(e) {
    console.log('Phrase ended');
};

function sayText(message) {
    msg.text = message;
    speechSynthesis.speak(msg);
}


var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = false;
recognition.lang = 'en_US';

//recognition.start();

recognition.onstart = function () {
    $("#status").html("Recording");
};

recognition.onerror = function (event) {
    $("#status").html("Error");
};

recognition.onend = function() {
    $("#status").html("Ended");
    recognition.start();
};

recognition.onresult = function(event) {
    var final_transcript = '';
    var interim_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
            final_transcript += event.results[i][0].transcript.toLowerCase();
        } else {
            //event.results[i][0].transcript;
        }
    }

    $("#final_span").html(final_transcript);
    $("#interim_span").html(interim_transcript);
};

var key = 'AIzaSyD9-k50LdAnOJxGcJpjji-gkRkX9BmYoAE';
var secret = 'test';
var calendars = ['max.orlovsky@gmail.com', 'anya.orlovsky@gmail.com'];
var vars = {
    "max.orlovsky@gmail.com": {
        updateTime: 0,
        items: {},
        notified: {
            thirty: [],
            fifteen: []
        }
    },
    "anya.orlovsky@gmail.com": {
        updateTime: 0,
        items: {},
        notified: {
            thirty: [],
            fifteen: []
        }
    }
}

for (calendar of calendars) {
    checkCalendar(calendar);
}

function checkCalendar(calendarId) {
    fetch('https://www.googleapis.com/calendar/v3/calendars/' + calendarId + '/events?key=' + key)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        //sayText('Reminder from Anya calendar: Driving lessons at 3pm');
        if (vars[calendarId].updateTime === 0) {
            vars[calendarId].updateTime = json.updated;
        } else if (vars[calendarId].updateTime !== json.updated) {
            console.log('Calendar updated, re-render');
            vars[calendarId].updateTime = json.updated;
            $('#calendar').fullCalendar('refetchEvents');
        }

        vars[calendarId].items = json.items;
    });
}

var dayCheck = null;

setInterval(function() {
    var dateNow = new Date();
    var currentTimestamp = dateNow.getTime();
    var currentDay = dateNow.getDay();

    // If new day, reload page
    if (dayCheck === null) {
        // If day we're checking is null, save it up
        dayCheck = currentDay;
    } else if (dayCheck !== currentDay) {
        // If day changed, reload
        location.reload();
    }

    for (calendarId of calendars) {
        for (item of vars[calendarId].items) {
            if (item.status != 'canceled' && item.start) {
                var itemDate = new Date(item.start.dateTime);
                if (itemDate.getTime() > currentTimestamp) {
                    if ((itemDate.getTime() - 900000) < currentTimestamp && vars[calendarId].notified.fifteen.indexOf(item.id) === -1) {
                        sayText('Reminder from ' + getName(calendarId) + ' calendar: ' + item.summary + ' at ' + itemDate.getHours() + ':' + itemDate.getMinutes());
                        vars[calendarId].notified.fifteen.push(item.id);
                        vars[calendarId].notified.thirty.push(item.id);
                    } else if ((itemDate.getTime() - 1800000) < currentTimestamp && vars[calendarId].notified.thirty.indexOf(item.id) === -1) {
                        sayText('Reminder from ' + getName(calendarId) + ' calendar: ' + item.summary + ' at ' + itemDate.getHours() + ':' + itemDate.getMinutes());
                        vars[calendarId].notified.thirty.push(item.id);
                    }
                }
            }
        }
    }

    for (calendar of calendars) {
        checkCalendar(calendar);
    }
}, 30000);

function getName(calendarId) {
    if (calendarId.indexOf('anya') === -1) {
        return 'Max';
    } else {
        return 'Anya';
    }
}