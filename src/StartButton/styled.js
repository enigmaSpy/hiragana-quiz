import styled from "styled-components";

export const Button = styled.button`
     background-color: rgb(235, 47, 50);

    position: absolute;
    left:50%;
    transform: translateX(-50%);

    color: white;
    border: none;
    padding: 16px 32px;
    font-size: 24px;
    font-weight: bold;
    border-radius: 8px;
    transition: background .3s ease-in-out;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 1px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    &:hover{
        background: #b2363c;
    }

`;