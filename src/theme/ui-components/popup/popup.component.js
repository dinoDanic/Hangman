import React from "react";
import ReactDOM from "react-dom";

import { Container, Layer, Content, Title, Message } from "./popup.styles";
import { popContentAnimation } from "../../animations";

const PopUp = ({ children, title, message }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Container>
          <Layer />
          <Content
            variants={popContentAnimation}
            animate="animate"
            initial="initial"
          >
            {title && <Title>{title}</Title>}
            {message && <Message>{message}</Message>}
            {children}
          </Content>
        </Container>,
        document.getElementById("pop")
      )}
    </>
  );
};

export default PopUp;
