import Title from '../title/Title'
import Subtitle from '../subtitle/subtitle'
import estilos from './header.module.css'


function Header () {
    return (
        <div className={estilos.header}>
            <Title>Jogo da Velha</Title>
            <Subtitle>Criado por Diego Fernando</Subtitle>
        </div>
    )
}

export default Header