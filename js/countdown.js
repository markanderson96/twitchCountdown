var initialDate = new Date("October 4, 2020").getTime();
var countDownDate = new Date("November 4, 2020").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    var now = new Date().getTime();

    // Find the distances
    var distance = countDownDate - now;
    var totalDistance = countDownDate - initialDate;

    // time calcs
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // display remaining time
    document.getElementById("puppyText").innerHTML = days + " days until puppy!";

    // if count down is finished, write some text and set border
    if (distance <= 0) {
        clearInterval(x);
        document.getElementById("puppyText").innerHTML = "PUPPY TIME!";
    }
    updateBar(distance, totalDistance);
}, 1000); // <- this is the update interval 

// function to update progress bar
function updateBar(_currentDistance, _totalDistance) {
    let percentage = Math.round(((_totalDistance - _currentDistance) / _totalDistance) * 100);
    percentage = (percentage < 100) ? percentage : 100;
    bar.style.width = `${percentage}%`;
} 