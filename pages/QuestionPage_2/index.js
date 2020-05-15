import React, { useReducer } from 'react';
import Router from 'next/router';
import ArrowButton from '../../comps/buttons/ArrowButton';
import TextComp from '../TextComp';
import OptionsButton from '../../comps/OptionsButton';
import Menu from '../../comps/Menu';
import MenuButton from '../../comps/MenuButton';
import '../QuestionPages/questionPages.css';
import './qPage_2.css';
import Q2Image from './Question2.png';
import { useGlobalState } from '../../providers/GlobalStateProvider'




function BackPage() {

    if(confirm("Do you want to change your previous answer?")){
        Router.push("/QuestionPage_1");
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
    const [ globalState, setGlobalState ] = useGlobalState()
    const [ state, setState ] = useReducer(reducer, {})
    
    function reducer (currentState, newState) {
      return {...currentState, ...newState}
    }
      console.log('state', state)

    function pageThree() {
        const { bodyImage, mentalIssue, anxiety, recentTragedy } = state

        if(bodyImage || mentalIssue || anxiety || recentTragedy) {
            Router.push("/QuestionPage_3");
        } else {
            alert('Please select at least one option!')
        }
    };

    return(
        <div className="pageContainer">
                <div>
                    <Menu />
                </div>
            <div className="imagePo">
                <img src={Q2Image}/>
            </div>
            <div className="textComp">
                <TextComp
                text="Do you think you have a problem with?"/>
            </div>
            <div className="answers">

            <div 
                
                onClick={() => setState({ bodyImage: !state.bodyImage })}
            >
                <OptionsButton 
                // style={{backgroundColor: state.bodyImage ? "green" : " blue"}}
                color={state.bodyImage ? "#5fcc72" : "#FC7753"}
                text="Body Image?"
                />
            </div>
            <div onClick={() => setState({ mentalIssue: !state.mentalIssue })}>
                <OptionsButton
                color={state.mentalIssue ? "#5fcc72" : "#FC7753"}
                text="Mental Issue?"
                />
            </div>
            <div onClick={() => setState({ anxiety: !state.anxiety })}>
                <OptionsButton
                color={state.anxiety ? "#5fcc72" : "#FC7753"}
                text="Anxiety?"
                />
            </div>
            <div onClick={() => setState({ recentTragedy: !state.recentTragedy })}>
                <OptionsButton
                color={state.recentTragedy ? "#5fcc72" : "#FC7753"}
                text="Recent Tragedy?"
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
                <div className="rightArrow" onClick={pageThree}>
                    <ArrowButton
                    text="🡢"
                    />
                </div>
            </div>
        </div>
    )
}