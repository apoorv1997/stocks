const mongoose = require('mongoose');
const StockModel = mongoose.model('Stocks');

let getAllStocks = (req,res) => {
    req.params.limit = parseInt(req.params.limit);
    StockModel.find().limit(req.params.limit).lean().exec((err,result) => {
        if(err) {
            console.log(err);
            res.send({
                message:`${err.message}`,
                data:null,
                status:500
            })
        } else {
            res.send({
                message:'All data found',
                data:result,
                status:200
            })
        }
    })
}

let getByDate = (req, res) => {
    StockModel.findOne({date:req.params.date}).lean().exec((err,result) => {
        if(err) {
            console.log(err);
            res.send({
                message:'No data found',
                status:404,
                data:null
            })
        } else {
            delete result._id;
            res.send({
                message:'Data found',
                status:200,
                data:result
            })
        }
    })
}

let getBySymbol = (req, res) => {
    StockModel.find({symbol:req.params.symbol}).limit(parseInt(req.params.limit)).lean().exec((err, result) => {
        if(err) {
            console.log(err);
            res.send({
                message:'No data found',
                status:404,
                data:null
            })
        } else {
            delete result._id;
            res.send({
                message:'data found',
                status:200,
                data:result
            })
        }
    })
}

module.exports = {
    getAllStocks:getAllStocks,
    getByDate:getByDate,
    getBySymbol:getBySymbol
}