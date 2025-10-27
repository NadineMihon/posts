import React, { useState } from "react";
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { Form } from "../../components/ui/Form";
import { Field } from "../../components/ui/Field";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slice/authSlice";
import { Modal } from "../../components/ui/Modal";

const SUCCESS_MESSAGE = 'Добро пожаловать!';
const FAILURE_MESSAGE = 'Данный пользователь не найден в системе';

export const AuthPage = () => {
    const [formValues, setFormValues] = useState({ email: '', password: '' });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [openModal, setOpenModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const showModal = (message) => {
        setModalMessage(message);
        setOpenModal(true);
    };

    const closeModal = () => {
        setOpenModal(false);

        if (modalMessage === SUCCESS_MESSAGE) {
            navigate('/posts');  
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        try {
            const users = JSON.parse(localStorage.getItem('users'));

            if (!users) {
                showModal(FAILURE_MESSAGE);
                return;
            }

            const currentUser = users.find((user) => user.email === formValues.email && user.password === formValues.password);

            if (!currentUser) {
                showModal(FAILURE_MESSAGE);
                return;  
            }

            dispatch(login(currentUser));

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
            <Typo>Авторизация</Typo>
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
                <Button type="submit" disabled={disabled}>Войти</Button >
            </Form>
        </Container>
    )
};