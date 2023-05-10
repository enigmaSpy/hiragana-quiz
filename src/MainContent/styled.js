import styled, { css } from 'styled-components';

export const ContentWrapper = styled.div`
    padding:20px;
    text-align: center;
    background: #333;
    width: 50%;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    @media (max-width: 767px){
      width: 90%;
    }
`;

export const CurrentChar = styled.p`
    
    font-size: 2.5rem;
`;

export const FormContent = styled.form`

`;

export const Input = styled.input`
  
  position: absolute;
  z-index:-1;
  height:0;
  font-size: 16px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

    ${({isCorrect})=>isCorrect&&css`
    position: relative;
    z-index:1;
        height:auto;

    `}

&:focus {
  outline: none;
  border-color: #0066cc;
  box-shadow: 0 0 4px 0 #0066cc;
}

`;

export const CorrectAnswer = styled.p`
    padding:9px;
    color: red;
    display: none;
    ${({ isCorrect }) => isCorrect && css`
        display: block;
    `}
`;

export const Button = styled.button`
  background-color: rgb(235, 47, 50);
  border: none;
  border-radius: 50px;
  color: #fff;
  font-size: 1.2rem;
  padding: 10px 20px;
  text-transform: uppercase;
  transition: background-color 0.3s ease-in-out;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 1px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;


    &:hover {
    background: #f00;
}
`;