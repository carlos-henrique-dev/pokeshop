import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.thirdVariant};
`;

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  height: 60px;
  padding: 5px 20px;
`;

export const Logo = styled.h1`
  color: ${(props) => props.theme.colors.thirdVariant};
  text-shadow: 2px 2px ${(props) => props.theme.colors.main};
  cursor: pointer;
`;

interface ThemesIconsProps {
  readonly isActive: boolean;
}

export const ThemesIcons = styled.img<ThemesIconsProps>`
  width: ${(props) => (props.isActive ? "35px" : "30px")};
  height: ${(props) => (props.isActive ? "35px" : "30px")};
  filter: ${(props) => (props.isActive ? "grayscale(0)" : "grayscale(100%)")};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
    filter: grayscale(0);
  }
`;

export const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.footer`
  background-color: #696969;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
