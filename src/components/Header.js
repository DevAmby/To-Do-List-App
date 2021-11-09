import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'


const Header = ({title, onAdd, showAdd}) => {

    const location = useLocation()

    return (
        <header className = "header">
            <h1>{title}</h1>
            {location.pathname === '/' && <Button color = {showAdd ? 'red' : 'green'} text = {showAdd ? 'Close' : 'Add'} onClick = {onAdd}/>}
        </header>
    )
}

//Default Prop

Header.defaultProps = {
    title: 'Task Manager',
}


//setting the propTypes to ensure the proper prop-type(either string or other types) is used
Header.propTypes = {
    title: PropTypes.string,
}


export default Header
