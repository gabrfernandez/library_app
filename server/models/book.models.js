const mongoose=require('mongoose'); 

const BookSchema= new mongoose.Schema({
    title:{
        type:String,
        required:[
            true
        ]
    }, 
    authors:{
        type:[String],
        required:[
            true
        ]
    }, 
    description:{
        type: String,
    },
    thumbnail:{
        type: String
    },
    previewLink:{
        type: String
    },
},{
    timestamps:true
})

const Book=mongoose.model('Book', BookSchema);

module.exports=Book;