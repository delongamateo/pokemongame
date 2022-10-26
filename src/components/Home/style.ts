import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  position: relative;
`;

export const Logo = styled.img`
  position: absolute;
  top: -70px;
  left: 300px;
  rotate: -30deg;
  z-index: -1;
`;

export const LogoTitle = styled.img``;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingMessage = styled.p`
  font-size: 2em;
`;

const spinner = keyframes`
0% {
  transform: rotate(0deg);
}

100% {
  transform: rotate(360deg);
}
`;

export const LoadingImage = styled.img`
  width: 2em;
  height: 2em;
  animation: ${spinner} 4s linear infinite;
`;
