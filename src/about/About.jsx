import React from 'react';
import Section from './aboutComponent/section/Section';

import Perfomance from './aboutComponent/perfomance/Perfomance';
import Misson from './aboutComponent/misson/Misson';
import Team from './aboutComponent/ourTeam/Team';
import Subscribe from './aboutComponent/subscribe/Subscribe';
import BestPrice from '../home page/HomeComponent/bestprice/BestPrice';


const About = () => {
    return (
        <div>
            <Section />
            <Perfomance />
            <Misson />
            <Team />
            <Subscribe />
            <BestPrice/>
        </div>
    );
};

export default About;