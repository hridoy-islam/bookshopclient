import React  from 'react';
import { useForm } from "react-hook-form";

const EditBookForm = ({ data }) => {
    const {title, stock, description, genre, price} = data
    const { register, handleSubmit} = useForm({
        defaultValues: {
            title,
            stock,
            description,
            genre,
            price,
          }
    });

    const onSubmit = editData => console.log(editData);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
            <input type="text" {...register("title")}/>
            <input type="number" {...register("stock")}/>
            <textarea {...register("description")}></textarea>
            <input type='text' {...register("genre")}/>
            <input type="number" {...register("price")} />
            </form>
        </div >
    );
};

export default EditBookForm;
