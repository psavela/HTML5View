var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/oma',connectionStatus);

/***********************************************
**** Connection callback for fail and ok cases *
************************************************/

function connectionStatus(err, ok){
    
    if(err){
        
        console.log(err.message);
        
    }else{
        
        console.log("We are connected!");
        
    }
}

//referenssitaulukko. sql:ssa join
var User = mongoose.model('User',{
    username:{type:String,unique:true},
    password:String,
    friends:[{type:mongoose.Schema.Types.Object, ref:'Person'}]
});


var Person = mongoose.model('Person', {   //joka collectionista tehtävä malli. tee tästä kopio user malliin!!!
    
    name:String,
    address:String,
    age:{type:Number} //, min:0,max:120,default:2}
},'person');


/******** Using exports object you exspose the data to other modules ********/

exports.Person = Person;         //Person 

exports.myFunction = function() {
    
    console.log("This ");
}