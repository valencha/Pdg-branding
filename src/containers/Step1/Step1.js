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
let db = fb.firestore();
require('firebase/auth');


let btns=[{
    id:1,
    content:'Sí',
    checked:false,
},
{
    id:2,
    content:'No',
    checked:false,
},
{
    id:3,
    content:'Omitir',
    checked:false,
},
]

function Step1(){

    let {project,id}= useParams();
    const classes = useStyles();
 
    
    const [showPlaceHolder, setShowPlaceHolder] = React.useState(false);

  
    const [textName, setTextName] = React.useState('');
    const [textSlogan, setTextSlogan] = React.useState('');
    
    const [value, setValue] = React.useState(0);
    const [disabled, setDisabled] = React.useState(true);

    const [indexOption, setIndexOption] = React.useState('none') 
   
    let history = useHistory();


    React.useEffect(() => {
        
        var docRef = db.collection("projects").doc(id).collection('esencia-de-marca').doc('paso-1')

        const listener = docRef.onSnapshot(function(doc) {
        
            if(doc.exists){
                setIndexOption(doc.data()?.optionSelected ?? 'none')
                setTextName(doc.data()?.nombreMarca ?? '')
                setTextSlogan(doc.data()?.slogan ?? '')   
                setShowPlaceHolder(doc.data()?.optionSelected === 'Sí')
                setDisabled(false)
            }   
        })
        return () => listener()
   
    }, [id]);

    React.useEffect(() => {
        var docRef = db.collection("projects").doc(id);
        docRef.get().then(function(doc) {
            if(doc.exists){
                setValue(doc.data().percentStep2)
            }

        })
      },[id])

    React.useEffect(()=>{
        let db = fb.firestore();
        if(disabled===false){

           

            db.collection("projects").doc(id).update({
            "percentStep2": 10,
            }) 
            
        }else{
            db.collection("projects").doc(id).update({
                "percentStep2": 0,
                }) 
        }
   

    },[id,disabled])




    function handleNextPage(event){
        history.push('/dashboard/'+project+'/'+id+'/step1_2');

        let db = fb.firestore();

        db.collection("projects").doc(id).update({
            "url":  '/dashboard/'+project+'/'+id+'/step1_2',
       

        })
       
    


    }
 

      function handleBackPage(event){
        history.push('/dashboard/'+project+'/'+id+'/intro');
      } 

    function onChangeName(event){
        setTextName(event.target.value);

        var docRef = db.collection("projects").doc(id).collection('esencia-de-marca').doc('paso-1');

  
  
        docRef.update({
         "nombreMarca": event.target.value,
     })
     .then(function() {
         console.log("Document successfully updated!");
     });
        
    }

    function onChangeSlogan(event){
        setTextSlogan(event.target.value);
        var docRef = db.collection("projects").doc(id).collection('esencia-de-marca').doc('paso-1');

  
  
        docRef.update({
         "slogan": event.target.value,
     })
     .then(function() {
         console.log("Document successfully updated!");
     });
        
    }





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
                               <BtnYellow key={i}{...item}
                               checked={ indexOption === item.content} onChange={async(event)=>{
                                setIndexOption(item.content)
                                let db = fb.firestore();
                                var docRef = db.collection("projects").doc(id).collection('esencia-de-marca').doc('paso-1')
                                docRef.set({optionSelected:item.content})

                                if(item.content==='Sí'){   
                                setShowPlaceHolder(prev => !prev)
                                }
                                else if(item.content==='No'){
                                    setShowPlaceHolder(false)
                                }
                                else if(item.content==='Omitir'){
                                    setShowPlaceHolder(false)
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