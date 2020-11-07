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
import DialogTutorial from '../../components/DialogTutorial/DialogTutorial';
import uuid from "uuid/v4";


import { fb } from '../../utils/firebase'
require('firebase/auth');

function Step1_6(){

    let {project}= useParams();
    const data = React.useContext(DataContext);
    const classes = useStyles();
    let history = useHistory();
    
    const [openDialog, setOpenDialog] = React.useState(true);
    const [value, setValue] = React.useState(28.5714285714+14.2857142857);
    const [disabled, setDisabled] = React.useState(true);
    const [urlNext, setUrlNext] = React.useState('');
  
  
    const [listNotes, setListNotes] = React.useState([]);

    var listNotesTemp= Object.assign([],listNotes);



    function handleNextPage(event){
        history.push(urlNext);

        let db = fb.firestore();
        fb.auth().onAuthStateChanged(user => {
            db.collection(`${user.email}`).doc(project).collection('Esencia de marca').doc('paso 6').set({
                respuestas: listNotesTemp 
 
              
            })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
            
            
          
              
                  
        })


    }

      function handleOpen(event){
        setOpenDialog(prev => !prev);
      }   

      function handleBackPage(event){
        history.push(`/dashboard/${project}/step1_5`);
      } 

  

    function handleCreateNotes(event){

        listNotesTemp.push({ text: '',id: uuid()});
     
        setListNotes(listNotesTemp);
        console.log(listNotes);
   
    }


    React.useEffect(() => {
    let isCancelled = false;

     if(disabled===true){
        setValue(28.5714285714+(14.2857142857*3)); 
        
     }else{
        setValue(28.5714285714+(14.2857142857*3)); 
     }
     if (!isCancelled) {
        let db = fb.firestore();
        fb.auth().onAuthStateChanged(user => {
        var docRef = db.collection(`${user.email}`).doc(project);
        if(disabled===false){

            docRef.update({
                url: '/dashboard/'+project+'/step1_6_1',
                step:'esenciaMarca_paso6_1'
            })
            .then(function(db) {
         
                console.log('done');
            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
        }   else{
    
            docRef.update({
                url: '/dashboard/'+project+'/step1_6',
                step:'esenciaMarca_paso6'
            })
            .then(function(db) {
         
                console.log('done');
            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    
        }

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
      
        
    }, [project,data,disabled,listNotes,listNotesTemp]);

    React.useEffect(()=>{
        let db = fb.firestore();
        
        fb.auth().onAuthStateChanged((user) => {
            var respuestasTemp =[];
        var docRef = db.collection(`${user.email}`).doc(project);
        docRef.collection('Esencia de marca').doc('paso 6').get().then(function(doc) {
    
            if (doc.exists) {
              // console.log(Object.values(doc.data().respuestas));
                console.log(doc.data().respuestas);
                var respuestas =doc.data().respuestas;
               
                    respuestas.map((d)=>{
                        console.log(d);
                        respuestasTemp.push({ text: d.text, id: uuid()});
           
                        return d;
                    
                    })
            setListNotes(respuestasTemp);
     
     
            } else {
                //console.log("No such document!");
            }
        }).catch(function(error) {
           // console.log("Error getting document:", error);
        });})
        },[project])

    React.useEffect(()=>{
            if(listNotesTemp.length>0){
                setDisabled(false);   
            }else{
                setDisabled(true);  
            }
    },[listNotesTemp])
    



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
                            numStep='6'
                            numTotalStep='7'
                            value={value}
                   

                        />
                    </div>
                    <div className={classes.contentText}>
                       <h1 className={classes.question}> <span className={classes.num}>6. </span>¡Es tiempo de conocer tus valores de marca! Escribe mediante palabras claves los valores de tu empresa/proyecto/emprendimiento.</h1>
                    </div>
                    <div className={classes.contentBottom}>

                        <div className={classes.options}>
                        <div className={classes.answers}>
                        {openDialog?
                        <DialogTutorial open={openDialog} handleOpen={handleOpen} text={"A partir del ¿QUÉ? ¿CÓMO? y ¿POR QUÉ? identificado en el formato anterior, es posible profundizar y ser más específicos respecto a los elementos de menor a mayor relevancia de la empresa/proyecto/emprendimiento mediante palabras claves. Estas podrían configurarse en principios que guíen la toma de decisiones."} text2={"Ejemplos: Honestidad, integridad, sostenible, asequible, lujo, orientados a los datos, servicio, sencillez, confianza, accesible para todos, etc."}/>:null
                        }
                            <ToolBoxText
                            handleCreateNotes={handleCreateNotes}
                            />
                       
                          
                            <div className={classes.notes}>
                            
                            {listNotesTemp.map((item, i) =>
                       
                            <input type="text" key={i} className={classes.note}placeholder='Escribe' defaultValue={item.text}onChange={(event)=>{
                                let value=event.target.value;
                                item.text=value;
                                setDisabled(false);
                     
                                }} />
                         
                                

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
                        <img alt='tutorial' className={classes.iconsAction}   src={('/images/tutorial.svg')} onClick={(event) => handleOpen(event)}/>
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
            marginTop:'18px',
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
     
 
          },
          tutorial:{
              cursor:'pointer',
          },
          question:{
              fontFamily:'Open Sans',
              color:'#212429',
              width:'900px',
              fontWeight:400,
              fontSize:'18px',
              lineHeight:'29.6px',
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
        justifyContent:'flex-start',
        marginLeft:'10px',
        width:'892px',
        height:'320px',
        border:' 2px dashed #CCCCCC',
        boxSizing: 'border-box',
        borderRadius: '15px',

        
    },
    note:{
        backgroundColor:'white',
        width:'auto',
        height:'60px',
        border: '1px solid #DDE2E5',
        boxSizing: 'border-box',
        boxShadow:' 2px 8px 16px rgba(61, 62, 66, 0.1)',
        borderRadius: '15px',    
        outline:'none',
        textIndent:'10px',
        fontFamily:'Open Sans',
        fontSize:'16px',
        color:'#212429', 
        marginRight:'14px',
    }

    
    
    }));




export default Step1_6; 