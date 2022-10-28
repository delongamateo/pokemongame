import styled from "styled-components";

export const Container = styled.div`
  width: 36em;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  margin: 0.5em;
`;

export const LogsContainer = styled.div`
  background-color: #fff7d6;
  border: 3px solid #ffcc00;
  border-radius: 12px;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  height: 10em;
  max-height: 10em;
  overflow-y: scroll;
`;

export const Log = styled.p`
  margin: 0.2em;
`;
