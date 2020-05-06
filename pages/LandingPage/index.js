import React from 'react';
import './landingpg.css';
import Logo from '../../comps/Logo';
import MainButton from '../../comps/buttons';

const LandingPage = () => {
    return <div className="LandingpageContainer_about"> 
        <div className="logo">
        <Logo />
        
        </div>
        
        <div>
        <MainButton 
        btn_txt="Take the test"
        color="white"
        backgroundColor="#22B573"
        txt_decoration="none"
        width="225px" />
        </div>
        <br></br>
        <div>
        <MainButton 
        btn_txt="Discover helplines"
        color="white"
        backgroundColor="#22B573"
        txt_decoration="none"
        width="225px" />
        </div>


        </div>

}

LandingPage.defaultProps = {
    msg: "hi"

}

export default LandingPage; 