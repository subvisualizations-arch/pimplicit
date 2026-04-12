define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/BIAT/biat6.js'], function(APIConstructor, biatExtension){
    var API = new APIConstructor();
    var global = API.getGlobal();

    return biatExtension({
        categories : [
            {
                name : 'Arab-Muslim',
                title : {
                    media : {word : 'Arab-Muslim'},
                    css : {color:'#31b404','font-size':'1.8em'},
                    height : 4
                },
                stimulusMedia : [
                    {word : 'Akbar'},
                    {word : 'Hakim'},
                    {word : 'Karim'},
                    {word : 'Habib'},
                    {word : 'Hasan'},
                    {word : 'Sharif'}
                ],
                stimulusCss : {color:'#31b404','font-size':'2.3em'}
            },
            {
                name : 'Other People',
                title : {
                    media : {word : 'Other People'},
                    css : {color:'#31b404','font-size':'1.8em'},
                    height : 4
                },
                stimulusMedia : [
                    {word : 'Ernesto'},
                    {word : 'Philippe'},
                    {word : 'Kazuki'},
                    {word : 'Helmut'},
                    {word : 'Geraldo'},
                    {word : 'Luciano'}
                ],
                stimulusCss : {color:'#31b404','font-size':'2.3em'}
            }
        ],

        attribute1 : {
            name : 'Bad',
            title : {
                media : {word : 'Bad'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4
            },
            stimulusMedia : [
                {word : 'Agony'},
                {word : 'Terrible'},
                {word : 'Horrible'},
                {word : 'Nasty'},
                {word : 'Evil'},
                {word : 'Awful'},
                {word : 'Failure'},
                {word : 'Hurt'}
            ],
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        attribute2 : {
            name : 'Good',
            title : {
                media : {word : 'Good'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4
            },
            stimulusMedia : [
                {word : 'Joy'},
                {word : 'Love'},
                {word : 'Peace'},
                {word : 'Wonderful'},
                {word : 'Pleasure'},
                {word : 'Glorious'},
                {word : 'Laughter'},
                {word : 'Happy'}
            ],
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },

        focalAttribute : 'attribute2',
        firstFocalAttribute : 'random',
        focalCategoryOrder : 'random',
        nCategoryAttributeBlocks : 1,
        nMiniBlocks : 1,
        nTrialsPerMiniBlock : 16,
        practiceBlock : true,
        nPracticeBlockTrials : 8,
        practiceTrials : {
            nFocalCat : 3,
            nNonFocalCats : 3,
            nFocalAtt : 3,
            nNonFocalAtt : 3
        },
        remindError : true,
        base_url : { image : '' },
        showDebriefing : false
    });
});
