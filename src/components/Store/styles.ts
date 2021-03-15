import styled from "styled-components";

export const StoreContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, 230px);
  grid-gap: 1rem;
  padding: 100px 0 50px;
  justify-content: center;

  @media (max-width: 801px) {
    grid-template-columns: repeat(auto-fill, 160px);
  }
`;

export const LoadMore = styled.button`
  background: ${(props) => props.theme.colors.secondary};
  margin: 20px;
  width: 200px;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bolder;
  cursor: pointer;
  color: ${(props) => props.theme.colors.thirdVariant};
  text-shadow: 2px 2px ${(props) => props.theme.colors.main};
  transition: all 0.3s;

  &:active {
    transform: scale(0.95);
  }
`;
