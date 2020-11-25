import React from 'react';
import{useParams} from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import LateralBar from '../../components/LateralBar/LateralBar';
import Step from '../../components/Step/Step';


//Todos los imports se coloca   n arriba de este 

import { fb } from '../../utils/firebase'
import ProgressIndex from '../../components/ProgressIndex/ProgressIndex';
require('firebase/auth');


function Map_step(){

    let {project,id}= useParams();
    console.log(project,id);
   
 
    const classes = useStyles();
    const [urlNext, setUrlNext] = React.useState('/dashboard/'+project+'/step1');
    const [urlNext2, setUrlNext2] = React.useState('/dashboard/'+project+'/intro2');
    const [percentGeneral, setPercentGeneral] = React.useState(0);

    const [percent1, setPercent1] = React.useState(0);
    const [step1Active, setStep1Active] = React.useState(true);
    const [percent2, setPercent2] = React.useState(0);
    const [step2Active, setStep2Active] = React.useState(false);
    const [percent3, setPercent3] = React.useState(0);
    const [step3Active, setStep3Active] = React.useState(false);
    const [percent4, setPercent4] = React.useState(0);
    const [step4Active, setStep4Active] = React.useState(false);
    const [percent5, setPercent5] = React.useState(0);
    const [step5Active, setStep5Active] = React.useState(false);
    const [percent6, setPercent6] = React.useState(0);
    const [step6Active, setStep6Active] = React.useState(false);

   
    
    const [steps, setSteps] = React.useState([]);
    let history = useHistory();


  
      function handleBackPage(event){
        history.push(`/dashboard`);
      } 
     
      React.useEffect(()=>{

        let db = fb.firestore();
        var docRef = db.collection("projects").doc(id);
        docRef.get().then(function(doc) {
            
        })
   
      },[id])

    /*

    React.useEffect(() => {
        let isCancelled = false;
        let active=false;
        setUrlNext(urlNext);
        let db = fb.firestore();
        if(!isCancelled){
        fb.auth().onAuthStateChanged(user => {
        
        var docRef = db.collection(`${user.email}`).doc(project);
 
        setUrlNext(urlNext);
        docRef.get().then(function(doc) {
         
            if (doc.exists) {
                setUrlNext(doc.data().url);
                setPercentGeneral(doc.data().percent);
                setPercent1(doc.data().percentStep1);
                setPercent2(doc.data().percentStep2);
                setPercent3(doc.data().percentStep3);
                setPercent4(doc.data().percentStep4);
                setPercent5(doc.data().percentStep5);
                setPercent6(doc.data().percentStep6);
                if( doc.data().percentStep1===100){
                  active=true;
                  setStep2Active(active);
                   
                }
                if(percent2===100){
                    active=true;
                    setPercent2(100);
                    setStep3Active(active);

                    docRef.update({
                        percentStep2:100,
                        percent:40,
                    })
                    .then(function(db) {
                 
                        console.log('done');
                    })
                    .catch(function(error) {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
                    

                }

            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
     
    } 

    )}
    setUrlNext(urlNext);
   
    return () => {
        isCancelled = true;
      };
      


    }, [project,urlNext,percentGeneral,steps,step2Active,step3Active,percent2]);

    */
    let listSteps=[
        {
            title:'Aprendiendo sobre Branding',
            percent:percent1,
            active:step1Active,
            urlImage:'/images/video.svg',
            urlNext:'/dashboard/'+project+'/videos',
    
        },
        {
            title:'Conociendo tu marca',
            percent:percent2,
            active:step2Active,
            urlImage:'/images/step1.svg',
            urlNext:urlNext,
    
        },
    
        {
            title:'Exploración de los recursos',
            percent:percent3,
            active:step3Active,
            urlImage:'/images/step3.svg',
            urlNext:urlNext2,
        },
        {
            title:'Selección de los recursos',
            percent:percent4,
            active:true,
            urlImage:'/images/step2.svg',
            urlNext:'/dashboard/'+project+'/intro3',
    
        },
    
        {
            title:'Moodboard Sensorial',
            percent:percent5,
            active:step5Active,
            urlImage:'/images/step4.svg'
    
        },
    
        {
            title:'Creación del brief automático',
            percent:percent6,
            active:step6Active,
            urlImage:'/images/step5.svg'
    
        },
    
    
    
    
        ];



    return (
        <div className={classes.body}>
            <div>
                <TopBar titleProject={project}/>
            </div>
            <div className={classes.content}>
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
                                   
                    {listSteps.map((item, i) =>
      
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