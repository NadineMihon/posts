import React, { useState } from "react";
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { Form } from "../../components/ui/Form";
import { Field } from "../../components/ui/Field";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { Modal } from "../../components/ui/Modal";
import { useNavigate } from "react-router-dom";

const SUCCESS_MESSAGE = 'Вы успешно зарегистрировались!';
const FAILURE_MESSAGE = 'Пользователь с таким email уже существует';

export const RegistrationPage = () => {
    const [formValues, setFormValues] = useState({ name: '', surname: '', email: '', password: '' });
    const userId = Date.now();
    const newUser = { id: userId, ...formValues };

    const navigate = useNavigate();

    const [openModal, setOpenModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    
    const showModal = (message) => {
        setModalMessage(message);
        setOpenModal(true);
    };
    
    const closeModal = () => {
        setOpenModal(false);
    
        if (modalMessage === SUCCESS_MESSAGE) {
            navigate('/auth');  
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        try {
            const users = JSON.parse(localStorage.getItem('users'));
            
            if (!users) {
                localStorage.setItem('users', JSON.stringify([newUser]));
                showModal(SUCCESS_MESSAGE);
                navigate('/auth');
                return;
            } 

            if (users.find((user) => user.email === formValues.email)) {
                showModal(FAILURE_MESSAGE);
                return;
            } 

            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            showModal(SUCCESS_MESSAGE);

        } catch (e) {
            console.log(e);
        }
    };

    const onChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const disabled = !formValues.email || !formValues.password;

    return (
        <Container>
            <Typo>Страница регистрации</Typo>
            {
                openModal && 
                    <Modal>
                        <p>{modalMessage}</p>
                        <Field>
                            <Button onClick={() => closeModal()}>Ок</Button>
                        </Field>
                    </Modal>
            }
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