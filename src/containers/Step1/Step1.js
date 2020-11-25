import React from 'react';
import{useParams} from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import LateralBar from '../../components/LateralBar/LateralBar';
import ProgressTool from '../../components/ProgressTool/ProgressTool';
import BtnOutlinedStep from '../../components/BtnOutlinedStep/BtnOutlinedStep';
import BtnStep from '../../components/BtnStep/BtnStep';
import BtnYellow from '../../components/BtnYellow/BtnYellow';
import PlaceHolder from '../../components/PlaceHolder/PlaceHolder';


//Todos los imports se coloca   n arriba de este 

import { fb } from '../../utils/firebase'
require('firebase/auth');


function Step1(){

    let {project}= useParams();
    console.log(project);
    const classes = useStyles();
 
    
    const [showPlaceHolder, setShowPlaceHolder] = React.useState(false);
    const  [btns, setBtns ]= React.useState([]);


    const [isClick, setIsClick] = React.useState(false);
    const [isClick2, setIsClick2] = React.useState(false);
    const [isClick3, setIsClick3] = React.useState(false);
    const [textName, setTextName] = React.useState('');
    const [textSlogan, setTextSlogan] = React.useState('');
    const [optionSelected, setOptionSelected] = React.useState('');
    const [urlNext, setUrlNext] = React.useState('');

    const [value, setValue] = React.useState(0);
    const [disabled, setDisabled] = React.useState(true);


   
    let history = useHistory();

  



    function handleNextPage(event){

        history.push(urlNext);
        
        let db = fb.firestore();
        
        fb.auth().onAuthStateChanged(user => {
            db.collection(`${user.email}`).doc(project).collection('Esencia de marca').doc('paso 1').set({
            respuesta: optionSelected,
               nombreMarca:textName,
               tagline:textSlogan
              
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
        history.push(`/dashboard/${project}/intro`);
      } 

    function onChangeName(event){
        setTextName(event.target.value);
        
    }

    function onChangeSlogan(event){
        setTextSlogan(event.target.value);
        
    }


    React.useEffect(() => {
        let isCancelled = false;
       
        if (!isCancelled) {
         
       
        let db = fb.firestore();
        fb.auth().onAuthStateChanged(user => {
        var docRef = db.collection(`${user.email}`).doc(project);
        // Set the "capital" field of the city 'DC'
        if(disabled === false){
            docRef.update({
                url: '/dashboard/'+project+'/step1_2',
                step:'esenciaMarca_paso2',
                percentStep2:10
            })
            .then(function(db) {
         
                console.log('done');
            })
            .catch(function(error) {
             
               // console.error("Error updating document: ", error);
            });
            
        }else{
            docRef.update({
                url: '/dashboard/'+project+'/step1',
                step:'esenciaMarca_paso1',
                percentStep2:0
            })
            .then(function(db) {
         
                console.log('done');
            })
            .catch(function(error) {
              //   console.error("Error updating document: ", error);
            });
        }
   

        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log(doc.data().url);
                setUrlNext(doc.data().url);
                setValue(doc.data().percentStep2);
                if(doc.data().percentStep2===100){
                    docRef.update({
                        percentStep2:100
                    })
                    .then(function(db) {
                 
                        console.log('done');
                    })
                    .catch(function(error) {
                      //   console.error("Error updating document: ", error);
                    });
                }
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

        docRef.collection('Esencia de marca').doc('paso 1').get().then(function(doc) {
    
            if (doc.exists) {
                    setOptionSelected(doc.data().respuesta)

          
                    if(doc.data().respuesta==='Sí'){
                        setIsClick(true);
                        setShowPlaceHolder(true);
                        setTextName(doc.data().nombreMarca);
                        setTextSlogan(doc.data().tagline)
                    }
                    if(doc.data().respuesta==='No'){
                        setIsClick2(true);
                    }
                    if(doc.data().respuesta==='Omitir'){
                        setIsClick3(true);
                    }
   
     
            } else {
                //console.log("No such document!");
            }
        }).catch(function(error) {
           // console.log("Error getting document:", error);
        });

   
        
              
    })

        }




        return () => {
            isCancelled = true;
        };

    }, [project,urlNext,disabled]);


    React.useEffect(()=>{
        let btns=[{
            id:1,
            content:'Sí',
            checked:isClick,
        },
        {
            id:2,
            content:'No',
            checked:isClick2,
        },
        {
            id:3,
            content:'Omitir',
            checked:isClick3,
        },
    ]

    setBtns(btns);

    if(isClick === true || isClick2 === true || isClick3===true){
        setDisabled(false);
    }else{
        setDisabled(true);
    }
  
    },[isClick,isClick2,isClick3])

 

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
                            numStep='1'
                            numTotalStep='10'
                            value={value}
                   

                        />
                    </div>
                    <div className={classes.contentText}>
                       <h1 className={classes.question}> <span className={classes.num}>1.</span> ¿Tienes algún nombre para tu marca, empresa, proyecto o emprendimiento?</h1>
                    </div>
                    <div className={classes.contentBottom}>
                        <div className={classes.options}>
                        <div className={classes.answers}>

                            {btns.map((item,i)=>
                               <BtnYellow key={i}{...item}  onClick={(event)=>{
                                setOptionSelected(`${item.content}`);

                            
                                if(item.content==='Sí'){
                                       setIsClick(prev=>!prev);
                                       setShowPlaceHolder(prev=>!prev);
                                      
                                }else{
                                    setIsClick(false);
                                    setShowPlaceHolder(false);
                                }
                                if(item.content==='No'){
                                    setIsClick2(prev=>!prev);
                                   
                                }else{
                                    setIsClick2(false);
                                
                                }
                                if(item.content==='Omitir'){
                                    setIsClick3(prev=>!prev);  
                                }else{
                                 setIsClick3(false);

                                }

                               }}/>
                               

                           
                            )}
                            
                        </div>

                        {showPlaceHolder &&
                            <div className={classes.nameSlogan}>
                                <p className={classes.question}>Ingresa por favor el nombre de tu marca, empresa, proyecto o emprendimiento.</p>
                                <PlaceHolder
                                className={classes.firstPlaceHolder}
                                width='640px'
                                onChange={onChangeName}
                                value={textName}
                                placeHolder='Nombre de marca'
                                height='60px'
                                />
                                <PlaceHolder
                                width='640px'
                                onChange={onChangeSlogan}
                                value={textSlogan}
                                placeHolder='Lema, slogan, tagline (opcional)'
                                height='60px'
                                />
                            </div>
                        
                        }
                           
                        </div>


 
                    
                    <div className={classes.actions}>
                        <BtnOutlinedStep
                        width='149px'
                        height='48px'
                        onClick={handleBackPage}
                        />
                        <img className ={classes.tutorial} alt='tutorial'  src={('/images/tutorial.svg')}/>
                        <BtnStep
                        disabled={disabled}
                        content='Continuar'
                        width='149px'
                        height='48px'
                        onClick={handleNextPage}
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
    nameSlogan:{
        marginTop:'40px',
    },

    firstPlaceHolder:{
        marginTop:'12px'
    }

    
    
    }));




export default Step1; 