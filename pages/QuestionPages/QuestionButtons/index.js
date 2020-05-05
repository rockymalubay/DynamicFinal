import React from 'react';
import ArrowButton from '../../../Comps/buttons/ArrowButton/index';
import MenuButton from '../../../Comps/MenuButton';
import './questionButtons.css';

const QuestionButtons = ({text}) => {
    return(
        <div >
            <div className="question">
                {text}
            </div>
            <div className="menuButton">
                <MenuButton/>
            </div>
          <ArrowButton/>  
        </div>
    )
}

QuestionButtons.defaultProps = {
    text: "Are you eating?"}

export default QuestionButtons

