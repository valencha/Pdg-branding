import React from 'react';
import DataContext from '../../context/DataContext/DataContext';
import{useParams} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import TopBar from '../../components/TopBar/TopBar';
import { makeStyles } from '@material-ui/core/styles';
import LateralBar from '../../components/LateralBar/LateralBar';
import ProgressTool from '../../components/ProgressTool/ProgressTool';
import BtnOutlinedStep from '../../components/BtnOutlinedStep/BtnOutlinedStep';
import BtnStep from '../../components/BtnStep/BtnStep';
import ToolBoxText from '../../components/ToolBoxText/ToolBoxText';
import TextArea from '../../components/TextArea/TextArea';
import Draggable from 'react-draggable';

//Todos los imports se coloca   n arriba de este 

import { fb } from '../../utils/firebase'
require('firebase/auth');



function Step1_4(){

    let {project}= useParams();
    const data = React.useContext(DataContext);
    const classes = useStyles();
    let history = useHistory();
    
    const [value, setValue] = React.useState(28.5714285714+14.2857142857);
    const [disabled, setDisabled] = React.useState(true);
    const [listNotes, setListNotes] = React.useState([]);
    var listNotesTemp= Object.assign([],listNotes);
    const [noteValue, setNoteValue]= React.useState('');
    const [answers, setAnswers] = React.useState([]);
    const [urlNext, setUrlNext] = React.useState('');




    function handleNextPage(event){
        history.push(urlNext);

        let db = fb.firestore();
        fb.auth().onAuthStateChanged(user => {
            db.collection(`${user.email}`).doc(project).collection('Esencia de marca').doc('paso 4').set({
               respuesta: answers
 
              
            })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
            
            
          
              
                  
        })

    }
      

      function handleBackPage(event){
        history.push(`/dashboard/${project}/step1_3`);
      } 

      function handleCreateNotes(event){
        listNotesTemp.push({ text: noteValue});
        answers.push({ nota: noteValue}); 
        setListNotes(listNotesTemp);
    }
    function changeTextNote(event){
        setDisabled(false);
      setNoteValue(event.target.value);
      setAnswers(answers);
      answers[0].nota=event.target.value;
      listNotesTemp[0].text=event.target.value;
      
    }
          
   


   
    React.useEffect(() => {
        let isCancelled = false;
      console.log(answers)
        setAnswers(answers);
        setListNotes(listNotes);
        setNoteValue(noteValue);
     if(disabled===true){
        setValue(28.5714285714+14.2857142857); 
        
     }else{
        setValue(28.5714285714+(14.2857142857*2)); 
     }
     if (!isCancelled) {
        let db = fb.firestore();
        fb.auth().onAuthStateChanged(user => {
        var docRef = db.collection(`${user.email}`).doc(project);
        // Set the "capital" field of the city 'DC'
        docRef.update({
            url: '/dashboard/'+project+'/step1_5',
            step:'esenciaMarca_paso5'
        })
        .then(function(db) {
     
            console.log('done');
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });

        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log(doc.data().url);
                setUrlNext(doc.data().url);
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
          
              
    })

        }




        return () => {
            isCancelled = true;
        };
      
        
    }, [project,data,disabled,listNotes,noteValue,listNotesTemp,answers]);




    return (
        <div className={classes.body}>
            <div>
                <TopBar titleProject={project}/>
            </div>
            <div className={classes.content}>
                <LateralBar/>
                <div className={classes.contentRight}>
                    <div className={classes.progressContent}>
                        <ProgressTool
                            className={classes.progress}
                            titleStep='Conociendo tu marca'
                            numStep='4'
                            numTotalStep='7'
                            value={value}
                   

                        />
                    </div>
                    <div className={classes.contentText}>
                       <h1 className={classes.question}> <span className={classes.num}>4.</span> En una frase u oración escribe de qué manera tu empresa/proyecto/emprendimiento hace lo que hace. </h1>
                    </div>
                    <div className={classes.contentBottom}>

                        <div className={classes.options}>
                        <div className={classes.answers}>
                            <ToolBoxText
                            handleCreateNotes={handleCreateNotes}
                            />
                         
                       
                        
                          
                            <div className={classes.notes}>
                            {listNotes.map((item, i) =>
                                <Draggable key={i} defaultPosition={{x: 0, y: 0}}>
                                <div>
                                <TextArea key={i} {...item.onChange=changeTextNote}
                                 {...item}
                                />
                                </div>
                            </Draggable>
                                

                            )} </div>
                            
                         
                       
                       
                        
                     

                        </div>     
                           
                        </div>


 
                    
                    <div className={classes.actions}>
                        <BtnOutlinedStep
                        width='149px'
                        height='48px'
                        onClick={handleBackPage}
                        />
                    <div className={classes.icons}>
                        <img alt='tutorial' className={classes.iconsAction}   src={('/images/tutorial.svg')}/>
                    </div>
                        
                        <BtnStep
                        disabled={disabled}
                        content='Continuar'
                        width='149px'
                        height='48px'
                        onClick= {handleNextPage}
                        
                        />

      
                    </div>
                    </div>
                </div>
            </div>
        
            

      </div>
      );

}
      const useStyles = makeStyles(theme => ({
        body:{
            boxSizing: 'border-box',
            display:'flex',
            width: 'auto',
            height: '100vh',
            flexWrap: 'no-wrap',
            backgroundColor:'#FAFAFA',
            overflowY:'hidden',
            flexDirection:'column',
            justifyContent:'flex-start',
            alignContent:'center',
    
        },

        content:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-around',
            flexWrap:'no-wrap',
        },
        progressContent:{
            display:'flex',
            marginTop:'20px',
            flexWrap:'no-wrap',
            
        },
        progress:{
            display:'flex',
            flexWrap:'no-wrap',         
        },

        icons:{
            display:'flex',
            alignItems:'center',
        },

        contentText:{
            width:'100%',
            display:'flex',
            marginTop:20,
            flexWrap:'no-wrap',
            
         
        },

        contentRight:{
            display:'flex',
            width:'85%',
            marginLeft:'110px',
            flexDirection:'column', 
            alignContent:'flex-start',
            alignItems:'flex-start',
            flexWrap:'no-wrap',
            justifyContent:'flex-start',
            
        },

        titleStep:{
            fontFamily:'Poppins',
            flexWrap:'no-wrap',
            fontWeight:600,
            marginTop:'24px',   
            fontSize:'23px',
        },
        description:{
            fontFamily:'Open Sans',
            flexWrap:'no-wrap',
            marginTop:'18px',   
            fontWeight:400,
            fontSize:'18px',
        },

          contentBottom:{
            display:'flex',
            width:'79%',    
            marginTop:'28px',
            flexDirection:'column',
            flexWrap:'no-wrap',
            alignItems:'flex-start',
            justifyContent:'center'
          },
          
          actions:{
              display:'flex',
              flexDirection:'row',
              flexWrap:'no-wrap',
              alignSelf:'flex-end',
              justifyContent:'space-between',
              width:'100%',
              marginTop:'30px',
 
          },
          tutorial:{
              cursor:'pointer',
          },
          question:{
              fontFamily:'Open Sans',
              color:'#212429',
              fontWeight:400,
              fontSize:'18px'
          },
          num:{
            fontFamily:'Open Sans',
            fontWeight:700,
            fontSize:'18px'
          },

    options:{
        display:'flex',
        flexDirection:'column',
        flexWrap:'no-wrap',
        marginTop:'20px',
        height:'335px',
        
    },

    answers:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'no-wrap',
       
    },

    iconsAction:{
        cursor:'pointer'
    },
    notes:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        width:'905px',
        height:'386px'

        
    }

    
    
    }));




export default Step1_4; 