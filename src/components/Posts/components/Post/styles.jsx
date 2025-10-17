import { Link } from "react-router-dom";
import styled from "styled-components";

export const Post = styled.div `
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
`
export const Image = styled.img `
    max-width: 200px;
    width: 100%;
`

export const Title = styled.div `
    font-size: 22px;
    font-weight: bold;
`

export const DetailLink = styled(Link) `
    color: black;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: rgba(255, 142, 142, 1);
    }
`