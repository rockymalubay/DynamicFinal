import React from 'react';
import './menu.css';
import Logo from "./Logo2.svg";
import homeIcon from './homeicon.svg';
import testIcon from './testicon.svg';
import factIcon from './factsicon.svg';
import helpIcon from './helpicon.svg';





const Menu = ({text, img}) => <div className="menu_box">
    <div className="logo_box"> <img src= {Logo}/></div>

        <div className="menu_list_box">
            <div className="menu_item"> <img src = {homeIcon}/> <h2>Home</h2></div>
            <div className="menu_item"> <img src = {testIcon}/> <h2>Test</h2> </div>
            <div className="menu_item"> <img src = {factIcon}/> <h2>Facts</h2> </div>
            <div className="menu_item"> <img src = {helpIcon}/> <h2>Helplines</h2> </div>
        </div>
    <a className="about_box" >About us</a>
</div>





export default Menu;