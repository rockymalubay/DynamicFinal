import React from 'react';
import Router from 'next/router';
import ArrowButton from '../../Comps/buttons/ArrowButton';
import TextComp from '../TextComp';
import OptionsButton from '../../Comps/OptionsButton';
import MenuButton from '../../Comps/MenuButton';
import '../QuestionPages/questionPages.css';

function PageTwo() {

    if(confirm("Are you sure?")){
        Router.push("/QuestionPage_2");
    }
}


export default () => {
    return(
        <div className="pageContainer">
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
            <div className="menuButton">
                <MenuButton/>
            </div>
            <div className="arrowButtons">
                <div className="leftArrow">
                    <ArrowButton
                    onClick={() => Router.back()}
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