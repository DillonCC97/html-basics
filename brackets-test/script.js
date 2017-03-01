/*jslint devel: true */

function blue() {
    "use strict";
    document.getElementById("title").style.color = 'blue';
}

function red() {
    "use strict";
    document.getElementById("title").style.color = 'red';
}

function thereCheck() {
    "use strict";
    var usr_input = document.getElementById("usr_input").value;
    if (usr_input === "yes" || usr_input === "yup") {
        alert("Yay, We're Here!!");
    } else {
        alert("Ugh . . .");
    }
}
