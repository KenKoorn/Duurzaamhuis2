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


let date = new Date();
console.log(date.getTime());


const labels = [
    "Week 1",
    "Week 2",
    "Week 3",
    "Week 4",
    "Week 5"
];

const data = {
    labels: labels,
    datasets:[
        {
            label: "Stroom-verbruik in het maand Januari",
            data: [11.06 ,10.96, 10.89, 10.90, 10.75, 10.87],
            backgroundColor: ['#8DCBE6', '#fff', '#CBE4DE', '#2C3333', '#ddd' ]
        }
    ]
}


const config = {
    type: 'line',
    data: data,
}

new Chart(document.getElementById("js--chart--1"), config);

