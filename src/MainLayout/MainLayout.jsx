import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/pages/Share/Footer/Footer';
import Navbar from '../Components/pages/Share/Navbar/Navbar';

const MainLayout = () => {
    return (
        <>
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;