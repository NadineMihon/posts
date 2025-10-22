import React from "react";
import { PostForm } from "../../components/PostForm";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editPost, getPostById } from "../../../redux/slice/postsSlice";

export const EditPostPage = () => {
    const { postId } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const { posts } = useSelector((state) => state.posts.list);

    const onSubmitForm = (formValues) => {
        dispatch(editPost(formValues));
        navigate(`/posts/${postId}`);
    };

    if (!posts) {
        return <>Пост не найден</>;
    }

    const foundPost = posts.find((item) => item.id === Number(postId));

    return (
        <PostForm title={`Редактировать пост - ${postId}`} onSubmitForm={onSubmitForm} defaultValues={foundPost}/>
    )
};