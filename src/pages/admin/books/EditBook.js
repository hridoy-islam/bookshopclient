import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleBookQuery } from '../../../features/Books/bookApi';
import EditBookForm from '../../../components/admin/EditBookForm';

const EditBook = () => {
    const {id} = useParams()
    const {data, isLoading, error} = useGetSingleBookQuery(id)
    
    let content;

    if(isLoading){
        content = <p>Loading ........</p>
    }
    if(error){
        content = <p>Something went wrong</p>
    }
    if(!isLoading && data) {
        content = <EditBookForm data={data} />
    }
    return (
        <div>
            {content}
        </div>
    );
};

export default EditBook;