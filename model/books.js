const mongoose = require('mongoose');


const BooksSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    img:{
        type: String,
        required: true,
    },
    summary:{
        type: String,
        required: true
    }
})

const BooksSchemaData = mongoose.model('Books', BooksSchema);
module.exports = BooksSchemaData;