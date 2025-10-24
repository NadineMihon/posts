import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div `
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-family: Raleway;
    font-size: 16px;
`
export const MenuWrapper = styled.div `
    margin: 25px auto;
    padding: 12px 20px;
    max-width: 700px;
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    border: 1px solid #00000057;
    border-radius: 40px;
`
export const Menu = styled.div `
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`
export const MenuItem = styled(NavLink) `
    font-family: Raleway;
    font-weight: 500;
    color: #000000b9;
    text-decoration: none;
    cursor: pointer;

    &:hover,
    &.active {
        color: rgba(255, 142, 142, 1);
    }
`