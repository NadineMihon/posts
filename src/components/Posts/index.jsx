import React from "react";
import { Post } from "./components/Post";
import { Container } from "../Container"
import * as SC from "./styles";

export const Posts = ({ posts }) => (
    <Container>
        <SC.Title>Свежие публикации</SC.Title>
        <SC.Posts>
            {
                posts.map((post) => <Post key={post.id} post={post} />)
            }
        </SC.Posts>
    </Container>
);