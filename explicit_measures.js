define(['questAPI'], function(Quest){
    var API = new Quest();

    API.addSequence([
        {
            header: '<h2>Your Views</h2>',
            addToGlobal: true,
            questions: [
                // --- Manipulation check ---
                {
                    type: 'selectOne',
                    name: 'manipulation_check',
                    stem: 'To what extent have you been thinking about Muslim religious practices (e.g., Ramadan, prayer, mosques) during this study?',
                    answers: [
                        '1 – Not at all',
                        '2',
                        '3',
                        '4',
                        '5',
                        '6',
                        '7 – A great deal'
                    ],
                    required: true
                },
                // --- Feeling thermometers ---
                {
                    type: 'info',
                    name: 'thermometer_intro',
                    stem: '<p style="line-height:1.6;">Please rate your feelings towards the following groups on a scale from 0 (very cold/unfavourable) to 100 (very warm/favourable). A rating of 50 means you feel neither warm nor cold.</p>'
                },
                {
                    type: 'slider',
                    name: 'therm_muslim',
                    stem: 'Muslims',
                    min: 0,
                    max: 100,
                    steps: 101,
                    value: 50,
                    labels: ['0\nVery cold', '50\nNeutral', '100\nVery warm'],
                    required: true
                },
                {
                    type: 'slider',
                    name: 'therm_christian',
                    stem: 'Christians',
                    min: 0,
                    max: 100,
                    steps: 101,
                    value: 50,
                    labels: ['0\nVery cold', '50\nNeutral', '100\nVery warm'],
                    required: true
                },
                {
                    type: 'slider',
                    name: 'therm_jewish',
                    stem: 'Jewish people',
                    min: 0,
                    max: 100,
                    steps: 101,
                    value: 50,
                    labels: ['0\nVery cold', '50\nNeutral', '100\nVery warm'],
                    required: true
                },
                {
                    type: 'slider',
                    name: 'therm_atheist',
                    stem: 'Atheists',
                    min: 0,
                    max: 100,
                    steps: 101,
                    value: 50,
                    labels: ['0\nVery cold', '50\nNeutral', '100\nVery warm'],
                    required: true
                },
                // --- Social distance (mirrors Eurobarometer) ---
                {
                    type: 'selectOne',
                    name: 'social_distance_colleague',
                    stem: 'How comfortable would you feel having a Muslim person as a work colleague?',
                    answers: [
                        '1 – Very uncomfortable',
                        '2',
                        '3',
                        '4',
                        '5',
                        '6',
                        '7',
                        '8',
                        '9',
                        '10 – Very comfortable'
                    ],
                    required: true
                },
                {
                    type: 'selectOne',
                    name: 'social_distance_neighbour',
                    stem: 'How comfortable would you feel having a Muslim family as your neighbours?',
                    answers: [
                        '1 – Very uncomfortable',
                        '2',
                        '3',
                        '4',
                        '5',
                        '6',
                        '7',
                        '8',
                        '9',
                        '10 – Very comfortable'
                    ],
                    required: true
                },
                // --- Ramadan awareness (covariate / secondary check) ---
                {
                    type: 'selectOne',
                    name: 'ramadan_awareness',
                    stem: 'How much do you know about the Islamic holy month of Ramadan?',
                    answers: [
                        'Nothing at all',
                        'A little',
                        'A moderate amount',
                        'Quite a lot',
                        'A great deal'
                    ],
                    required: true
                }
            ]
        }
    ]);

    return API.script;
});
define(['questAPI'], function(Quest){
    var API = new Quest();

    API.addSequence([
        {
            header: '<h2>Your Views</h2>',
            questions: [
                {
                    type: 'selectOne',
                    name: 'manipulation_check',
                    stem: 'To what extent have you been thinking about Muslim religious practices (e.g., Ramadan, prayer, mosques) during this study?',
                    answers: [
                        '1 \u2013 Not at all',
                        '2',
                        '3',
                        '4',
                        '5',
                        '6',
                        '7 \u2013 A great deal'
                    ],
                    required: true
                },
                {
                    type: 'info',
                    name: 'thermometer_intro',
                    stem: '<p style="line-height:1.6;">Please rate your feelings towards the following groups on a scale from 0 (very cold/unfavourable) to 100 (very warm/favourable). A rating of 50 means you feel neither warm nor cold.</p>'
                },
                {
                    type: 'slider',
                    name: 'therm_muslim',
                    stem: 'Muslims',
                    min: 0,
                    max: 100,
                    steps: 101,
                    value: 50,
                    labels: ['0\nVery cold', '50\nNeutral', '100\nVery warm'],
                    required: true
                },
                {
                    type: 'slider',
                    name: 'therm_christian',
                    stem: 'Christians',
                    min: 0,
                    max: 100,
                    steps: 101,
                    value: 50,
                    labels: ['0\nVery cold', '50\nNeutral', '100\nVery warm'],
                    required: true
                },
                {
                    type: 'slider',
                    name: 'therm_jewish',
                    stem: 'Jewish people',
                    min: 0,
                    max: 100,
                    steps: 101,
                    value: 50,
                    labels: ['0\nVery cold', '50\nNeutral', '100\nVery warm'],
                    required: true
                },
                {
                    type: 'slider',
                    name: 'therm_atheist',
                    stem: 'Atheists',
                    min: 0,
                    max: 100,
                    steps: 101,
                    value: 50,
                    labels: ['0\nVery cold', '50\nNeutral', '100\nVery warm'],
                    required: true
                },
                {
                    type: 'selectOne',
                    name: 'social_distance_colleague',
                    stem: 'How comfortable would you feel having a Muslim person as a work colleague?',
                    answers: [
                        '1 \u2013 Very uncomfortable',
                        '2',
                        '3',
                        '4',
                        '5',
                        '6',
                        '7',
                        '8',
                        '9',
                        '10 \u2013 Very comfortable'
                    ],
                    required: true
                },
                {
                    type: 'selectOne',
                    name: 'social_distance_neighbour',
                    stem: 'How comfortable would you feel having a Muslim family as your neighbours?',
                    answers: [
                        '1 \u2013 Very uncomfortable',
                        '2',
                        '3',
                        '4',
                        '5',
                        '6',
                        '7',
                        '8',
                        '9',
                        '10 \u2013 Very comfortable'
                    ],
                    required: true
                },
                {
                    type: 'selectOne',
                    name: 'ramadan_awareness',
                    stem: 'How much do you know about the Islamic holy month of Ramadan?',
                    answers: [
                        'Nothing at all',
                        'A little',
                        'A moderate amount',
                        'Quite a lot',
                        'A great deal'
                    ],
                    required: true
                }
            ]
        }
    ]);

    return API.script;
});
