import styled from "styled-components";

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
