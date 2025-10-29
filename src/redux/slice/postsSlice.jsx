import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postsAPI } from '../../api/postsAPI';

const initialState = {
  list: {
    posts: //[{id: 1, title: "test 1", body: "test 1"}],
    null,
    loading: false
  },
  postForView: {
    post: null,
    loading: false
  },
  freshPosts: {
    posts: null,
    loading: false
  },
  searchQuery: '',
  sortBy: '',
};

export const getPosts = createAsyncThunk(
  'posts/fetchPosts',
  async() => {
    return await postsAPI.fetchPosts();
  }
);

export const getFreshPosts = createAsyncThunk(
  'posts/fetchFreshPosts',
  async(limit = 3, { getState }) => {
    const state = getState();
    const existingPosts = state.posts.list.posts;

    if (!existingPosts) {
      return await postsAPI.fetchFreshPosts(limit);
    }

    if (existingPosts.length <= limit) {
      return existingPosts;
    }
      
    if (existingPosts.length > limit) {
      return existingPosts.slice(0, limit);
    }
  }
);

export const getPostById = createAsyncThunk(
  'posts/fetchPostById',
  async(postId) => {
    return await postsAPI.fetchById(postId);
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    editPost: (state, action) => {
      state.list.posts = state.list.posts.map((post) => {
        if (post.id === action.payload.id) {
          return action.payload;
        }
        return post;
      })
    },
    addPost: (state, action) => {
      const newPost = {...action.payload};
      newPost.id = new Date().getTime();
      state.list.posts = state.list.posts ? [newPost, ...state.list.posts] : [newPost];
    },
    showPost: (state, action) => {
        state.postForView = {
          post: action.payload,
          loading: false
        };
    },
    deletePost: (state, action) => {
      state.list.posts = state.list.posts.filter((post) => post.id !== action.payload);
      
      state.postForView = {
          post: null,
          loading: false
      };
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.list = {
          posts: null,
          loading: true
        };
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.list = {
          posts: action.payload,
          loading: false
        };
      })
      .addCase(getFreshPosts.pending, (state) => {
        state.freshPosts.loading = true;
      })
      .addCase(getFreshPosts.fulfilled, (state, action) => {
        state.freshPosts = {
          posts: action.payload,
          loading: false
        };
      })
      .addCase(getPostById.pending, (state) => {
        state.postForView = {
          post: null,
          loading: true
        };
      })
      .addCase(getPostById.fulfilled , (state, action) => {
        state.postForView = {
          post: action.payload,
          loading: false
        };
      })
    }
});

export const { editPost, addPost, showPost, deletePost, setSearchQuery, setSortBy } = postsSlice.actions;

export default postsSlice.reducer;