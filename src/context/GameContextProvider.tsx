import React from "react";
import GameContext from "./GameContext";


const GameContextProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const [score, setScore] = React.useState<number>(1);

    const increaseScore = () => {
        setScore(prev => prev + 1);
    }

    const reset = () => {
        setScore(0);
    }
    return (
        <GameContext.Provider value={{ score, increaseScore, reset }}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContextProvider;