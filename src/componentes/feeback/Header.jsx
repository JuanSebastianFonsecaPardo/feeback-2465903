import propTypes from 'prop-types';

const Header = ({ bgColor, c }) => {
    
    return(
        <header 
        style={{
            backgroundColor: bgColor,
            color: c
        }}>
            <h1>Encabezado</h1>
        </header>
    )
}

//VALORES POR DEFECTO

Header.defaultProps={
    bgColor: '#e5b23c',
    color: '#fff'
}

//VALIDACIONES DE PROPS

Header.propTypes={
    bgColor: propTypes.string,
    color: propTypes.string
}

export default Header