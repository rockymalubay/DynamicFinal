import React from './node_modules/react';
import './menu_button.css';
import menuIcon from './menuicon.svg';
import exitIcon from './exiticon.svg';

const MenuButton = ({img}) =>
<div>
    <div className="outer_circle">
        <div className="inner_circle">    
            <img className="icon" src= {img}/>
        </div>
    </div>
</div>




export default MenuButton;