import { createSelector } from "@reduxjs/toolkit";

export const SelectFilteredPosts = createSelector(
    [state => state.posts.list.posts, state => state.posts.searchQuery, state => state.posts.sortBy],

    (posts, searchQuery, sortBy) => {
        let result = posts;

        if (searchQuery) {
            result = result.filter(post =>
                post.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (sortBy === 'ASC') {
            result = [...result].sort((a, b) => a.title.localeCompare(b.title));
        }

        if (sortBy === 'DESC') {
            result = [...result].sort((a, b) => b.title.localeCompare(a.title));
        }

        return result;
    }
);