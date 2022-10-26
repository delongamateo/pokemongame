import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const AttackContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

type ArrowProps = {
  side?: string;
};

export const Arrow = styled.img<ArrowProps>`
  height: 2em;
  margin-bottom: 0.5em;
  rotate: ${(props) => (props.side === "right" ? 0 : 180)}deg;
`;
