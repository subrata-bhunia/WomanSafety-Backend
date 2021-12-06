const mysql = require('mysql');
require('dotenv').config()



const dbconfig= {
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    // password:''
}


var connection;

function handleClose(){
   connection= mysql.createConnection(dbconfig);
    connection.connect(function(err) {              // The server is either down
        if(err) {                                     // or restarting (takes a while sometimes).
          console.log('error when connecting to db:', err);
          setTimeout(handleClose, 2000); // We introduce a delay before attempting to reconnect,
        }else{
          console.log("MySql")
        }                                    // to avoid a hot loop, and to allow our node script to
      }); 

      connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            handleClose();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
          throw err;                                  // server variable configures this)
        }
      });
}
handleClose();

module.exports = connection;