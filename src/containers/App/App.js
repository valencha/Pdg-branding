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
import IntroQuestionStep1 from '../IntroQuestionStep1/IntroQuestionStep1';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const [ isChecked, setIsChecked ] = React.useState(false);



  let listCategory =[
    {
        label:'Alimentos',
        urlImage:'/images/food.png',
        checked:false
          
    },
    {
        label:'Viajes',
        urlImage:'/images/trip.png',
        checked:false
    },
    {
        label:'Moda',
        urlImage:'/images/fashion.png',
        checked:false

    },

    {
        label:'Hogar',
        urlImage:'/images/house.png',
        checked:false
    },

]
const [ optionsAnswer1_2, setOptionsAnswer1_2 ] = React.useState(listCategory);
const [answers1_6, setAnswers1_6 ] = React.useState([]);



  const context = {
    optionsAnswer1_2: optionsAnswer1_2,
    setOptionsAnswer1_2: setOptionsAnswer1_2,
    answers1_6:answers1_6,
    setAnswers1_6:setAnswers1_6,
    isChecked: isChecked,
    setIsChecked: setIsChecked,
  }
  return (
    <div>
    <Router>

      <DataContext.Provider value={context}>    
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
      </DataContext.Provider>
  </Router>
  </div>
  );
}


export default App;

