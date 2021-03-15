import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 100px 20px 50px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
`;

export const BackButton = styled.button`
  width: 60px;
  height: 40px;
  background: ${(props) => props.theme.colors.main};
  border: none;
  outline: none;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.thirdVariant};
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s;

  &:active {
    transform: scale(0.95);
  }
`;

export const GoToPokedexButton = styled(BackButton)`
  width: auto;
  margin-left: 5px;
`;

export const AddToPokedexButton = styled(GoToPokedexButton)`
  width: auto;
  margin-left: 5px;
`;

export const InfoContainer = styled.div`
  width: 100%;
`;

export const InfoTitle = styled.h1`
  margin: 0;
  color: #585858;
  text-align: left;
`;
