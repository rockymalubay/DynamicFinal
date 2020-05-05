import React from 'react';
import './binge.css';
import InfoIcon from '../../comps/Icons';
import MainButton from '../../comps/buttons';
import TextComp from '../TextComp';
import MenuButton from '../../comps/MenuButton';

const BingePage = () => {

    return <div className="pageContainer_about"> 
        {/* <FaBone className="icon_positioning"size="40" color="Black"/> */}
        
        <div className="buttons"> 
        <MainButton 
        btn_txt="Anorexia"
        color="#22B573"
        backgroundColor="White"
        txt_decoration="none"
        
        > </MainButton> 


        <br></br>
        <MainButton 
        btn_txt="Bulimia"
        color="#22B573"
        backgroundColor="white"
        txt_decoration="none"
        
        > </MainButton>
        <MainButton 
        btn_txt="Binge-eating"
        color="white"
        backgroundColor="#22B573"
        txt_decoration="none"
        
        > </MainButton>
        </div>

        <div className="title_txt">
            <h2> Anorexia </h2>
            <hr></hr>
            <h3>You may be at increased risk towards:</h3>
        </div>

        <div className="icon-set">
                <InfoIcon> </InfoIcon>
                
        </div>
        <div className="btn_pos">
       <MainButton btn_txt="Click here to discover helplines" width="300px"></MainButton>  
       </div>
       <div className="menu_pos"><MenuButton></MenuButton></div>
    </div>


    
}


BingePage.defaultProps = {
    msg: "hi"

}

export default BingePage; 