import React from 'react';
// import QuestionPage_1 from '../Pages/QuestionPages/QuestionPage_1';
import AnorexiaPage from '../Pages/AboutPage_Anorexia';
import QuestionPage_1 from '../Pages/QuestionPages/QuestionPage_1';
import QuestionPage_2 from '../Pages/QuestionPages/QuestionPage_2';
import QuestionPage_3 from '../Pages/QuestionPages/QuestionPage_3';
import QuestionPage_4 from '../Pages/QuestionPages/QuestionPage_4';
import HotlinePage from '../Pages/HotlinePage';
import BingePage from '../Pages/AboutPage_Binge';
import BulimiaPage from '../Pages/AboutPage_Bulimia';

export default {
    title:"My Pages",
    component:AnorexiaPage
}

export const AnorexiaAboutPage = () =>
<div>
    <AnorexiaPage/>
</div>

export const BulimiaAboutPage = () =>
<div>
    <BulimiaPage/>
</div>

export const BingeEatingAboutPage = () =>
<div>
    <BingePage/>
</div>


export const Question1 = () =>
<div>
    <QuestionPage_1/>
</div>

export const Question2 = () =>
<div>
    <QuestionPage_2/>
</div>
export const Question3 = () =>
<div>
    <QuestionPage_3/>
</div>
export const Question4 = () =>
<div>
    <QuestionPage_4/>
</div>

export const Hotline = () =>
<div>
    <HotlinePage/>
</div>