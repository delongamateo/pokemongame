import styled, { Keyframes, keyframes } from "styled-components";

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

const attackOneLeft = keyframes`
0% {
  transform: translateX(0%);
}
10% {
  top: -2em;
}
20% {
  top: -4em;
}
30% {
  top: -6em;
}
40% {
  top: -8em;
}
50% {
  top: -10em;
}
60% {
  top: -8em;
}
70% {
  top: -4em;
}
80% {
  top: -4em;
}
90% {
  top; -2em
}
100% {
  transform: translateX(600%);
}
`;

const attackOneRight = keyframes`
0% {
  transform: translateX(0%);
}
10% {
  top: -2em;
}
20% {
  top: -4em;
}
30% {
  top: -6em;
}
40% {
  top: -8em;
}
50% {
  top: -10em;
}
60% {
  top: -8em;
}
70% {
  top: -4em;
}
80% {
  top: -4em;
}
90% {
  top; -2em
}
100% {
  transform: translateX(-600%);
}
`;

const attackTwoRight = keyframes`
0% {
  transform: translateX(0%);
}
100% {
  transform: translateX(-600%);
}
`;

const attackTwoLeft = keyframes`
0% {
  transform: translateX(0%);
}
100% {
  transform: translateX(600%);
}
`;

const calculateAnimation = (
  attackOneLeft: Keyframes,
  attackOneRight: Keyframes,
  attackTwoLeft: Keyframes,
  attackTwoRight: Keyframes,
  side: string,
  isAttacking?: string
) => {
  const animationNumber = Math.floor(Math.random() * 2);
  if (side === "left" && isAttacking === "left") {
    return animationNumber > 0 ? attackOneLeft : attackTwoLeft;
  } else if (side === "right" && isAttacking === "right") {
    return animationNumber > 0 ? attackOneRight : attackTwoRight;
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
      calculateAnimation(
        attackOneLeft,
        attackOneRight,
        attackTwoLeft,
        attackTwoRight,
        props.side,
        props.isAttacking
      )}
    2s ease;
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
