import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 600px;

  @media (max-width: 801px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  margin: 0 0 20px;
  color: ${(props) => props.theme.colors.main};
  text-align: center;
`;

export const Subtitle = styled.h2`
  text-align: center;
  margin: 0;
  color: white;
  font-weight: lighter;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 801px) {
    flex-direction: column;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  text-align: center;
  width: 250px;
  padding: 20px 0;
  border-radius: 5px;
  margin: 10px;
  color: white;
  font-size: 20px;
  font-weight: bolder;
  background-color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  transition: all 0.3s;

  &:active {
    background-color: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.secondVariant};
    transform: scale(0.95);
  }
`;
