import React from 'react';
import{useParams} from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import LateralBar from '../../components/LateralBar/LateralBar';
import CardMediaCheck from '../../components/CardMediaCheck/CardMediaCheck';
import CardCheckVideo from '../../components/CardCheckVideo/CardCheckVideo';
import CardCheckSound from '../../components/CardCheckSound/CardCheckSound';
import BtnYellow from '../../components/BtnYellowG/BtnYellowG';
import BtnOutlinedStep from '../../components/BtnOutlinedStep/BtnOutlinedStep';
import BtnStep from '../../components/BtnStep/BtnStep';
import CardMediaS from '../../components/CardMediaS/CardMediaS';
import PlaceHolderBuscarMedia from '../../components/PlaceHolderBuscarMedia/PlaceHolderBuscarMedia';
import Slider from 'react-grid-carousel';
import './style.css'
import uuid from "uuid/v4";

//Todos los imports se coloca   n arriba de este 

import { fb } from '../../utils/firebase'
let db = fb.firestore();
require('firebase/auth');

let listImg=[
    {
      "url": "/images/db/limon.png",
      "nombre": "limon",
      "select": false,
      "tipo": "imagen",
      "categoria":"general",
      id: uuid(),
    },
    {
      "url": "/images/db/olas.png",
      "nombre": "olas",
      "select": false,
      "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/pato.png",
      "nombre": "pato",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/tambor.png",
      "nombre": "tambor",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/cafe.png",
      "nombre": "cafe",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),

    },
    {
      "url": "/images/db/fresas.png",
      "nombre": "fresas",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/donas.png",
      "nombre": "donas",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
         "id": uuid(),
    },
    {
      "url": "/images/db/trompeta.png",
      "nombre": "trompeta",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
         "id": uuid(),
    },
    {
      "url": "/images/db/bosque.png",
      "nombre": "bosque",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
         "id": uuid(),
    },
    {
      "url": "/images/db/manzana.png",
      "nombre": "manzana",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
         "id": uuid(),
    },
    {
      "url": "/images/db/saxo.png",
      "nombre": "saxo",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
         "id": uuid(),
    },
    {
      "url": "/images/db/piano.png",
      "nombre": "piano",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
         "id": uuid(),
    },
    {
      "url": "/images/db/flores.png",
      "nombre": "flores",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
         "id": uuid(),
    },
    {
      "url": "/images/db/script.png",
      "nombre": "script",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
         "id": uuid(),
    },
    {
      "url": "/images/db/serifa.png",
      "nombre": "serifa",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
         "id": uuid(),
    },
    {
      "url": "/images/db/paloSeco.png",
      "nombre": "paloSeco",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
         "id": uuid(),
    },
    {
      "url": "/images/db/gamuza.png",
      "nombre": "gamuza",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
         "id": uuid(),
    },
    {
      "url": "/images/db/rocas.png",
      "nombre": "rocas",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
         "id": uuid(),
    },
    {
      "url": "/images/db/naranja.png",
      "nombre": "naranja",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
         "id": uuid(),
    },
    {
      "url": "/images/db/cadenas.png",
      "nombre": "cadenas",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
         "id": uuid(),
    },
    {
      "url": "/images/db/gomas.png",
      "nombre": "gomas",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
         "id": uuid(),
    },
    {
      "url": "/images/db/chile.png",
      "nombre": "chile",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
         "id": uuid(),
    },
    {
      "url": "/images/db/fogata.png",
      "nombre": "fogata",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
         "id": uuid(),
    },
    {
      "url": "/images/db/olla.png",
      "nombre": "olla",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
         "id": uuid(),
    },
    {
      "url": "/images/db/ukelele.png",
      "nombre": "ukelele",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
         "id": uuid(),
    },
    {
      "url": "/images/db/chelo.png",
      "nombre": "chelo",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/violin.png",
      "nombre": "violin",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/bateria.png",
      "nombre": "bateria",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/sandia.png",
      "nombre": "sandia",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/arandanos.png",
      "nombre": "arandanos",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/mora.png",
      "nombre": "mora",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/kiwi.png",
      "nombre": "kiwi",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/aguacate.png",
      "nombre": "aguacate",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/papaya.png",
      "nombre": "papaya",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/cereza.png",
      "nombre": "cereza",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/pera.png",
      "nombre": "pera",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/display.png",
      "nombre": "display",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/piña.png",
      "nombre": "piña",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/manzanaVerde.png",
      "nombre": "manzanaVerde",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/leche.png",
      "nombre": "leche",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/sedaVerde.png",
      "nombre": "sedaVerde",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/sedaRoja.png",
      "nombre": "sedaRoja",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/crispetas.png",
      "nombre": "crispetas",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/chocolate.png",
      "nombre": "chocolate",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/vainilla.png",
      "nombre": "vainilla",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/menta.png",
      "nombre": "menta",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/canela.png",
      "nombre": "canela",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/chicle.png",
      "nombre": "chicle",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/mani.png",
      "nombre": "mani",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/chocolateTaza.png",
      "nombre": "chocolateTaza",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/italica.png",
      "nombre": "italica",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/metroPared.png",
      "nombre": "metroPared",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/hojas.png",
      "nombre": "hojas",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/barraRestaurante.png",
      "nombre": "barraRestaurante",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/relojColgado.png",
      "nombre": "relojColgado",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/sombra.png",
      "nombre": "sombra",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/salida.png",
      "nombre": "salida",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/hamacaRelajo.png",
      "nombre": "hamacaRelajo",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/riachueloHombre.png",
      "nombre": "riachueloHombre",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/comidas.png",
      "nombre": "comidas",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/avion.png",
      "nombre": "avion",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/pasarela.png",
      "nombre": "pasarela",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/casaBlanca.png",
      "nombre": "casaBlanca",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/cientificos.png",
      "nombre": "cientificos",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/realidadVirtual.png",
      "nombre": "realidadVirtual",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/libreta.png",
      "nombre": "libreta",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/salonClase.png",
      "nombre": "salonClase",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/paisaje.png",
      "nombre": "paisaje",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/calleCasas.png",
      "nombre": "calleCasas",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/equipoManos.png",
      "nombre": "equipoManos",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/playaMujer.png",
      "nombre": "playaMujer",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    },
    {
      "url": "/images/db/bibliotecaClasica.png",
      "nombre": "bibliotecaClasica",
      "select": false,
       "tipo": "imagen",
      "categoria":"general",
      "id": uuid(),
    }
   ]

 let  listVideo=[
    {
      "video": '/videos/mar.mp4',
      "url":'/images/db/mar.png',
      "nombre": "mar",
      "select": false,
      "tipo": "video",
      "categoria": "general",
      "id": uuid(),
    }
   ]

   let  listSound=[
    {
      "audio": "/sounds/instrumento1.mp3",
      "url":'/images/db/mar.png',
      "nombre": "intrumento1",
      "select": false,
      "tipo": "audio",
      "categoria": "general",
      "id": uuid(),
    }
   ]

