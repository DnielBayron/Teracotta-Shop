import React,  { useContext }  from 'react'
import { Link, NavLink } from 'react-router-dom'
import {AboutContext} from '../../context/about-context';
import './Navbar.css';

const Navbar = () => {
  const {menuOpen,setMenuOpen} = useContext(AboutContext);
  return (

    <nav>
    <Link className='title' to='/about'> TERACOTTA</Link>
    <div className='menu' onClick={() => {setMenuOpen(!menuOpen)}}>
    <span></span>
    <span></span> 
    <span></span>
    </div>
    <ul className= {menuOpen ? "open" : ""}>
        <li className='active'>
        <NavLink to= '/about'>Home</NavLink>
        </li>
        <li>
        <NavLink to='/'>Shop</NavLink>
        </li>
        <li>
        <NavLink to= '/cart'><i class='bx bx-shopping-bag bx-sm'></i></NavLink>
        </li>
    </ul>
    
     

    </nav>
  
  )
}

export default Navbar
