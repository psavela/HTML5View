var db = require('./database');

/* This function gets all documents from person collection */
exports.getAllPersons = function(req,res) {
    
    db.Person.find(function(err,data){
        
        if(err) {
            
            console.log(err.message);
            res.send("Error in database");
        }
        else{
            
            res.send(data);
        }
        
    });    
    
}
//ite keksitty nimi funktiolle saveNewPerson
//This function saves new person information to our person collection
exports.saveNewPerson = function(req,res){
    
    var personTemp = new db.Person(req.body);   // body sisältää json objektin
    //Save i to database
    personTemp.save(function(err,ok){
        //make a redirect to root context
        res.redirect('/');  
    });
}

// This function deletes one person from our collection
exports.deletePerson = function(req,res){
    
    //What happens here is that req.params.id return string "id=34844646bbsksjdks"
    //split function splits the string form "=" and creates  an array where [0] contains "id"
    //and [1] contains "34844646bbsksjdks"
    var id = req.params.id.split("=")[1];
    console.log(id);
    
    db.Person.remove({_id:id}, function(err){
        
       if(err){
           
           res.send(err.message);   //res.send(err.message);
       }  
        else{
            
            res.send("Delete ok");
        }
    });
    
}

//This method updates one person info
exports.updatePerson = function(req,res){
    
    var updateData = {
        name:req.body.name,
        address:req.body.address,
        age:req.body.age
    }
    db.Person.update({_id:req.body.id,},updateData, function(err){
        
        res.send({data:"ok"});
    });
    
}

/*
*This function searches database by name or by begin letters
* etsi netistä mongoose and search by name starting --> stackoverflow.com tai mongoose
*/
exports.findPersonsByName = function(req,res){
    
    var name = req.params.nimi.split("=")[1];  // split operaatio luo aina taulukon
    console.log("name:" + name);
    
    db.Person.find({name:{'$regex':'^' + name,'$options':'i'}}, function(err,data) {
                                                         
        if(err){
            
            res.send('error');
          }
        else{
            
            console.log(data);
            res.send(data);
          }
    });
}