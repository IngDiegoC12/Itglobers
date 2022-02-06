import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaTimes, FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import './Navbar.css'


function Navbar({nameBrand1, nameBrand2, nameBrand3}) 
{
    const [click, setClick]= useState(false)
    //const [button, setButton] =useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    /* const showButton = () =>{
      if (window.innerWidth <= 960)
      {
          setButton (false);
      }
      else
      {
        setButton (true);
      }

    }
      useEffect(()=> {showButton();}, [])

      window.addEventListener('resize',showButton);*/

    
  return (
    <IconContext.Provider value={{ color: '#fff'}}> 
  <div className='navbar'>
      <div className="navbar-container contianer">
          <Link to = '/' className='navbar-logo'onClick={closeMobileMenu}>
              <MdFingerprint className='navbar-icon'/>ItGlobersTest
          </Link>
          <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes/> : <FaBars />}
          </div>
          <ul className={ click ? 'nav-menu active': 'nav-menu'}>

              <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      {nameBrand1}
                  </Link>
              </li>

              <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      {nameBrand2}
                  </Link>
              </li>

              <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      {nameBrand3}
                  </Link>
              </li>
             

          </ul>


      </div>




  </div>
  </IconContext.Provider> 
  )
}

export default Navbar