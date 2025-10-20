import React from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/Container";
import { Typo } from "../../components/Typo";

export const INITIAL_POSTS = [
    {
        id: 1,
        title: 'Post 1',
        image: 'https://cdn4.iconfinder.com/data/icons/audio-video-gaming-controls/512/Audio_video_game_controls_Information-1024.png',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi culpa quod, quisquam laudantium adipisci tempora commodi laborum, minus quidem, blanditiis quibusdam labore libero deserunt eaque rem esse cum placeat exercitationem!',
    },
    {
        id: 2,
        title: 'Post 2',
        image: 'https://cdn4.iconfinder.com/data/icons/audio-video-gaming-controls/512/Audio_video_game_controls_Information-1024.png',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi culpa quod, quisquam laudantium adipisci tempora commodi laborum, minus quidem, blanditiis quibusdam labore libero deserunt eaque rem esse cum placeat exercitationem!',
    },
    {
        id: 3,
        title: 'Post 3',
        image: 'https://cdn4.iconfinder.com/data/icons/audio-video-gaming-controls/512/Audio_video_game_controls_Information-1024.png',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi culpa quod, quisquam laudantium adipisci tempora commodi laborum, minus quidem, blanditiis quibusdam labore libero deserunt eaque rem esse cum placeat exercitationem!',
    },
    {
        id: 4,
        title: 'Post 4',
        image: 'https://cdn4.iconfinder.com/data/icons/audio-video-gaming-controls/512/Audio_video_game_controls_Information-1024.png',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi culpa quod, quisquam laudantium adipisci tempora commodi laborum, minus quidem, blanditiis quibusdam labore libero deserunt eaque rem esse cum placeat exercitationem!',
    },
    {
        id: 5,
        title: 'Post 5',
        image: 'https://cdn4.iconfinder.com/data/icons/audio-video-gaming-controls/512/Audio_video_game_controls_Information-1024.png',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi culpa quod, quisquam laudantium adipisci tempora commodi laborum, minus quidem, blanditiis quibusdam labore libero deserunt eaque rem esse cum placeat exercitationem!',
    },
];

export const PostsPage = () => {
    return (
        <Container>
            <Typo>Публикации</Typo>
            <Posts posts={INITIAL_POSTS} />
        </Container>
    )
};