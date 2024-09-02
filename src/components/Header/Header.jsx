import React from 'react'
import './Header.css'
export default function Header({ children }){
    return(
        <div className='Header'>
            <div className="logo">
            {children}
                React</div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contacts</li>
                    <li>Help</li>
                </ul>
            </nav>
        </div>
    )
}