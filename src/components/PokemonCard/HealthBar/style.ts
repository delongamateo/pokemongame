import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 0.5em;
`;

type HealthProp = {
  health: number;
};

const calculateColor = (health: number, border?: boolean) => {
  if (health >= 50) {
    return border ? "#079325" : "#62FF84";
  } else if (health < 50 && health >= 30) {
    return border ? "#FFCC00" : "#FFF7D6";
  } else {
    return border ? "#FF0000" : "#FF7575";
  }
};

export const Value = styled.p<HealthProp>`
  margin: 0;
  color: ${(props) => calculateColor(props.health, true)};
`;

export const Bar = styled.div<HealthProp>`
  width: 100%;
  height: 0.6em;
  border: 2px solid ${(props) => calculateColor(props.health, true)};
  border-radius: 0.4em;
  background: linear-gradient(
    to right,
    ${(props) => calculateColor(props.health)} ${(props) => props.health}%,
    white 0%
  );
`;
