import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {navigate} from '@reach/router';
import Header from '../components/Header';
import DeleteButton from '../components/DeleteButton';

export default function Library (){
    const [savedBooks, SetSavedBooks]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/books')
            .then(res=>SetSavedBooks(res.data))
    },[savedBooks])
    return(
        <div>
            <Header />
            <h1>Library/ Saved Books</h1>
            <table >
                <thead>
                    <tr className="border border-primary">
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>Cover</th>
                        <th>Book Link</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {savedBooks.map(savedBook=>(
                        <tr  className="border border-primary" key={savedBook.id}>
                            <td >{savedBook.title}</td>
                            <td>{savedBook.authors}</td>
                            <td>{savedBook.description}</td>
                            <td><img src={savedBook.thumbnail} alt={savedBook.title} /></td>
                            <td><button className="btn btn-success"><a href={savedBook.previewLink}>Read</a></button></td>
                            <td>
                                <DeleteButton
                                    bookId={savedBook._id}
                                    successCallback={()=>navigate('/books/library')}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}