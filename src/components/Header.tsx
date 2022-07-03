import React from 'react'
import './Header.scss'
const Header = () => {
  return (
    <div className='header'>
        <h1>Shortly</h1>
       <nav>
       <ul className='nav-list'>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resuorces</li>
        </ul>
        <div className='auth'>
                <button>Login</button>
                <button>Sign Up</button>
        </div>
       </nav>
    </div>
  )
}

export default Header