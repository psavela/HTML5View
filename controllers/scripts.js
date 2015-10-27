console.log("Here we go!!");

/*
window.onload = function(event) {
   console.log(event);
    para1.innerHTML = "Changed from JS"; 
     para1.style = "Changed from JS";
    */

// JQUERY $ == constructor

$(document).ready(function() {
    
    console.log("jquery onload triggered");
    $("#head").css("backround-color", "lightblue").css("padding","20px").css("border-radius","8px");
    
    $(".about").text("New text");
    $(".about").html("<b>New text2</b>");
    $("[data-dummy]").html("<p>Hello World<p>");
    
});

/*
$(document).ready(domReady);

function domReady(){
    
}
*/

