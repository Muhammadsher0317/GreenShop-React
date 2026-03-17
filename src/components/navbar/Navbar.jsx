import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button';
import "./Navbar.css"
function Navbar() {
  return (
   <>
   <nav>
    <div className="container">
        <img src="/imgs/logo.svg" alt="" />
        <ul>
           <li>
            <NavLink to={"/"}>Home</NavLink>
           </li>
           <li>
            <NavLink to={"/shop"}>Shop</NavLink>
           </li>
           <li>
            <NavLink to={"/shoping_card"} >Shoping Cart</NavLink>
           </li>
           <li>
            <NavLink>
                Blogs
            </NavLink>
           </li>
        </ul>
        <div className="btns">
             <FaSearch />
             <FaCartShopping />
             
             <Button variant="contained">Login</Button>
        </div>

    </div>
   </nav>
   </>
  )
}

export default Navbar