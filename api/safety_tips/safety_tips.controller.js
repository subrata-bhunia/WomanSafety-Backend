const {
    getAllSafetyTips
} = require('./safety_tips.service');


module.exports ={
    getSafetyTips: (req,res) => {
        getAllSafetyTips((err, results) => {
            if (err) {
                return res.json({
                    success:0,
                    error:err
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });

    },
}