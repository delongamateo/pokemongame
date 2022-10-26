import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const Title = styled.h1`
  margin-top: 2em;
  font-size: 4em;
  ::first-letter {
    text-transform: capitalize;
  }
`;
