import React from 'react';
import {DATA} from '../../items';
import {Product} from './product';
import "./Shop.css";

export const Shop = () => {
  return (
    <div className="Shop">

    <div className="Products">
       {DATA.map((item) =>
       <Product data= {item}  />
       )}
    </div>


    </div>
  )
}
