import React from 'react';
import BookItem from '../components/BookItem';

export default function ResultList(props){

    return(
        <div>
            {props.books.map((book)=>{
                return <BookItem
                    key={book.id}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    published={book.volumeInfo.publishedDate}
                    previewLink={book.volumeInfo.previewLink}
                    />
                
            })}
        </div>
    )
}