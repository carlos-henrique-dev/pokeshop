import styled, { css } from "styled-components";

export const PokedexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0 50px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 20px;
`;

export const Statistics = styled.div`
  width: 90%;
`;

export const PokedexItems = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 230px);
  grid-gap: 1rem;
  padding: 100px 0 50px;
  justify-content: center;

  @media (max-width: 801px) {
    grid-template-columns: repeat(auto-fill, 160px);
  }
`;
