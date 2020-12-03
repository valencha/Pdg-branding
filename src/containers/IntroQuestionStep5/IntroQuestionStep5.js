import React from 'react';
import{useParams} from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import LateralBar from '../../components/LateralBar/LateralBar';
import BtnOutlinedStep from '../../components/BtnOutlinedStep/BtnOutlinedStep';
import BtnStep from '../../components/BtnStep/BtnStep';
import ReactPlayer from 'react-player'


//Todos los imports se coloca   n arriba de este 

import { fb } from '../../utils/firebase'
let db = fb.firestore();
require('firebase/auth');
function IntroQuestionStep5(){

    let {project,id}= useParams();
    const classes = useStyles();
    let history = useHistory();


    React.useEffect(()=>{
        let namesU= []
        let emailsU= []
        var storageRef= fb.storage().ref(`${id}`)
        var docRef = db.collection("briefs").doc(id)

        const listener = docRef.onSnapshot(function(doc) {
            if(!doc){

           

         db.collection("briefs").doc(id).set({
             titleProject: ' ',
             urlMoodBoard: ' ',
             emailDuenos:' ',
             duenos:' ',
             id:id,
             audienciaGenero:' ',
             audienciaEdad:' ',
             audienciaPuntos:' ',
             audienciaIntereses:' ',
             categorias:[],
        
             

            
 
         }).then(function(docRef){
 
             storageRef.getDownloadURL().then(function(url) {
                 console.log(url)
                 db.collection("briefs").doc(id).update({urlMoodBoard:url})
 
             }).catch(function(error) {
                 // Handle any errors
                 console.log(error)
             })
 
             var docRefPCurrent = db.collection("projects").doc(id)
             docRefPCurrent.get().then(function (doc) {
 
                 db.collection("briefs").doc(id).update({titleProject:doc.data().titleProject })
             })
 
             var docRefUCurrent = db.collection("projects").doc(id).collection('users')
             docRefUCurrent.get().then(function (querySnapshot) {
             
                 querySnapshot.forEach(function (doc) {
                     
                
                    // console.log(doc.id)
                     var docRefU = db.collection("users").doc(doc.id)
                     db.collection("users").doc(doc.id).collection('briefs').doc(id).set({titleProject:project})
                     docRefU.get().then(function(doc) {
                         
                         if(doc.exists){
                             var name= doc.data().name   
                           
                             namesU.push(`${doc.data().name} - ` )
                       
                             emailsU.push(`${doc.id} - ` )
                             db.collection("briefs").doc(id).collection('users').doc(doc.id).set({name})
                         
                         }
                         console.log(namesU)
                         db.collection("briefs").doc(id).update({duenos:namesU, emailDuenos:emailsU })
                       
                     })
                 
 
                     //setNames(namesU)
           
      
                 });
 
             })
             var docRefP = db.collection("projects").doc(id).collection('esencia-de-marca')
 
             docRefP.get().then(function (querySnapshot) {
             
                 querySnapshot.forEach(function (doc) {
                     console.log(doc.id)
 
                     if(doc.id === 'paso-2'){
                         db.collection("briefs").doc(id).update({categorias: doc.data().respuestas})
                     }
 
 
                     if(doc.id === 'paso-3'){
                         
                        db.collection("briefs").doc(id).update({queHace: doc.data().notas})
                     }
 
                     if(doc.id === 'paso-4'){
                         
                         db.collection("briefs").doc(id).update({comoHace: doc.data().notas})
                      }
 
                      if(doc.id === 'paso-5'){
                         
                         db.collection("briefs").doc(id).update({porqueHace: doc.data().notas})
                      }
 
                      if(doc.id === 'paso-6'){
                         
                         db.collection("briefs").doc(id).update({valores: doc.data().notas})
                      }
 
                      if(doc.id === 'paso-7'){
                         
                         db.collection("briefs").doc(id).update({valoresRelevanciaAlta: doc.data().relevanciaAlta,
                             valoresRelevanciaBaja: doc.data().relevanciaBaja,
                             valoresRelevanciaMedia: doc.data().relevanciaMedia
                         
                         })
                      }
                      if(doc.id === 'paso-8'){
                         
                         db.collection("briefs").doc(id).update({personalidad: doc.data().respuestas})
                         db.collection("briefs").doc(id).update({urlPersonalidad: doc.data().url})
                      }
 
                      if(doc.id === 'paso-9'){
                         
                         db.collection("briefs").doc(id).update({audienciaInterna: doc.data().audienciaInterna,
                             audienciaExterna: doc.data().audienciaExterna,
                    
                         })
                      }
 
                     
                     if(doc.data().genero){
                     db.collection("briefs").doc(id).update({audienciaGenero: doc.data().genero })
                     }
                     if(doc.data().edad){
                         db.collection("briefs").doc(id).update({audienciaEdad: doc.data().edad })
                     }
                     if(doc.data().puntosContacto){
                         db.collection("briefs").doc(id).update({audienciaPuntos: doc.data().puntosContacto })
                     }
                     if(doc.data().intereses){
                         
                         db.collection("briefs").doc(id).update({audienciaIntereses: doc.data().intereses })
                     }
                     
                 })
             })
      
         })

        }})


        return () => listener()
    },[id,project])

    function handleNextPage(event){
      
     




        history.push('/dashboard/'+project+'/'+id+'/step5');

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
                       <h1 className={classes.title}>Hemos llegado al paso final y es momento de crear el <span className={classes.boldB}>Brief automático</span></h1>

                    </div>
                    <div className={classes.contentBottom}>
                    <div className={classes.contentVideo}>
                    <div className={classes.containImg}>
                    <ReactPlayer
                        url='/images/briefAutomatico.mov'
                        playing
                        loop
                        width='516px'
                        height='300px'
                    />
                    </div> 
                    <div>
                    <p className={classes.description}>Un Brief es un documento que tiene la función de especificar los requerimientos de diseño para pasar de la ideación a la ejecución de la marca.Un Brief es un documento que tiene la función de especificar los requerimientos de diseño para pasar de la ideación a la ejecución de la marca.</p>
                    <p className={classes.description2}>En este paso, hemos recolectado toda la información anterior para generar un Brief automático. También puedes eligir los requerimientos que desees.</p>
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
            fontSize:'30px',
            width:'700px'
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
        description2:{
            fontFamily:'Open Sans',
            flexWrap:'no-wrap',
            lineHeight: '29px',  
            color:'#212429',
            marginLeft:'32px',
            marginTop:'20px',
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




export default IntroQuestionStep5; 