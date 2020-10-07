const Book=require('../models/book.models');

module.exports.allBooks=(req, res)=>{
    Book.find()
        .then(books=>res.json(books))
        .catch(err=>res.status(400).json(err));
}

module.exports.saveBook=(req, res)=>{
    Book.create(req.body)
        .then(Book=>res.json(Book))
        .catch(err=>res.status(400).json(err))
}

module.exports.removeBook=(req, res)=>{
    Book.findByIdAndDelete(req.params.id)
        .then(()=>res.json({status:'Success'}))
        .catch(err=>res.status(400).json(err));
}