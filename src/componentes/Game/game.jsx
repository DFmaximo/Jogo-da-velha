import estilos from './game.module.css'
import GameOption from '../gameOption/gameoption'

function Game() {
    return (
        <div className={estilos.game}>
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
        </div>
    )
}

export default Game