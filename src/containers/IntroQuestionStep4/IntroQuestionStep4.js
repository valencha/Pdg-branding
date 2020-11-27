import React from 'react';
import{useParams} from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import LateralBar from '../../components/LateralBar/LateralBar';
import BtnOutlinedStep from '../../components/BtnOutlinedStep/BtnOutlinedStep';
import BtnStep from '../../components/BtnStep/BtnStep';


function IntroQuestionStep4(){

    let {project,id}= useParams();
    const classes = useStyles();
    let history = useHistory();

    function handleNextPage(event){
        history.push('/dashboard/'+project+'/'+id+'/step4');
      }
      

      function handleBackPage(event){
        history.push('/dashboard/'+project+'/'+id+'/main');
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
                        <img className ={classes.skip} alt='skip'  src={('/images/skipStep.svg')} onClick={handleNextPage}/>
                       <h1 className={classes.title}>Hora de crear el <span className={classes.boldB}>Moodboard sensorial</span> para tu marca.</h1>

                    </div>
                    <div className={classes.contentBottom}>
                    <div className={classes.contentVideo}>
                    <img className ={classes.video} alt='video'  src={('/images/videoIntro.png')}/>
                    <div>
                    <p className={classes.description}>Hemos sugerido diferentes recursos según la esencia de tu marca. Por favor selecciona los que te parezcan más convenientes y si no están los recursos que deseas, ¡no te preocupes! Puedes subirlos a la plataforma.</p>
                    </div>
                    </div>         
                   
                    <div className={classes.actions}>
                        <BtnOutlinedStep
                        width='149px'
                        height='48px'
                        onClick={handleBackPage}
                        />
                        <BtnStep
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
            fontWeight:500, 
            fontSize:'35px',
        },
        boldB:{
            fontFamily:'Poppins',
            flexWrap:'no-wrap',
            fontWeight:600, 
            fontSize:'35px',

        },
        withoutKit:{
            fontFamily:'Poppins',
            flexWrap:'no-wrap',
            fontSize:'18px',
            marginLeft:'32px',
            marginTop:30

        },
        btnKit:{
            marginLeft:'32px',
            marginTop:'24px',
            color:'#686B6E',
            fontWeight:600, 
            fontFamily:'Poppins',
            background: '#FFFFFF',
            border:'none',
            padding:12,
            boxShadow:' 2px 8px 16px rgba(61, 62, 66, 0.105)',
            borderRadius: '15px',
        },
        contentBold:{
            fontWeight:600, 

        },
        description:{
            fontFamily:'Open Sans',
            flexWrap:'no-wrap',
            lineHeight: '29px',  
            color:'#212429',
            marginLeft:'32px',
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
            marginTop:'86px'
                  
          },
          tutorial:{
              cursor:'pointer',
          },

          
          
          num:{
            fontFamily:'Open Sans',
            fontWeight:700,
            fontSize:'18px'
          },

          branding:{
              fontStyle:'italic',
          },

          contentVideo:{
              display:'flex',
              flexDirection:'row',
              height:'335px',
          },
          skip:{
              cursor:'pointer',
          }

    
    
    }));




export default IntroQuestionStep4; 