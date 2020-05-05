import React from 'react';
import Router from 'next/router';
import ArrowButton from '../../comps/buttons/ArrowButton';
import TextComp from '../TextComp';
import OptionsButton from '../../comps/OptionsButton';
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

export default () => {
    return(
        <div className="pageContainer">
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

            <div className="menuButton">
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