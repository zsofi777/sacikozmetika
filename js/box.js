var colourBox = document.getElementById('colour-box');
var colours = ['#FB0E0E', '#1712F6', '#FFE713', '#FB0E0E', '#1712F6', '#FFE713'];
var counter = 0;

function changeColour() {
    /*
    if (counter >= colours.length) {
        counter = 0;
    }
    */
    colourBox.style.background = colours[counter];
    counter++;
}

var myTimer = setInterval(changeColour, 1000);

colourBox.onclick = function () {
    clearInterval(myTimer);   
};

