import React from 'react'; 
import axios from 'axios'; 

export default props=>{
    const {bookId, successCallback}= props;
    const deleteBook=e=>{
        axios.delete('http://localhost:8000/api/book/'+bookId +'/delete')
            .then(res=>{
                successCallback();
            })
    }
    return(
        <button type="button" class="btn btn-danger" onClick={deleteBook}>
            Remove
        </button>
    )
}