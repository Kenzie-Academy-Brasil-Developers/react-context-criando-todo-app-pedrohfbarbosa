import styled, { css } from "styled-components";

export const Card = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.button.borderColor};
  background-color: ${({ theme }) => theme.button.backgroundColor};

  & > div {
    width: 100%;
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
  }

  & > div > p {
    color: ${({ theme }) => theme.button.textColor};
  }

  & > div > p {
    ${(props) =>
      props.status &&
      css`
        text-decoration: line-through;
      `}
  }
`;
