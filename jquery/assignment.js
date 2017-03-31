// First add jQuery to your HTML code via CDN
// Write a variable "body" using jQuery referencing the body of the page


// Write a variable "headline" using jQuery referencing the News Headline


// Write a variable "paragraphs" using jQuery referencing all paragraphs


// Write a variable "subHead" using jQuery referencing all h4 elements


// Write variables to store the initial color of "body", "headline", "paragraphs", and "subHead"





// Write a function nightMode() that will
// 1) Change the background of the page to #141311
// 2) Change the font color of all paragraphs to #b7b7b6
// 3) Change the font color of the headline to #ffffff
// 4) Change the font color of the authors to #a2482e







// Write a function dayMode() that reverts "body", "headline", "paragraphs", and "subHead" to their initial colors







// Add an event listener that runs nightMode() when the logo is clicked


// Add an event listener that runs dayMode() when the user presses the escape button





// Write a function setSummary(text) that changes the summary text of the article to the function input




// Write a line of jQuery that changes the third paragraph on the page to fillerList
var fillerList = "<ul><li>Lorem Ipsum Dolor</li><li>Ipsum Lorem Dolor</li><li>Lorem Ipsum</li></ul>"; // You're welcome Shuchi



// Write a line of jQuery to give the first paragraph on the page the class "lead"


var distractionsHidden = false;
// Write a function hideDistractions() that:
// if distractionsHidden is false
// 1) Has the navbar slide up and hide
// 2) Has the footer comment-section and all <hr> elements fade out and hide
// 3) Sets distractionsHidden to true








// Write a function showDistractions() that:
// if distractionsHidden is true
// 1) has the navbar slide down to show
// 2) Has the footer, hr and comment-section fade in to show
// 3) Sets distractionsHidden to false;








// Write an event listener that runs hideDistractions() and clears the text input if the user types "no distractions" into the code input on the navbar







// Write an event listener that runs showDistractions() if distractionsHidden is true and the user presses enter.







// Write a function changePic() that changes the header image to https://mfour.com/wp-content/uploads/2017/03/gorilla-900x300.jpg





// Write an event listener that runs changePic() when the users mouse is over the header image


// Write an event listener that sets the header image back to http://placehold.it/900x300 when the mouse leaves the image





// Write a function postComment() that:
// 1) Posts text inside the comment box as a comment below all other comments if there is text inside the comment box
// 2) Clears the comment box
var commentHTML1 = "<div id=\"comment\" class=\"media\"><div class=\"media-body\"><h4 class=\"media-heading\"><span id=\"delete-btn\" class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>Comment</h4>";

var commentHTML2 = "</div></div>";










// Write an event listener that runs postComment() when the user presses the Submit button


// Write an event listener that runs a function that deletes a comment when its X icon is clicked





