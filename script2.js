
var ctx = document.getElementById('chart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Latvia', 'Lithuania', 'Estonia', 'Czech Republic', 'Poland', 'Slovakia', 'Hungary', 'England and Wales(UK)', 'Scotland(UK)(¹)', 'Spain', 'Romania', 'Malta', 'Bulgaria', 'Luxembourg', 
        'Portugal', 'Croatia', 'Italy', 'Greece', 'France', 'Austria', 'Belgium', 'Northern Ireland(UK)', 'The Netherlands', 'Germany', 'Ireland', 'Cyprus', 'Denmark', 'Sweden',
        'Slovenia', 'Finland'],
        datasets: [{
            label: "2007-09",
            backgroundColor: 'red',
            data: [312 ,247, 266, 198, 228 , 159, 148 ,151,	150, 158, 132 , 126, 132, 139, 106 ,108	,98, 105, 99, 101, 93, 84, 90, 89, 28, 84, 66, 74, 66, 63]
           
        },
        {
            label: "2010-12",
            backgroundColor: 'yellow',
            data: [312, 307, 253, 217, 214, 197, 169 , 154, 154, 152, 150, 143,	132, 26, 120, 116,	113, 112, 106, 104,	101, 91, 84,	84,	80,	78,	72,	71,	65,	60]
        }
    ]
    },
    options: {
        title: {
            display: true,
            fontSize: "30",
            color: '#000000',
            text: "Seconde dataset"
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});