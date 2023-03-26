import React from 'react';
import { useGetPublishersQuery } from '../../../features/publisher/publisherApi';
import Publisher from '../../../components/admin/Publisher';

const AllPublisher = () => {
    
    const {isLoading, data, error} = useGetPublishersQuery()

    let content;

    if(isLoading){
        content = <p>Loading ........</p>
    }
    if(!isLoading && data) {
        content = <Publisher data={data} />
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

export default AllPublisher;