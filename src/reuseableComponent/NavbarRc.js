import React from 'react'
import { Link } from 'react-router-dom'

function NavbarRc(props) {
  return (
    <>
        <li className={props.className}><Link to={props.link}>{props.navName}</Link></li>
    </>
  )
}

export default NavbarRc