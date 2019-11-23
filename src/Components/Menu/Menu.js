import React from 'react';
import './Menu.css';

import imgHamburger from '../Img/hamburger.png';
import imgCheeseburger from '../Img/burger.png';
import imgFree from '../Img/fried-potatoes.png';
import imgCoffee from '../Img/coffee-cup.png';
import imgTea from '../Img/cup.png';
import imgCola from '../Img/drink.png';

export const menu = [
    {name: 'Hamburger', price: 80, image: imgHamburger},
    {name: 'Coffee', price: 70, image: imgCoffee},
    {name: 'Cheeseburger', price: 90, image: imgCheeseburger},
    {name: 'Tea', price: 50, image: imgTea},
    {name: 'Free', price: 45, image: imgFree},
    {name: 'Cola', price: 40, image: imgCola}
];

const Menu = (props) => {
    return (
            <div key={props.index} onClick={props.getFoot} className='boxFoot'>
                <img className='item imgFoot' src={menu[props.index].image} alt=""/>
                <div className='item nameAndPriceFoot'>
                    <h3 className='item nameFoot'>{props.nameFoot}</h3>
                    <p className='item priceFoot'>{menu[props.index].price}<span>:KGZ</span></p>
                </div>
            </div>

    );
};

export default Menu;
