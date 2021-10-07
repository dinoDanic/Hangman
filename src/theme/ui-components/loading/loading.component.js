import React from "react";
import ReactDOM from "react-dom";
import { loadAnimation } from "../../animations";

import { Wrap, Load } from "./loading.styles";

const Loading = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Wrap
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          <Load variants={loadAnimation} animate="animate" initial="initial">
            Loading...
          </Load>
        </Wrap>,
        document.getElementById("loading")
      )}
    </>
  );
};

export default Loading;
