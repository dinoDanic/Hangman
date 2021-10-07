import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { setErrorMessage } from "../../redux/controls/controls.actions";
import { errorAnimation } from "../../theme/animations";

import { Wrap, Title, Message, Info, RedLayer } from "./error-popup.styles";

const ErrorPopup = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.controls.errorMessage);
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setErrorMessage(null));
    }, 3000);

    return () => clearTimeout(timer);
  }, [errorMessage]);
  return (
    <>
      {ReactDOM.createPortal(
        <Wrap>
          <AnimatePresence>
            {errorMessage && (
              <Info
                variants={errorAnimation}
                animate="animate"
                initial="initial"
                exit="exit"
              >
                <RedLayer />
                <Title>ERR!</Title>
                <Message>{errorMessage}</Message>
              </Info>
            )}
          </AnimatePresence>
        </Wrap>,
        document.getElementById("error-pop")
      )}
    </>
  );
};

export default ErrorPopup;
