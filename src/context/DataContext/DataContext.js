import React from 'react';



const DataContext = React.createContext({
  optionsAnswer1_2: null,
  setOptionsAnswer1_2:null,
  answers1_6: null,
  setAnswers1_6:null,
  isChecked:null,
  setIsChecked: () => null, 
  

});

export default DataContext;
