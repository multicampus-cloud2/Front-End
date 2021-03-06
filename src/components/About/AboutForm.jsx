import React from 'react';
import InformService from 'components/About/InformService';
import InformDeveloper from 'components/About/InformDeveloper';
import 'css/about.scss';

const About = () => {
  return (
    <div className="container">
        <InformService/>
        <InformDeveloper/>
    </div>
  );
};
 
export default About;