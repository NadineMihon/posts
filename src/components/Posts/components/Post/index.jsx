import React from "react";
import { Link } from "../../../ui/Link";

import * as SC from "./styles";

export const Post = ({ post }) => {
    const image = post.image || 'https://journals.researchparks.org/public/journals/3/article_4808_cover_en_US.png';
    
    return (
        <SC.Post>
            <SC.Image src={image} alt={post.title} />       
            <SC.Title>{post.title}</SC.Title>
            <Link to={`/posts/${post.id}`}>Подробнее</Link>
        </SC.Post>
    )
};