function Step3(){

    let {project,id}= useParams();
    const classes = useStyles();
    let history = useHistory();
    const [disabled, setDisabled] = React.useState(true);
    
    const  [btns, setBtns ]= React.useState([]);

    const [showImg, setShowImg] = React.useState(true);
    const [showVideo, setShowVideo] = React.useState(false);
    const [showSound, setShowSound] = React.useState(false);
    const [isClick, setIsClick] = React.useState(true);
    const [isClick2, setIsClick2] = React.useState(false);
    const [isClick3, setIsClick3] = React.useState(false);

    const [answers, setAnswers] = React.useState([]);



 
    const MyDot = ({ isActive }) => (
        <span
          style={{
            display: 'inline-block',
            height: '10px',
            width: '10px',
            borderRadius:'10px',
            background: isActive ? '#7A76FF' : '#C4C4C4',
          }}
        ></span>
      )

     
    function handleBackPage(event){
        history.push('/dashboard/'+project+'/'+id+'/intro3');
    } 



    React.useEffect(() => {
      
        var docRef = db.collection("projects").doc(id).collection('seleccion-recursos').doc('recursos-seleccionados')

        const listener = docRef.onSnapshot(function(doc) {
      
            if(doc.exists){
          

            setAnswers(doc.data().answersT)
  
            setDisabled(false)
      
        }   
        })
        return () => listener()
   
    }, [id]);
    React.useEffect(()=>{
    
        if(disabled===false){

           
            db.collection("projects").doc(id).update({
            "percent": 80,
            "percentStep4": 100,
            }) 
            
        }else{
     
            db.collection("projects").doc(id).update({
                "percent": 60,
                "percentStep4": 0,
                }) 
        }
   

    },[disabled,id])


    
      function handleNextPage(event){
        history.push('/dashboard/'+project+'/'+id+'/finished3');

        let db = fb.firestore();

        db.collection("projects").doc(id).update({
            "url":  '/dashboard/'+project+'/'+id+'/finished3',
       

        })
      }
 

  
     
    React.useEffect(()=>{

        let btns=[{
            id:1,
            content:'Imágenes',
            checked:isClick,
        },
        {
            id:2,
            content:'Sonidos',
            checked:isClick2,
        },
        {
            id:3,
            content:'Vídeos',
            checked:isClick3,
        },
    ]

    setBtns(btns);
   

  
    },[isClick,isClick2,isClick3])

    const setFunction = (list = []) =>{
      let hash = {};
      const array = list.filter(o => hash[o.nombre] ? false : hash[o.nombre] = true);
      const evaluation = array.length === 0 ? listImg : array 
      return evaluation
    }




    return (
        <div className={classes.body}>
            <div>
            <div>
                <TopBar titleProject={project}/>
            </div>
            <div className={classes.content}>
                <LateralBar/>
                <div className={classes.contentRight}>

                <div className={classes.contentText}>
                        <img className ={classes.skip} alt='skip'  src={('/images/skipStep.svg')} onClick={handleNextPage}/>
                       <h3 className={classes.title}>Panel de recursos</h3>

                </div>
                <div className={classes.btns}>
                {btns.map((item,i)=>
                               <BtnYellow key={i}{...item} onClick={(event)=>{
                     

                            
                                if(item.content==='Imágenes'){
                                    setIsClick(true);
                                    setShowImg(true);
                                      
                                }else{
                                    setIsClick(false);
                                    setShowImg(false);
                               
                                }
                                if(item.content==='Sonidos'){
                                    setIsClick2(true);
                                    setShowSound(true);
                                   
                                }else{
                                    setIsClick2(false);
                                    setShowSound(false);
                                
                                }
                                if(item.content==='Vídeos'){
                                    setIsClick3(true); 
                                    setShowVideo(true); 
                                }else{
                                 setIsClick3(false);
                                 setShowVideo(false); 

                                }

                               }}/>
                               

                           
                            )}
                        <PlaceHolderBuscarMedia placeHolder='Buscar'/>
                            
                </div>
          
                {showImg ?
                    <div className={classes.carousel}>
                    <Slider showDots={true} dot={MyDot} cols={4} rows={2} gap={10} containerStyle={{ background: 'transparent',  width:'820px', 
                    height: '400px', margin: '0 auto'}} >
          
                    {setFunction(listImg).map((item, i) => {
                        const index = answers.findIndex(({ nombre }) => nombre === item.nombre);
                        return (    <Slider.Item  key={i}>         
                            <CardMediaCheck
                            {...item}
                            select={index > -1}
                            onChange={async (event)=>{
                                var docRef = db.collection("projects").doc(id).collection('seleccion-recursos').doc('recursos-seleccionados')  ;
                                const data =  await docRef.get()
                                const currentData = data.data()?.answersT ?? []
                                const res = currentData.find((obj) => obj.nombre === item.nombre )
                                if(res){
                                  const newData =  currentData.filter((obj) => obj.nombre !== item.nombre)
                                  await docRef.set({answersT:newData})
                                }else{
                                  const newData = [...currentData]
                                  newData.push({...item,select:true})
                                  await docRef.set({answersT:newData})
                                }                                    
                            }}
    
                            />
                        </Slider.Item>
               )
                    }
                
  
                )}
                </Slider>
                </div>:null}
                
                {showSound ?
                    <div className={classes.carousel}>
                    <Slider showDots={true} dot={MyDot} cols={4} rows={2} gap={10} containerStyle={{ background: 'transparent',  width:'820px', 
                    height: '400px', margin: '0 auto'}} >
                        {setFunction(listSound).map((item, i) => {
                        const index = answers.findIndex(({ nombre }) => nombre === item.nombre);
                        return (    <Slider.Item  key={i}>         
                            <CardCheckSound
                            {...item}
                            select={index > -1}
                            onChange={async (event)=>{
                                var docRef = db.collection("projects").doc(id).collection('seleccion-recursos').doc('recursos-seleccionados')  ;
                                const data =  await docRef.get()
                                const currentData = data.data()?.answersT ?? []
                                const res = currentData.find((obj) => obj.nombre === item.nombre )
                                if(res){
                                  const newData =  currentData.filter((obj) => obj.nombre !== item.nombre)
                                  await docRef.set({answersT:newData})
                                }else{
                                  const newData = [...currentData]
                                  newData.push({...item,select:true})
                                  await docRef.set({answersT:newData})
                                }                                    
                            }}
    
                            />
                        </Slider.Item>
               )
                    }
                
  
                )}
       
                
                </Slider>
                </div>:null}
                
                {showVideo ?
                    <div className={classes.carousel}>
                    <Slider showDots={true} dot={MyDot} cols={4} rows={2} gap={10} containerStyle={{ background: 'transparent',  width:'820px', 
                    height: '400px', margin: '0 auto'}} >
                    {setFunction(listVideo).map((item, i) => {
                        const index = answers.findIndex(({ nombre }) => nombre === item.nombre);
                        return (    <Slider.Item  key={i}>         
                            <CardCheckVideo
                            {...item}
                            select={index > -1}
                            onChange={async (event)=>{
                                var docRef = db.collection("projects").doc(id).collection('seleccion-recursos').doc('recursos-seleccionados')  ;
                                const data =  await docRef.get()
                                const currentData = data.data()?.answersT ?? []
                                const res = currentData.find((obj) => obj.nombre === item.nombre )
                                if(res){
                                  const newData =  currentData.filter((obj) => obj.nombre !== item.nombre)
                                  await docRef.set({answersT:newData})
                                }else{
                                  const newData = [...currentData]
                                  newData.push({...item,select:true})
                                  await docRef.set({answersT:newData})
                                }                                    
                            }}
    
                            />
                        </Slider.Item>
               )
                    }
                
  
                )}
         
                
                </Slider>
                </div>:null}
                
                
                
                
                
                
                <div className={classes.actions}>
                        <BtnOutlinedStep
                        width='149px'
                        height='48px'
                        onClick={handleBackPage}
                        />
                        <div className={classes.icons}>
                        <img alt='tutorial' className={classes.iconsAction}   src={('/images/tutorial.svg')}/>
                        </div>
                        
                        <BtnStep
                        disabled={disabled}
                        content='Continuar'
                        width='149px'
                        height='48px'
                        onClick= {handleNextPage}
                        
                        />

      
                    </div>
                </div>
            </div>
            </div>

            <div className={classes.mediaSelect}>
                <div>
                    <h1 className={classes.titleMediaSelect}>Recursos seleccionados</h1>
                </div>
                <div className={classes.cardSelects}>
                {answers.map((item,i)=>
                               <CardMediaS key={i}{...item} onClick={async(event)=>{


                                var docRef = db.collection("projects").doc(id).collection('seleccion-recursos').doc('recursos-seleccionados')  ;
                                const data =  await docRef.get()
                                const currentData = data.data()?.answersT ?? []
                                const res = currentData.find((obj) => obj.nombre === item.nombre )
                                if(res){
                                  const newData =  currentData.filter((obj) => obj.nombre !== item.nombre)
                                  await docRef.set({answersT:newData})
                                }
                             
                               }
                            }/>
                )}


          
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
   
            flexDirection:'row',
            justifyContent:'flex-start',
            alignContent:'center',
    
        },
        mediaSelect:{
            display:'flex',
            flexDirection:'column',
            backgroundColor:'#F9FAFC',
            boxShadow: '-8px 0px 16px rgba(228, 228, 228, 0.25)',
            height: '100%',
            width: '345px',


        },
        titleMediaSelect:{
            padding:50,
            fontFamily:'Poppins',
            fontSize:'19px',
            fontWeight:500,

        },
        cardSelects:{
            justifyContent:'center',
            overflow: 'scroll',
            alignSelf:'center',
            width:'332px',
            height:'auto',
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',

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
            
        },
        progress:{
            display:'flex',
            flexWrap:'no-wrap',            
        },

        contentText:{
            marginTop:'16px',
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
            alignSelf:'flex-start',
            justifyContent:'space-between',
            width:'850px',   
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
          },
          media:{
              display:'flex',
              width:'800px',
              flexDirection:'row',
              flexWrap:'wrap'
          },
          cards:{
              display:"flex",
          },



        title:{
            fontFamily:'Poppins',
            fontSize:'21px',
        },
        carousel:{
            display:'flex',
            justifyContent:'center',
            width:'850px',
            height:'400px',

        },
        btns:{
            display:'flex',

        }

          
    
    
    }));




export default Step3; 