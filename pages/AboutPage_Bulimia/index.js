import React from 'react';
import './bulimia.css';
import Infoicon from '../../Comps/Icons';
import Mainbutton from '../../Comps/buttons';
import TextComp from '../TextComp';
import MenuButton from '../../Comps/MenuButton';

const BulimiaPage = () => {

    return <div className="pageContainer_about"> 
        {/* <FaBone className="icon_positioning"size="40" color="Black"/> */}
        
        <div className="buttons"> 
        <Mainbutton 
        btn_txt="Anorexia"
        color="#22B573"
        backgroundColor="white"
        txt_decoration="none"
        
        > </Mainbutton>


        <br></br>
        <Mainbutton 
        btn_txt="Bulimia"
        color="white"
        backgroundColor="#22B573"
        txt_decoration="none"
        
        > </Mainbutton>
        <Mainbutton 
        btn_txt="Binge-eating"
        color="#22B573"
        backgroundColor="White"
        txt_decoration="none"
        
        > </Mainbutton>
        </div>

        <div className="title_txt">
            <h2> Anorexia </h2>
            <hr></hr>
            <h3>You may be at increased risk towards:</h3>
        </div>

        <div className="icon-set">
                <Infoicon> </Infoicon>
                
        </div>
        <div className="btn_pos">
       <Mainbutton btn_txt="Click here to discover helplines" width="300px"></Mainbutton>  
       </div>
       <div className="menu_pos"><MenuButton></MenuButton></div>
    </div>


    
}


BulimiaPage.defaultProps = {
    msg: "hi"

}

export default BulimiaPage; 