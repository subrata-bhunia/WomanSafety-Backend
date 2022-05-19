const {
  getallCircles,
  addCircles,
  deleteCirles,
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
    const circle_id = req.params.circle_id;
    deleteCirles(circle_id, (err, results) => {
      if (err) {
        return res.json({
          success: 0,
          error: err,
        });
      }
      return res.json({
        success: 1,
        data: "Circle delete successfully",
      });
    });
  },
};
