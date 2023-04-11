/*Klok */
function displayTime(){
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();

    //? is een korte versie van if-else
    //dus als 'hour' waar is dus (hour < 10) zet een 0 ervoor

    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    
    document.getElementById("js--clock").innerHTML = hour + ":" + min + ":" + sec;
}

setInterval(displayTime , 1000);

/*datum*/
document.addEventListener("DOMContentLoaded", function(event){
    const currentDate = new Date();
    const paragraph = document.querySelector('#js--date');
    paragraph.innerHTML = currentDate.toDateString();
});



/*Chart*/
const labels = [
    "Week 1",
    "Week 2",
    "Week 3",
    "Week 4",
];

const data = {
    labels: labels,
    datasets:[
        {
            label: "Stroom-verbruik in het maand Januari",
            data: [11.06 ,10.96, 10.89, 10.90,],
            backgroundColor: ['#71BBDBC4', '#fff', '#FCFC6A80', '#ddd' ]
        }
    ]
}

const data2 = {
    labels: labels,
    datasets:[
        {
            label: "Gas-verbruik in het maand Januari",
            data: [7.28, 6.85, 7.10, 8.37],
            backgroundColor: ['#71BBDBC4', '#fff', '#FCFC6A80', '#ddd' ]
        }
    ]
}

const config = {
    type: 'line',
    data: data,
}

const config2 ={
    type: 'bar',
    data: data2,
}

new Chart(document.getElementById("js--chart--1"), config);
new Chart(document.getElementById("js--chart--2"), config2);