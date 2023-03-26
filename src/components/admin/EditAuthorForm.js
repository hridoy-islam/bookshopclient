import React from 'react';
import { useForm } from 'react-hook-form';
import { useUpdateAuthorMutation } from '../../features/author/authorApi';

const EditAuthorForm = ({ data }) => {
    const [updateAuthor, {isLoading} ] = useUpdateAuthorMutation()
    const {_id, name} = data[0]
    const { register, handleSubmit} = useForm({
        defaultValues: {
            _id,
            name,
          }
    });

    const onSubmit = (editData) => {
        updateAuthor(_id, editData);
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

export default EditAuthorForm;