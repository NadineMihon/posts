import React from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/Container";
import { Typo } from "../../components/Typo";

const INITIAL_POSTS = [
    {
        id: 1,
        title: 'Post 1',
        image: 'https://cdn4.iconfinder.com/data/icons/audio-video-gaming-controls/512/Audio_video_game_controls_Information-1024.png',
    },
        {
        id: 2,
        title: 'Post 2',
        image: 'https://cdn4.iconfinder.com/data/icons/audio-video-gaming-controls/512/Audio_video_game_controls_Information-1024.png',
    },
        {
        id: 3,
        title: 'Post 3',
        image: 'https://cdn4.iconfinder.com/data/icons/audio-video-gaming-controls/512/Audio_video_game_controls_Information-1024.png',
    },
];

export const MainPage = () => {
    return (
        <Container>
            <Typo>Свежие публикации</Typo>
            <Posts posts={INITIAL_POSTS} />
        </Container>
    )
};