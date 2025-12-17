import React from 'react';
import Banner from './sectionComponent/Banner';
import Contant from './sectionComponent/Contant';

const Section = () => {
    return (
        <div>
            <div className='container mx-auto px-36 flex items-center gap-10  py-10'>
                <div>
                    <Banner />
                </div>
                <div>
                    <Contant />
                </div>
            </div>
        </div>
    );
};

export default Section;