import React from "react";
import ReactDOM from "react-dom";
import { loadAnimation } from "../../animations";
import LoadingImg from "../../../img/loading.gif";

import { Wrap, Load, LoadImg } from "./loading.styles";

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
            <LoadImg src={LoadingImg} />
            Loading...
          </Load>
        </Wrap>,
        document.getElementById("loading")
      )}
    </>
  );
};

export default Loading;
