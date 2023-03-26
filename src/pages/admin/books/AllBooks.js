import React from 'react';
import Book from '../../../components/admin/Book';
import { useGetBooksQuery } from '../../../features/Books/bookApi';

const AllBooks = () => {
    const {isLoading, data, error} = useGetBooksQuery()

    let content;

    if(isLoading){
        content = <p>Loading ........</p>
    }
    if(!isLoading && data) {
        content = <Book data={data} />
    }
    if(error){
        content = <p>Something went wrong</p>
    }
    
    return (
        <div>
            {content}
        </div>
    );
};

export default AllBooks;