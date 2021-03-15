import { CgPokemon } from "react-icons/cg";
import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoadingIcon = styled(CgPokemon)`
  width: 100px;
  height: 100px;
  animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  color: ${(props) => props.theme.colors.secondary};

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Message = styled.span`
  color: white;
  margin-top: 20px;
`;
