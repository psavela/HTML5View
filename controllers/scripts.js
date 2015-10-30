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
    $("#head").css("background-color", "lightblue").css("padding", "20px").css("border-radius", "8px");
    
    $(".about").text("New text");
    $(".about").html("<b>New text2</b>");
    $("[data-dummy]").html("<p>Hello World<p>");
    
    var setting = {
        
        method: "GET",
        url: "http://localhost:28017/oma/person/",
        dataType: "jsonp",
        jsonp: "jsonp"    //json padding
    };
    
    $.ajax(setting).done(function (data) {
        console.log(data);
        console.log(Object.keys(data.rows[0])); // Get all keys (attribute names) from json object
        
        
  
        if(data.rows.length > 0){                            //Check that there are elements in array
            
            var headers = Object.keys(data.rows[0]);        //Create table headers dynamically
        
            var row = $("<tr></tr>");
            
            for(var i = 1;  i < headers.length; i++){
                
                $("<th>" + headers[i] + "</th>").appendTo(row);
                
            }
            //Add row to thead element
            $(row).appendTo("thead");
         
        }
            
            for (var i = 0; i < data.rows.length; i++) {     //Create table content dynamically   

        
          var html = "<tr>" +
                       "<td>" + data.rows[i].name + "</td>" +
                       "<td>" + data.rows[i].address + "</td>" +
                       "<td>" + data.rows[i].age + "</td>" +
                       "<td>" + data.rows[i].email + "</td>" +
                       "</tr>";
            
           
            $(html).appendTo("tbody");    //varo duplikaattimääritystä
        }
            
            
    });

});

/*
$(document).ready(domReady);

function domReady(){
    
}
*/

