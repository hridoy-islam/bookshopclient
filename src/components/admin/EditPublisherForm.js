import React from 'react';
import { useForm } from 'react-hook-form';
import { useUpdatePublisherMutation } from '../../features/publisher/publisherApi';

const EditPublisherForm = ({ data }) => {
    const [updatePublisher, {isLoading} ] = useUpdatePublisherMutation()
    const {_id, name} = data[0]
    const { register, handleSubmit} = useForm({
        defaultValues: {
            _id,
            name,
          }
    });

    const onSubmit = (editData) => {
        updatePublisher(editData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
            
            <input type="text" {...register("name")} defaultValue={name}/>
            <button type="submit">Update</button>
            </form>
            {isLoading && ' Loading...'}
        </div >
    );
};

export default EditPublisherForm;