const { deleteCirlesContact } = require("../sos_contact/sos_contact.service");
const {
  getallCircles,
  addCircles,
  deleteCirles,
  getCount,
  updateCount,
  updateCounts,
} = require("./circles.service");

module.exports = {
  getAllCircle: (req, res) => {
    const user_id = req.params.user_id;
    getallCircles(user_id, (err, results) => {
      if (err) {
        return res.json({
          success: 0,
          error: err,
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  addCircle: (req, res) => {
    const user_id = req.params.user_id;
    const body = req.body;
    const data = { user_id, ...body };
    addCircles(data, (err, results) => {
      if (err) {
        return res.json({
          success: 0,
          error: err,
        });
      }
      return res.json({
        success: 1,
        data: "Circle added successfully",
      });
    });
  },
  deleteCircle: (req, res) => {
    const body = req.body;
    console.log(typeof body.user_id, body.user_id);
    console.log(typeof body.circle_id, body.circle_id);
    deleteCirlesContact(body, (err, result) => {
      if (err) {
        return res.json({
          success: 0,
          error: err.sqlMessage,
        });
      } else {
        deleteCirles(body.circle_id, (err, results) => {
          if (err) {
            return res.json({
              success: 0,
              error: err.sqlMessage,
            });
          } else {
            return res.json({
              success: 1,
              data: "Circle delete successfully",
            });
          }
        });
      }
    });
  },
  updateCount: (req, res) => {
    const circle_id = req.params.circle_id;
    getCount(circle_id, (err, results) => {
      if (err) {
        return res.json({
          success: 0,
          data: "Something went to wrong",
        });
      } else {
        var count = results.count;
        console.log(typeof count);
        updateCounts({ circle_id, count: count + 1 }, (error, response) => {
          if (error) {
            console.log(error);
            return res.json({
              success: 0,
              data: "Something went to wrong",
            });
          } else {
            return res.json({
              success: 1,
              data: "Count update",
            });
          }
        });
      }
    });
  },
};
