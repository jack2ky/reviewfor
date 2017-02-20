module.exports = {
"overall": 3.4, // average of the overall score
"overview": [3.3, 2.4, 4.4, 3.4, 4.0], // This is a list of the overall scores. data in this example doesn't match the overall average above. (just an example)
"tags": [{
    text: "Awesome", // word from positiveWords or negativeWords
    weight: 10 // the amount of time the words were used
}, {
    text: "caring",
    weight: 9
}, {
    text: "great products",
    weight: 8
}, {
    text: "good service",
    weight: 7
}, {
    text: "Happy",
    weight: 6
}, {
    text: "Scam",
    weight: 5
}, {
    text: "No refund",
    weight: 4
}, {
    text: "Disgusted",
    weight: 3
}, {
    text: "Difficult",
    weight: 2
}, {
    text: "Angry",
    weight: 1
}, {
    text: "Respect",
    weight: 8
}],
"phone support": {
    average: 58, // The number of percentage    example with 5 scores with "phone support"
                  //[4,3,5,5,3] == 20 | then do 20 / 5 that is equal to 4 | then do 4 /5 that is equal to 0.8 | then do 0.8 * 100 to get 80%
                  // the 4,3,5,5,3 is just an example and comes from specifics.specific in the sample data. you will have to find the ones for the category. This is for phon support
    detail: [{ // TODO: Need to be clear that name should in same order in all sub
        name: "Time on hold",
        value: [{
            name: "forever",
            data: 12 // amount of times forever was chosen for time on hold
        }, {
            name: "long time",
            data: 32
        }, {
            name: "ok time",
            data: 123
        }, {
            name: "short time",
            data: 321
        }, {
            name: "quick service",
            data: 122
        }]
    }, {
        name: "Language",
        value: [{
            name: "didn't understand a word",
            data: 212
        }, {
            name: "some words but strong accent",
            data: 323
        }, {
            name: "EZ to understand",
            data: 212
        }]
    }, {
        name: "Human answered",
        value: [{
            name: "Um, no",
            data: 123
        }, {
            name: "yes",
            data: 123
        }]
    }, {
        name: "Transferred alot",
        value: [{
            name: "Total disaster",
            data: 312
        }, {
            name: "runaround",
            data: 321
        }, {
            name: "like a hot potato",
            data: 123
        }, {
            name: "1 or 2 times",
            data: 21
        }, {
            name: "not transfered",
            data: 32
        }]
    }]
},
"website": {
    average: 64,
    detail: [{
        name: "Easy to find desired product",
        value: [{
            name: "Extremley difficult",
            data: 12
        }, {
            name: "Not EZ at all",
            data: 123
        }, {
            name: "There were hidden gimicks",
            data: 123
        }, {
            name: "It was ok",
            data: 57
        }, {
            name: "Found quickly",
            data: 87
        }]
    }, {
        name: "Clear information about the product",
        value: [{
            name: "Totaly confusing",
            data: 212
        }, {
            name: "Eventually understood",
            data: 123
        }, {
            name: "Easy to understand",
            data: 75
        }]
    }, {
        name: "Annoying popups",
        value: [{
            name: "Couldn't even use the site",
            data: 312
        }, {
            name: "Very bad",
            data: 123
        }, {
            name: "There was but wont complain",
            data: 123
        }, {
            name: "None",
            data: 32
        }]
    }]
},
"representative": {
    average: 76,
    detail: [{
        name: "Knowledgable",
        value: [{
            name: "They knew nothing",
            data: 82
        }, {
            name: "Very confusing",
            data: 312
        }, {
            name: "Still a little confused",
            data: 122
        }, {
            name: "Enlightened",
            data: 32
        }]
    }, {
        name: "Prompteness",
        value: [{
            name: "Lots of silence",
            data: 121
        }, {
            name: "On hold too many times",
            data: 188
        }, {
            name: "Very quick",
            data: 12
        }]
    }, {
        name: "Friendlyness",
        value: [{
            name: "Grrr",
            data: 132
        }, {
            name: "they didn't like me",
            data: 312
        }, {
            name: "we're cool",
            data: 56
        }, {
            name: "suck a pleasure",
            data: 12
        }]
    }]
},
"shipping": {
    average: 87,
    detail: [{
        name: "Arrived on time",
        value: [{
            name: "Never came",
            data: 31
        }, {
            name: "very slow",
            data: 123
        }, {
            name: "on time",
            data: 321
        }]
    }, {
        name: "Arrived intact",
        value: [{
            name: "Item broken",
            data: 123
        }, {
            name: "Small dents or scratches",
            data: 231
        }, {
            name: "Shipping package broke",
            data: 31
        }, {
            name: "Pristine condition",
            data: 32
        }]
    }, {
        name: "Shipping price",
        value: [{
            name: "Free",
            data: 212
        }, {
            name: "Reasonable price",
            data: 321
        }, {
            name: "Over priced",
            data: 31
        }]
    }]
},
"conflict resolution": {
    average: 47,
    detail: [{
        name: "How did they handle a problem",
        value: [{
            name: "They didn't care",
            data: 553
        }, {
            name: "They met me half way",
            data: 412
        }, {
            name: "They made everything right",
            data: 32
        }]
    }, {
        name: "Refund",
        value: [{
            name: "No refund",
            data: 132
        }, {
            name: "Very difficult",
            data: 231
        }, {
            name: "Partial refund",
            data: 31
        }, {
            name: "Easy to get refund",
            data: 32
        }]
    }, {
        name: "Return shipping",
        value: [{
            name: "Not free",
            data: 212
        }, {
            name: "Free",
            data: 321
        }]
    }]
}
};
