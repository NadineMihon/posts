import React from "react";
import { PostForm } from "../../components/PostForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../../redux/slice/postsSlice";

export const AddPostPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const onSubmitForm = (formValues) => {
        dispatch(addPost(formValues));
        navigate('/posts');
    };

    return (
        <PostForm title={'Создать новый пост'} onSubmitForm={onSubmitForm}/>
    )
};