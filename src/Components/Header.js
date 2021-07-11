import React from 'react'
import './Header.css'
import PropTypes from 'prop-types'
import { BsHouseDoorFill } from "react-icons/bs";
const Header = (props) => {
    return (
        <header>
            {/*add the search box id isSearch bar is true else add the back button*/}
            {props.isSearchBar?
                <input type='text' placeholder="Search" onChange = {props.handleOnChange}/>
            :<h2 className="movie-h2">Movie Details</h2>}
            <BsHouseDoorFill className="home-icon"/>
        </header>
    )
}
Header.propTypes =
{
    isSearchBar : PropTypes.bool.isRequired
}
export default Header
