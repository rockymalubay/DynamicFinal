import React from 'react';
import Router from 'next/router';
import ArrowButton from '../../comps/buttons/ArrowButton';
import TextComp from '../TextComp';
import OptionsButton from '../../comps/OptionsButton';
import MenuButton from '../../comps/MenuButton';
import '../QuestionPages/questionPages.css';

function PageThree() {

    if(confirm("Are you sure?")){
        Router.push("/QuestionPage_3");
    }
}

function BackPage() {

    if(confirm("Do you want to change your previous answer?")){
        Router.push("/QuestionPage_1");
    }
}

export default () => {
    return(
        <div className="pageContainer">
            <div className="textComp">
                <TextComp
                text="Do you think you have a problem with?"/>
            </div>
            <div className="answers">

            <div onClick={PageThree}>
                <OptionsButton
                text="Body Image?"
                />
            </div>
            <div onClick={PageThree}>
                <OptionsButton
                text="Mental Issue?"
                />
            </div>
            <div onClick={PageThree}>
                <OptionsButton
                text="Anxiety?"
                />
            </div>
            <div onClick={PageThree}>
                <OptionsButton
                text="Recent Tragedy?"
                />
            </div>
            </div>
            <div className="menuButton">
                <MenuButton/>
            </div>
            <div className="arrowButtons">
                <div className="leftArrow" onClick={BackPage}>
                    <ArrowButton
                    text="🡠"
                    />
                </div>
                <div className="rightArrow" onClick={PageThree}>
                    <ArrowButton
                    text="🡢"
                    />
                </div>
            </div>
        </div>
    )
}