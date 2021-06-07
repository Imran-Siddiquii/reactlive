import React from 'react';
import Common from './Common';
import rocket from '../src/Image/rocket.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Home=()=> {
  return (
   <>
   <Common name="Welcome  to about page"
       imgsrc={rocket}
       visit='./about'
       btnName="Get Started " />
   </>
     );
}

export default Home;
