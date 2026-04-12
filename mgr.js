/**
 * Manager file for the Ramadan Priming × Arab-Muslim BIAT Experiment
 *
 * Design:
 *   1. Consent form
 *   2. Demographics (brief)
 *   3. Random assignment to priming condition (Ramadan vs. Control)
 *   4. Priming task (reading + comprehension question)
 *   5. Arab-Muslim Brief IAT (~3 min)
 *   6. Explicit attitude measures (manipulation check + thermometer)
 *   7. Debriefing
 *
 * Data is sent to OSF via DataPipe.
 * Replace 'YOUR_DATAPIPE_TOKEN' with your actual token.
 */

define(['managerAPI'], function(Manager) {

    var API = new Manager();

    // =============================================
    // DataPipe configuration
    // =============================================
    // IMPORTANT: Replace with your DataPipe token
    // Uncomment the line below once you have a token:
    // init_data_pipe(API, 'YOUR_DATAPIPE_TOKEN', 'csv');

    // =============================================
    // Random assignment
    // =============================================
    var condition = Math.random() < 0.5 ? 'ramadan' : 'control';
    API.addGlobal({
        condition: condition,
        sessionId: Date.now().toString(36) + Math.random().toString(36).substr(2)
    });

    // =============================================
    // Task sequence
    // =============================================
    API.addTasksSet({

        // --- Consent ---
        consent: [{
            type: 'quest',
            name: 'consent',
            scriptUrl: 'consent.js'
        }],

        // --- Demographics ---
        demographics: [{
            type: 'quest',
            name: 'demographics',
            scriptUrl: 'demographics.js'
        }],

        // --- Priming manipulation ---
        priming: [{
            type: 'quest',
            name: 'priming',
            scriptUrl: condition === 'ramadan' ? 'prime_ramadan.js' : 'prime_control.js'
        }],

        // --- Brief IAT ---
        biat: [{
            type: 'time',
            name: 'biat',
            scriptUrl: 'arabmuslim_biat.js'
        }],

        // --- Explicit measures ---
        explicit: [{
            type: 'quest',
            name: 'explicit',
            scriptUrl: 'explicit_measures.js'
        }],

        // --- Debriefing ---
        debrief: [{
            type: 'message',
            name: 'debrief',
            templateUrl: 'debrief.jst',
            pipiTemplate: true
        }]
    });

    API.addSequence([
        {inherit: 'consent'},
        {inherit: 'demographics'},
        {inherit: 'priming'},
        {inherit: 'biat'},
        {inherit: 'explicit'},
        {inherit: 'debrief'}
    ]);

    return API.script;
});
