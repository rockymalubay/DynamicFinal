import React from 'react';
import Router from 'next/router';
import ArrowButton from '../../comps/buttons/ArrowButton';
import TextComp from '../TextComp';
import OptionsButton from '../../comps/OptionsButton';
import Menu from '../../comps/Menu';
import MenuButton from '../../comps/MenuButton';
import '../QuestionPages/questionPages.css';

function PageTwo() {

    if(confirm("Are you sure?")){
        Router.push("/QuestionPage_2");
    }
}

function BackPage() {

    if(confirm("Do you want to go back to the homepage?")){
        Router.push("/LandingPage");
    }
};

var menu_state = false;

function MenuToggle() {
    if(menu_state == false){
        menu_state = true;
        document.querySelector(".menu_box").style.display = "block"
    }else {
        if(menu_state == true){
            menu_state = false;
            document.querySelector(".menu_box").style.display = "none"
        }
    }
    
}


export default () => {
    return(
        <div className="pageContainer">
                <div>
                    <Menu />
                </div>
            <div className="textComp">
                <TextComp
                text="Are you eating?"/>
            </div>
            <div className="answers">
                <div onClick={PageTwo}>
                <OptionsButton
                text="Too Little?"
                />
                </div>
                <div onClick={PageTwo}>
                <OptionsButton
                text="Too Much?"
                onclick={PageTwo}
                />
                </div>
            </div>
            <div className="menuButton" onClick={MenuToggle}>
                <MenuButton/>
            </div>
            <div className="arrowButtons">
                <div className="leftArrow" onClick={BackPage}>
                    <ArrowButton
                    text="🡠"
                    />
                </div>
                <div className="rightArrow"  onClick={PageTwo}>
                    <ArrowButton
                    text="🡢"
                    />
                </div>
            </div>
        </div>
    )
}