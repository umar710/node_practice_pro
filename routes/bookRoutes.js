const express = require('express');
const router = express.Router();
const BooksSchemaData = require('../model/books');

//POST Method 
router.post('/', async(request, response)=>{
    try{
        const data = request.body;
        const newBooksData = new BooksSchemaData(data);
        const responseData = await newBooksData.save();
        response.status(200).json(responseData);
        console.log("POST SuccessFully..")
    } catch(e){
        response.status(500).json("Internal Server Error //500");
    }
} )

//GET Method 
router.get('/', async(request, response)=>{
    try{
        const data = request.body;
        const getBooksData = await BooksSchemaData.find()
        response.status(200).json(getBooksData)
        console.log("Get Data SuccessFully..")
    } catch(e){
        response.status(500).json("Internal Error")
    }
})

//PUT Method 
router.put('/:id', async(request, response)=>{
    try{
        const {id} = request.params;
        const data = request.body;

        const responseBookData = await BooksSchemaData.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true,
        });
        response.status(200).json(responseBookData);
        console.log("Upadated Data");
    } catch(e){
        response.status(500).json("Internal Error")
    }
})

//DELETE Method
router.delete('/:id', async(request, response)=>{
    try{
        const {id} = request.params;
        const responseBookDataDeleted = await BooksSchemaData.findByIdAndDelete(id);
        response.status(200).json("Data Deleted")
    } catch(e){
        response.status(500).json("Internal Error")
    }
})



module.exports = router;