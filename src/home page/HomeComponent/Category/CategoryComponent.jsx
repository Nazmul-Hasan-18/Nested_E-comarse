import React from 'react';
import Top from './CategoryComponent/Top';
import Bottom from './CategoryComponent/Bottom';

const CategoryComponent = () => {
    return (
        <div>
            <div className='container mx-auto px-16 pt-11'>
                <Top />
                <Bottom />
            </div>
        </div>
    );
};

export default CategoryComponent;