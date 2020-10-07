import React from 'react';
import {Link, navigate} from '@reach/router';
import SaveButton from './SaveButton';

export default function BookItem(props){

    return(
        <div>
            <img src={props.image} alt=""/>
            <div>
                
                {/* <Link to={'/books/'+props.id }><h3>{props.title}</h3></Link> */}
                <h3><a href={props.previewLink}>{props.title}</a></h3>
                <h4>{props.author}</h4>
                <p>Published: {props.published}</p>
                <SaveButton
                image={props.image}
                title={props.title}
                author={props.author}
                description={props.description}
                published={props.published}
                previewLink={props.previewLink}
                />
            </div>
        </div>
    )
}