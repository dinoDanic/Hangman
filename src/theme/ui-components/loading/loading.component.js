import React from "react";
import ReactDOM from "react-dom";

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
          <Load
            animate={{ opacity: 1 }}
            initial={{ opacity: 0.2 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
            }}
          >
            Loading...
          </Load>
        </Wrap>,
        document.getElementById("loading")
      )}
    </>
  );
};

export default Loading;
