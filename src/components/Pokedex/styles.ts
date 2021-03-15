import styled from "styled-components";
import { MdDelete } from "react-icons/md";

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

export const Image = styled.img`
  max-width: 200px;
  max-height: 200px;
  transition: all 0.3s;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid common.$white;
  border-radius: 5px;
  padding: 10px;
  transition: all 0.5s;
  background-color: ${(props) => props.theme.colors.firstVariant};
  transition: all 0.3s;

  &:hover {
    & > ${Image} {
      transform: scale(1.5);
    }
    transform: scale(1.05);
  }
`;

export const Name = styled.span`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  color: ${(props) => props.theme.colors.main};
`;

export const ActionButtons = styled.div`
  margin: 10px 0 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const SeeMore = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: 15px;
  background: ${(props) => props.theme.colors.main};
  color: white;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const RemoveFromPokedexIcon = styled(MdDelete)`
  cursor: pointer;
  color: #ff8b8e;
  transition: all 0.3s;
  font-size: 30px;

  &:hover {
    transform: scale(1.05);
  }
`;
