import React, { useState } from "react";
import { Container } from "../../../components/ui/Container";
import { Typo } from "../../../components/ui/Typo";
import { Button } from "../../../components/ui/Button";
import { Form } from "../../../components/ui/Form";
import { Field } from "../../../components/ui/Field";
import { Input } from "../../../components/ui/Input";
import { TextAria } from "../../../components/ui/TextAria";

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
            <Form onSubmit={onSubmit}>
                <Field>
                    <Input
                        value={formValues.title} 
                        type="text" 
                        name="title" 
                        placeholder="Заголовок поста"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                    />    
                </Field>
                <Field>
                    <TextAria 
                        value={formValues.body}
                        name="body" 
                        placeholder="Текст поста" 
                        rows={10} 
                        cols={30}
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                    />    
                </Field>
                <Button type="submit" disabled={disabled}>Сохранить</Button >
            </Form> 
        </Container>
    )
};