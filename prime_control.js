define(['questAPI'], function(Quest){
    var API = new Quest();

    API.addSequence([
        {
            header: '<h2>Reading Task</h2>',
            questions: [
                {
                    type: 'info',
                    name: 'control_passage',
                    stem: '<div style="text-align:left; max-width:750px; margin:0 auto; line-height:1.7; font-size:15px;">' +
                        '<p style="font-style:italic; color:#666;">Please read the following passage carefully. You will be asked a question about it afterwards.</p>' +
                        '<hr>' +
                        '<p>The United Kingdom has a temperate maritime climate, characterised by mild temperatures, frequent rainfall, and relatively few extremes of heat or cold. ' +
                        'Weather patterns are largely influenced by the North Atlantic, particularly the Gulf Stream, which brings warmer air to the British Isles compared to other regions at the same latitude.</p>' +
                        '<p>Seasonal variation in the UK is moderate. Summers typically see average temperatures between 15°C and 25°C, though heatwaves occasionally push temperatures higher. ' +
                        'Winters are generally mild in coastal and southern areas, with average temperatures between 2°C and 7°C, although northern Scotland and higher elevations regularly experience snowfall. ' +
                        'Daylight hours vary substantially across the year, ranging from as few as 7 hours in December to over 16 hours in June in England.</p>' +
                        '<p>Rainfall is distributed throughout the year, though autumn and winter months tend to be wetter. ' +
                        'Western regions, particularly Wales, the Lake District, and the Scottish Highlands, receive significantly more rainfall than eastern areas due to prevailing westerly winds ' +
                        'carrying moisture from the Atlantic. London and the South East are among the driest parts of the country, receiving roughly 600mm of rainfall per year.</p>' +
                        '<p>In recent decades, the UK has experienced shifts in weather patterns that scientists attribute to climate change. ' +
                        'Average temperatures have risen by approximately 1°C since the pre-industrial period. The Met Office, the national weather service, ' +
                        'uses a network of over 200 weather stations and advanced computer models to produce forecasts and issue weather warnings for the public.</p>' +
                        '</div>'
                }
            ]
        },
        {
            header: '<h2>Comprehension Check</h2>',
            addToGlobal: true,
            questions: [
                {
                    type: 'selectOne',
                    name: 'comprehension_control',
                    stem: 'According to the passage, which ocean current brings warmer air to the British Isles?',
                    answers: [
                        'The North Atlantic Drift',
                        'The Gulf Stream',
                        'The Canary Current',
                        'The Labrador Current'
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
            header: '<h2>Reading Task</h2>',
            questions: [
                {
                    type: 'info',
                    name: 'control_passage',
                    stem: '<div style="text-align:left; max-width:750px; margin:0 auto; line-height:1.7; font-size:15px;">' +
                        '<p style="font-style:italic; color:#666;">Please read the following passage carefully. You will be asked a question about it afterwards.</p>' +
                        '<hr>' +
                        '<p>The United Kingdom has a temperate maritime climate, characterised by mild temperatures, frequent rainfall, and relatively few extremes of heat or cold. ' +
                        'Weather patterns are largely influenced by the North Atlantic, particularly the Gulf Stream, which brings warmer air to the British Isles compared to other regions at the same latitude.</p>' +
                        '<p>Seasonal variation in the UK is moderate. Summers typically see average temperatures between 15\u00b0C and 25\u00b0C, though heatwaves occasionally push temperatures higher. ' +
                        'Winters are generally mild in coastal and southern areas, with average temperatures between 2\u00b0C and 7\u00b0C, although northern Scotland and higher elevations regularly experience snowfall. ' +
                        'Daylight hours vary substantially across the year, ranging from as few as 7 hours in December to over 16 hours in June in England.</p>' +
                        '<p>Rainfall is distributed throughout the year, though autumn and winter months tend to be wetter. ' +
                        'Western regions, particularly Wales, the Lake District, and the Scottish Highlands, receive significantly more rainfall than eastern areas due to prevailing westerly winds ' +
                        'carrying moisture from the Atlantic. London and the South East are among the driest parts of the country, receiving roughly 600mm of rainfall per year.</p>' +
                        '<p>In recent decades, the UK has experienced shifts in weather patterns that scientists attribute to climate change. ' +
                        'Average temperatures have risen by approximately 1\u00b0C since the pre-industrial period. The Met Office, the national weather service, ' +
                        'uses a network of over 200 weather stations and advanced computer models to produce forecasts and issue weather warnings for the public.</p>' +
                        '</div>'
                }
            ]
        },
        {
            header: '<h2>Comprehension Check</h2>',
            questions: [
                {
                    type: 'selectOne',
                    name: 'comprehension_control',
                    stem: 'According to the passage, which ocean current brings warmer air to the British Isles?',
                    answers: [
                        'The North Atlantic Drift',
                        'The Gulf Stream',
                        'The Canary Current',
                        'The Labrador Current'
                    ],
                    required: true
                }
            ]
        }
    ]);

    return API.script;
});
