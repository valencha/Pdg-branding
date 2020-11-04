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

    let {project}= useParams();
    console.log(project);
    const classes = useStyles();
    const [textName, setTextName] = React.useState('');
    const [textSlogan, setTextSlogan] = React.useState('');
    const [urlNext, setUrlNext] = React.useState('');



   
    let history = useHistory();


  
      function handleBackPage(event){
        history.push(`/dashboard`);
      } 



    React.useEffect(() => {
        let isCancelled = false;
        setTextName(textName);
        setTextSlogan(textSlogan);
        setUrlNext(urlNext);
        let db = fb.firestore();
        if(!isCancelled){
        fb.auth().onAuthStateChanged(user => {
        
        var docRef = db.collection(`${user.email}`).doc(project);
 
        setUrlNext(urlNext);
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
     
    }  
    )}
    setUrlNext(urlNext);
    return () => {
        isCancelled = true;
      };
      

    }, [project,textName,textSlogan,urlNext]);



    let steps=[
        {
            title:'Conociendo tu marca',
            percent:0,
            active:true,
            urlImage:'/images/step1.svg',
            urlNext:urlNext,
    
        },
    
        {
            title:'Selección de los recursos',
            percent:0,
            active:false,
            urlImage:'/images/step2.svg'
    
        },
    
    
        {
            title:'Exploración de los recursos',
            percent:0,
            active:false,
            urlImage:'/images/step3.svg'
    
        },
    
        {
            title:'Moodboard Sensorial',
            percent:0,
            active:false,
            urlImage:'/images/step4.svg'
    
        },
    
        {
            title:'Creación del brief automático',
            percent:0,
            active:false,
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
                        <ProgressIndex className={classes.bar} progress={0}/>
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