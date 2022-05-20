const connection = require("../../config/Connection");
const getallCirclesQ = `SELECT * FROM circles_name where user_id = ?`;
const addCirclesQ = `INSERT INTO circles_name (id,user_id,name) VALUES (?,?,?);`;
const deleteCirlesQ = `DELETE FROM circles_name WHERE circles_name.id = ?`;
const updateCirclesCountQ = `UPDATE circles_name SET count = ? WHERE circles_name.id = ?; `;
const getPreviousCountQ = `SELECT circles_name.count FROM circles_name WHERE circles_name.id = ?; `;

module.exports = {
  getallCircles: (user_id, callBack) => {
    console.log(user_id);
    connection.query(getallCirclesQ, [user_id], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  addCircles: (data, callBack) => {
    console.log(data.user_id);
    connection.query(
      addCirclesQ,
      [Math.random() * 9999999, data.user_id, data.name],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteCirles: (circle_id, callBack) => {
    connection.query(deleteCirlesQ, [circle_id], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
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
  updateCounts: (data, callBack) => {
    connection.query(
      updateCirclesCountQ,
      [data.count, data.circle_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        } else {
          return callBack(null, results);
        }
      }
    );
  },
};
