import React from 'react';
import { useGetAuthorsQuery } from '../../../features/author/authorApi';
import Author from '../../../components/admin/Author';

const Authors = () => {
    const {isLoading, data, error} = useGetAuthorsQuery()

    let content;

    if(isLoading){
        content = <p>Loading ........</p>
    }
    if(error){
        content = <p>Something went wrong</p>
    }
    if(!isLoading && data) {
        content = <Author data={data} />
    }
    return (
        <div>
            {content}
        </div>
    );
};

export default Authors;