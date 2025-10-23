import styled, { css } from "styled-components";

const CommonStyles = css `
    font-family: Raleway;
    font-size: 16px;
`
export const Form = styled.form `
    max-width: 350px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
`
export const Field = styled.div `
    width: 100%;
`
export const Input = styled.input `
    ${CommonStyles};
    width: 100%;
    outline: none;
    border-radius: 5px;
    border: 1px solid #00000078;
    padding: 4px 8px;
`
export const TextAria = styled.textarea `
    ${CommonStyles};
    width: 100%;
    resize: none;
    outline: none;
    font-size: 15px;
    border-radius: 5px;
    border: 1px solid #00000078;
    padding: 4px 8px;
`