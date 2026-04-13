define(['questAPI'], function(Quest){
    var API = new Quest();

    API.addSequence([
        {
            header: '<h2>About You</h2>',
            addToGlobal: true,
            questions: [
                {
                    type: 'dropdown',
                    name: 'age',
                    stem: 'What is your age?',
                    answers: (function(){
                        var ages = ['Prefer not to say'];
                        for (var i = 18; i <= 85; i++) ages.push(String(i));
                        return ages;
                    })(),
                    required: true
                },
                {
                    type: 'selectOne',
                    name: 'gender',
                    stem: 'What is your gender?',
                    answers: [
                        'Male',
                        'Female',
                        'Non-binary / third gender',
                        'Prefer not to say'
                    ],
                    required: true
                },
                {
                    type: 'selectOne',
                    name: 'ethnicity',
                    stem: 'What is your ethnicity?',
                    answers: [
                        'White',
                        'Black / African / Caribbean',
                        'Asian / Asian British',
                        'Arab',
                        'Mixed / Multiple ethnic groups',
                        'Other',
                        'Prefer not to say'
                    ],
                    required: true
                },
                {
                    type: 'selectOne',
                    name: 'religion',
                    stem: 'What is your religion, if any?',
                    answers: [
                        'No religion',
                        'Christianity',
                        'Islam',
                        'Judaism',
                        'Hinduism',
                        'Buddhism',
                        'Sikhism',
                        'Other',
                        'Prefer not to say'
                    ],
                    required: true
                },
                {
                    type: 'selectOne',
                    name: 'country',
                    stem: 'What country do you currently live in?',
                    answers: [
                        'United Kingdom',
                        'United States',
                        'Canada',
                        'Germany',
                        'France',
                        'Netherlands',
                        'Sweden',
                        'Other European country',
                        'Other'
                    ],
                    required: true
                },
                {
                    type: 'selectOne',
                    name: 'education',
                    stem: 'What is the highest level of education you have completed?',
                    answers: [
                        'Secondary school (GCSEs or equivalent)',
                        'Sixth form / College (A-levels or equivalent)',
                        'Undergraduate degree (BA, BSc)',
                        'Postgraduate degree (MA, MSc, PhD)',
                        'Other / Prefer not to say'
                    ],
                    required: true
                }
            ]
        }
    ]);

    return API.script;
});
