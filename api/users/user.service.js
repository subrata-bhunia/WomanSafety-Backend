const connection = require("../../config/Connection");


// --------------------- //
const createUser= 'INSERT INTO `users` (`user_id`, `full_name`, `email`, `phone`, `password`, `aadhar_card`) VALUES (?,?,?,?,?,?)'
module.exports = {
    create: (data, callBack) => {
      connection.query(createUser,
        [
          Math.random()*9999999,
          data.name,
          data.email,
          data.phone,
          data.password,
          data.aadhar_card
        ],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
    
      );
    },
  
    getUsers: callBack => {
      connection.query(
        `select user_id,full_name,aadhar_card,phone,password from users`,
        [],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
    getUserByUserEmail: (name, callBack) => {
        connection.query(
          `select * from users where full_name = ?`,
          [name],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      getUserByUserId: (id, callBack) => {
        connection.query(
          `select * from users where user_id = ?`,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      updateUser: (data, callBack) => {
        connection.query(
          `update users set full_name=?,aadhar_card=?,phone=?,password=?,photo=?,last_location=? where user_id=?`,
          [
            data.name,
            data.aadhar_card,
            data.number,
            data.password,
            data.photo,
            data.last_location,
            data.id
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results.affectedRows);
          }
        );
      },
      deleteUser: (data, callBack) => {
        connection.query(
          `delete from users where user_id = ?`,
          [data.id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      }
  }