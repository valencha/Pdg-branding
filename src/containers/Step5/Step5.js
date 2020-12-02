import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import{useParams} from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import LateralBar from '../../components/LateralBar/LateralBar';
import BtnOutlinedStep from '../../components/BtnOutlinedStep/BtnOutlinedStep';
import BtnStep from '../../components/BtnStep/BtnStep';
import { useHistory } from "react-router-dom";

import { fb } from '../../utils/firebase'
let db = fb.firestore();
require('firebase/auth');

function Step5(){
    let {project,id}= useParams();
    const classes = useStyles();
    const [nombreMarca, setNombreMarca] = React.useState('');
    let history = useHistory();

    React.useEffect(()=>{
        var docRef = db.collection("briefs").doc(id)
        docRef.onSnapshot((doc) =>{
            
            setNombreMarca(doc.data().titleProject)


        })





    },[id])

    function handleBackPage(event){
        history.push('/dashboard/'+project+'/'+id+'/intro5');
      } 

    function handleNextPage(event){


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
                       <h1 className={classes.question}> <span className={classes.num}>Brief</span> automático</h1>
                    </div>
                    <p className={classes.description}>Tenemos unos requerimientos pre-establecidos. Si deseas puedes editarlos.</p>
                    <div className={classes.contentBottom}>
                        <div className={classes.options}>

                            <div className={classes.containerInfo}>
                                <h1 className={classes.containerTitle}>Aspectos Generales</h1>

                                <div className={classes.containerRespuestas}>
                                    <div className={classes.container}>
                                        <div className={classes.divContainer}> 
                                            <div className={classes.containerTitleRespuesta}><p className={classes.titleRespuesta}>Nombre de marca</p></div>
                                           
                                            <div className={classes.containerMarca}><h1 className={classes.nombreMarca}>{nombreMarca}</h1></div>

                                        </div>
                                    


                                    </div>
                                   

                                </div>

                            </div>
    

  
                           
                        </div>


 
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
    containerRespuestas:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'red',
        width:1075,
        height:'auto',
        marginTop:'20px',
        flexWrap:'no-wrap',
        
    },
    containerTitleRespuesta:{
        display:'flex',
        flexDirection:'row',
        alignSelf:'flex-start',

        
    },
    divContainer:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        alignContent:'center',
        background: '#F3F7FB',
        borderRadius: '15px',
        width: 345,
        height: 106,
        
        
    },
    


    contentText:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
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
    titleRespuesta:{
        fontFamily:'Poppins',
        flexWrap:'no-wrap',
        fontWeight:600,
        color:'#CCCCCC',
        marginTop:'12px',
        marginLeft:'12px',   
        fontSize:'12px',
        alignSelf:'flex-start',
    },
    nombreMarca:{
        fontFamily:'Poppins',
        flexWrap:'no-wrap',
        fontWeight:400,
        color:'#212429',
        marginTop:'19px',  
        fontSize:'21px',
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
          alignSelf:'center',
          alignItems:'center',
          justifyContent:'space-around',
          width:'100%',
          marginTop:'30px',
          position:'fixed',
          top: '606px',
          left:'10px'

      },
  
      question:{
          fontFamily:'Poppins',
          color:'#212429',
          fontWeight:500,
          fontSize:'38px'
      },
      num:{
        fontFamily:'Poppins',
        fontWeight:700,
        fontSize:'38px',
        fontStyle:'italic'
      },


      container:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
    
     
    },

      containerTitle:{
        fontFamily:'Poppins',
        fontWeight:500,
        fontSize:'18px',

      },


options:{
    display:'flex',
    flexDirection:'column',
    flexWrap:'no-wrap',
    marginTop:'20px',
    
},

containerInfo:{
    display:'flex',
    flexDirection:'column',
    flexWrap:'no-wrap',
    width:'100%'
   
},




}));



export default Step5;