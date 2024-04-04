import Title from '../title/Title'
import Subtitle from '../subtitle/subtitle'
import estilos from './header.module.css'
import Icon from '../icon/icon'


function Header () {
    return (
        <div className={estilos.header}>
            <Title>Jogo da Velha</Title>
            <Subtitle>Criado por Diego Fernando</Subtitle>
            <div className={estilos.iconContent}>
                <Icon iconName="github" link="https://github.com/DFmaximo" />
            </div>
        </div>
    )
}

export default Header