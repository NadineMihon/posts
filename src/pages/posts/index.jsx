import React, { useEffect } from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/slice/postsSlice";
import { Loader } from "../../components/ui/Loader";

export const PostsPage = () => {
    const { posts, loading } = useSelector((state) => state.posts.list);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!posts) {
            dispatch(getPosts()); 
        } 
    }, [posts, dispatch]);

    if (loading) {
        return <Loader />
    }

        if (!posts) {
        return <Typo>Посты не найдены</Typo>
    }

    return (
        <Container>
            <Typo>Публикации</Typo>
            <Posts posts={posts} />
        </Container>
    )
};