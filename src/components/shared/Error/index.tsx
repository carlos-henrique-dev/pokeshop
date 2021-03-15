import React from "react";
import { ErrorContainer, ErrorIcon, Message } from "./styles";

function Error() {
  return (
    <ErrorContainer>
      <ErrorIcon />
      <Message>
        Parece que houve um erro <br />
        Tente novamente
      </Message>
    </ErrorContainer>
  );
}

export default Error;
