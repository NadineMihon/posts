import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Typo } from "../../../components/Typo";
import { Container } from "../../../components/Container";
import { Link } from "../../../components/Link";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPostById, showPost } from "../../../redux/slice/postsSlice";

import * as SC from "./styles";
import { Button } from "../../../components/Button";
import { Modal } from "../../../components/Modal";

export const DetailPostPage = () => {
    const { postId } = useParams();
    const id = Number(postId);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { post, loading } = useSelector((state) => state.posts.postForView);
    const { posts } = useSelector((state) => state.posts.list);
    
    const [postForDelete, setPostForDelete] = useState(null);

    const onDeletePost = () => {
        dispatch(deletePost(postForDelete.id));
        setPostForDelete(null);
        navigate('/posts');
    };

    useEffect(() => {  
        const foundPost = posts ? posts.find((item) => item.id === id) : undefined;
        if (foundPost) {
            dispatch(showPost(foundPost));
        } else {
           dispatch(getPostById(id)); 
        }
    }, [id, posts, dispatch]);

    if (loading) {
        return <>Loading...</>
    }

    if (!post || !post.hasOwnProperty('id')) {
        return <>Пост не найден</>
    }
    
    const image = post.image || 'https://cdn4.iconfinder.com/data/icons/audio-video-gaming-controls/512/Audio_video_game_controls_Information-1024.png';

    return (
        <Container>
            {
                postForDelete && 
                    <Modal>
                        <SC.ModalWrapper>
                            <p>Вы уверены, что хотите удалить публикацию с ID - {postForDelete.id}?</p>
                            <SC.ButtonWrapper>
                                <Button bgColor="red" onClick={() => onDeletePost()}>Да</Button>
                                <Button onClick={() => setPostForDelete(null)}>Нет</Button>                         
                            </SC.ButtonWrapper>
                        </SC.ModalWrapper>
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
                    posts && <Link to={`/posts/${id}/edit`}>Редактировать пост</Link>                    
                }
                {
                    posts && <Button bgColor="red" onClick={() => setPostForDelete(post)}>Удалить</Button>  
                }               
            </SC.LinkWrapper>
        </Container>
    )
};