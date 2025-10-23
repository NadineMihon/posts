import React, { useState } from "react";
import { Container } from "../../../components/Container";
import { Typo } from "../../../components/Typo";
import { Button } from "../../../components/Button";

import * as SC from "./styles";

const DEFAULT_VALUES = { title: '', body: '' };

export const PostForm = ({ title, onSubmitForm, defaultValues }) => {
    const [formValues, setFormValues] = useState(defaultValues || DEFAULT_VALUES);

    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitForm(formValues);
        setFormValues(DEFAULT_VALUES);
    };

    const disabled = !formValues.title || !formValues.body;

    return (
        <Container>
            <Typo>{title}</Typo>
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
                <Button type="submit" disabled={disabled}>Сохранить</Button >
            </SC.Form> 
        </Container>
    )
};