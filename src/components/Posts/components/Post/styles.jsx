import styled from "styled-components";

export const Post = styled.div `
    max-width: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #00000024;
    border-radius: 20px;
    padding: 20px;
`
export const Image = styled.img `
    max-width: 150px;
    width: 100%;
`
export const Title = styled.div `
    font-size: 22px;
    font-weight: bold;
`