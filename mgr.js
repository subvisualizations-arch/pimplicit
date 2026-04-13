/**
 * Manager file for the Ramadan Priming x Arab-Muslim BIAT Experiment
 *
 * Design:
 *   1. Consent form
 *   2. Demographics (brief)
 *   3. Random assignment to priming condition (Ramadan vs. Control)
 *   4. Priming task (reading + comprehension question)
 *   5. Arab-Muslim Brief IAT (~3 min)
 *   6. Explicit attitude measures (manipulation check + thermometer)
 *   7. Debriefing (data sent to OSF via DataPipe)
 *
 * Data is sent to OSF via DataPipe REST API.
 * Experiment ID: XlZHXv4VT8Nd
 */

define(['managerAPI'], function(Manager) {

    var API = new Manager();

    // =============================================
    // Random assignment
    // =============================================
    var condition = Math.random() < 0.5 ? 'ramadan' : 'control';
    var sessionId = Date.now().toString(36) + Math.random().toString(36).substr(2);
    API.addGlobal({
        condition: condition,
        sessionId: sessionId
    });

    // =============================================
    // DataPipe configuration
    // =============================================
    // Data is sent to DataPipe from the debrief template (debrief.jst)
    // when the participant reaches the debriefing page.
    // The XHR interceptor below also catches any MinnoJS logger POST
    // and reformats it for DataPipe's API.

    var DATAPIPE_ID = 'XlZHXv4VT8Nd';
    var DATAPIPE_URL = 'https://pipe.jspsych.org/api/data/';

    // Intercept MinnoJS logger requests and redirect to DataPipe
    (function() {
        var _open = XMLHttpRequest.prototype.open;
        var _send = XMLHttpRequest.prototype.send;
        var alreadySent = false;

        XMLHttpRequest.prototype.open = function(method, url) {
            this._dpIntercept = (typeof url === 'string' && url.indexOf('pipe.jspsych.org') > -1);
            return _open.apply(this, arguments);
        };

        XMLHttpRequest.prototype.send = function(body) {
            if (this._dpIntercept && body && !alreadySent) {
                alreadySent = true;
                var dataStr = typeof body === 'string' ? body : JSON.stringify(body);
                fetch(DATAPIPE_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        experimentID: DATAPIPE_ID,
                        filename: sessionId + '_log.json',
                        data: dataStr
                    })
                }).catch(function(e) { console.error('DataPipe logger error:', e); });
                return;
            }
            if (this._dpIntercept) return; // Already sent, skip duplicates
            return _send.apply(this, arguments);
        };
    })();

    // Configure MinnoJS built-in logger (intercepted above)
    API.addSettings('logger', {
        pulse: 20,
        url: DATAPIPE_URL
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
