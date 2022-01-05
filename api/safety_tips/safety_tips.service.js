const connection = require("../../config/Connection");


const getAllSafetyTipsQ = `SELECT * FROM safety_tips`

module.exports = {
    getAllSafetyTips:callBack =>{
        connection.query(
            getAllSafetyTipsQ,
            [],
            (error, results, fields) => {
              if (error) {
               return callBack(error);
              }
              return callBack(null, results);
            }
          );
    }
}