import React from 'react';
import BannerImage from '../src/image/Cohete-2016-03.svg';
import Common from './Common';

const About = () => {
    return (
    <>
       <Common title='welcome to About page' visit="/contact" btnName="Contact Us" imgsrc={BannerImage}/>
    </>
    );
}
export default About;