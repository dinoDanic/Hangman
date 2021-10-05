import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

import { Wrap } from "./app.styles";

import Game from "./views/game/game.view";
import Welcome from "./views/welcome/welcome.view";

function App() {
  const controls = useSelector((state) => state.controls);
  return (
    <Wrap>
      <AnimatePresence exitBeforeEnter>
        {controls.play ? <Game key="game" /> : <Welcome key="wel" />}
      </AnimatePresence>
    </Wrap>
  );
}

export default App;
