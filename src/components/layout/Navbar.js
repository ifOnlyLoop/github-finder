import React from 'react' // rce
import PropTypes from 'prop-types' //impt
import {Link} from 'react-router-dom'
const Navbar = (props) => {

    const {title,icon} = props;
        // dont use a tag to avoide loss of data while jumping between pages
        return (
            <nav className='navbar bg-dark'>
                <h1> <i className={icon}/> {title} </h1>   
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        );
}

Navbar.defaultProps = {
    title:  "Github Finder", 
    icon:   "fab fa-github"
}
Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired,
}
export default Navbar
    