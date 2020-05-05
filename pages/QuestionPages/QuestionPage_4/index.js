import React from 'react';
import ArrowButton from '../../../Comps/buttons/ArrowButton';
import TextComp from '../../TextComp';
import OptionsButton from '../../../Comps/OptionsButton';
import MenuButton from '../../../Comps/MenuButton';
import '../questionPages.css';

export default () => {
    return(
        <div className="pageContainer">
            <div className="textComp">
                <TextComp
                text="Are you doing self-induced vomiting?"/>
            </div>
            <div className="answers">
                <OptionsButton
                text="Yes"
                />
                <OptionsButton
                text="No"
                />
            </div>
            <div className="menuButton">
                <MenuButton/>
            </div>
            <div className="arrowButtons">
                <div className="leftArrow">
                    <ArrowButton
                    text="🡠"
                    />
                </div>
                <div className="rightArrow">
                    <ArrowButton
                    text="🡢"
                    />
                </div>
            </div>
        </div>
    )
}