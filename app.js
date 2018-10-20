let month = document.querySelector('.month');
let date = document.querySelector('.date');
let day = document.querySelector('.day');
let fahrenheitValue = document.querySelector('.fahrenheitValue');
let celsiusValue = document.getElementById('celsiusValue');



document.addEventListener('DOMContentLoaded', updateUIDate);



// Update Fahrenheit value based on input value
celsiusValue.onkeyup = function() {
    fahrenheitValue.innerHTML = parseFloat((celsiusValue.value * (9/5) + 32)).toFixed(2);

    let fahrenheitValueArr = fahrenheitValue.innerHTML.split('');

    if(fahrenheitValueArr[3] && fahrenheitValueArr[4] == 0){
        fahrenheitValue.innerHTML = parseFloat((celsiusValue.value * (9/5) + 32)).toFixed(1);
    } else {
        fahrenheitValue.innerHTML = parseFloat((celsiusValue.value * (9/5) + 32)).toFixed(2);
    }
}


// Update UI date to current date 
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let dayOfMonth = currentDate.getDate();
let dayOfWeek = currentDate.getDay();

function updateUIDate() { 

    switch(currentMonth) {
        case 0:
        month.innerHTML = 'Jan';
        break;
        case 1: 
        month.innerHTML = 'Feb';
        break;
        case 2:
        month.innerHTML = 'Mar';
        break;
        case 3: 
        month.innerHTML = 'Apr';
        break;
        case 4:
        month.innerHTML = 'May';
        break;
        case 5: 
        month.innerHTML = 'Jun';
        break;
        case 6:
        month.innerHTML = 'Jul';
        break;
        case 7: 
        month.innerHTML = 'Aug';
        break;
        case 8:
        month.innerHTML = 'Sep';
        break;
        case 9: 
        month.innerHTML = 'Oct';
        break;
        case 10:
        month.innerHTML = 'Nov';
        break;
        case 11: 
        month.innerHTML = 'Dec';
        break;
    }

    switch(dayOfWeek) {
        case 0: 
        day.innerHTML = 'Sun';
        break;
        case 1: 
        day.innerHTML = 'Mon';
        break;
        case 2: 
        day.innerHTML = 'Tue';
        break;
        case 3: 
        day.innerHTML = 'Wed';
        break;
        case 4: 
        day.innerHTML = 'Thu';
        break;
        case 5: 
        day.innerHTML = 'Fri';
        break;
        case 6: 
        day.innerHTML = 'Sat';
        break;
    }

    date.innerHTML = dayOfMonth;
}