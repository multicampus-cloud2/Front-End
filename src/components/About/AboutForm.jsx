import React from 'react';
import InformService from 'components/About/InformService';
import InformDeveloper from 'components/About/InformDeveloper';
import 'css/about.css';

const About = () => {
  return (
    <div>
        <InformService/>
        <InformDeveloper/>
    </div>
  );
};
 
export default About;