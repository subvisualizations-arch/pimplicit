define(['questAPI'], function(Quest){
    var API = new Quest();

    API.addSequence([
        {
            header: '<h2>Reading Task</h2>',
            questions: [
                {
                    type: 'info',
                    name: 'ramadan_passage',
                    stem: '<div style="text-align:left; max-width:750px; margin:0 auto; line-height:1.7; font-size:15px;">' +
                        '<p style="font-style:italic; color:#666;">Please read the following passage carefully. You will be asked a question about it afterwards.</p>' +
                        '<hr>' +
                        '<p>Ramadan is the ninth month of the Islamic calendar, observed by Muslims worldwide as a period of fasting, prayer, reflection, and community. ' +
                        'During Ramadan, Muslims abstain from eating and drinking from dawn until sunset. The fast is broken each evening with a meal known as <em>iftar</em>, ' +
                        'which often begins with dates and water, followed by a larger meal shared with family and friends.</p>' +
                        '<p>The month holds special religious significance because Muslims believe it was during Ramadan that the Quran was first revealed to the Prophet Muhammad. ' +
                        'In addition to fasting, many Muslims increase their charitable giving during this period and spend extra time in prayer, particularly the nightly <em>tarawih</em> prayers held at mosques.</p>' +
                        '<p>Ramadan follows the lunar calendar, so its dates shift approximately 10\u201311 days earlier each year relative to the Gregorian calendar. ' +
                        'This means that in some years Ramadan falls during long summer days in the Northern Hemisphere, requiring fasts of up to 18 hours, ' +
                        'while in other years it coincides with shorter winter days. The end of Ramadan is marked by the celebration of <em>Eid al-Fitr</em>, ' +
                        'a festive holiday involving communal prayers, gift-giving, and large family gatherings.</p>' +
                        '<p>In the UK and other Western countries, Ramadan has become increasingly visible in public life. Supermarkets stock special food ranges, ' +
                        'employers make accommodations for fasting employees, and local councils sometimes host public iftar events. An estimated 3.9 million Muslims live in England and Wales, ' +
                        'making Islam the second-largest religion in the country.</p>' +
                        '</div>'
                }
            ]
        },
        {
            header: '<h2>Comprehension Check</h2>',
            questions: [
                {
                    type: 'selectOne',
                    name: 'comprehension_ramadan',
                    stem: 'According to the passage, what is the evening meal that breaks the daily fast called?',
                    answers: [
                        'Tarawih',
                        'Iftar',
                        'Eid al-Fitr',
                        'Suhoor'
                    ],
                    required: true
                }
            ]
        }
    ]);

    return API.script;
});
