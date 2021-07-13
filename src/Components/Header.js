import React from 'react'
import './Header.css'
import PropTypes from 'prop-types'
import { BsHouseDoorFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Header = (props) => {
    return (
        <header>
            {/*add the search box if isSearchBar is set to true else add the back button*/}
            {props.isSearchBar?
                <input type='text' placeholder="Search" onChange = {props.handleOnChange}/>
            :<h2 className="movie-h2">Movie Details</h2>}
            <Link to="./"><BsHouseDoorFill className="home-icon"/></Link>
        </header>
    )
}
Header.propTypes =
{
    isSearchBar : PropTypes.bool.isRequired
}
export default Header
