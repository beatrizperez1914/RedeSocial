import React from 'react';
import './style.css';

function Menu(props, clickMenu) {

    const{list=[]} = props;

    return (
        <ul className="sidebar">
            <img src ="logotipo.svg"></img>
            {
                props.list.map((item)=> (
                    <li key={item.id} id={item.id} className="item" onClick={clickMenu}>{item.title} </li>
                ))
            }
            
        </ul>
    );
}


export default Menu
