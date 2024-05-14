import { useState } from 'react'
import estilos from './game.module.css'
import GameOption from '../gameOption/gameoption'

function Game() {

    const [gameState, setGameState] = useState(Array(9).fill(0))


    return (
        <div className={estilos.game}>
            {
                gameState.map((value, pos) => 
                <GameOption 
                    key={`game-option-pos-${pos}`} 
                    status={value} />
                )
            }
            
        </div>
    )
}

export default Game