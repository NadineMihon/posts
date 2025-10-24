import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "../ui/Container";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/Button";
import { logout } from "../../redux/slice/authSlice";

import * as SC from "./styles";

export const Root = () => {
    const { user } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickExitBtn = () => {
        dispatch(logout());
        navigate('/auth');
    };

    return (
        <SC.Wrapper>
            <Container>
                <SC.MenuWrapper>
                    <SC.Menu>        
                        <SC.MenuItem to={'/'}>Главная</SC.MenuItem>
                        <SC.MenuItem to={'/posts'}>Список постов</SC.MenuItem>
                        {
                            user && <SC.MenuItem to={'/posts/add'}>Создать пост</SC.MenuItem>
                        }
                        {
                            !user && <SC.MenuItem to={'/auth'}>Авторизация</SC.MenuItem>
                        }
                        {
                            !user && <SC.MenuItem to={'/registration'}>Регистрация</SC.MenuItem>
                        }
                    </SC.Menu>     
                    {
                        user && <Button onClick={onClickExitBtn}>Выход</Button>
                    } 
                </SC.MenuWrapper>                     
            </Container>
            <Outlet />
        </SC.Wrapper>
    )
};