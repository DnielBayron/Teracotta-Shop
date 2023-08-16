import React from 'react';
import tera from '../../assets/image/tera.jpg';
import './about.css';
import {useNavigate } from 'react-router-dom'; 





export const About = () => {
  const navigate = useNavigate();
  
  return (


   <div className="shopTitle">
    <div className='about'>
       

    <div className='about-text'>
    <h1>Be a Succulent in a world of delicate flowers. </h1>  
    <button onClick={() => {navigate("/")}}> Become a Plant Parent Now </button>
        <div className='socials'>
        <a href ="https://www.facebook.com/teracotta.ph" ><i class='bx bxl-facebook-circle bx-lg bx-tada-hover'></i></a>
        <a href="https://www.instagram.com/teracotta.ph/?hl=en"><i class='bx bxl-instagram bx-lg bx-tada-hover' ></i></a>
        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"><i class='bx bxl-gmail bx-lg bx-tada-hover'></i></a>
        </div>
    </div>

    <div className='about-img'>
    <img src={tera} alt="" />
    </div>


    
       
    </div>



    </div>

  

  )
}
