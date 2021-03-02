import React from 'react';
import './style.css';

function Menu({ list = [], clickMenu }) {

    return (
        <ul className="sidebar">
            <img src ="logotipo.svg"></img>
            {
                list.map(item => <li key={item.id} id={item.id} className="item" onClick={clickMenu} > {item.title} </li>)
            }
            
        </ul>
    );
}


export default Menu

