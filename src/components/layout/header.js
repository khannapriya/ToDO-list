import React from 'react';
import {Link} from 'react-router-dom';
import {AiFillSetting} from 'react-icons/ai'
function Header(){

    return (
        <header style={headerStyle}>
            <h1> To Do List</h1>
        <div className="setting">
            <AiFillSetting />
        </div>
            {/* <ul>
                <li className="ListItem">
                    <Link style={LinkStyle} to="/" >Home </Link>
                </li>
                <li className="ListItem">
                    <Link style={LinkStyle} to="/about" > About </Link>
                </li>
            </ul> */}
        </header>
    )
}

const headerStyle ={
    background:'#333',
    color:'#fff',
    textAlign: 'çenter',
    top:'0',
}


const LinkStyle = {
    color : '#fff',

}
export default Header