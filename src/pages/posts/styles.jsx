import styled from "styled-components";

export const Pages = styled.div `
    margin: 30px auto 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    font-size: 20px;
    font-weight: 500;
`
export const Page = styled.div `
    cursor: pointer;

    &.active { 
        color: rgba(255, 142, 142, 1);
        font-weight: 600;
        border-bottom: 2px solid rgba(255, 142, 142, 1);
        width: 20px;
    }

    &:hover {
        color: rgba(255, 142, 142, 1);  
    }
`