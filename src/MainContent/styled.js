import styled, { css } from 'styled-components';

export const ContentWrapper = styled.div`
    padding:20px;
    text-align: center;
    background: #333;
    width: 50%;
    margin: 0 auto;
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

  font-size: 16px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;


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
 background: #f14;
  border: none;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 10px 20px;
  text-transform: uppercase;
  transition: background-color 0.3s ease-in-out;


    &:hover {
    background: #f00;
}
`;