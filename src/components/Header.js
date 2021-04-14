// import React from 'react'
// not need!!
import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'


// const onClick= () => {
//     alert('hey')
// }

const Header = ({ title, onAdd, showAdd }) => {

    const location = useLocation()


    return (


        <header className='header'>
            <h1>{title}</h1>


            {location.pathname === '/' && <Button
                textColor={'pink'}
                color={showAdd ? '#808080' : '#000'}
                text={showAdd ? 'Close' : 'Add'}
                onClick={onAdd} />}

        </header>
    )
}

Header.defaultProps = {
    title: 'Hello Moto',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header
