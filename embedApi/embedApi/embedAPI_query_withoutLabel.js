gapi.analytics.ready(function () {

    // Step 3: Authorize the user.

    var CLIENT_ID = '860819222688-48khnq092h1lvfvej33so8fi05c6cuct.apps.googleusercontent.com';

    gapi.analytics.auth.authorize({
        container: 'auth-button',
        clientid: CLIENT_ID,
        userInfoLabel: "" //
    });



    var timeline = new gapi.analytics.googleCharts.DataChart({
        reportType: 'ga',
        query: {
            'dimensions': 'ga:date',
            'metrics': 'ga:sessions',
            'start-date': '30daysAgo',
            'end-date': 'yesterday',
            'ids': 'ga:127257439' //
        },
        chart: {
            type: 'LINE',
            container: 'timeline'
        }
    });

    // Step 6: Hook up the components to work together.

    gapi.analytics.auth.on('success', function (response) {
        document.querySelector("#auth-button").style.display = 'none'; //
        
        timeline.execute();
    });

});