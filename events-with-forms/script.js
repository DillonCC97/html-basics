var form = document.querySelector("form");
var email = document.querySelector(".js-email-field");
var password = document.querySelector("#exampleInputPassword1");

var mouseEnterMessage = function() {
  console.log("Entering form!");
}

var mouseExitMessage = function() {
  console.log("Exiting form!");
}

var focusMessage = function() {
  console.log("Field in focus!");
}

var emailOutFocus = function() {
    form.style.background = "red";
}

var passwordTyped = function() {
    form.style.background = "pink";
}

var pwCheck = function() {
    if (password.value.length < 8) {
        alert("Your password is too short dummy!");
    }
}

form.addEventListener("mouseenter", mouseEnterMessage);
form.addEventListener("mouseleave", mouseExitMessage);
email.addEventListener("focus", focusMessage);
email.addEventListener("focusout", emailOutFocus);
password.addEventListener("keyup", passwordTyped);
password.addEventListener("focusout", pwCheck);

var checkBox = document.querySelector("#checkbox1");
var submitBtn = document.querySelector("#submit1");

var hideSubmit = function() {
    submitBtn.style.display = "none";
}

var showSubmit = function() {
    submitBtn.style.display = "inline";
}

hideSubmit();

var toggleSubmit = function() {
    if (submitBtn.style.display == "inline" || submitBtn.style.display == "") {
        submitBtn.style.display = "none";
    } else if (submitBtn.style.display == "none") {
        submitBtn.style.display = "inline";
    }
}

checkBox.addEventListener("change", toggleSubmit);

// ADDITIONAL TASKS:
//
// Make form background change to #dcdcdc when email field goes out of focus.
// Make form background change to #cccccc when something is typed into password field.
// Display a warning message when the user goes out of focus on the password field, but the password they typed is less than 8 characters.
//
// BONUS
// When the user clicks on the checkbox next to "Check me out", hide the submit button. When the user clicks on it to uncheck it, show the submit button again.
