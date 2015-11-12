"use strict";
console.log("Here we go!!");

// This variable is shown to every function (global)
//var g_person_data;

/*
window.onload = function(event) {
   console.log(event);
    para1.innerHTML = "Changed from JS"; 
     para1.style = "Changed from JS";
    */

// JQUERY $ == constructor

$(document).ready(function() {
    
    console.log("jquery onload triggered");
/*****************************************************************************************************    
/* tästä alkaa search
/*****************************************************************************************************/
    $("#search").click(function(){   // jquery ($) constructorille search attribuutti. 
        var text = $("#search_text").val();  // sisälle callback funktio käsittelemään tapahtuma. Clientiltä (java scriptistä) serverille aina ajax:lla
        $.ajax({
            
            method:"GET",
            url:"http://localhost:3000/persons/nimi=" + text,  //tähän ei saa laittaa puolipistettä voi laittaa pilkun
                                                                // nimi on attributti koska '='
        }).done(function(data){        //responsen käsittely // tai success: url:n jälkeen 
            console.log(data);
    
// poista duplikaatti tbodysta, muuten tulostaa joka haulle löytyvät + löytyvät
            $("tbody").children().remove();
            
   //tulosta tulokset            
     for (var i = 0; i < data.length; i++) {     //Create table content dynamically   alla generoidaan html:aa keskellä java skriptia
     
          var html = "<tr>" +
                       "<td>" + data[i].name + "</td>" +
                       "<td>" + data[i].address + "</td>" +
                       "<td>" + data[i].age + "</td>" +
                       "<td><input type='button' id=" + data[i]._id + " value='Modify'/></td>"; // + data[i].email + "</td>" +
                       "</tr>";
            
           
            $(html).appendTo("tbody");    //varo duplikaattimääritystä
        }
        
        });  
        
    });    
   
   
            
    
    $("#head").css("background-color", "lightblue").css("padding", "20px").css("border-radius", "8px");
    
 //   $(".about").text("New text");
    $(".about").html("<b>New text2</b>");
    $("[data-dummy]").html("<p>Hello World</p>");
    
    var setting = {
        
        method:"GET",
        url:"http://localhost:3000/friends/username=" + localStorage['username'],   //local storagesta saatu username
        dataType:"json",
//        jsonp:"jsonp"    //json padding
    }
/**********************************************************************************************/
/**********************************************************************************************/    
    
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
                       "<td><input type='button' id=" + data[i]._id + " value='Modify'/></td>"; // + data[i].email + "</td>" +
                       "</tr>";
            
           
            $(html).appendTo("tbody");    //varo duplikaattimääritystä
        }
        
        // Get all elements from DOM where element has attribute 'type' with 
        //value 'button'. Then add event handler for click vent for each of them.
        $("[type=button]").click(function(click_data){
            
            for(var i = 0; i < data.length; i++){
                
                // Check if id from button matches one of person id
                if(click_data.currentTarget.id == data[i]._id)
                    {
                        buildModifyUI(data[i]);
                        break;
                    }
            }
        
            console.log(click_data);
        });
            
            
    });
    

    
});


function buildModifyUI(person_data){
    
    var html = "<input id='name' type='text' value='" + person_data.name + "'/>";
    html += "<input id='address' type='text' value='" + person_data.address + "'/>";
    html += "<input id='age' type='text' value='" + person_data.age + "'/>";
    html += "<input type='button' value='Update' id='update'/>";
    html += "<input type='button' value='Delete' id='delete'/>";
    
    $("body").html(html); //ylikirjoittaa aikaisemman näkymän
    
    $("#delete").click(function(){      //id määrettä osoitetaan #. jos olisi class määre, niin silloin '.'.
        
       $.ajax({
           method:'DELETE',
           url:'http://localhost:3000/persons/id=' + person_data._id
       }).done(function(data){location.reload(true)});  //refreshaa sivun javascriptin avulla
    });
    
    $("#update").click(function(){
 
//siirrä päivitetty data temp:iin
        var temp = {
            id:person_data._id,
            name:$("#name").val(),
            address:$("#address").val(),
            age:$("#age").val()
        }
        
        $.ajax({
            method:"PUT",
            url:'http://localhost:3000/persons',
            dataType:'json',
            data:temp
        }).done(function(){location.reload(true)});
    });
}
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