gapi.analytics.ready(function () {

    /**
     * Authorize the user immediately if the user has already granted access.
     * If no access has been created, render an authorize button inside the
     * element with the ID "auth-button".
     */
    var CLIENT_ID = '860819222688-48khnq092h1lvfvej33so8fi05c6cuct.apps.googleusercontent.com';

    gapi.analytics.auth.authorize({
        container: 'auth-button',
        clientid: CLIENT_ID,
    });

    /**
     * Create a new ViewSelector instance to be rendered inside of an
     * element with the id "view-selector-container".
     */
    var viewSelector = new gapi.analytics.ViewSelector({
        container: 'view-selector'
    });

    // Render the view selector to the page.
    viewSelector.execute();

    /**
       * Query params representing the first chart's date range.
       */
    var dateRange1 = {
        'start-date': '30daysAgo',
        'end-date': 'yesterday'
    };

    /**
       * Create a new DateRangeSelector instance to be rendered inside of an
       * element with the id "date-range-selector-1-container", set its date range
       * and then render it to the page.
       */
    var dateRangeSelector1 = new gapi.analytics.ext.DateRangeSelector({
        container: 'date-range-selector-1-container'
    })
  .set(dateRange1);

    gapi.analytics.auth.on('success', function (response) {
        document.querySelector("#auth-button").style.display = 'none'; //

        dateRangeSelector1.execute();
    });

    /**
     * Create a new DataChart instance with the given query parameters
     * and Google chart options. It will be rendered inside an element
     * with the id "timeline".
     */
    var timeline = new gapi.analytics.googleCharts.DataChart({
        reportType: 'ga',
        query: {
            'dimensions': 'ga:date',
            'metrics': 'ga:sessions',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            type: 'LINE',
            container: 'timeline',
            options: {
                title: 'AllData',
                subtitle:'TestingIA'
            }
        }
    });

    //Create the browser chart with the id 'main-chart-container'
    var mainChart = new gapi.analytics.googleCharts.DataChart({
        query: {
            'dimensions': 'ga:browser',
            'metrics': 'ga:sessions',
            'sort': '-ga:sessions'
        },
        chart: {
            type: 'TABLE',
            container: 'main-chart-container',
            options: {
                title: 'Testbrowser',
                width: '100%',
            }
        }
    });

    //Create the breakdown chart with the id 'breakdown-chart-container'
    var breakdownChart = new gapi.analytics.googleCharts.DataChart({
        query: {
            'dimensions': 'ga:date',
            'metrics': 'ga:sessions',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            type: 'LINE',
            container: 'breakdown-chart-container',
            options: {
                title: 'breakdown',
                width: '100%',
                
            }
        }
    });

    //Create the visitorType chart with the id 'visitorType-chart-container'
    var visitorType = new gapi.analytics.googleCharts.DataChart({
        reportType: 'ga',
        query: {
            'dimensions': 'ga:userType',
            'metrics': 'ga:sessions,ga:percentNewSessions,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:goal1ConversionRate,ga:goalCompletionsAll,ga:goalValuePerSession',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            type: 'TABLE',
            container: 'visitorType-chart-container',
            options: {
                title: 'visitorType'
            }
        }
    });
   
    //Create the country chart with the id 'country-chart-container'
    var country = new gapi.analytics.googleCharts.DataChart({
        reportType: 'ga',
        query: {
            'dimensions': 'ga:country',
            'metrics': 'ga:sessions',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            type: 'GEO',
            container: 'country-chart-container',
            options: {
                title: 'country',
                //region:'HK'
            }
        }
    });

    //Create the frequency chart with the id 'frequency-chart-container'
    var frequency = new gapi.analytics.googleCharts.DataChart({
        reportType: 'ga',
        query: {
            'dimensions': 'ga:sessionCount',
            'metrics': 'ga:sessions,ga:pageviews',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            type: 'BAR',
            container: 'frequency-chart-container',
            options: {
                height: '500',
                title: 'frequency'
            }
        }
    });

    //Create the 7 day active user chart with the id 'day7-chart-container'
    var day7 = new gapi.analytics.googleCharts.DataChart({
        reportType: 'ga',
        query: {
            'dimensions': 'ga:date',
            'metrics': 'ga:7dayUsers',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            type: 'LINE',
            container: 'day7-chart-container',
            options: {
                title: 'day7'
            }
        }
    });

    //Create the engagement chart with the id 'engagement-chart-container'
    var engagement = new gapi.analytics.googleCharts.DataChart({
        reportType: 'ga',
        query: {
            'dimensions': 'ga:sessionDurationBucket',
            'metrics': 'ga:sessions,ga:pageviews',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            type: 'COLUMN',
            container: 'engagement-chart-container',
            options: {
                height: '500',
                width: '100%',
                title: 'engagement'
            }
        }
    });

    //Create the source/medium chart with the id 'source-chart-container'
    var source = new gapi.analytics.googleCharts.DataChart({
        reportType: 'ga',
        query: {
            'dimensions': 'ga:medium',
            'metrics': 'ga:sessions',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            type: 'PIE',
            container: 'source-chart-container',
            options: {
                pieHole: 4/9,
                width: '100%',
                title: 'source/medium'
            }
        }
    });

    //Create the browser chart with the id 'browser-chart-container'
    var browser = new gapi.analytics.googleCharts.DataChart({
        query: {
            'dimensions': 'ga:browser',
            'metrics': 'ga:sessions',
            'sort': '-ga:sessions',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            type: 'PIE',
            container: 'browser-chart-container',
            options: {
                pieHole: 4 / 9,
                title: 'browser',
                width: '100%',
            }
        }
    });

    //Create the traffic chart with the id 'traffic-chart-container'
    var traffic = new gapi.analytics.googleCharts.DataChart({
        query: {
            'dimensions': 'ga:date',
            'metrics': 'ga:sessions,ga:users',
            'start-date': '30daysAgo',
            'end-date': 'yesterday'
        },
        chart: {
            type: 'LINE',
            container: 'traffic-chart-container',
            options: {
                title: 'site traffic',
                width: '100%',
            }
        }
    });

    //Create the service provider chart with the id 'provider-chart-container'
    var provider = new gapi.analytics.googleCharts.DataChart({
        query: {
            'dimensions': 'ga:networkLocation',
            'metrics': 'ga:sessions',
            'start-date': '30daysAgo',
            'end-date': 'yesterday',
            'sort':'-ga:sessions',
            'max-results': 7
        },
        chart: {
            type: 'TABLE',
            container: 'provider-chart-container',
            options: {
                title: 'service provider'
            }
        }
    });

    var mainChartRowClickListener;

    /**
     * Render the dataChart on the page whenever a new view is selected.
     */
    viewSelector.on('change', function (ids) {
        var newIds = {
            query: {
                ids: ids
            }
        }
        if (mainChartRowClickListener) {
            google.visualization.events.removeListener(mainChartRowClickListener);
        }
        
        timeline.set(newIds).execute();
        mainChart.set(newIds).execute();
        breakdownChart.set(newIds);
        visitorType.set(newIds).execute();
        country.set(newIds).execute();
        frequency.set(newIds).execute();
        day7.set(newIds).execute();
        //engagement.set(newIds).execute();
        source.set(newIds).execute();
        browser.set(newIds).execute();
        traffic.set(newIds).execute();
        provider.set(newIds).execute();

        if (breakdownChart.get().query.filters) breakdownChart.execute();
    });

    /**
   * Register a handler to run whenever the user changes the date range from
   * the first datepicker. The handler will update the first dataChart
   * instance as well as change the dashboard subtitle to reflect the range.
   */
    dateRangeSelector1.on('change', function (data) {
        timeline.set({ query: data }).execute();
        timeline.set({ query: data }).execute();
        mainChart.set({ query: data }).execute();
        breakdownChart.set({ query: data });
        visitorType.set({ query: data }).execute();
        country.set({ query: data }).execute();
        frequency.set({ query: data }).execute();
        day7.set({ query: data }).execute();
        //engagement.set({ query: data }).execute();
        source.set({ query: data }).execute();
        browser.set({ query: data }).execute();
        traffic.set({ query: data }).execute();
        provider.set({ query: data }).execute();
    });

    /**
     * Each time the main chart is rendered, add an event listener to it so
     * that when the user clicks on a row, the line chart is updated with
     * the data from the browser in the clicked row.
     */
    mainChart.on('success', function (response) {

        var chart = response.chart;
        var dataTable = response.dataTable;

        // Store a reference to this listener so it can be cleaned up later.
        mainChartRowClickListener = google.visualization.events
            .addListener(chart, 'select', function (event) {

                // When you unselect a row, the "select" event still fires
                // but the selection is empty. Ignore that case.
                if (!chart.getSelection().length) return;

                var row = chart.getSelection()[0].row;
                var browser = dataTable.getValue(row, 0);
                var options = {
                    query: {
                        filters: 'ga:browser==' + browser
                    },
                    chart: {
                        options: {
                            title: browser
                        }
                    }
                };
                breakdownChart.set(options).execute();
            });
    });
});