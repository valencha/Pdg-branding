import React from 'react';
import{useParams} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import TopBar from '../../components/TopBar/TopBar';
import { makeStyles } from '@material-ui/core/styles';
import LateralBar from '../../components/LateralBar/LateralBar';
import ProgressTool from '../../components/ProgressTool/ProgressTool';
import BtnOutlinedStep from '../../components/BtnOutlinedStep/BtnOutlinedStep';
import BtnStep from '../../components/BtnStep/BtnStep';
import CardCheckBox from '../../components/CardCheckBox/CardCheckBox';
import AddCategory from '../../components/AddCategory/AddCategory';


//Todos los imports se coloca   n arriba de este 

import { fb } from '../../utils/firebase'
require('firebase/auth');


function Step1_2(){

    let {project}= useParams();
    const classes = useStyles();
    let history = useHistory();
    
    const [value, setValue] = React.useState(14.2857142857);
    const [disabled, setDisabled] = React.useState(true);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [urlNext, setUrlNext] = React.useState('');

    

    const [answersFirebase,setAnswersFirebase]= React.useState([])

   
    const [answers, setAnswers] = React.useState([]);
    const [answersTemp, setAnswersTemp] = React.useState([]);

    function handleNextPage(event){
        history.push(urlNext);

        let db = fb.firestore();
        fb.auth().onAuthStateChanged(user => {
            db.collection(`${user.email}`).doc(project).collection('Esencia de marca').doc('paso 2').set({
              respuestas:answers
              
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
        history.push(`/dashboard/${project}/step1`);
      } 
   
  
    const handleClickOpen = () => {
        setOpenDialog(true);
      };
    
      const handleClose = () => {
        setOpenDialog(false);
      };

    React.useEffect(() => {
    let isCancelled = false;
    setAnswersTemp(answersTemp);
    if (!isCancelled) {
        
       
  

     if(disabled===false){
        setValue(28.5714285714); 
        
     }
     let db = fb.firestore();
     fb.auth().onAuthStateChanged(user => {

     var docRef = db.collection(`${user.email}`).doc(project);
   
     if(disabled ===false){
     docRef.update({
         url: '/dashboard/'+project+'/step1_3',
         step:'esenciaMarca_paso3'
     })
     .then(function(db) {
  
         //console.log('done');
     })
     .catch(function(error) {
         // The document probably doesn't exist.
         console.error("Error updating document: ", error);
     });
    }else{
        docRef.update({
            url: '/dashboard/'+project+'/step1_2',
            step:'esenciaMarca_paso2'
        })
        .then(function(db) {
     
            //console.log('done');
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });

    }
     docRef.get().then(function(doc) {
   
         if (doc.exists) {
             setUrlNext(doc.data().url);
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
    
    }, [project,disabled,answersTemp]);

    React.useEffect(() => {
 

        let listCategory =[
            {
                id:1,
               label:'Alimentos',
               urlImage:'/images/food.png',
    
           },
             {
                id:2,
               label:'Viajes',
               urlImage:'/images/trip.png',
           
           },
            {
                id:3,
               label:'Moda',
               urlImage:'/images/fashion.png',
       
           },
       
            {
                id:4,
               label:'Hogar',
               urlImage:'/images/house.png',
   
           },
       
       ]
        setAnswers( listCategory.map(d=>{
            return{
                select:false,
                id:d.id,
                label:d.label,
                urlImage:d.urlImage,
            }
        }))
        
      }, []);


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
                            numStep='2'
                            numTotalStep='7'
                            value={value}
                   

                        />
                    </div>
                    <div className={classes.contentText}>
                       <h1 className={classes.question}> <span className={classes.num}>2.</span>  Elige la industria o categoría donde se encuentra tu marca para generar las mejores opciones.</h1>
                    </div>
                    <div className={classes.contentBottom}>
                        <div className={classes.options}>
                        <div className={classes.answers}>
                        {answers.map((item, i) =>
                        <div key={i}>
                            <CardCheckBox {...item} onChange={(event)=>{
                                let checked=event.target.checked;
                                setAnswers(answers.map((data)=>{
                                    if(item.id===data.id){
                                        console.log(data);
                                        data.select=checked;
                                     
                                        if(data.select===true){
                                           answersTemp.push(data.label);
                                      
                                           console.log(answersTemp)
                                        }else{
                                           var index= answersTemp.indexOf(data.label)
                                           if (index > -1) {
                                           answersTemp.splice(index, 1);
                                          }
                                        
                                        }
                                        if(answersTemp.length>0){
                                            setDisabled(false);   
                                        }else{
                                            setDisabled(true);  
                                        }

                                    }return data;

                                }));
                                
                            }}
       
                            
                            />

                        </div>
                     
                        )}
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
                        <img alt='tutorial'className={classes.iconsAction} src={('/images/plus.svg')} onClick={() => handleClickOpen()}/>

                        {openDialog ?
                            
                                <AddCategory
                                handleClickOpen={handleClickOpen}
                                handleClose={handleClose}
                                openDialog={openDialog}
                                />
                            :null

                        }
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

          btn: {
            width: '149px',
            height: '48px',
            cursor:'pointer',
            textTransform: 'none',
            fontFamily: 'Poppins',
            fontSize:'16px',
            color:'#212429',
            marginRight:'74px',
            background: 'white',
            border: 'none',
            boxSizing: 'border-box',
            borderRadius: '15px',
            fontWeight:600,
            outline:'none',
            boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',
  
          '&:hover':{
              background: '#FFD984',
              outline:'none',
          },
              
  
  
      },
  
  
      card:{
        width:'223px',
        height:'283px',
        cursor:'pointer',
        background:'#ffff',
        boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',
        borderRadius: '15px',
        display:'flex',
        flexDirection:'column',
        alignContent:'center',
        marginRight:'30px',
        justifyContent:'center',
        '&:hover': {
            backgroundColor: '#FFD984',
        },

    },

    cardYellow:{
        width:'223px',
        height:'283px',
        cursor:'pointer',
        background:'#FFD984',
        boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',
        borderRadius: '15px',
        display:'flex',
        flexDirection:'column',
        alignContent:'center',
        marginRight:'30px',
        justifyContent:'center',
        border: '1px solid #FFB600',
        '&:hover': {
            backgroundColor: '#FFD984',
        },

    },

      btnClick: {
          width: '149px',
          height: '48px',
          cursor:'pointer',
          textTransform: 'none',
          fontFamily: 'Poppins',
          marginRight:'74px',   
          fontSize:'16px',
          color:'#212429',
          background: '#FFD984',
          border: '1px solid #FFB600',
          boxSizing: 'border-box',
          borderRadius: '15px',
          fontWeight:600,
          outline:'none',
          boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',
  
  
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
    },
    iconsAction:{
        cursor:'pointer'
    }

    
    
    }));




export default Step1_2; 