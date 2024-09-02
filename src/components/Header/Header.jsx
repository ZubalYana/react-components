import React from 'react'
import './Header.css'
export default function Header(){
    return(
        <div className='Header'>
            <div className="logo">React</div>
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