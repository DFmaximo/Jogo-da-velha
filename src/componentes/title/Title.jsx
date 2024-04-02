import estilos from './title.module.css'


function Title ({ children }){
    return (
        <h1 className={estilos.title}>{ children}</h1>
    )
}

export default Title