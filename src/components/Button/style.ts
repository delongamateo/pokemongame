import styled from "styled-components";

export const StyledButton = styled.button`
  displa: flex;
  background-color: #0073bc;
  border: 4px solid #73b9e5;
  border-radius: 20px;
  color: white;
  width: 100%;
  min-width: 10em;
  max-width: 20em;
  height: 3em;
  cursor: pointer;
  margin: 0.5em;
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;
