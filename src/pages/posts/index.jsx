import React, { useEffect } from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/Container";
import { Typo } from "../../components/Typo";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/slice/postsSlice";

export const PostsPage = () => {
    const { posts, loading } = useSelector((state) => state.posts.list);

    const dispatch = useDispatch();



    useEffect(() => {
        if (!posts) {
            dispatch(getPosts()); 
        } 
    }, [posts, dispatch]);

    if (loading) {
        return <>Loading...</>
    }

        if (!posts) {
        return <>Посты не найдены</>
    }

    return (
        <Container>
            <Typo>Публикации</Typo>
            <Posts posts={posts} />
        </Container>
    )
};