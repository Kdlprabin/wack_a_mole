import { createContext } from "react";

const GameContext = createContext({
    score: 0,
    increaseScore: () => {},
    reset: () => {},
});


export default GameContext;