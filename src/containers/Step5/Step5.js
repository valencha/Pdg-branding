import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import{useParams} from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import LateralBar from '../../components/LateralBar/LateralBar';
import BtnOutlinedStep from '../../components/BtnOutlinedStep/BtnOutlinedStep';
import BtnStep from '../../components/BtnStep/BtnStep';
import BoxTextBrief from '../../components/BoxTextBrief/BoxTextBrief';
import SwiperCategorias from '../../components/SwiperCategorias/SwiperCategorias';
import SwiperNotes from '../../components/SwiperNotes/SwiperNotes';
import SwiperValores from '../../components/SwiperValores/SwiperValores';
import BoxTextMultiBrief from '../../components/BoxTextMultiBrief/BoxTextMultiBrief';
import { useHistory } from "react-router-dom";

import { fb } from '../../utils/firebase'
let db = fb.firestore();
require('firebase/auth');
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

function Step5(){
    let {project,id}= useParams();
    const classes = useStyles();
    const [nombreMarca, setNombreMarca] = React.useState('');
    const [descripcionMarca, setDescripcionMarca] = React.useState('');
    const [dueno, setDueno] = React.useState('');
    const [duenoEmail, setDuenoEmail] = React.useState('');
    const [duenoCel, setDuenoCel] = React.useState('');
    const [disenador, setDisenador] = React.useState('');
    const [disenadorEmail, setDisenadorEmail] = React.useState('');
    const [disenadorCel, setDisenadorCel] = React.useState('');
    const [categorias, setCategorias] = React.useState([]);
    const [notasHace, setNotasHace] = React.useState([]);
    const [notasComo, setNotasComo] = React.useState([]);
    const [notasPorque, setNotasPorque] = React.useState([]);
    const [notasValores, setNotasValores] = React.useState([]);
    const [valoresAlta, setValoresAlta] = React.useState([]);

    let history = useHistory();


    React.useEffect(()=>{
        var docRef = db.collection("briefs").doc(id)
        docRef.onSnapshot((doc) =>{
            
            setNombreMarca(doc.data().titleProject)
            setDescripcionMarca(doc.data().descripcion)
            setDueno(doc.data().duenos)
            setDuenoEmail(doc.data().emailDuenos)
            setDuenoCel(doc.data().celularDuenos)
            setDisenador(doc.data().disenador)
            setDisenadorEmail(doc.data().emailDisenador)
            setDisenadorCel(doc.data().celularDisenador)
            
            var respuestas =doc.data().categorias
            let updated= []

            listCategory.forEach((value) => {

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
            setNotasHace(doc.data().queHace)
            setNotasComo(doc.data().comoHace)
            setNotasPorque(doc.data().porqueHace)
            setNotasValores(doc.data().valores)
            setValoresAlta(doc.data().valoresRelevanciaAlta)
        })





    },[id])

    function handleBackPage(event){
        history.push('/dashboard/'+project+'/'+id+'/intro5');
      } 

    function handleNextPage(event){


    }

    function handleChangeDescription(event){
        setDescripcionMarca(event.target.value);
        db.collection("briefs").doc(id).update({descripcion: event.target.value})
    }

  
    function handleChangeCelDueno(event){
        setDuenoCel(event.target.value);
        db.collection("briefs").doc(id).update({celularDuenos: event.target.value})
    }
    function handleChangeDisenador(event){
        setDisenador(event.target.value);
        db.collection("briefs").doc(id).update({disenador: event.target.value})
    }

    function handleChangeEmailDisenador(event){
        setDisenadorEmail(event.target.value);
        db.collection("briefs").doc(id).update({emailDisenador: event.target.value})
    }

    function handleChangeCelDisenador(event){
        setDisenadorCel(event.target.value);
        db.collection("briefs").doc(id).update({celDisenador: event.target.value})
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
                                        <BoxTextBrief marginTop='20px' onChange={handleChangeDescription} descripcion={descripcionMarca}title='Descripción de marca' placeholder='Escribir breve descripción de la marca...'/>
                                    
                                        <BoxTextMultiBrief marginTop='20px'  title='Contacto/s' dueno={dueno} duenoEmail={duenoEmail} duenoCel={duenoCel}
                                         onChangeCelDueno={handleChangeCelDueno}
                                         onChangeDisenador={handleChangeDisenador}
                                         onChangeEmailDisenador={handleChangeEmailDisenador}
                                         onChangeCelDisenador={handleChangeCelDisenador}
                                         disenador={disenador} disenadorEmail={disenadorEmail} disenadorCel={disenadorCel} />

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
                                        <SwiperValores cols={1} rows={1} height='271px' title='Relevancia de valores de marca' list={notasValores}/>
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
        height: '1000vh',
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