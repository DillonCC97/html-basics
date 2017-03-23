// Write a function to switch background colors.
//
// Select the button element, and add a listener so that the background changes colors when the button is clicked.
//
//

var mainButton = document.querySelector("button");
var background = document.querySelector("body");
var colors = ["red","orange","yellow","green","blue","indigo","violet"];
var i = 0;

function changeBG () {
    background.style.background = colors[i];
    i++;
    if (i > colors.length - 1) {
        i = 0;
    }
}


mainButton.addEventListener('click', changeBG);

var element = document.querySelector("p");
element.classList.add("style");
