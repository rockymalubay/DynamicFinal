import React from 'react';
import Router from 'next/router';
import ArrowButton from '../../comps/buttons/ArrowButton';
import TextComp from '../TextComp';
import OptionsButton from '../../comps/OptionsButton';
import Menu from '../../comps/Menu';
import MenuButton from '../../comps/MenuButton';
import '../QuestionPages/questionPages.css';

function PageFour() {

    if(confirm("Are you sure?")){
        Router.push("/QuestionPage_4");
    }
}

function BackPage() {

    if(confirm("Do you want to change your previous answer?")){
        Router.push("/QuestionPage_2");
    }
}

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
                text="How often is it troubling you?"/>
            </div>
            <div className="answers">

            <div onClick={PageFour}>
                <OptionsButton
                text="Once a Day"
                />
            </div>
            <div onClick={PageFour}>
                <OptionsButton
                text="3 times a Day"
                />
            </div>
            <div onClick={PageFour}>
                <OptionsButton
                text="All Day"
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
                <div className="rightArrow" onClick={PageFour}>
                    <ArrowButton
                    text="🡢"
                    />
                </div>
            </div>
        </div>
    )
}