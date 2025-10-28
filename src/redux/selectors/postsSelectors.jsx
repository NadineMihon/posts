import { createSelector } from "@reduxjs/toolkit";

export const SelectFilteredPosts = createSelector(
    [state => state.posts.list.posts, state => state.posts.searchQuery],

    (posts, searchQuery) => {
        if (!searchQuery) return posts;

        return posts.filter(post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
);