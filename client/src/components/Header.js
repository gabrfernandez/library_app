import React from 'react';

export default function Header() {


    return (
        <div>
            
            <nav class="navbar navbar-light bg-dark ">
                <a class="navbar-brand text-light" href="/books">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/1200px-Open_book_nae_02.svg.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
                        Reading Company
                </a>
                <a class="navbar-brand text-light" href="/books/library">
                        My Library
                </a>
            </nav>
        </div>
    )
}