import React, { useState } from "react";
import { Container } from "../../../components/Container";
import { Typo } from "../../../components/Typo";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/slice/postsSlice";
import { useNavigate } from "react-router-dom";

import * as SC from "./styles";

const DEFAULT_VALUES = {title: '', body: ''};

export const PostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const [formValues, setFormValues] = useState(DEFAULT_VALUES);

    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost(formValues));
        setFormValues(DEFAULT_VALUES);
        // navigate('/posts');
    };

    const disabled = !formValues.title || !formValues.body;

    return (
        <Container>
            <Typo>Создать новый пост</Typo>
            <SC.Form onSubmit={onSubmit}>
                <SC.Field>
                    <SC.Input
                        value={formValues.title} 
                        type="text" 
                        name="title" 
                        placeholder="Заголовок поста"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                    />    
                </SC.Field>
                <SC.Field>
                    <SC.TextAria 
                        value={formValues.body}
                        name="body" 
                        placeholder="Текст поста" 
                        rows={10} 
                        cols={30}
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                    >
                    </SC.TextAria>    
                </SC.Field>
                <SC.Button type="submit" disabled={disabled}>Сохранить</SC.Button >
            </SC.Form> 
        </Container>
    )
};