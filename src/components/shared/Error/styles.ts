import styled from "styled-components";
import { BiError } from "react-icons/bi";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorIcon = styled(BiError)`
  width: 100px;
  height: 100px;
  color: #ff8b8e;
`;

export const Message = styled.span`
  text-align: center;
  color: white;
  margin-top: 20px;
  font-size: 20px;
`;
