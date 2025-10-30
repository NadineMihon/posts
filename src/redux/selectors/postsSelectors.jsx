import { createSelector } from "@reduxjs/toolkit";

export const SelectFilteredPosts = createSelector(
    [
        state => state.posts.list.posts, 
        state => state.posts.searchQuery, 
        state => state.posts.sortBy
    ],

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

export const SelectPaginatedPosts = createSelector(
    [
        SelectFilteredPosts, 
        state => state.posts.pagination.currentPage, 
        state => state.posts.pagination.postsPerPage
    ],

    (filteredPosts, currentPage, postsPerPage) => {

        if (!filteredPosts || filteredPosts.length === 0) {
            return {
                paginatedPosts: [],
                pageCount: 0,  
            } 
        }

        const pageCount = Math.ceil(filteredPosts.length / postsPerPage);
        const paginatedPosts = filteredPosts.slice(
            (currentPage - 1) * postsPerPage,
            currentPage * postsPerPage
        );

        return {
            paginatedPosts,
            pageCount,
        }
    }
);