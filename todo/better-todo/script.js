var showingRemove = false;

function addTodo(todo) {
    var list = $("#todo-list");
    list.append("<li><span class=\"remove-btn\"></span>" + todo + "</li>");
//    $("li").on("mouseover", showRemove);
}

function showRemove() {
    $(".remove-btn").toggle( "slide" );
}

$(document).on("mouseenter", "li", function() {
    if (!showingRemove) {
        $(this).children("button").show("slide", { direction: "left" }, 250);
        showingRemove = true;
    }
});
$(document).on("mouseleave", "li", function() {
    if (showingRemove) {
        $(this).children("button").hide("slide", { direction: "left" }, 250);
        showingRemove = false;
    }
});
//$("ul").on("mouseleave", "li", showRemove);
//$(document).mouseleave(".remove-btn", showRemove);

//$(document).bind({
//    mouseenter: function() {
//        console.log("mouseenter");
//        $(".remove-btn").show()
//    },
//    mouseleave: function() {
//        console.log("mouseleave");
//        $(".remove-btn").hide();
//    }
//}, 200, ".remove-btn");
