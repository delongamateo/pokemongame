import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2em;
  height: 100vh;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 4em;
`;

export const AttackContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

type ArrowProps = {
  side?: string;
};

export const Arrow = styled.img<ArrowProps>`
  height: 2em;
  margin-bottom: 0.5em;
  rotate: ${(props) => (props.side === "right" ? 0 : 180)}deg;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;
