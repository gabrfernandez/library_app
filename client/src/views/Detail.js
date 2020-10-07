// import React, {useEffect, useState} from 'react';
// import axios from 'axios';
// import {navigate} from '@reach/router';
// import Header from '../components/Header';
// import BookItem from '../components/BookItem'
// import SaveButton from '../components/SaveButton';

// export default function Detail(props){
//     const[book, setBook]=useState('')

//     useEffect(()=>{
//         axios.get('https://www.googleapis.com/books/v1/volumes?q='+props.items.id)
//             .then(response=>setBook(response.data.items))
//     })

//     return(
//         <div>
//             <Header />
//             {/* <BookItem 
//                 image={book.volumeInfo.imageLinks.thumbnail}
//                 title={book.volumeInfo.title}
//                 author={book.volumeInfo.authors}
//                 published={book.volumeInfo.publishedDate}
//             /> */}
//             <img src={props.items.volumeInfo.imageLinks.thumbnail} alt=""/>
//             <div>
//                 <h2>{props.items.volumeInfo.title}</h2>
//                 <h3>{props.items.volumeInfo.authors}</h3>
//                 <p>{props.items.volumeInfo.publishedDate}</p>
//             </div>
//             <SaveButton
//                 bookId={book.id}
//                 saveCallBack={()=>navigate('/books/')}
//             />
//         </div>
//     )
// }