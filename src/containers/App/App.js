import React from 'react';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import Map_step from '../Map_step/Map_step';
import Step0 from '../Step0/Step0';
import Step1 from '../Step1/Step1';
import Step1_2 from '../Step1_2/Step1_2';
import Step1_3 from '../Step1_3/Step1_3';
import Step1_4 from '../Step1_4/Step1_4';
import Step1_5 from '../Step1_5/Step1_5';
import Step1_6 from '../Step1_6/Step1_6';
import Step1_6_1 from '../Step1_6_1/Step1_6_1';
import Step1_7 from '../Step1_7/Step1_7';
import Step1_8 from '../Step1_8/Step1_8';
import Step1_9 from '../Step1_9/Step1_9';
import Step2 from '../Step2/Step2';
import IntroQuestionStep1 from '../IntroQuestionStep1/IntroQuestionStep1';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  






  return (
    <div>
    <Router>

       
      <Route path="/" exact component ={Home}/>
      <Route path="/login" component ={Login}/>
      <Route exact path="/dashboard" component ={Dashboard}/>
      <Route exact path="/dashboard/:project/main" component ={Map_step}/>
      <Route exact path="/dashboard/:project/videos" component ={Step0}/>
      <Route exact path="/dashboard/:project/intro" component ={IntroQuestionStep1}/>
      <Route exact path="/dashboard/:project/step1" component ={Step1}/>
      <Route exact path="/dashboard/:project/step1_2" component ={Step1_2}/>
      <Route exact path="/dashboard/:project/step1_3" component ={Step1_3}/>
      <Route exact path="/dashboard/:project/step1_4" component ={Step1_4}/>
      <Route exact path="/dashboard/:project/step1_5" component ={Step1_5}/>
      <Route exact path="/dashboard/:project/step1_6" component ={Step1_6}/>
      <Route exact path="/dashboard/:project/step1_6_1" component ={Step1_6_1}/>
      <Route exact path="/dashboard/:project/step1_7" component ={Step1_7}/>
      <Route exact path="/dashboard/:project/step1_8" component ={Step1_8}/>
      <Route exact path="/dashboard/:project/step1_9" component ={Step1_9}/>
      <Route exact path="/dashboard/:project/step2" component ={Step2}/>

  </Router>
  </div>
  );
}


export default App;

