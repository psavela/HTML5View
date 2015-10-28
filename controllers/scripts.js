"use strict";
console.log("Here we go!!");

/*
window.onload = function(event) {
   console.log(event);
    para1.innerHTML = "Changed from JS"; 
     para1.style = "Changed from JS";
    */

// JQUERY $ == constructor

$(document).ready(function () {
    
    console.log("jquery onload triggered");
    $("#head").css("backround-color", "lightblue").css("padding", "20px").css("border-radius", "8px");
    
    $(".about").text("New text");
    $(".about").html("<b>New text2</b>");
    $("[data-dummy]").html("<p>Hello World<p>");
    
    var setting = {
        
        method: "GET",
        url: "http://localhost:28017/oma/person/",
        dataType: "jsonp",
        jsonp: "jsonp"    
    };
    
    $.ajax(setting).done(function (data) {
        console.log(data);
        
        for (var i = 0; i < data.rows.length; i++) {
            
            var html = "<tr>" +
                       "<td>" + data.rows[i].name + "</td>" +
                       "<td>" + data.rows[i].address + "</td>" +
                       "<td>" + data.rows[i].age + "</td>" +
                       "</tr>";
            
           
            $(html).appendTo("tbody");
        }
            
            
    });

});

/*
$(document).ready(domReady);

function domReady(){
    
}
*/

