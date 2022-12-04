const { default: styled } = require("styled-components");

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  

  & fieldset {
    border: none;
    margin-bottom: 1rem;
  }

  & fieldset input, button {
    height: 2.5rem;
    border: 1px solid grey;
    background-color: transparent;
    padding: 0.5rem;

    color: gray;
    outline: none;
  }

  & span {
    font-size: 0.75rem;
    color: red;
  }
`