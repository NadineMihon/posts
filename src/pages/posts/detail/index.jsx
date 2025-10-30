import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Typo } from "../../../components/ui/Typo";
import { Container } from "../../../components/ui/Container";
import { Link } from "../../../components/ui/Link";
import { Button } from "../../../components/ui/Button";
import { Modal } from "../../../components/ui/Modal";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPostById, showPost } from "../../../redux/slice/postsSlice";
import { Field } from "../../../components/ui/Field/styles";
import { Loader } from "../../../components/ui/Loader";

import * as SC from "./styles";

export const DetailPostPage = () => {
    const { postId } = useParams();
    const id = Number(postId);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { post, loading } = useSelector((state) => state.posts.postForView);
    const { posts } = useSelector((state) => state.posts.list);
    const { freshPosts } = useSelector((state) => state.posts);
    const { user } = useSelector((state) => state.auth);
    
    const [postForDelete, setPostForDelete] = useState(null);

    const showEditAndDeleteBtn = posts && user;

    const onDeletePost = () => {
        dispatch(deletePost(postForDelete.id));
        setPostForDelete(null);
        navigate('/posts');
    };

    const sourcePosts = posts ? posts : freshPosts.posts; 

    useEffect(() => {
        const postExists = sourcePosts?.some((post) => post.id === id);

        if (!postExists) {
            dispatch(showPost(null));
            return;
        }

        const foundPost = sourcePosts ? sourcePosts.find((post) => post.id === id) : undefined;
        
        if (foundPost) {
            dispatch(showPost(foundPost));
        } else {
            dispatch(getPostById(id)); 
        }
    }, [id, sourcePosts, dispatch]);

    if (loading) {
        return <Loader/>
    }

    if (!post || !post.hasOwnProperty('id')) {
        return <Typo>Пост не найден</Typo>
    }
    
    const image = post.image || 'https://journals.researchparks.org/public/journals/3/article_4808_cover_en_US.png';

    return (
        <Container>
            {
                postForDelete && 
                    <Modal>
                        <p>Вы уверены, что хотите удалить публикацию с ID - {postForDelete.id}?</p>
                        <Field>
                            <Button bgColor="red" onClick={() => onDeletePost()}>Да</Button>
                            <Button onClick={() => setPostForDelete(null)}>Нет</Button>                         
                        </Field>
                    </Modal>
            }
            <SC.Post>
                <Typo>{post.title}</Typo>
                <SC.Image src={image} alt={post.title} />
                <SC.Text>{post.body}</SC.Text>  
            </SC.Post>
            <SC.LinkWrapper>
                <Link to={'/posts'}>Обратно к публикациям</Link>
                {
                    showEditAndDeleteBtn && <Link to={`/posts/${id}/edit`}>Редактировать пост</Link>                    
                }
                {
                    showEditAndDeleteBtn && <Button bgColor="red" onClick={() => setPostForDelete(post)}>Удалить</Button>  
                }               
            </SC.LinkWrapper>
        </Container>
    )
};