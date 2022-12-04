import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`