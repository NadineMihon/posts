import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

const LinkStyle = css`
    color: black;
    text-decoration: none;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        color: rgba(255, 142, 142, 1);
    }
`

export const SimpleLink = styled(Link)`${LinkStyle}`

export const NavigationLink = styled(NavLink)`${LinkStyle}`