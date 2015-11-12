$(document).ready(function(){
    
      $("#login").click(loginHandler);
      $("#register").click(registerHandler);
    
});

/* This function is called when login button is pressed (ota vastaan UI:lta)
*/

function loginHandler(event){
    
    var requestData = {
        
        username:$("#username").val(),
        password:$("#password").val()
    }
    
    localStorage['username'] = $("#username").val();  //tähän tallennetaan username local storageen (HTML5)
    sessionStorage['user'] = $("#username").val();    //tähän tallennetaan username session storageen (HTML5)
    
    //send login request to server
    $.ajax({       
        method:'POST',
        url:'http://localhost:3000/friends/login',
        data:requestData,
        dataType:'json'
    }).done(loginResponseHandler);;
    
}

/* This function is called when register button is pressed (ota vastaan UI:lta)
*/

function registerHandler(event){
    console.log("Register handler called");
    var requestData = {
        
        username:$("#username").val(),
        password:$("#password").val()
    }
    
    //send login request to server (register handler)
    $.ajax({
        
        method:'POST',
        url:'http://localhost:3000/friends/register',
        data:requestData,
        dataType:'json'
    }).done(registerResponseHandler);     //hoitaa responsen    
    
}


/*
* This function is called when register response arrives in some point of time
*/
    

function registerResponseHandler(data){
    
    //if login status was ok
    $("#status").text(data.status);
    
}

/*
* This function is called when login response arrives in some point of time
*/

function loginResponseHandler(data){
    //If login status was ok
    if(data.status === "Ok"){         //=== estää tyyppimuunnoksen
        window.location.href='http://localhost:3000/persons.html';
    }else{
        $("#status").text(data.status);
    }
/*    
    $("#status").text(data.status);
    //Load person.html file from server
        $.ajax({
        method:'GET',
        url:'http://localhost:3000/friends/login'
    }).done(renderPersonView);
    */
}

