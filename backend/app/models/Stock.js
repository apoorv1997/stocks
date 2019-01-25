const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const StockSchema = new Schema({
    date:{
        type:String,
        default:''
    },
    symbol:{
        type:String,
        default:''
    },
    open:{
        type:String,
        default:''
    },
    close:{
        type:String,
        default:''
    },
    high:{
        type:String,
        default:''
    },
    low:{
        type:String,
        default:''
    },
    volume:{
        type:String,
        default:''
    }
});

mongoose.model('Stocks',StockSchema);