import React from 'react';
import OptionsButton from '../Comps/OptionsButton';
import ArrowButton from '../Comps/buttons/ArrowButton';
import Logo from '../Comps/Logo';
import Menu from'../Comps/Menu';
import MenuButton from '../Comps/MenuButton';
import menuIcon from '../Comps/MenuButton/menuicon.svg';
import exitIcon from '../Comps/MenuButton/exiticon.svg';
import HotlineBar from '../Comps/HotlineBar';
import QuestionButtons from '../Pages/QuestionPages/QuestionButtons';

export default {
    title:"My comps",
    component:OptionsButton
}

export const MyLogo = () =>
<div>
    <Logo/>
</div>

export const MyQuestionButtons = () =>
<div>
    <QuestionButtons/>
</div>

export const MyOptionsButton = () => 
<div>
<OptionsButton 
text = "Too Little?"
onClick="" />
</div>

export const MyArrowButton = () => 
<div>
<ArrowButton 
/>
</div>

export const MyMenu =() => 
<div>
    <Menu />
</div>

export const MyMenuButton =() => <div>
    <MenuButton 
    img = {menuIcon}
    />
</div>
export const MyHotlineBar =() => 
<div>
    <HotlineBar 
    onClick = ""
    />
</div>



