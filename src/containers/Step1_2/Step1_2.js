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

let db = fb.firestore();

require('firebase/auth');


let listCategory =[
    {
        id:1,
       label:'Alimentos',
       urlImage:'/images/food.png',
       select:false

   },
     {
        id:2,
       label:'Viajes',
       urlImage:'/images/trip.png',
       select:false
   },
    {
        id:3,
       label:'Moda',
       urlImage:'/images/fashion.png',
       select:false
   },

    {
        id:4,
       label:'Hogar',
       urlImage:'/images/house.png',
       select:false
   },       
]

function Step1_2(){

    let {project,id}= useParams();
    const classes = useStyles();
    let history = useHistory();
    
    const [value, setValue] = React.useState(0);
    const [disabled, setDisabled] = React.useState(true);
    const [openDialog, setOpenDialog] = React.useState(false);
   
    const [answers, setAnswers] = React.useState(listCategory);

    const [answersTemp, setAnswersTemp] = React.useState([]);

    function handleNextPage(event){
        history.push('/dashboard/'+project+'/'+id+'/step1_3');

        let db = fb.firestore();

        db.collection("projects").doc(id).update({
            "url":  '/dashboard/'+project+'/'+id+'/step1_3',
       

        })
       
    


    }

        
 

      function handleBackPage(event){
        history.push('/dashboard/'+project+'/'+id+'/step1');
      } 
   
  
    const handleClickOpen = () => {
        setOpenDialog(true);
      };
    
      const handleClose = () => {
        setOpenDialog(false);
      };


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
        if(answersTemp.length>0){
            setDisabled(false);  
           

            db.collection("projects").doc(id).update({
            "percentStep2": 20,
            }) 
            
        }else{
            setDisabled(true);  
            db.collection("projects").doc(id).update({
                "percentStep2": 10,
                }) 
        }
   

    },[answersTemp,id])

    React.useEffect(() => {
        
        var docRef = db.collection("projects").doc(id).collection('esencia-de-marca').doc('paso-2')

        const listener = docRef.onSnapshot(function(doc) {
            var respuestasTemp=[];
            const updated = []
            if(doc.exists){
            setAnswers([]);
            setAnswersTemp([]);
                const respuestas =doc.data().respuestas;
                console.log(respuestas)

                listCategory.forEach((value) => {

                    const exist = respuestas.find((str) => str === value.label )
                    if(exist){
                        const itemUpdated = {
                            ...value,
                            select:true,
                        }
                    respuestasTemp.push();
                    updated.push(itemUpdated)
                    }else {
                        updated.push(value)
                    }
                })
              setAnswers(updated);
              setAnswersTemp(respuestasTemp);
              setDisabled(false)
            }   
        })
        return () => listener()
   
    }, [id]);


      React.useEffect(()=>{
        let db = fb.firestore();
        if(answersTemp.length>0){
            setDisabled(false);  
           

            db.collection("projects").doc(id).update({
            "percentStep2": 20,
            }) 
            
        }else{
            setDisabled(true);  
            db.collection("projects").doc(id).update({
                "percentStep2": 10,
                }) 
        }
   

    },[answersTemp,id])


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
                            numTotalStep='10'
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
                                item.select=checked;
                                var aTemp= answersTemp;
                                    var j = -1;
                                    
                                    aTemp.forEach((answer,k) => {
                                        if(item.label===answer){
                                           j=k;
                                        }
                                    });
                                    //ENCONTRO
                                    if(j!== -1){
                                        if(checked===true){
                                        aTemp[j].select=true;
                                        }else{
                                            aTemp.splice(j,1);
                                        }

                                    }else{//NO ENCONTRO
                                        aTemp.push(item.label)
                                    }
                                    setAnswersTemp(aTemp);

                                    let db = fb.firestore();

                                    var docRef = db.collection("projects").doc(id);

                                    docRef.collection('esencia-de-marca').doc('paso-2').set({
                                    respuestas:answersTemp
                                    })

                                    if(aTemp.length>0){
                                        setDisabled(false)
                                    }else{   
                                        setDisabled(true);
                                    }
 
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