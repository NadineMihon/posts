import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Typo } from "../../../components/Typo";
import { Container } from "../../../components/Container";
import { Link } from "../../../components/Link";
import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "../../../redux/slice/postsSlice";

import * as SC from "./styles";

export const DetailPostPage = () => {
    const { postId } = useParams();

    const { post, loading } = useSelector((state) => state.posts.postForView);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostById(Number(postId)));
    }, [postId]);

    if (loading) {
        return <>Loading...</>
    }

    if (!post || !post.hasOwnProperty('id')) {
        return <>Пост не найден</>
    }
    
    const image = post.image || 'https://cdn4.iconfinder.com/data/icons/audio-video-gaming-controls/512/Audio_video_game_controls_Information-1024.png';

    return (
        <Container>
            <SC.Post>
                <Typo>{post.title}</Typo>
                <SC.Image src={image} alt={post.title} />
                <SC.Text>{post.body}</SC.Text>  
            </SC.Post>
            <Link to={'/posts'}>Обратно к публикациям</Link>
        </Container>
    )
};