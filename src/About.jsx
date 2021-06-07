import React from 'react';
import Common from './Common'
 import Black from '../src/Image/Black.jpg'

const About=()=> {
  return (<>
      <Common name="Welcome  to about page"
       imgsrc={Black}
       visit='./contact'
       btnName="Go To Contact " />
   </>
  );
}

export default About;
