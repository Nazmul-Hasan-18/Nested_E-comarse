import React from 'react';
import Left from './component/Left';
import Right from './component/Right';
import Top from './component/Top';

const BestSellsProduct = () => {
    return (
        <div>
            <Top />
            <div className='grid grid-cols-12 container mx-auto px-16 gap-8'>
                <div className='col-span-3'>
                    <Left />
                </div>
                <div  className='col-span-9'>
                    <Right />
                </div>
            </div>
        </div>
    );
};

export default BestSellsProduct;