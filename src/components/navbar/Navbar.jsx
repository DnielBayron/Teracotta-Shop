import React,  { useContext }  from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
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
        <NavLink to= '/cart'><ShoppingCart size= {25}/></NavLink>
        </li>
    </ul>
    
     

    </nav>
  
  )
}

export default Navbar
