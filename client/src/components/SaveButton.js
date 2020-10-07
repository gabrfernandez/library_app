import React, { useState } from 'react'; 
import axios from 'axios'; 
import { navigate } from '@reach/router';

export default function SaveButton(props){

    // const[title, setTitle]=useState(props.title)
    // const[authors, setAuthors]=useState(props.author)
    // // const [description, setDescription]=useState()
    // const [thumbnail, setThumbnail]=useState(props.image)

    function addSubmit(e){
        e.preventDefault();

        axios.post('http://localhost:8000/api/books',{
            title:props.title, 
            authors:props.author,
            description:props.description, 
            thumbnail:props.image,
            previewLink:props.previewLink
        })
        .then(()=>navigate('/books/library'))

    }
    return(
        <button  onClick={addSubmit} type="button" className="btn btn-info">
            Add to Library
        </button>
    )
}