// First add jQuery to your HTML code via CDN
// Write a variable "body" using jQuery referencing the body of the page
var body = $("body");

// Write a variable "headline" using jQuery referencing the News Headline
var headline = $("h1");

// Write a variable "paragraphs" using jQuery referencing all paragraphs
var paragraphs = $("p");

// Write a variable "subHead" using jQuery referencing all h4 elements
var subHead = $("h4");

// Write variables to store the initial color of "body", "headline", "paragraphs", and "subHead"
var bodyColor = body.css("background-color");
var headlineColor = headline.css("color");
var paragraphsColor = paragraphs.css("color");
var subHeadColor = subHead.css("color");

// Write a function nightMode() that will
// 1) Change the background of the page to #141311
// 2) Change the font color of all paragraphs to #b7b7b6
// 3) Change the font color of the headline to #ffffff
// 4) Change the font color of the authors to #a2482e
function nightMode() {
    body.css("background-color","#141311");
    headline.css("color", "#ffffff");
    paragraphs.css("color", "#b7b7b6");
    subHead.css("color", "#a2482e");
}

// Write a function dayMode() that reverts "body", "headline", "paragraphs", and "subHead" to their initial colors
function dayMode() {
    body.css("background-color",bodyColor);
    headline.css("color", headlineColor);
    paragraphs.css("color", paragraphsColor);
    subHead.css("color", subHeadColor);
}



// Add an event listener that runs nightMode() when the logo is clicked
$("#logo").click(nightMode);

// Add an event listener that runs dayMode() when the user presses the escape button
$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        dayMode();
    }
});

// Write a function setSummary(text) that changes the summary text of the article to the function input
function setSummary(input) {
    $("#summary").text(input);
}

// Write a line of jQuery that changes the third paragraph on the page to fillerList
var fillerList = "<ul><li>Lorem Ipsum Dolor</li><li>Ipsum Lorem Dolor</li><li>Lorem Ipsum</li></ul>"; // You're welcome Shuchi

$("p:nth-of-type(3)").html(fillerList);

// Write a line of jQuery to give the first paragraph on the page the class "lead"
$("p").first().addClass("lead");



var distractionsHidden = false;
// Write a function hideDistractions() that:
// if distractionsHidden is false
// 1) Has the navbar fade out and hide
// 2) Has the footer comment-section and all <hr> elements fade out and hide
// 3) Sets distractionsHidden to true
function hideDistractions() {
    if (!distractionsHidden) {
        $("nav").fadeOut(750, function() {
            $("footer, hr").fadeOut(750, function() {
                $("#comment-section").fadeOut(750);
            });
        });
        distractionsHidden = true;
    }
}

// Write a function showDistractions() that:
// if distractionsHidden is true
// 1) has the navbar fade in to show
// 2) Has the footer, hr and comment-section fade in to show
// 3) Sets distractionsHidden to false;
function showDistractions() {
    if (distractionsHidden) {
        $("nav").fadeIn();
        $("footer, hr, #comment-section").fadeIn();
        distractionsHidden = false;
    }
}

// Write an event listener that runs hideDistractions() and clears the text input if the user types "no distractions" into the code input on the navbar
$("#code-input").on("keyup", function() {
    if ($("#code-input").val() == "no distractions") {
        hideDistractions();
        $("#code-input").val("");
    }
});

// Write an event listener that runs showDistractions() if distractionsHidden is true and the user presses enter.
$(document).keydown(function(e) {
    if (e.keyCode == 13 && distractionsHidden) {
        showDistractions();
    }
});

// Write a function changePic() that changes the header image to https://mfour.com/wp-content/uploads/2017/03/gorilla-900x300.jpg
function changePic() {
    $("#header-img").attr("src", "https://mfour.com/wp-content/uploads/2017/03/gorilla-900x300.jpg");
}

// Write an event listener that runs changePic() when the users mouse is over the header image
$("#header-img").mouseenter(changePic);

// Write an event listener that sets the header image back to http://placehold.it/900x300 when the mouse leaves the image
$("#header-img").mouseleave(function() {
    $("#header-img").attr("src", "http://placehold.it/900x300");
})

// Write a function postComment() that:
// 1) Posts text inside the comment box as a comment below all other comments if there is text inside the comment box
// 2) Clears the comment box
function postComment() {
    var comment = $("#comment-input").val();
    $("#comment-input").val("");
    $("#comment-area").append("<div id=\"comment\" class=\"media\"><div class=\"media-body\"><h4 class=\"media-heading\"><span id=\"delete-btn\" class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>Comment</h4>" + comment + "</div></div>");
}


// Write an event listener that runs postComment() when the user presses the Submit button
$("#submit-btn").click(postComment);

// Write an event listener that runs a function that deletes a comment when its X icon is clicked
$("#comment-area").on("click", "#delete-btn", function() {
    console.log("clicked");
    $(this).parent().parent().parent("#comment").detach();
});
