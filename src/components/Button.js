import PropTypes from 'prop-types'


const Button = ({color, text, onClick}) => {

    return(
        <button className = "btn" style = {{backgroundColor:color}} onClick = {onClick} > {text} </button>
        
        )
}


//Default Prop

Button.defaultProps = {
    color: 'Black',
    text: 'Add',
}


//setting the propTypes to ensure the proper prop-type(either string or other types) is used
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
