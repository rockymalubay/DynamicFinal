import React from 'react';
import Router from 'next/router';
import './landingpg.css';
import Logo from '../../comps/Logo';
import MainButton from '../../comps/buttons';

function testButton() {
    Router.push("/QuestionPage_1");
    
    }

    function hotlineButton() {
        Router.push("/HotlinePage");
        
        }

const LandingPage = () => {
    return <div className="LandingpageContainer_about"> 
        <div className="logo">
        <Logo />
        
        </div>
        
        <div className="button" onClick={testButton}>
        <MainButton 
        btn_txt="Take the test"
        color="white"
        backgroundColor="Orange"
        txt_decoration="none"
        width="275px"
        height="60px" />
        </div>
        <br></br>
        <div className="button" onClick={hotlineButton}>
        <MainButton 
        btn_txt="Discover helplines"
        color="white"
        backgroundColor="#22B573"
        txt_decoration="none"
        width="275px"
        height="60px" />
        </div>


        </div>

}

LandingPage.defaultProps = {
    msg: "hi"

}

export default LandingPage; 