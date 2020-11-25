import React from 'react';
import Home from '../Home/Home';
import DataContext from '../../context/DataContext/DataContext';
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
import Congrats1 from '../ScreenCongrat1/ScreenCongrat1';
import Congrats2 from '../ScreenCongrat2/ScreenCongrat2';
import Congrats3 from '../ScreenCongrat3/ScreenCongrat3';
import Step3 from '../Step3/Step3';
import Step4 from '../Step4/Step4';
import Step4c from '../Step4c/Step4c';
import IntroQuestionStep1 from '../IntroQuestionStep1/IntroQuestionStep1';
import IntroQuestionStep2 from '../IntroQuestionStep2/IntroQuestionStep2';
import IntroQuestionStep3 from '../IntroQuestionStep3/IntroQuestionStep3';
import IntroQuestionStep4 from '../IntroQuestionStep4/IntroQuestionStep4';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { fb } from '../../utils/firebase'
require('firebase/auth');


function App() {
  const [user,setUser] = React.useState([]);

  React.useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      
      
      fb.auth().onAuthStateChanged(user => {
        
        if (user!== null) {
            setUser(user)
            console.log(user.uid)
          } else {
              setUser(null)
               console.log("usuario nullo");
               
          }
      
        
      })
      
    }
    return () => {
      isCancelled = true;
    };
  }, []);



  const context = {
    user:user,
    setUser: setUser,

  }


  return (

     
    <Router>

    <DataContext.Provider value={context}>  
      <Route path="/" exact component ={Home}/>
      <Route path="/login" component ={Login}/>
      <Route exact path="/dashboard" component ={Dashboard}/>
      <Route exact path="/dashboard/:project/:id/main" component ={Map_step}/>
      <Route exact path="/dashboard/:project/videos" component ={Step0}/>
      <Route exact path="/dashboard/:project/intro" component ={IntroQuestionStep1}/>
      <Route exact path="/dashboard/:project/step1" component ={Step1}/>
      <Route exact path="/dashboard/:project/step1_2" component ={Step1_2}/>
      <Route exact path="/dashboard/:project/step1_3" component ={Step1_3}/>
      <Route exact path="/dashboard/:project/step1_4" component ={Step1_4}/>
      <Route exact path="/dashboard/:project/step1_5" component ={Step1_5}/>
      <Route exact path="/dashboard/:project/step1_6" component ={Step1_6}/>
      <Route exact path="/dashboard/:project/step1_7" component ={Step1_6_1}/>
      <Route exact path="/dashboard/:project/step1_8" component ={Step1_7}/>
      <Route exact path="/dashboard/:project/step1_9" component ={Step1_8}/>
      <Route exact path="/dashboard/:project/step1_10" component ={Step1_9}/>
      <Route exact path="/dashboard/:project/finished1" component ={Congrats1}/>
      <Route exact path="/dashboard/:project/intro2" component ={IntroQuestionStep2}/> 
      <Route exact path="/dashboard/:project/finished2" component ={Congrats2}/>
      <Route exact path="/dashboard/:project/intro3" component ={IntroQuestionStep3}/> 
      <Route exact path="/dashboard/:project/step3" component ={Step3}/>
      <Route exact path="/dashboard/:project/finished3" component ={Congrats3}/>
      <Route exact path="/dashboard/:project/intro4" component ={IntroQuestionStep4}/> 
      <Route exact path="/dashboard/:project/step4" component ={Step4}/>
      <Route exact path="/dashboard/:project/step4c" component ={Step4c}/>
      </DataContext.Provider>
  </Router>
);
}


export default App;

