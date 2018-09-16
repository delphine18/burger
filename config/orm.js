//Import MySQL connection
var connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {

// Returning all table entries
  all : function(tableInput,cb){
    var queryStr = "SELECT * FROM " + tableInput + ";";
    connection.query(queryStr,function(err,result){
      if(err) {
        throw err;
      }
      cb(result)
    })
  },
 // Updating a single table entry
  update: function(tableInput, condition, cb){
    connection.query("UPDATE "+tableInput+" SET devoured =true WHERE id="
     +condition+";",function(err,result){
      if(err){
        throw err;
      }
      cb(result);
    })
  },

  //Inserting a single table entry
  create : function(tableInput,val,cb){
    connection.query("INSERT INTO "+tableInput+" (burger_name)VALUES ('"
    +val+"');",function(err,result){
      if(err)throw err;
      cb(result);
    })
   }
};
// Exporting the orm object 
module.exports = orm;