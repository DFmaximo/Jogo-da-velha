import estilos from './subtitle.module.css'

function Subtitle ({children}) {
    return (
        <h6 className={estilos.subtitle}>{children}</h6>
    )
}

export default Subtitle