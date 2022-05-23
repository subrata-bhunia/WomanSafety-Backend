const connection = require("../../config/Connection");
const getAllContactQ = `SELECT * FROM sos_info where user_id = ? and circle = ? ORDER BY createdAt DESC`;
const addContactsQ = `INSERT INTO sos_info (id,user_id,name,phone1,relation,circle) VALUES (?,?,?,?,?,?);`;
const deleteCirlesContactQ = `DELETE FROM sos_info WHERE sos_info.user_id = ? and circle = ?`;
const updateCirclesCountQ = `UPDATE circles_name SET count = ? WHERE circles_name.id = ?; `;
const getPreviousCountQ = `SELECT circles_name.count FROM circles_name WHERE circles_name.id = ?; `;

module.exports = {
  getAllContact: (data, callBack) => {
    console.log(data);
    connection.query(
      getAllContactQ,
      [data.user_id, data.circle_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  addContacts: (data, callBack) => {
    console.log(data.user_id);
    connection.query(
      addContactsQ,
      [
        Math.random() * 9999999,
        data.user_id,
        data.name,
        data.phone,
        data.relation,
        data.circle_id,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteCirlesContact: (data, callBack) => {
    connection.query(
      deleteCirlesContactQ,
      [data.user_id, data.circle_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getCount: (circle_id, callBack) => {
    connection.query(
      getPreviousCountQ,
      [circle_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        } else {
          return callBack(null, results[0]);
        }
      }
    );
  },
  // updateCounts: (data, callBack) => {
  //   connection.query(
  //     updateCirclesCountQ,
  //     [data.count, data.circle_id],
  //     (error, results, fields) => {
  //       if (error) {
  //         return callBack(error);
  //       } else {
  //         return callBack(null, results);
  //       }
  //     }
  //   );
  // },
};
