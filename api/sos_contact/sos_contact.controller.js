const { updateCount } = require("../circles/circles.controller");
const { updateCounts, getCount } = require("../circles/circles.service");
const { getAllContact, addContacts } = require("./sos_contact.service");

module.exports = {
  getAllContact: (req, res) => {
    var body = req.body;
    getAllContact(
      {
        user_id: body.user_id,
        circle_id: body.circle_id,
      },
      (err, results) => {
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
      }
    );
  },
  addContact: (req, res) => {
    const body = req.body;
    addContacts(body, (err, results) => {
      if (err) {
        return res.json({
          success: 0,
          error: err,
        });
      } else {
        var circle_id = body.circle_id;
        getCount(circle_id, (err, rst) => {
          if (err) {
            return res.json({
              success: 0,
              data: "Something went to wrong",
            });
          } else {
            var count = rst.count;
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
                  data: "SOS contact added successfully",
                });
              }
            });
          }
        });
      }
    });
  },
  // deleteCircle: (req, res) => {
  //   const circle_id = req.params.circle_id;
  //   deleteCirles(circle_id, (err, results) => {
  //     if (err) {
  //       return res.json({
  //         success: 0,
  //         error: err,
  //       });
  //     }
  //     return res.json({
  //       success: 1,
  //       data: "Circle delete successfully",
  //     });
  //   });
  // },
  // updateCount: (req, res) => {
  //   const circle_id = req.params.circle_id;
  //   getCount(circle_id, (err, results) => {
  //     if (err) {
  //       return res.json({
  //         success: 0,
  //         data: "Something went to wrong",
  //       });
  //     } else {
  //       var count = results.count;
  //       console.log(typeof count);
  //       updateCounts({ circle_id, count: count + 1 }, (error, response) => {
  //         if (error) {
  //           console.log(error);
  //           return res.json({
  //             success: 0,
  //             data: "Something went to wrong",
  //           });
  //         } else {
  //           return res.json({
  //             success: 1,
  //             data: "Count update",
  //           });
  //         }
  //       });
  //     }
  //   });
  // },
};
