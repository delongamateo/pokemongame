import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Value = styled.p``;

type BarProps = {
  value: number;
};

export const Bar = styled.div<BarProps>`
  width: 100%;
`;
