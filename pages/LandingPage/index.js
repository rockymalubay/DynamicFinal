import React from 'react';
import Router from 'next/router';
import './landing.css';
import OptionButton from '../../comps/OptionsButton';
import Logo from './Logo.png';
import GlobalStateProvider from '../../providers/GlobalStateProvider'

function testButton() {
    Router.push("/QuestionPage_1");
    
    }

    function hotlineButton() {
        Router.push("/HotlinePage");
        
        }

const LandingPage = () => {


    return (
        <GlobalStateProvider>
            <div className="LandingPageContainer_about">

                <div className="logo">
                    <img src={Logo} />
                </div>

                <div className="buttonBox">
                    <div className="button" onClick={testButton}>
                        <OptionButton text="Start Test"/>
                    </div>
                    <br></br>
                    <div className="button" onClick={hotlineButton}>
                        <OptionButton text="Discover Hotline Page" />
                    </div>
                </div>
            </div>
        </GlobalStateProvider>
    )

}

LandingPage.defaultProps = {
    msg: "hi"

}

export default LandingPage; 