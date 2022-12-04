import styled, { css } from "styled-components";

export const Card = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 1rem;
  

  & > div {
    width: 100%;
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
  }

  & > div > p {
    ${(props) =>
      props.status &&
      css`
        text-decoration: line-through;
        color: gray;
      `}
  }
`;
