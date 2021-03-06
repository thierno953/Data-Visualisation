
var remoteCanvas = document.createElement("canvas");
remoteCanvas.id = "remoteChart";
var remoteTarget = document.getElementsByTagName("h1");
remoteTarget[0].appendChild(remoteCanvas);
var remoteLabels = [];
var remoteValues = [];
var remoteCounter = 20;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=20&type=json", true); 
    xhttp.responseType = "json";
    xhttp.onload = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            remoteLabels = xhttp.response.map(function(e) {
                return e[0];
            });
            remoteValues = xhttp.response.map(function (e) {
                return e[1];
            });
     
            var remoteContainer = document.getElementById("remoteChart");
            var remoteChart = new Chart(remoteContainer, {
                type: 'line',
                data: {
                    labels: remoteLabels,
                    datasets: [{
                        data: remoteValues,
                        label: "Live Update",
                        borderWidth: 1,
                        borderColor: "red",
                        backgroundColor: "orange",
                        fill: false
                    }]
                },
            });
        }
    }
    xhttp.send();
    updateChart();

function updateChart() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://canvasjs.com/services/data/datapoints.php?xstart="+(remoteCounter=remoteCounter+1)+"&ystart=10&length=1&type=json", true); 
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            remoteLabels.shift();
            remoteValues.shift();
            remoteLabels.push(xhr.response[0][0]);
            remoteValues.push(xhr.response[0][1]);
     
            var remoteContainer = document.getElementById("remoteChart");
            var remoteChart = new Chart(remoteContainer, {
                type: 'line',
                data: {
                    labels: remoteLabels,
                    datasets: [{
                        data: remoteValues,
                        label: "data update",
                        borderWidth: 1,
                        borderColor: "blue",
                        fontSize: "30",
                        backgroundColor: "orange",
                        fill: false
                    }]
                },
                options: {
                    title: {
                        display: true,
                        fontSize: "30",
                        color: '#000000',
                        text: "data flashing"
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
        }
    }
    xhr.send();
    setTimeout(function(){updateChart()}, 1000);
}


