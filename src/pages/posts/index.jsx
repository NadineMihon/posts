import React, { useEffect, useState } from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { Field } from "../../components/ui/Field";
import { Input } from "../../components/ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, setSearchQuery, setSortBy } from "../../redux/slice/postsSlice";
import { Loader } from "../../components/ui/Loader";
import { SelectFilteredPosts } from "../../redux/selectors/postsSelectors";
import { Select } from "../../components/ui/Select";

export const PostsPage = () => {
    const { loading } = useSelector((state) => state.posts.list);
    const { searchQuery } = useSelector(state => state.posts);
    const { sortBy } = useSelector((state) => state.posts);
    const filteredPosts = useSelector(SelectFilteredPosts);

    const dispatch = useDispatch();
    
    const [searchValue, setSearchValue] = useState(searchQuery);

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setSearchQuery(searchValue));
        }, 500);
  
        return () => clearTimeout(timer);
    }, [searchValue, dispatch]);

    useEffect(() => {
        if (!filteredPosts) {
            dispatch(getPosts()); 
        } 
    }, [filteredPosts, dispatch]);

    if (loading) {
        return <Loader />
    }

    if (!filteredPosts) {
        return <Typo>Посты не найдены</Typo>
    }

    return (
        <Container>
            <Typo>Публикации</Typo>
            <Field $maxWidth="700px">
                <Field $maxWidth="300px">
                    <Input
                        value={searchValue}
                        type="text"
                        name="searchValue"
                        placeholder="Поиск..."
                        onChange={(e) => setSearchValue(e.target.value)}
                    />              
                </Field>
                <Field $maxWidth="200px">
                    <Select
                        value={sortBy}
                        onChange={(e) => dispatch(setSortBy(e.target.value))}
                    >
                        <option value=''>По умолчанию</option>
                        <option value='ASC'>От А до Я</option>
                        <option value='DESC'>От Я до А</option>
                    </Select>  
                </Field>
            </Field>
            <Posts posts={filteredPosts} />
        </Container>
    )
};