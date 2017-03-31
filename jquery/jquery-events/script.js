////1.) Link jQuery to index.html via CDN.
////
////2.) Create a new, blank Javascript file and link it to index.html.
////
////3.) Using jQuery, write code that creates a border around all images when you click on the 'Alpha' button.
////
//$("#a").click(function() {
//    $("img").css("border","2px solid black");
//});
////4.) Using jQuery, write code that doubles the image width when you click on the "Bravo" button.
//$("#b").click(function() {
//    var newWidth = $("img").width() * 2 + "px";
//    $("img").css("width", newWidth);
//});
//
////5.) Using jQuery, write code that changes the background color whenever a key is typed in the text box.
//$("#text").on("keyup", function(){
//    $("body").css("background-color", "#1f222d");
//});
//
////6.) Using jQuery, write code that makes the images dissapear when the "q" key is typed into the text box.
//$("#text").on("keyup", function(event) {
//    if (event.keyCode == 81) {
//        $("img").hide();
//    }
//});


//1.) Link jQuery to index.html via CDN.
//
//2.) Create a new, blank Javascript file and link it to index.html.
//
//3.) Using jQuery, write code that fades in all the images when you click on the "Alpha" button.
$("#a").click(function() {
    $("img").fadeIn(2000);
});
//4.) Using jQuery, write code that fades out ONLY the first and third image when you click on the "Bravo" button.
$("#b").click(function() {
    $("img:nth-of-type(1), img:nth-of-type(3)").fadeOut(2000);
});

//5.) Using jQuery, write code that fade toggles all the images when you click on the "Charlie" button.
$("#c").click(function() {
    $("img").fadeToggle();
});

//6.) Using jQuery, write code that slides up (hides), and then slides down (shows) all the images when you click on the "Delta" button.
$("#d").click(function() {
    $("img").slideUp();
    $("img").slideDown();
});

//7.) Using jQuery, write code that turns the page background red and quickly fades all the images out and removes them from the DOM
//    When you type "check your six" into the text box.
$("#text").on("keyup",function() {
    // check the value
    if($("#text").val() == "check your six") {
        $("body").css("background", "red");
        $("img").fadeOut(250, function() {
            $("img").remove();
        });
    }
});












