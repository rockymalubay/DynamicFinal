import React from 'react';
import Router from 'next/router';
import TextComp from '../TextComp';
import TextCo from '../TextCo';
import ArrowButton from '../../comps/buttons/ArrowButton';
import MenuButton from '../../comps/MenuButton';
import OptionsButton from '../../comps/OptionsButton';
import '../QuestionPages/questionPages.css';
import Input from '../../comps/Input';
import './hotline.css';
import {FiPhoneCall} from 'react-icons/fi';
import {FaHeadset} from 'react-icons/fa';

export default() => {
    return(
        <div className="pageContainer">
            <div className="hotlineBox">
                <div>
                    <FiPhoneCall className="callIcon"/>
                    <div>
                        <div style={{color:"#22B573"}}>
                            <TextComp text="NEDIC"/>
                        </div>
                        <TextCo  text="1-866-NEDIC-20"/>
                        <TextCo  text="nedic@uhn.ca "/>
                    </div>   
                </div>
                <div>
                    <FaHeadset style={{paddingLeft:"15px", paddingRight:"15px"}} className="callIcon"/>
                    <div>
                        <div style={{color:"#22B573"}}>
                            <TextComp text="National Suicide Prevention Lifeline"/>
                        </div>
                        <TextCo  text="1-800-273-8255"/>
                    </div>   
                </div>
                <div>
                    <TextCo text="Email to us:"/>
                </div>
            </div>
            <div className="inputComp">
                <div>
                    <div>
                        <TextCo text="Name*"/>
                        <div>
                            <Input/>
                        </div>
                    </div>
                    <div>
                        <TextCo text="Email Address*"/>
                        <div>
                            <Input/>
                        </div>
                    </div>
                    <div>
                        <TextCo text="Message*"/>
                        <div >
                            <Input id="inputSize"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sendButton">
                <ArrowButton  text="Send"/>
            </div>
            <div className="menuButton">
                <MenuButton/>
            </div>
        </div>
    )
}