import React, {useState, useEffect} from 'react'; 
import axios from 'axios';
import Search from '../components/Search';
import ResultList from '../components/ResultList'




export default function Body(){

    const [search, setSearch]=useState('')
    const [books, setBooks]=useState([])

    function onChangeSearch(e){
        setSearch(e.target.value
        )
        console.log(search)
    }

    function onSubmitHandler(e){
        e.preventDefault();
        
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search)
            .then(response=>setBooks(response.data.items))
        
    }
    

    return(
        <div>

            <Search 
                onChangeSearch={onChangeSearch}
                onSubmitHandler={onSubmitHandler}
            />
            <ResultList 
                books={books}
            />
        </div>
    )
}