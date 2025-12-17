import React from 'react';
import Section from './blogComponent/section/Section';
import Category from './blogComponent/product/productCategoryComponent/Category';
import Time from '../home page/HomeComponent/timeCom/Time';
import EmailLatter from '../home page/HomeComponent/subscribe/EmailLatter';
import BestPrice from '../home page/HomeComponent/bestprice/BestPrice';


const Blog = () => {
    return (
        <div>
            <Section />
            <Category />
             <Time />
            <div className=' pt-15'>
                <EmailLatter text="Stay home & get your daily needs from our shop"/>
            </div>
            <div className='mb-5'>
                <BestPrice />
            </div>
           
        </div>
    );
};

export default Blog;