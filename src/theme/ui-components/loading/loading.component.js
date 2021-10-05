import React from "react";
import ReactDOM from "react-dom";

import { Wrap } from "./loading.styles";

const Loading = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Wrap
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          loading
        </Wrap>,
        document.getElementById("loading")
      )}
    </>
  );
};

export default Loading;
