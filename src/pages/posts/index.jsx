import React, { useEffect, useState } from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { Field } from "../../components/ui/Field";
import { Input } from "../../components/ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, setSearchQuery } from "../../redux/slice/postsSlice";
import { Loader } from "../../components/ui/Loader";
import { SelectFilteredPosts } from "../../redux/selectors/postsSelectors";

export const PostsPage = () => {
    const { loading } = useSelector((state) => state.posts.list);
    const filteredPosts = useSelector(SelectFilteredPosts);

    const dispatch = useDispatch();
    
    const [searchValue, setSearchValue] = useState('');

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
                    <select>
                        <option value='nameFromASC'>От А до Я</option>
                        <option value='nameFromDESC'>От Я до А</option>
                    </select>  
                </Field>
            </Field>
            <Posts posts={filteredPosts} />
        </Container>
    )
};