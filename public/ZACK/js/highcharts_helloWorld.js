function init_chart() {
    start_chart()
};

function start_chart(){

    setTimeout( function() {

        console.log('hello from highcharts js');


            // Highcharts.chart('venn_accountOutcome2', {
            //     accessibility: {
            //         point: {
            //             valueDescriptionFormat: '{point.name}: {point.longDescription}.'
            //         }
            //     },
            //     credits: {
            //         enabled: false,
            //     },
            //     series: [{
            //         type: 'line',
            //         data: [
            //             {
            //                 sets: ['A'],
            //                 value: 47,
            //                 name: 'Viewed Accounts',
            //                 longDescription: ''
            //             },
            //             {
            //                 sets: ['B'],
            //                 value: 20,
            //                 name: 'My Property',
            //                 longDescription: ''
            //             },
            //             {
            //                 sets: ['A', 'B'],
            //                 value: 3,
            //                 name: 'Booked'
            //             },
            //             {
            //                 sets: ['C'],
            //                 value: 100,
            //                 name: 'Comp Set',
            //                 longDescription: ''
            //             },
            //             {
            //                 sets: ['A', 'C'],
            //                 value: 7,
            //                 name: 'Booked'
            //             },
            //             {
            //                 sets: ['D'],
            //                 value: 200,
            //                 name: 'My Market',
            //                 longDescription: ''
            //             },
            //             {
            //                 sets: ['A', 'D'],
            //                 value: 5,
            //                 name: 'Booked',
            //             },
            //             // {
            //             //     sets: ['B', 'D'],
            //             //     value: 2,
            //             //     name: 'Booked',
            //             // },
                
            //         ]
                
            //     }],
            //     tooltip: {
            //         headerFormat:
            //             '<span style="color:{point.color}">\u2022</span> ' +
            //             '<span style="font-size: 14px"> {point.point.name}</span><br/>',
            //         // pointFormat: '{point.point.name}'
            //     },
            //     title: {
            //         text: ''
            //     }
            //     });


    }, 1000);

}