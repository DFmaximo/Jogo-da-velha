import estilos from './GamePage.module.css'
import Header from '../header/header'
import Game from '../Game/game'

function GamePage() {
    return(
        <div className={estilos.container}>
            <Header />
            <Game />
        </div>
    )
}

export default GamePage