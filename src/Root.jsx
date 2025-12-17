import React from 'react';
import Header from './header/Header';
import Blog from './blog/Blog';
import { Outlet } from 'react-router';
import Footer from './footer/Footer';
const Root = () => {
    return (
        <div>
            <Header />
            <Outlet />
             <Footer />
        </div>
    );
};

export default Root;