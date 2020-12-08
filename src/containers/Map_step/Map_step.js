import React from 'react';
import{useParams} from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import LateralBar from '../../components/LateralBar/LateralBar';
import DialogFinal from '../../components/DialogFinal/DialogFinal';
import Step from '../../components/Step/Step';
import ProgressIndex from '../../components/ProgressIndex/ProgressIndex';


//Todos los imports se coloca   n arriba de este 

import { fb } from '../../utils/firebase'
require('firebase/auth');


function Map_step(){

    let {project,id}= useParams();
    console.log(project,id);
   
 
    const classes = useStyles();
    const [percentGeneral, setPercentGeneral] = React.useState(0);


    const [steps, setSteps] = React.useState([]);
    const [open, setOpen] = React.useState(undefined);
    let history = useHistory();

    const handleClose = () => {
        setOpen(false);
      };

      const handleGoHome = (event) => {
        history.push(`/dashboard`);
        setOpen(false);
      };
  
  
      function handleBackPage(event){
        history.push(`/dashboard`);
      } 
     
      React.useEffect(()=>{
        let listSteps=[
            {
                title:'Aprendiendo sobre Branding',
                percent:0,
                active:true,
                urlImage:'/images/video.svg',
                urlNext:'/dashboard/'+project+'/'+id+'/videos',
        
            },
            {
                title:'Conociendo tu marca',
                percent:0,
                active:false,
                urlImage:'/images/step1.svg',
                urlNext:'/dashboard/'+project+'/'+id+'/intro',
        
            },
        
            {
                title:'Exploración de los recursos',
                percent:0,
                active:false,
                urlImage:'/images/step3.svg',
                urlNext:'/dashboard/'+project+'/'+id+'/intro2',
            },
            {
                title:'Selección de los recursos',
                percent:0,
                active:false,
                urlImage:'/images/step2.svg',
                urlNext:'/dashboard/'+project+'/'+id+'/intro3',
        
            },
        
            {
                title:'Moodboard Sensorial',
                percent:0,
                active:false,
                urlImage:'/images/step4.svg',
                urlNext:'/dashboard/'+project+'/'+id+'/intro4',
            },
        
            {
                title:'Creación del brief automático',
                percent:0,
                active:false,
                urlImage:'/images/step5.svg',
                urlNext:'/dashboard/'+project+'/'+id+'/intro5',
            },
        
        
        
        
        ];

        
        let db = fb.firestore();
        var docRef = db.collection("projects").doc(id);
        docRef.get().then(function(doc) {
            if(doc.exists){

                setPercentGeneral(doc.data().percent);
    
                listSteps.forEach(element => {
                    if( element.title ==='Aprendiendo sobre Branding'){
                        element.percent = doc.data().percentStep1

                    }

                    if(doc.data().percentStep1===100 && element.title ==='Conociendo tu marca'){
                        element.active = true;
                        element.urlNext = doc.data().url;
                        element.percent = doc.data().percentStep2

                    }

                    if(doc.data().percentStep2===100 && element.title ==='Exploración de los recursos'){
                        element.percent = doc.data().percentStep3
                        element.active = true;


                    }


                    if(doc.data().percentStep3===100 && element.title ==='Selección de los recursos'){
                 
                        element.active = true;

                    }
                    if( element.title ==='Selección de los recursos'){
                        element.percent = doc.data().percentStep4

                    }
                    if(doc.data().percentStep4===100 && element.title ==='Moodboard Sensorial'){
                 
                        element.active = true;
                        element.percent = doc.data().percentStep5
                    }

                    if(doc.data().percentStep5===100 && element.title ==='Creación del brief automático'){
                 
                        element.active = true;
                        element.percent = doc.data().percentStep6
                    }

                    if(doc.data().percentStep1===100 && doc.data().percentStep2===100 && doc.data().percentStep3===100 && doc.data().percentStep4===100 && doc.data().percentStep5===100 && doc.data().percentStep6===100 && open ===undefined){
                        setOpen(true);
                    }



 
                    
                });
               
                setSteps(listSteps);
            }else{
                setSteps(listSteps);
            }
       
                
                  
        })

      },[project,id,open])


    return (
        <div className={classes.body}>
            <div>
                <TopBar titleProject={project}/>
            </div>
            <div className={classes.content}>
                <DialogFinal handleGoHome={handleGoHome} open={open} handleClose={handleClose}/>
                <LateralBar/>
                <div className={classes.contentRight}>
   
                <div className={classes.contentText}>
                        <img className ={classes.skip} alt='skip'  src={('/images/skipStep.svg')} onClick={handleBackPage}/>
                       <h1 className={classes.title}>Progreso</h1>

                </div>
                <div className={classes.contentProgress}>

                    <h1 className={classes.description}> <span className={classes.bold}>¡Genial, aquí vamos! </span>Este es el proceso que llevas hasta el momento en la creación de la marca de tu empresa/proyecto/emprendimiento.</h1>
                    <div className={classes.progressBar}>
                        <ProgressIndex className={classes.bar} progress={percentGeneral}/>
                    </div>

   
                </div>


                    <div className={classes.contentBottom}>
                    <div className={classes.steps}>
                                   
                    {steps.map((item, i) =>
      
                    <Step key={i}
                    {...item}   
   
                    />

                    )}
                    </div>
                    <div className={classes.actions}>
                        <img className ={classes.tutorial} alt='tutorial'  src={('/images/tutorial.svg')}/>

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
 

        contentText:{
            display:'flex',
            widht:'100%',
            flexDirection:'row',
            justifyContent:'flex-start',
            alignContent:'center',
            alignItems:'center',
            marginTop:20,   
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

        description:{
            fontFamily:'Open Sans',
            flexWrap:'no-wrap',
            marginTop:'18px',   
            width:'800px',
            fontWeight:300,
            fontSize:'16px',
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
              alignSelf:'center',
              justifyContent:'center',
              width:'100%',
              marginTop:'21px',
 
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

    title:{
        fontFamily:'Poppins',
        fontWeight:400,
        fontSize:'38px',

    },

    skip:{
        cursor:'pointer',
        alignSelf:'center',
    },

 
    bold:{
        fontFamily:'Open Sans',
        fontWeight:600,
        fontSize:'18px'
    },
    contentProgress:{
        display:'flex',
  
        flexDirection:'column'
    },

    progressBar:{
        marginTop:48,
        display:'flex',
        flexDirection:'row',
        width:'1000px',
        justifyContent:'center',
        alignContent:'center',
        alignSelf:'center',

    },
    bar:{
        width:'830px',
    },
    steps:{
        display:'flex',
        flexDirection:'row',
        width:'820px',
        marginTop:'5px',
        alignSelf:'flex-start',
    }
 

    
    
    }));




export default Map_step; 