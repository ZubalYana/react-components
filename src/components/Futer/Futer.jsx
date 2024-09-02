import React from 'react'
import './Futer.css'
export default function Futer({ children }){
    return(
        <div className='Futer'>
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