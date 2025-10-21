import React from "react";
import { Link } from "../../../Link";

import * as SC from "./styles";

export const Post = ({ post }) => {
    const image = post.image || 'https://cdn4.iconfinder.com/data/icons/audio-video-gaming-controls/512/Audio_video_game_controls_Information-1024.png';
    
    return (
        <SC.Post>
            <SC.Image src={image} alt={post.title} />       
            <SC.Title>{post.title}</SC.Title>
            <Link to={`/posts/${post.id}`}>Подробнее</Link>
        </SC.Post>
    )
};