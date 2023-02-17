import React from 'react';
import { Helmet } from 'react-helmet';
import MathExamComponet from '../MathExam/MathExamComponent';
import "./Home.css" ;

const Home = () => {

   return (
            <>
            <Helmet><title>Home page</title></Helmet>
      
            <MathExamComponet></MathExamComponet>
     
           </>
    );
};

export default Home;