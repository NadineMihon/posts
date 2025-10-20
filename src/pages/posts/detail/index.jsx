import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Typo } from "../../../components/Typo";
import { Container } from "../../../components/Container";
import { Link } from "../../../components/Link";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../../redux/slice/postsSlice";

import * as SC from "./styles";

export const DetailPostPage = () => {
    const { postId } = useParams();
    const postForView = useSelector((state) => state.posts.postForView);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost(Number(postId)));
    }, [postId]);

    if (!postForView) {
        return <>Пост не найден</>
    }
    
    return (
        <Container>
            <SC.Post>
                <Typo>{postForView.title}</Typo>
                <SC.Image src={postForView.image} alt={postForView.title} />
                <SC.Text>{postForView.text}</SC.Text>  
            </SC.Post>
            <Link to={'/posts'}>Обратно к публикациям</Link>
        </Container>
    )
};