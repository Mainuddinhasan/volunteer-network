import React from 'react';
import header from '../../resources/HeaderImg2.png'
import HeaderContent from '../HeaderContent/HeaderContent';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className="backgroundImage mb-3 align-items-center">
        <Navbar></Navbar>
        <HeaderContent></HeaderContent>
        
    </div>
    
    );
};

export default Header;