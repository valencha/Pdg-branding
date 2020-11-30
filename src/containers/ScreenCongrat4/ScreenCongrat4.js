import React from 'react';
import{useParams} from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import { makeStyles } from '@material-ui/core/styles';
import LateralBar from '../../components/LateralBar/LateralBar';
import BtnOutlinedStep from '../../components/BtnOutlinedStep/BtnOutlinedStep';
import BtnStep from '../../components/BtnStep/BtnStep';
import { useHistory } from "react-router-dom";
//Todos los imports se coloca   n arriba de este 

import { fb } from '../../utils/firebase'
let db = fb.firestore();
require('firebase/auth');

function ScreenCongrat4(){
    let history = useHistory();

    let {project,id}= useParams();

    const classes = useStyles();



    function handleBackPage(event){
        history.push('/dashboard/'+project+'/'+id+'/step4Share');

      } 
    
    function handleNextPage(event){

        history.push('/dashboard/'+project+'/'+id+'/main');


        db.collection("projects").doc(id).update({
            "percent":  100,
            "percentStep4": 100
       

        })
        
    }
 
      

    return (
        <div className={classes.body}>
            <div>
                <TopBar titleProject={project}/>
            </div>
            <div className={classes.content}>
                <LateralBar/>
                <div className={classes.contentRight}>

                    <div className={classes.contentText}>
                       <h1 className={classes.title}><span className={classes.spanBold}>¡Felicitaciones!</span>Por realizar el proceso del Moodboard sensorial</h1>
                    
                    </div>
                    <div className={classes.contentBottom}>
         
                    
                    </div>
                    <div className={classes.actions}>
                        <BtnOutlinedStep
                        width='149px'
                        height='48px'
                        onClick={handleBackPage}
                        />

                        <BtnStep
                        disabled={false}
                        content='Continuar'
                        width='149px'
                        height='48px'
                        onClick={handleNextPage}
                        />
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
            marginTop:'46px',
            display:'flex',
            flexDirection:'row',
            justifyContent:'flex-start',
            alignContent:'center',
            alignItems:'center',
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

        title:{
            fontFamily:'Poppins',
            flexWrap:'no-wrap',
            fontWeight:400,
            width:'700px',
            marginTop:'24px',   
            fontSize:'30px',
        },
        spanBold:{
            fontFamily:'Poppins',
            flexWrap:'no-wrap',
            fontWeight:600,
            width:'700px',
            marginTop:'24px',   
            fontSize:'30px',
        },
   

          contentBottom:{
            display:'flex',
            width:'79%',  
            height:'100%',  
            marginTop:'20px',
            flexDirection:'column',
            flexWrap:'no-wrap',
            alignItems:'flex-start',
            justifyContent:'center'
          },
          actions:{
            display:'flex',
            flexDirection:'row',
            flexWrap:'no-wrap',
            alignSelf:'flex-start',
            justifyContent:'space-between',
            width:'79%',
            marginTop:'86px'
                  
          },
          
          
   

    
    
    }));




export default ScreenCongrat4; 