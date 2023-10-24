import "./mole.css"
import HoleImage from "../../assets/hole.png"
import MoleImage from "../../assets/mole.png"

import { useContext } from 'react';
import GameContext from '../../context/GameContext';


const Mole = ({ active }: {
    active: boolean;
}) => {
    const { increaseScore } = useContext(GameContext);
    return (
        <div className='container'>
            {
                active ?
                    <img className='mole' onClick={increaseScore} src={MoleImage} alt="mole" />
                    :
                    <img src={HoleImage} alt="hole" />
            }
        </div>
    );
}

export default Mole;
