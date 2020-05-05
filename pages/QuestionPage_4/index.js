import React from 'react';
import Router from 'next/router';
import ArrowButton from '../../comps/buttons/ArrowButton';
import TextComp from '../TextComp';
import OptionsButton from '../../comps/OptionsButton';
import Menu from '../../comps/Menu';
import MenuButton from '../../comps/MenuButton';
import '../QuestionPages/questionPages.css';

function PageResults() {

    if(confirm("Are you ready to submit your answers?")){
        Router.push("/AboutPage_Anorexia");
    }
}

function BackPage() {

    if(confirm("Do you want to change your previous answer?")){
        Router.push("/QuestionPage_3");
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
                text="Are you doing self-induced vomiting?"/>
            </div>
            <div className="answers">
            <div onClick={PageResults}>
                <OptionsButton
                text="Yes"
                />
            </div>
            <div onClick={PageResults}>
                <OptionsButton
                text="No"
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
                <div className="rightArrow" onClick={PageResults}>
                    <ArrowButton
                    text="🡢"
                    />
                </div>
            </div>
        </div>
    )
}