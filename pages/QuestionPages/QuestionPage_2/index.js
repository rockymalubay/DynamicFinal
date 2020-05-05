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
                text="Do you think you have a problem with?"/>
            </div>
            <div className="answers">
                <OptionsButton
                text="Body Image?"
                />
                <OptionsButton
                text="Mental Issue?"
                />
                <OptionsButton
                text="Anxiety?"
                />
                <OptionsButton
                text="Recent Tragedy?"
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