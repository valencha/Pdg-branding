import React from 'react';
import{useParams} from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import LateralBar from '../../components/LateralBar/LateralBar';
import ProgressTool from '../../components/ProgressTool/ProgressTool';
import BtnOutlinedStep from '../../components/BtnOutlinedSkip/BtnOutlinedSkip';
import BtnStep from '../../components/BtnStep/BtnStep';
import BtnTakeNotes from '../../components/BtnTakeNotes/BtnTakeNotes';


//Todos los imports se coloca   n arriba de este 

import { fb } from '../../utils/firebase'
require('firebase/auth');

function Step0(){

    let {project,step,url}= useParams();
    const classes = useStyles();
    let history = useHistory();
    const [numStep, setNumStep] = React.useState('1');
    const [value, setValue] = React.useState(33.33333 );

    const [option1, setOption1] = React.useState(classes.btnOptionYellow);
    const [option2, setOption2] = React.useState(classes.btnOption);
    const [urlNext, setUrlNext] = React.useState('');
    const [option3, setOption3] = React.useState(classes.btnOption);
   

    React.useEffect(() => {

        let db = fb.firestore();
        fb.auth().onAuthStateChanged(user => {
        var docRef = db.collection(`${user.email}`).doc(project);
        // Set the "capital" field of the city 'DC'
        docRef.update({
            url: '/dashboard/'+project+'/intro',
            step:'intro'
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
   
          
    }, [project,step,url]);

    function handleOption(){
        setValue(33.33333); 
        setNumStep('1');
        setOption1(classes.btnOptionYellow);
        setOption2(classes.btnOption);
        setOption3(classes.btnOption);    
      }

      function handleOption2(){
        setValue(66.666666); 
        setNumStep('2');
        setOption1(classes.btnOption);
        setOption2(classes.btnOptionYellow);
        setOption3(classes.btnOption);    
      }

      function handleOption3(){

        setNumStep('3');
        setValue(100); 
        setOption1(classes.btnOption);
        setOption2(classes.btnOption);
        setOption3(classes.btnOptionYellow);    
      }

      function handleNextPage(event){
        console.log(project.step);
       
       history.push(urlNext);
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
                            titleStep='Aprendiendo sobre Branding'
                            numStep={numStep}
                            numTotalStep='3'
                            value={value}
                            onClick={handleNextPage}

                        />
                    </div>
                    <div className={classes.contentText}>
                        <h1 className={classes.titleStep}>¡Conoce un poco más sobre Branding!</h1>
                        <p className={classes.description}>Disfruta de una serie de vídeos donde aprendarás más a fondo importante teoría sobre Branding</p>

                    </div>
                    <div className={classes.contentBottom}>
                        
                        
                        <div className={classes.contentVideo}>
                        <div className={classes.options}> 
                            <button className={option1} onClick={handleOption}>¿Qué es Branding?</button>
                            <button className={option2} onClick={handleOption2}>Branding Sensorial</button>
                            <button className={option3} onClick={handleOption3}>Aplicaciones</button>
                            <BtnTakeNotes
                            content='Tomar nota'
                            marginTop='26px'
                            />
                            
                        </div>
                        <div >
                            <iframe title='video'width="593" height="334"  style={{border:0 , borderRadius: '15px'}} src="https://www.youtube.com/embed/videoseries?list=PLqOT5e7XTXTNj77Sz5ECIHPcXQqqrNK8-" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" allowFullScreen={true}></iframe>
                        </div>
                       
                       
                    </div>
                    <div className={classes.actions}>
                        <BtnOutlinedStep
                        content='Saltar'
                        width='149px'
                        height='48px'
                        onClick={handleNextPage}
                        />
                        <img className ={classes.tutorial} alt='tutorial'  src={('/images/tutorial.svg')} />
                        <BtnStep
                        onClick={handleNextPage}
                        content='Continuar'
                        width='149px'
                        height='48px'
                        
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
            display:'flex',
            flexDirection:'column',
            width:'100%',
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
            fontSize:'23px',
        },
        description:{
            fontFamily:'Open Sans',
            flexWrap:'no-wrap',
            marginTop:'18px',   
            fontWeight:400,
            fontSize:'18px',
        },

      


        btnOption:{
            color:'#CCCCCC',
            fontFamily:'Poppins',
            border:'none',
            background:'none',
            outline:'none',
            cursor:'pointer',
            marginTop:'32px',
            fontWeight:600,
           
          },

          options:{
            display:'flex',
            flexDirection:'column',
            width:'50%',
            flexWrap:'no-wrap', 
            justifyContent:'flex-start',
            alignContent:'flex-start',
            alignItems:'flex-start',

          },

          contentBottom:{
            display:'flex',
            width:'79%',    
            marginTop:'30px',
            flexDirection:'column',
            flexWrap:'no-wrap',
            alignItems:'flex-start',
            justifyContent:'center'
          },
          
          
          
          btnOptionYellow:{
            fontWeight:600,
            backgroundColor:'#FFD984',
            color:'#212429',
            width:'auto',
            paddingLeft:'20px',
            paddingRight:'20px',
            height:'46px',
            marginTop:'20px',
            borderRadius:'20px',
            fontFamily:'Poppins',
            border:'none',
            outline:'none',
            cursor:'pointer',
          },
          actions:{
            display:'flex',
            flexDirection:'row',
            flexWrap:'no-wrap',
            alignSelf:'flex-end',
            justifyContent:'space-between',
            width:'100%',   
            marginTop:'20px'
          },
          tutorial:{
              cursor:'pointer',
          },
          contentVideo:{
            display:'flex',
            flexDirection:'row',
            flexWrap:'no-wrap',
            width:'100%',
            height:'342px',
          },

          video:{
              borderRadius:'155px',
          }

          
    
    
    }));




export default Step0; 