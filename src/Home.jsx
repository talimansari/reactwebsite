import React from 'react';
import {NavLink}  from 'react-router-dom';
import BannerImage from '../src/image/Cohete-2016-03.svg';
import Common from './Common';
const Home = () => {
    return (
    <>
    <Common 
    title='welcome to home page' 
    visit="/services"
    btnName="Get Started" 
    imgsrc={BannerImage}/>
    </>
    );
}
export default Home;