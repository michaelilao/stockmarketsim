const mongoose = require('mongoose');

const StockSchema = mongoose.Schema({
    symbol: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Stock', StockSchema);