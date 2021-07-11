import React from 'react'
import './Header.css'
import PropTypes from 'prop-types'
import { BsHouseDoorFill } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";
const Header = (props) => {
    
    return (
        <header className="auto-margin">
            {props.isSearchBar?<input type='text' placeholder="Search"/>
            :<BsArrowLeftShort className="back-icon"/>}
            <BsHouseDoorFill className="home-icon"/>
        </header>
    )
}
Header.propTypes =
{
    isSearchBar : PropTypes.bool.isRequired
}
export default Header
