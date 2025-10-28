import styled from "styled-components";

export const Field = styled.div `
    margin: 0 auto;
    max-width: ${props => props.$maxWidth || 'none'};
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
`