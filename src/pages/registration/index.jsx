import React, { useId, useState } from "react";
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { Form } from "../../components/ui/Form";
import { Field } from "../../components/ui/Field";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const DEFAULT_VALUES = { name: '', surname: '', email: '', password: '' };
;

export const RegistrationPage = () => {
    const [formValues, setFormValues] = useState(DEFAULT_VALUES);
    const userId = Date.now();
    const newUser = { id: userId, ...formValues };

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        try {
            const users = JSON.parse(localStorage.getItem('users'));
            
            if (!users) {
                localStorage.setItem('users', JSON.stringify([newUser]));
                alert('Вы успешно зарегистрировались');
                navigate('/auth');
                return;
            } 

            if (users.find((user) => user.email === formValues.email)) {
                alert('Пользователь с таким email уже существует');
                return;
            } 

            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            alert('Вы успешно зарегистрировались');

            navigate('/auth');

        } catch (e) {
            console.log(e);
        }
    };

    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value});
    };

    const disabled = !formValues.email || !formValues.password;

    return (
        <Container>
            <Typo>Страница регистрации</Typo>
            <Form onSubmit={onSubmit} autoComplete="off">
                <Field>
                    <Input
                        value={formValues.name} 
                        type="text" 
                        name="name" 
                        placeholder="Имя"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                    />    
                </Field>
                <Field>
                    <Input
                        value={formValues.surname} 
                        type="text" 
                        name="surname" 
                        placeholder="Фамилия"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                    />    
                </Field>
                <Field>
                    <Input
                        value={formValues.email} 
                        type="email" 
                        name="email" 
                        placeholder="Электронная почта"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                    />    
                </Field>
                <Field>
                    <Input
                        value={formValues.password} 
                        type="password" 
                        name="password"
                        placeholder="Пароль"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                    />    
                </Field>
                <Button type="submit" disabled={disabled}>Регистрация</Button >
            </Form>  
        </Container>
    )
};