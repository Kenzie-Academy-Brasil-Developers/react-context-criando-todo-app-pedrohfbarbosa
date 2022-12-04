const { default: styled } = require("styled-components");

export const AppStyled = styled.div`
  text-align: center;

  & button {
    cursor: pointer;
  }

  & > div {
    background-color: ${({ theme }) => theme.backgroundColor};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: calc(10px + 2vmin);
    color: ${({ theme }) => theme.color};
  }
`;
