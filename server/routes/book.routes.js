const bookCtl=require('../controllers/book.controller');
console.log("Test");
module.exports=app=>{
    app.post('/api/books', bookCtl.saveBook)
    app.get('/api/books', bookCtl.allBooks)
    app.delete('/api/book/:id/delete', bookCtl.removeBook)
}