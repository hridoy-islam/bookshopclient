import React from 'react';
import { useParams } from 'react-router-dom';
import { useSingleAuthorQuery } from '../../../features/author/authorApi';
import EditAuthorForm from '../../../components/admin/EditAuthorForm';

const EditAuthor = () => {
    const {id} = useParams()
    const {data, isLoading, error} = useSingleAuthorQuery(id)
    let content;

    if(isLoading){
        content = <p>Loading ........</p>
    }
    if(error){
        content = <p>Something went wrong</p>
    }
    if(!isLoading && data) {
        content = <EditAuthorForm data={data} />
    }

    return (
        <div>
            {content}
        </div>
    );
};

export default EditAuthor;