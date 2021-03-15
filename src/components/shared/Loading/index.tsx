import React from "react";
import { LoadingContainer, LoadingIcon, Message } from "./styles";

function Loading() {
  return (
    <LoadingContainer>
      <LoadingIcon />
      <Message>Carregando...</Message>
    </LoadingContainer>
  );
}

export default Loading;
