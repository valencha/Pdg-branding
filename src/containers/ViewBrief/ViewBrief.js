import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import{useParams} from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import BoxTextBrief3 from '../../components/BoxTextBrief3/BoxTextBrief';
import SwiperCategorias from '../../components/SwiperCategorias/SwiperCategorias';
import SwiperNotes from '../../components/SwiperNotes/SwiperNotes';
import SwiperValores from '../../components/SwiperValores/SwiperValores';
import SwiperColor from '../../components/ColorView/ColorView';
import SwiperPersonalidad from '../../components/SwiperPersonalidad/SwiperPersonalidad';
import BoxTextBriefView from '../../components/BoxTextBriefView/BoxTextBriefView';
import BoxMultiBrief from '../../components/BoxMultiBrief/BoxMultiBrief';
import BoxBriefView from '../../components/BoxBriefView/BoxBriefView';
import { useHistory } from "react-router-dom";

import { fb } from '../../utils/firebase'
let db = fb.firestore();
//require('firebase/auth');


function Step5(){
    let {id}= useParams();
    const classes = useStyles();
    const [nombreMarca, setNombreMarca] = React.useState(' ');
    const [descripcionMarca, setDescripcionMarca] = React.useState(" ");
    const [dueno, setDueno] = React.useState(" ");
    const [duenoEmail, setDuenoEmail] = React.useState(" ");
    const [duenoCel, setDuenoCel] = React.useState(" ");
    const [disenador, setDisenador] = React.useState(" ");
    const [disenadorEmail, setDisenadorEmail] = React.useState(" ");
    const [disenadorCel, setDisenadorCel] = React.useState(" ");
    const [categorias, setCategorias] = React.useState([]);
    const [notasHace, setNotasHace] = React.useState([]);
    const [notasComo, setNotasComo] = React.useState([]);
    const [notasPorque, setNotasPorque] = React.useState([]);
    const [notasValores, setNotasValores] = React.useState([]);
    const [valoresAlta, setValoresAlta] = React.useState([]);
    const [valoresMedia, setValoresMedia] = React.useState([]);
    const [valoresBaja, setValoresBaja] = React.useState([]);
    const [personalidad, setPersonalidad] = React.useState([]);
    const [personalidadUrl, setPersonalidadUrl] = React.useState(" ");
    const [audienciaInterna, setAudienciaInterna] = React.useState([]);
    const [audienciaExterna, setAudienciaExterna] = React.useState([]);
    const [audienciaGenero, setAudienciaGenero] = React.useState(" ");
    const [audienciaEdad, setAudienciaEdad] = React.useState(" ");
    const [audienciaPuntos, setAudienciaPuntos] = React.useState(" ");
    const [audienciaIntereses, setAudienciaIntereses] = React.useState(" ");
    const [urlMoodboard, setUrlMoodboard] = React.useState(" ");
    const [anotacion, setAnotacion] = React.useState(" ");
    const [color,setColor] = React.useState('#0000')

    let history = useHistory();


    React.useEffect(()=>{

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
        var docRef= db.collection("briefs").doc(id)
 
        docRef.onSnapshot((doc) =>{
            
            setNombreMarca(doc.data().titleProject)
           
            setPersonalidadUrl(doc.data().personalidadUrl)
            setColor(doc.data().color)

            if(doc.data().descripcion){
                setDescripcionMarca(doc.data().descripcion)
              
            }
            if(doc.data().duenos){
                setDueno(doc.data().duenos)
              
            }
            if(doc.data().emailDuenos){
                setDuenoEmail(doc.data().emailDuenos)
              
            }
            if(doc.data().celularDuenos){
                setDuenoCel(doc.data().celularDuenos)
              
            }
            if(doc.data().disenador){
                setDisenador(doc.data().disenador)
              
            }
            if(doc.data().emailDisenador){
                setDisenadorEmail(doc.data().emailDisenador)
              
            }

            if(doc.data().celularDisenador){
               
     
             setDisenadorCel(doc.data().celularDisenador)
              
            }
            
            if(doc.data().anotacion){
                    
                setAnotacion(doc.data().anotacion)
                 
            }
           
           
            let updated= []
            if(doc.data().categorias){
                listCategory.forEach((value) => {
                    var respuestas =doc.data().categorias
                    const exist = respuestas.find((str) => str === value.label )
                    if(exist){
                        const itemUpdated = {
                            ...value,
    
                        }
                    updated.push(itemUpdated)
                    }
                    console.log(updated)
                 
                })
                setCategorias(updated)
            }

            if(doc.data().queHace){
                setNotasHace(doc.data().queHace)
            }
            
            if(doc.data().comoHace){
                setNotasComo(doc.data().comoHace)
            }

            if(doc.data().porqueHace){
                setNotasPorque(doc.data().porqueHace)
            }

            if(doc.data().valores){
                setNotasValores(doc.data().valores)
            }

            if(doc.data().valoresRelevanciaAlta){
                setValoresAlta(doc.data().valoresRelevanciaAlta)
            }


            if(doc.data().valoresRelevanciaMedia){
                setValoresMedia(doc.data().valoresRelevanciaMedia)
            }
            
           
            if(doc.data().valoresRelevanciaBaja){
                setValoresBaja(doc.data().valoresRelevanciaBaja)
            }
            
            if(doc.data().personalidad){
                setPersonalidad(doc.data().personalidad)
                setPersonalidadUrl(doc.data().urlPersonalidad)
            }
            
            if(doc.data().audienciaInterna){
                setAudienciaInterna(doc.data().audienciaInterna)
            }
            
            if(doc.data().audienciaExterna){
                setAudienciaExterna(doc.data().audienciaExterna)
            }
           
            if(doc.data().audienciaGenero){
                setAudienciaGenero(doc.data().audienciaGenero)
            }

            if(doc.data().audienciaEdad){
                setAudienciaEdad(doc.data().audienciaEdad)
            }
            if(doc.data().audienciaPuntos){
                setAudienciaPuntos(doc.data().audienciaPuntos)
            }
            if(doc.data().audienciaIntereses){
                setAudienciaIntereses(doc.data().audienciaIntereses)
            }
            
            if(doc.data().urlMoodBoard){
                setUrlMoodboard(doc.data().urlMoodBoard)
            }
  
        })

 
    
  
   

    },[id])




  return (
        <div className={classes.body}>
            <div>
                <TopBar titleProject={nombreMarca}/>
            </div>
            <div className={classes.content}>
                <div className={classes.contentRight}>
  
                    <div className={classes.contentText}>
                       <h1 className={classes.question}> <span className={classes.num}>Brief</span> automático</h1>
                    </div>
                    <p className={classes.description}>Mira este brief creado desde EasyBranding</p>
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
                                        <BoxBriefView marginTop='20px'  descripcion={descripcionMarca}title='Descripción de marca' />
                                    
                                        <BoxTextBriefView  marginTop='20px'  title='Contacto/s' dueno={dueno} duenoEmail={duenoEmail} duenoCel={duenoCel}
                                         disenador={disenador} disenadorEmail={disenadorEmail} disenadorCel={disenadorCel}/>

                                    </div>
                                   
                                    <div className={classes.container}>
                                        <SwiperCategorias title='Industria o categoría de marca' list={categorias}/>
                                        <SwiperNotes marginTop='20px'  height='126px' heightSwiper='70px' widthSwiper= '320px'title='¿Qué hace la marca?' list={notasHace}/>
                                    </div>   
                                
                                    <div className={classes.container}>
                                        <SwiperNotes  height='126px' heightSwiper='70px' widthSwiper= '320px'title='¿Qué hace la marca?' list={notasComo}/>
                                        <SwiperNotes marginTop='20px'  height='126px' heightSwiper='70px' widthSwiper= '320px'title='Razón de existir de la marca' list={notasPorque}/> 
                                    </div>
                                </div>

                             

                            </div>

                            <div className={classes.containerInfo} style={{marginTop:'48px'}}>
                                <h1 className={classes.containerTitle}>Valores de marca y relevancia</h1>
                                <div className={classes.containerRespuestas}>
                                    <div className={classes.container}>
                                        <SwiperNotes cols={2} rows={3}height='271px' heightSwiper='200px' widthSwiper= '320px'title='Valores de marca' list={notasValores}/>

                                    </div>
                                    <div className={classes.container}>
                                        <SwiperValores cols={1} rows={1} height='271px' title='Relevancia de valores de marca' listAlta={valoresAlta}
                                        listMedia={valoresMedia} listBaja={valoresBaja}/>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.containerInfo} style={{marginTop:'48px'}}>
                                <h1 className={classes.containerTitle}>Personalidad de la marca</h1>
                                <div className={classes.containerRespuestas}>

                                    <SwiperPersonalidad urlPersonalidad={personalidadUrl} list={personalidad}/>

                                </div>
                            </div>

                            <div className={classes.containerInfo} style={{marginTop:'48px'}}>
                                <h1 className={classes.containerTitle}>Audiencias y público objetivo</h1>
                                <div className={classes.containerRespuestas}>

                                    <div className={classes.container}>
                                        <SwiperNotes cols={2} rows={2}  height='271px' heightSwiper='170px' widthSwiper= '320px'title='Audiencia interna' list={audienciaInterna}/>
                                    </div>
                                    <div className={classes.container}>
                                        <SwiperNotes cols={2} rows={2}  height='271px' heightSwiper='170px' widthSwiper= '320px'title='Audiencia Externa' list={audienciaExterna}/>
                                    </div>

                                    <div className={classes.container}>
                                        <BoxMultiBrief title='Público objetivo' generoAudiencia={audienciaGenero} edadAudiencia={audienciaEdad}
                                          puntosContacto={audienciaPuntos} intereses={audienciaIntereses}/>
                                    </div>      
      

                                </div>
                            </div>


                            <div className={classes.containerInfo} style={{marginTop:'48px'}}>
                                <h1 className={classes.containerTitle}>Moodboard Sensorial</h1>
                                <div className={classes.containerRespuestas}>

                                    <div className={classes.divContainer} style={{width:'100%', height:'620px'}}> 
                                        <div className={classes.containerTitleRespuesta}><p className={classes.titleRespuesta}>Moodboard sensorial</p></div>
                                           
                                            <div className={classes.containerMarca} >
                                                <img src={urlMoodboard} alt="watch" width='876px' style={{marginTop:'20px'}} />
                                             
                                            </div>

                                    </div>


                                </div>
                            </div>
                            

                            <div className={classes.containerInfo} style={{marginTop:'48px'}}>
                                <h1 className={classes.containerTitle}>Detalles Adicionales</h1>
                                <div className={classes.containerRespuestas}>
                                   
                                    <SwiperColor title='Paleta de colores' height='320px' color={color}/>
                             
                                    <BoxTextBrief3 descripcion={anotacion}title='Anotaciones' placeholder='Escribe alguna anotación que quieras compartir en el Brief......'/>



                                </div>
                            </div>
                            

                           
                        </div>


 
                    </div>

                    
                    <div className={classes.actions}>
                    
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
        height: '450vh',
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
        width:1075,
        height:'auto',
        marginTop:'20px',
        flexWrap:'no-wrap',
        justifyContent:'space-between'
        
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