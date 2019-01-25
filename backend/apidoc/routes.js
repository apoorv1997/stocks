const express = require('express');
const router = express.Router();
const stockController = require("./../../app/controllers/stockController");
const appConfig = require("./../../config/appConfig")


module.exports.setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}/stocks`;

    app.get(`${baseUrl}/all/:limit`,stockController.getAllStocks);
     /**
     * @apiGroup Stocks
     * @apiVersion  1.0.0
     * @api {get} /api/v1/stocks/all/:limit api for getting all stocks.
     *
     * @apiParam {string} setting the number of stocks to read. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "message": "All Data found",
            "status": 200,
            "data":{
                "_id": "5c48aefe18891c124c07e720",
                "date": "2016-01-05 00:00:00",
                "symbol": "WLTW",
                "open": "123.43",
                "close": "125.839996",
                "low": "122.309998",
                "high": "126.25",
                "volume": "2163600.0"
            },
        }
    */
    app.get(`${baseUrl}/:date`,stockController.getByDate);
    /**
     * @apiGroup Stocks
     * @apiVersion  1.0.0
     * @api {get} /api/v1/stocks/:date api for getting stocks with a particular date.
     *
     * @apiParam {string} date for the stocks. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "message": "All Data found",
            "status": 200,
            "data":{
                "_id": "5c48aefe18891c124c07e720",
                "date": "2016-01-05 00:00:00",
                "symbol": "WLTW",
                "open": "123.43",
                "close": "125.839996",
                "low": "122.309998",
                "high": "126.25",
                "volume": "2163600.0"
            },
        }
    */
    app.get(`${baseUrl}/:symbol/:limit`,stockController.getBySymbol);
    /**
     * @apiGroup Stocks
     * @apiVersion  1.0.0
     * @api {get} /api/v1/stocks/symbol/:limit api for getting all stocks with a particular symbol.
     *
     * @apiParam {string} symbol to look for in stocks. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "message": "All Data found",
            "status": 200,
            "data": {
                "_id": "5c48aefe18891c124c07e720",
                "date": "2016-01-05 00:00:00",
                "symbol": "WLTW",
                "open": "123.43",
                "close": "125.839996",
                "low": "122.309998",
                "high": "126.25",
                "volume": "2163600.0"
            },
        }
    */
}