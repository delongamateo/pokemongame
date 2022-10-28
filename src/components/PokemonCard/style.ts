import styled, { css, Keyframes, keyframes } from "styled-components";

export const Card = styled.div`
  width: 18em;
  height: 26em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Name = styled.p`
  margin: 0;
  ::first-letter {
    text-transform: capitalize;
  }
`;

const calculateAnimation = (
  leftAttack: Keyframes,
  rightAttack: Keyframes,
  side: string,
  isAttacking?: string
) => {
  if (side === "left" && isAttacking === "left") {
    return css`
      ${rightAttack} 2s ease-in-out;,
    `;
  } else if (side === "right" && isAttacking === "right") {
    return css`
      ${leftAttack} 2s ease-in-out;,
    `;
  }
};

type ImageProps = {
  side: string;
  isAttackInProgress: boolean;
  isAttacking?: string;
};

export const Image = styled.img<ImageProps>`
  position: relative;
  width: 12em;
  height: 10em;
  animation: ${(props) =>
    props.isAttackInProgress &&
    calculateAnimation(leftAttack, rightAttack, props.side, props.isAttacking)};
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

type LastLogProps = {
  side: string;
};

export const LastLog = styled.p<LastLogProps>`
  position: absolute;
  font-size: 2em;
  font-weight: bold;
  transform: rotate(${(props) => (props.side === "left" ? 30 : -30)}deg);
  left: ${(props) => (props.side === "left" ? 6 : -2.2)}em;
  top: 0.5em;
`;

export const BackImage = styled.img`
  width: 18em;
  height: 26em;
`;

const leftAttack = keyframes`
0% {
    left: 0;
    transform: translateY(-0%);
    transform: rotateX(180deg)
  }
20% {
  left: 0;
    transform: translateY(-20%);
  }
30% {
  left: 0;
    transform: translateY(-30%);
  }
40% {
  left: 0;
    transform: translateY(-40%);
  }
50% {
  left: 100%;
    transform: translateX(-600%);
   
  }
100% {
  left: 0;
    transform: translateY(0);
    
  }
`;

const rightAttack = keyframes`
0% {
    right: 0;
    transform: translateY(-0%);
    transform: rotateX(-180deg)
  }
20% {
    right: 0;
    transform: translateY(-20%);
  }
30% {
    right: 0;
    transform: translateY(-30%);
  }
40% {
    right: 0;
    transform: translateY(-40%);
  }
50% {
    right: 100%;
    transform: translateX(600%);
   
  }
100% {
    right: 0;
    transform: translateY(0);
    
  }
`;
