import { useState } from 'react'
import estilos from './game.module.css'
import GameOption from '../gameOption/gameoption'
import Icon from '../icon/icon'

function Game() {

    const [gameState, setGameState] = useState(Array(9).fill(0))
    const [currentPlayer, setCurrentPlayer] = useState(1)

    const handleClick = (pos) => {
        if (gameState[pos] === 0){
        let newGameState = [...gameState]
        newGameState[pos] = currentPlayer
        setCurrentPlayer(currentPlayer * -1)
        setGameState(newGameState)
    } }


    return (
        <div className={estilos.gameContent}>
            <div className={estilos.game}>
                {
                    gameState.map((value, pos) => 
                    <GameOption 
                        key={`game-option-pos-${pos}`} 
                        status={value} 
                        onClick={() => handleClick(pos)}
                        />
                    )
                }
                
            </div>
            <div className={estilos.gameInfo}>
                <h4>Próximo a jogar:</h4>
                {
                    currentPlayer === 1 && <Icon iconName="circle" />
                }
                {
                    currentPlayer === -1 && <Icon iconName="x" />
                }
            </div>
        </div>
    )
}

export default Game