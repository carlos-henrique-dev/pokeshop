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
  width: 80px;
  height: 40px;
  background: ${(props) => props.theme.colors.main};
  border: none;
  outline: none;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.thirdVariant};
  font-size: 15px;
  font-weight: bold;
  transition: all 0.3s;

  &:active {
    transform: scale(0.95);
  }
`;

export const AddToPokedexButton = styled(BackButton)`
  width: auto;
  margin-left: 20px;
`;

export const GoToPokedexButton = styled(BackButton)`
  width: auto;
  margin-left: 20px;
`;
