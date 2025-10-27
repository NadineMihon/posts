import styled from "styled-components";

export const Post = styled.div `
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`
export const Image = styled.img `
    max-width: 300px;
    width: 100%;
`
export const Text = styled.p `
    text-align: left;
    line-height: 1.5;
    text-indent: 18px;
`
export const LinkWrapper = styled.div `
    max-width: 600px;
    width: 100%;
    margin: 20px auto;
    display: flex;
    gap: 40px;
    justify-content: space-around;
    align-items: center;
`