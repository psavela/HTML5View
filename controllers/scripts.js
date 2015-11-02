"use strict";
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
    $("#head").css("background-color", "lightblue").css("padding", "20px").css("border-radius", "8px");
    
 //   $(".about").text("New text");
    $(".about").html("<b>New text2</b>");
    $("[data-dummy]").html("<p>Hello World</p>");
    
    var setting = {
        
        method:"GET",
        url:"http://localhost:3000/persons",
        dataType:"json",
//        jsonp:"jsonp"    //json padding
    }
    
    $.ajax(setting).done(function (data) {
        console.log(data);
        console.log(Object.keys(data[0])); // Get all keys (attribute names) from json object
        
        
  
        if(data.length > 0){                            //Check that there are elements in array
            
            var headers = Object.keys(data[0]);        //Create table headers dynamically
        
            var row = $("<tr></tr>");
            
            for(var i = 1; i < headers.length; i++){
                
                $("<th>" + headers[i] + "</th>").appendTo(row);
                
            }
            //Add row to thead element
            $(row).appendTo("thead");
         
        }
            
            for (var i = 0; i < data.length; i++) {     //Create table content dynamically   

        
          var html = "<tr>" +
                       "<td>" + data[i].name + "</td>" +
                       "<td>" + data[i].address + "</td>" +
                       "<td>" + data[i].age + "</td>" +
                       "<td>" + data[i].email + "</td>" +
                       "</tr>";
            
           
            $(html).appendTo("tbody");    //varo duplikaattimääritystä
        }
            
            
    });
    
});

/*
$(document).ready(domReady);

function domReady(){
}*/

/*
window.onload = function(event){
    
    console.log(event);
    para1.innerHTML = "Changed from JS";
    //para1.style.backgroundColor = "yellow";
    
    var tempP = document.createElement("p");
    tempP.innerHTML = "New Element";
    para1.appendChild(tempP);
}*/

/*
window.onload = domReady;

function domReady(event){
    
    return 2;
}

function someFunction(nimi){
    
    console.log(nimi);
}*/

//someFunction(21);
//someFunction("psavela");