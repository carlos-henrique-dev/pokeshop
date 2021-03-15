import styled from "styled-components";

export const StoreContainer = styled.div`
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
