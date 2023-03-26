import React from 'react';
import { useParams } from 'react-router-dom';
import { useSinglePublisherQuery } from '../../../features/publisher/publisherApi';
import EditPublisherForm from '../../../components/admin/EditPublisherForm';

const EditPublisher = () => {
    const {id} = useParams()
    const {data, isLoading, error} = useSinglePublisherQuery(id)
    let content;

    if(isLoading){
        content = <p>Loading ........</p>
    }
    if(error){
        content = <p>Something went wrong</p>
    }
    if(!isLoading && data) {
        content = <EditPublisherForm data={data} />
    }

    return (
        <div>
            {content}
        </div>
    );
};

export default EditPublisher;