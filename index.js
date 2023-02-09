function calculate() {
    var ans = 0;
    for(let i=1;i<=7;i++){
        var start_hour = parseInt(document.getElementById(`start-hour-${i}`).value);
        var start_minutes = parseInt(document.getElementById(`start-minute-${i}`).value);
        var end_hour = parseInt(document.getElementById(`end-hour-${i}`).value);
        var end_minutes = parseInt(document.getElementById(`end-minute-${i}`).value);
        var time_start = document.getElementById(`start-break-${i}`);
        var time_end = document.getElementById(`end-break-${i}`);
        var minus_hour = parseInt(document.getElementById(`minus-hour-${i}`).value);
        var minus_minutes = parseInt(document.getElementById(`minus-minute-${i}`).value);

        if(time_start.value == "1") start_hour = start_hour+12;
        if(time_end.value == "1") end_hour = end_hour+12;
        
        var ans_in_minutes = (Math.abs(((end_hour*60)+end_minutes)-((start_hour*60)+start_minutes)) - ((minus_hour*60)+minus_minutes));
        // var ans_hrs = (ans_in_minutes/60);
        // var ans_min = (ans_in_minutes%60);
        var ans = ans + ans_in_minutes;
        let hour = Math.floor(ans_in_minutes/60);
        let minutes = ans_in_minutes%60;
        let total = "";
        if(minutes<10 && minutes>=0) total = hour+" : 0"+minutes;
        else total = hour+" : "+minutes;
        document.getElementById(`total-${i}`).innerHTML = total;
    }
    let hour = Math.floor(ans/60);
    let minutes = ans%60;
    let total = "";
    if(minutes<10 && minutes>=0) total = hour+" : 0"+minutes;
    else total = hour+" : "+minutes;
    document.getElementById('answer').innerHTML= total;

}

function clearAll() {
    for(let i=1;i<=7;i++){
        document.getElementById(`start-hour-${i}`).value = "";
        document.getElementById(`end-hour-${i}`).value = "";
        document.getElementById(`minus-hour-${i}`).value = "";
        document.getElementById(`start-minute-${i}`).value = "";
        document.getElementById(`end-minute-${i}`).value = "";
        document.getElementById(`minus-minute-${i}`).value = "";
        document.getElementById(`total-${i}`).innerHTML = "";
        
    }
    document.getElementById('answer').innerHTML = "";
}