import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleBookQuery } from '../features/Books/bookApi';
import ProductDetails from './ProductDetails';

const SingleBook = () => {
    const {id} = useParams()
    const {data, isLoading, error} = useGetSingleBookQuery(id)
    console.log(data)
    
    let content;

    if(isLoading){
        content = <p>Loading ........</p>
    }
    if(error){
        content = <p>Something went wrong</p>
    }
    if(!isLoading && data) {
        content = <ProductDetails data={data}/>
    }
    return (
        <div>
            {content}
        </div>
    );
};

export default SingleBook;