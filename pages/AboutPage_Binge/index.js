import React from 'react';
import './binge.css';
import InfoIcon from '../../comps/Icons/Binge_Icons';
import MainButton from '../../comps/buttons';
import TextComp from '../TextComp';
import MenuButton from '../../comps/MenuButton';
import Menu from '../../comps/Menu';
import Router from 'next/router';

const BingePage = () => {

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

    function helplineButton() {

        Router.push("/HotlinePage");
}

function anorexiaButton() {
    
    Router.push("/AboutPage_Anorexia");
}

function bulimiaButton() {

    Router.push("/AboutPage_Bulimia");
}

    return <div className="pageContainer_about"> 
        {/* <FaBone className="icon_positioning"size="40" color="Black"/> */}
        
        <div className="buttons"> 
        <div>
            <MainButton 
                btn_txt="Anorexia"
                color="white"
                backgroundColor="#22B573"
                txt_decoration="none"
                width="125px"
            />
        </div>

        <div>
            <MainButton 
                btn_txt="Bulimia"
                color="#22B573"
                backgroundColor="white"
                txt_decoration="none"
                width="125px"
            /> 
        </div>

        <div>
            <MainButton 
                btn_txt="Binge-eating"
                color="#22B573"
                backgroundColor="White"
                txt_decoration="none" 
                width="125px"
            /> 
        </div>

        </div>

        <div className="title_txt">
            <h2> Anorexia </h2>
            <hr></hr>
            <h3>You may be at increased risk towards:</h3>
        </div>

        <div className="icon-set">
                <InfoIcon> </InfoIcon>
                
        </div>
        <div className="btn_pos"  onClick={helplineButton}  >
       <MainButton btn_txt="Click here to discover helplines" width="300px"></MainButton>  
       </div>
       <div className="menu_pos" onClick={MenuToggle}><MenuButton></MenuButton></div>
    </div>


    
}


BingePage.defaultProps = {
    msg: "hi"

}

export default BingePage; 