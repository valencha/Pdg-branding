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
require('firebase/auth');

function ScreenCongrat1(){

    let {project}= useParams();
    let history = useHistory();
    console.log(project);
    const classes = useStyles();
    const [urlNext, setUrlNext] = React.useState('');

    
    function handleBackPage(event){
        history.push(`/dashboard/${project}/step3`);
      } 
    
    function handleNextPage(event){

        history.push(`/dashboard/${project}/main`);
        
    }

    React.useEffect(() => {
        let db = fb.firestore();
        fb.auth().onAuthStateChanged(user => {
            var docRef = db.collection(`${user.email}`).doc(project);
            // Set the "capital" field of the city 'DC'
            docRef.update({
                url: '/dashboard/'+project+'/step1',
                step:'esenciaMarca_paso1'
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
                    setUrlNext(doc.data().url);
                } else {
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
              
                  
        })
       
        
    }, [project,urlNext]);





    return (
        <div className={classes.body}>
            <div>
                <TopBar titleProject={project}/>
            </div>
            <div className={classes.content}>
                <LateralBar/>
                <div className={classes.contentRight}>

                    <div className={classes.contentText}>
                       <h1 className={classes.title}>¡<span className={classes.spanBold}>Felicitaciones</span> por completar el proceso de Conociendo tu marca!</h1>

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




export default ScreenCongrat1; 