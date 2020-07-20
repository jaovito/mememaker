import styled from 'styled-components';

export const Wrapper = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    
    
`

export const Card = styled.div `
    background: #fff;
    max-width: 550px;
    width: 90%;
    border-radius: 8px;
    padding: 20px;
    margin-top: 20px;
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.20);

    h2 {
        font-size: 22px;
        color: #392D2D;
        margin-bottom: 10px;
    }

    @media(max-width: 580px) {
        img {
            width:90%;
        }
    }
`

export const Templates = styled.div `
    width: 100%;
    background: #eee;
    border-radius: 8px;
    overflow-y: auto;
    display: flex;
    align-items: center;
    padding: 0 15px;
    margin-bottom: 30px;


    button {
        background: transparent;
        margin-right: 10px;
        border: 2px solid transparent;
        transition: 400ms;

        img {
            width: 53px;
            height: 53px;
            transition: 250ms ease-in;
            
        }

        &.selected {
        border-color: #CF5B5B;
        border-radius: 10px;
        background: #CF5B5B;
        
        > img {
            width: 200px;
            height: auto;
            border-radius: 8px;

        }
    }

    }
`

export const Form = styled.form `
    input {
        width:100%;
        height: 40px;
        border-radius: 8px;
        border: 1px solid #DBDBDB;
        padding: 0 15px;
        font-size: 14px;
        margin-bottom: 10px;
    }
`

export const Button = styled.button `
    width:100%;
    height: 40px;
    border-radius: 8px;
    border: 0;
    background: #CF5B5B;
    color: #FFF;
    font-weight: bold;
    transition: opacity 0.2s ease-in;
    font-size: 14px;
    border: 2px solid transparent;

    &:hover {
        opacity: 0.8;
    }
`