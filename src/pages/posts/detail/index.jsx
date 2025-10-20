import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { INITIAL_POSTS } from "..";
import { Typo } from "../../../components/Typo";
import { Container } from "../../../components/Container";
import { Link } from "../../../components/Link";

import * as SC from "./styles";

export const DetailPostPage = () => {
    const { postId } = useParams();

    const currentPost = useMemo(() => {
        return INITIAL_POSTS.find((item) => item.id === Number(postId)); 
    }, [postId]);

    if (!currentPost) {
        return <>Пост не найден</>
    }
    
    return (
        <Container>
            <SC.Post>
                <Typo>{currentPost.title}</Typo>
                <SC.Image src={currentPost.image} alt={currentPost.title} />
                <SC.Text>{currentPost.text}</SC.Text>  
            </SC.Post>
            <Link to={'/posts'}>Обратно к публикациям</Link>
        </Container>
    )
};