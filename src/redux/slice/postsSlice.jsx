import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    {
        id: 5,
        title: 'Post 5',
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
        id: 3,
        title: 'Post 3',
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
        id: 1,
        title: 'Post 1',
        image: 'https://cdn4.iconfinder.com/data/icons/audio-video-gaming-controls/512/Audio_video_game_controls_Information-1024.png',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi culpa quod, quisquam laudantium adipisci tempora commodi laborum, minus quidem, blanditiis quibusdam labore libero deserunt eaque rem esse cum placeat exercitationem!',
    },
  ],
  postForView: null,
  freshPosts: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.list = action.payload;
    },
    editPost: (state, action) => {
        // edit post
    },
    getPost: (state, action) => {
      state.postForView = state.list.find((item) => item.id === action.payload);
    },
    getFreshPosts: (state) => {
      state.freshPosts = state.list.slice(0, 3);
    },
    addPost: (state, action) => {
        // add new post by data
    },
  },
});

export const { setPosts, editPost, getPost, getFreshPosts, addPost } = postsSlice.actions;

export default postsSlice.reducer;