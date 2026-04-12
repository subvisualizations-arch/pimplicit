define(['questAPI'], function(Quest){
    var API = new Quest();

    API.addSequence([
        {
            header: '<h2>Informed Consent</h2>',
            decline: true,
            declineText: 'I do not wish to participate',
            autoFocus: true,
            questions: [
                {
                    type: 'info',
                    name: 'consent_info',
                    stem: '<div style="text-align:left; max-width:800px; margin:0 auto; line-height:1.6;">' +
                        '<p><strong>Study Title:</strong> Attitudes and Social Perception</p>' +
                        '<p><strong>Researchers:</strong> [RESEARCHER NAMES], [UNIVERSITY]</p>' +
                        '<p><strong>Ethics Approval:</strong> [ETHICS REFERENCE NUMBER]</p>' +
                        '<hr>' +
                        '<p>You are being invited to take part in a research study. Before you decide, it is important that you understand why the research is being done and what it will involve. Please read the following information carefully.</p>' +
                        '<p><strong>What is the purpose of this study?</strong><br>' +
                        'This study examines how people form impressions and categorise social information. You will read a short passage, answer some questions, and complete a categorisation task.</p>' +
                        '<p><strong>What will I be asked to do?</strong><br>' +
                        'You will: (1) answer some brief demographic questions, (2) read a short text and answer a comprehension question, (3) complete a sorting task using keyboard keys, and (4) answer a few final questions. The study takes approximately <strong>10\u201312 minutes</strong>.</p>' +
                        '<p><strong>Are there any risks?</strong><br>' +
                        'There are no anticipated risks beyond those encountered in daily life. Some items involve social categories (e.g., names, positive/negative words). If you feel uncomfortable at any point, you may withdraw without penalty.</p>' +
                        '<p><strong>Compensation:</strong><br>' +
                        '[COMPENSATION DETAILS, e.g., You will receive \u00a3X / course credit for your participation.]</p>' +
                        '<p><strong>Confidentiality:</strong><br>' +
                        'Your responses are anonymous. No personally identifying information is collected. Data will be stored securely on the Open Science Framework (OSF) and may be shared in de-identified form for research transparency.</p>' +
                        '<p><strong>Voluntary participation:</strong><br>' +
                        'Your participation is entirely voluntary. You may withdraw at any time by closing the browser window, with no penalty. However, once you submit your responses, withdrawal may not be possible as data are anonymous.</p>' +
                        '<p><strong>Contact:</strong><br>' +
                        'If you have questions about this study, please contact [RESEARCHER EMAIL]. If you have concerns about how this study is conducted, contact [ETHICS COMMITTEE EMAIL].</p>' +
                        '</div>'
                },
                {
                    type: 'checkbox',
                    name: 'consent_check',
                    stem: '',
                    answers: [
                        'I have read and understood the information above. I voluntarily agree to participate in this study.'
                    ],
                    required: true,
                    errorMsg: {
                        required: 'You must agree to the consent statement to proceed.'
                    }
                }
            ]
        }
    ]);

    return API.script;
});
