import styled from "styled-components";

export const Card = styled.div`
  width: 18em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.p`
  margin: 0;
  ::first-letter {
    text-transform: capitalize;
  }
`;

export const Image = styled.img`
  width: 12em;
  height: 10em;
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.p`
  margin: 0.5em;
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff7d6;
  border: 3px solid #ffcc00;
  border-radius: 12px;
  padding: 0.5em;
`;

export const Stat = styled.p`
  margin: 0;
  ::first-letter {
    text-transform: capitalize;
  }
`;
