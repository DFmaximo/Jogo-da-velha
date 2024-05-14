import estilos from './gameoption.module.css'
import Icon from '../icon/icon'

const GameIcon = ({iconName}) => <Icon iconName={iconName} size="25px" />

function GameOption ({status}) {
    return (
        <div className={estilos.gameoption}>
            {
                status === 1 && <GameIcon iconName="circle" />
            }
            {
                status === -1 && <GameIcon iconName="x"  />
            }
            
        </div>
    )
}

export default GameOption