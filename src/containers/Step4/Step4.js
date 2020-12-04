import React from 'react';
import{useParams} from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import LateralBar from '../../components/LateralBar/LateralBar';
import CardGeneralimg from '../../components/CardGeneralimg/CardGeneralimg';
import CardGeneralvideo from '../../components/CardGeneralvideo/CardGeneralvideo';
import CardGeneralsonido from '../../components/CardGeneralsonido/CardGeneralsonido';
import CardMoodboard from '../../components/CardMoodboard/CardMoodboard';
import DialogVista from '../../components/DialogVista/DialogVista';
import DialogOlfato from '../../components/DialogOlfato/DialogOlfato';
import DialogOido from '../../components/DialogOido/DialogOido';
import DialogTacto from '../../components/DialogTacto/DialogTacto';
import DialogGusto from '../../components/DialogGusto/DialogGusto';
import DialogGuru from '../../components/DialogGuru/DialogGuru';
import DialogSentidos from '../../components/DialogSentidos/DialogSentidos';
import BtnYellow from '../../components/BtnYellowG/BtnYellowG';
import BtnOutlinedStep from '../../components/BtnOutlinedStep/BtnOutlinedStep';
import BtnStep from '../../components/BtnStep/BtnStep';
import Slider from 'react-grid-carousel';
import './styles.css';
import html2canvas from 'html2canvas';
import { fb } from '../../utils/firebase'
import DragAndDrop from './dnd';
let db = fb.firestore();
require('firebase/auth');



function Step4(){

    let {project,id}= useParams();
    const classes = useStyles();
    let history = useHistory();
    const [disabled, setDisabled] = React.useState(false);
  
    const  [btns, setBtns ]= React.useState([]);

    const [showImg, setShowImg] = React.useState(true);
    const [showVideo, setShowVideo] = React.useState(false);
    const [showSound, setShowSound] = React.useState(false);

    const [logroV, setLogroV] = React.useState('/images/g-vista.svg');
    const [logroOi, setLogroOi] = React.useState('/images/g-oido.svg');
    const [logroG, setLogroG] = React.useState('/images/g-gusto.svg');
    const [logroOl, setLogroOl] = React.useState('/images/g-olfato.svg');
    const [logroT, setLogroT] = React.useState('/images/g-tacto.svg');
    const [logroGu, setLogroGu] = React.useState('/images/g-guru.svg');

    const [isClick, setIsClick] = React.useState(true);
    const [isClick2, setIsClick2] = React.useState(false);
    const [isClick3, setIsClick3] = React.useState(false);
    const [score, setScore] = React.useState(10);
    const [scoreVisual, setScoreVisual] = React.useState(0);
   
    const [managerDrag]= React.useState(new DragAndDrop())
    const [itemsImg, setItemsImg] = React.useState([]);
    const [itemsVideo, setItemsVideo] = React.useState([]);
    const [itemsSonido, setItemsSonido] = React.useState([]);
    
   

    const[itemsEscogidos, setItemsEscogidos]= React.useState([]);
    const [itemsEscogidosAnteriores, setItemsEscogidosAnteriores]= React.useState([]);

    const [openVista, setOpenVista] = React.useState(undefined);
    const [openOlfato, setOpenOlfato] = React.useState(undefined);
    const [openGusto, setOpenGusto] = React.useState(undefined);
    const [openTacto, setOpenTacto] = React.useState(undefined);
    const [openOido, setOpenOido] = React.useState(undefined);
    const [openGuru, setOpenGuru] = React.useState(undefined);
    const [urlDialog, setUrlDialog] = React.useState(' ');

    const [openSentidos, setOpenSentidos] = React.useState(false);

    const [listaSentidos, setListaSentidos] = React.useState([
    {img:"/images/vista.svg",
    title:"vista"},
    {img:"/images/oido.svg",
    title:"oido"},
    {img:"/images/tacto.svg",
    title:"tacto"},
    {img:"/images/olfato.svg",
    title:"olfato"},
    {img:"/images/gusto.svg",
    title:"gusto"}

    ]);

    const handleCloseVista = () => {
      setOpenVista(false);
    };
    const handleCloseSentidos = () => {
        setOpenSentidos(false);
      };

    
      const handleCloseGusto = () => {
        setOpenGusto(false);
    };

  
    
      const handleCloseOlfato = () => {
        setOpenOlfato(false);
    };

 
      const handleCloseTacto = () => {
        setOpenTacto(false);
    };

 
    
      const handleCloseOido = () => {
        setOpenOido(false);
    };


      const handleCloseGuru = () => {
        setOpenGuru(false);
    };

    

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



  const setValueMensaje = ()=>{
    db.collection("projects").doc(id).collection('moodboard-sensorial').doc('todos').set({
        recursos:itemsEscogidos
    })
    setItemsEscogidos(Object.assign([],itemsEscogidos));
    setListaSentidos(Object.assign([], listaSentidos));
  }
 

    function handleBackPage(event){
        history.push('/dashboard/'+project+'/'+id+'/intro4');
    } 

    React.useEffect(() => {
        setDisabled(false)
        var docInit = db.collection("projects").doc(id).collection('seleccion-recursos').doc('recursos-seleccionados')
        docInit.onSnapshot((doc) =>{
            if (doc.exists) {
                var respuestas = doc.data().answersT    
                setItemsImg(respuestas.filter((r)=> r.tipo === 'imagen'))                        
                setItemsVideo(respuestas.filter((r)=> r.tipo === 'video'))                       
                setItemsSonido(respuestas.filter((r)=> r.tipo === 'audio'))              
                console.log(respuestas)
                setItemsEscogidosAnteriores(Object.assign([],respuestas))
                
        
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        })

        var containers_sentidos = document.querySelectorAll(".container__sentidos");
        if(containers_sentidos){
            managerDrag.addDrop(containers_sentidos)
        }

     

        var docRef = db.collection("projects").doc(id).collection('moodboard-sensorial').doc('todos')
        var docScore = db.collection("projects").doc(id).collection('moodboard-sensorial').doc('score')

        docScore.onSnapshot((doc) =>{
            if(doc.exists){
                setScoreVisual(doc.data().score)
              
                if(doc.data().score>=50){
                    //setOpenGuru(true)
                    setLogroGu('/images/mguru.svg');
                }
            } 
            
        })



        docRef.onSnapshot((doc) =>{
            if(doc.exists){
             
                setItemsEscogidos(doc.data().recursos)

                
                
           
            } 
            
        })
      
   
    }, [id,managerDrag]);
    	
    React.useEffect(()=>{
     

        let logroVista= itemsEscogidos.filter((r)=> r.categoria=== 'vista')
        let logroOido= itemsEscogidos.filter((r)=> r.categoria=== 'oido')
        let logroOl= itemsEscogidos.filter((r)=> r.categoria=== 'olfato')
        let logroTacto= itemsEscogidos.filter((r)=> r.categoria=== 'tacto')
        let logroGusto= itemsEscogidos.filter((r)=> r.categoria=== 'gusto')

        console.log(logroVista)
        if(logroVista.length>=3){
           
            setLogroV('/images/mvista.svg') 
            if(openVista ===undefined){
                setOpenVista(true);
           
            }
          
        }
       
        if(logroOido.length>=3){
            if(openOido===undefined){
                setOpenOido(true);
                  
            }
             
            setLogroOi('/images/moido.svg')
          
        }
       if(logroOl.length>=3){
            if(openOlfato===undefined){
            setOpenOlfato(true);
              
            }
      
            setLogroOl('/images/molfato.svg')
          
        }
        if(logroTacto.length>=3){
            if(openTacto===undefined){
                setOpenTacto(true); 
             
            }
       
            setLogroT('/images/mtacto.svg')
          
        }
        if(logroGusto.length>=3){
           
            if(openGusto===undefined){
                setOpenGusto(true);
               
            }
            setLogroG('/images/mgusto.svg')
            
        }
        
        managerDrag.setOnDrog((elemento)=>{
            setScore(score + 10);  
            var elementoSeleccionado = managerDrag.currentlyDragging;
           // elemento.appendChild(elementoSeleccionado);
           console.log(elementoSeleccionado)
           console.log(elementoSeleccionado.id, elementoSeleccionado)
            var itemsTempEscogidos = Object.assign([],itemsEscogidos);
            
            let index =-1;
            for (let i = 0; i < itemsTempEscogidos.length; i++) {
                let item = itemsTempEscogidos[i];
               
                if(elementoSeleccionado.id === item.id){
                   
                    item.categoria = elemento.id;
                    index=i
                    i=itemsTempEscogidos.length;
                }
       
            }
         

            console.log(itemsEscogidosAnteriores.length)
            if(index === -1){
                for (let i = 0; i < itemsEscogidosAnteriores.length; i++) {
                    let item = itemsEscogidosAnteriores[i];
                  
                    if(elementoSeleccionado.id === item.id){
                        
                        let  tempItem = Object.assign({},item)
                        tempItem.categoria = elemento.id
                        itemsTempEscogidos.push(tempItem)
                        i=itemsEscogidosAnteriores.length;
                    }
                    

                }
            }
            db.collection("projects").doc(id).collection('moodboard-sensorial').doc('todos').set({
                recursos:itemsTempEscogidos
            })
         
            db.collection("projects").doc(id).collection('moodboard-sensorial').doc('score').set({
                score:score
            })
            setItemsEscogidos(Object.assign([],itemsEscogidos));
            setListaSentidos(Object.assign([], listaSentidos));
        })


    },[itemsEscogidos,openGusto,openOido, openVista,openTacto,openOlfato,itemsEscogidosAnteriores,id,listaSentidos,managerDrag])

      function handleNextPage(event){
        history.push('/dashboard/'+project+'/'+id+'/step4Share');
        html2canvas(document.querySelector("#capture")).then((canvas) => {


           // var canvas = document.createElement("a");


            localStorage.setItem("imgCanvas",canvas.toDataURL('image/png'));
            //console(localStorage.getItem("imgCanvas",canvas.toDataURL('image/png')))

        });
     
 
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
    
   


    return (
        <div className={classes.body}>
            <div>
                <DialogVista openVista={openVista} handleCloseVista={handleCloseVista} />
                <DialogOido openOido={openOido} handleCloseOido={handleCloseOido} />
                <DialogOlfato openOlfato={openOlfato} handleCloseOlfato={handleCloseOlfato} />
                <DialogTacto openTacto={openTacto} handleCloseTacto={handleCloseTacto} />
                <DialogGusto openGusto={openGusto} handleCloseGusto={handleCloseGusto} />
                <DialogGuru openGuru={openGuru} handleCloseGuru={handleCloseGuru} />
                <DialogSentidos url={urlDialog} open={openSentidos} handleClose={handleCloseSentidos}/>
            <div>
                <TopBar titleProject={project}/>
            </div>
            <div className={classes.content}>
                <LateralBar/>
                <div className={classes.contentRight}>

                <div className={classes.contentText}>

                        <div className={classes.text}>
                        <img className ={classes.skip} alt='skip'  src={('/images/skipStep.svg')} onClick={handleNextPage}/>
                       <h3 className={classes.title}>Moodboard Sensorial</h3>
                       </div>
                       <div className={classes.divScore}>
                           <div className={classes.score}> <p className={classes.scoreP}>Puntaje:<span className={classes.scoreBold}> {scoreVisual}</span></p></div>
                           <div className={classes.insignias}>
                           <img alt='vista'className ={classes.insignia}  src={logroV} />
                           <img alt='oido'className ={classes.insignia}  src={logroOi} />
                           <img alt='olfato'className ={classes.insignia}  src={logroOl} />
                           <img alt='tacto'className ={classes.insignia}  src={logroT} />
                           <img alt='gusto'className ={classes.insignia}  src={logroG} />
                           <img alt='guru'className ={classes.insignia}  src={logroGu} />

                           </div>
                       </div>
                    

                </div>
                
          
                <div className={classes.contentBottom}>

                <div className={classes.options}>
                    <div className={classes.answers} >
                        <div className={classes.left}>
                            <div className={classes.btns}>
                           
                            {btns.map((item,i)=>
                              <BtnYellow key={i}{...item}  onClick={(event)=>{
                             

                           
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
                            </div>
                        {showImg ?
                       
                            <div   className={classes.containGeneral}>
                            <Slider showDots={true} dot={MyDot} cols={3} rows={3} gap={10} containerStyle={{ background: 'transparent',  width:'348px', 
                            height: '300px', margin: '0 auto'}} >  
                                

                            {(itemsImg).map((element, i) => {
                                let index =-1;
                                for (let i = 0; i < itemsEscogidos.length; i++) {
                                    let item = itemsEscogidos[i]
                                    if(item.id === element.id){
                                        index = i
                                        i = itemsEscogidos.length
                                    }

                                }
                                if(index === -1){

                            
                                return(   
                                <Slider.Item key={i}>                   
                                    <CardGeneralimg key={element.id} {...element} managerDrag={managerDrag} />            
                                </Slider.Item>
                                )
                                }else{

                                }
                            
                            })}     
                             </Slider>
                    
                        </div>:null}
                        
                        {showVideo ?
                            <div 
                            className={classes.containGeneral}>
                    
                            <Slider showDots={true} dot={MyDot} cols={3} rows={3} gap={10} containerStyle={{ background: 'transparent',  width:'348px', 
                            height: '300px', margin: '0 auto'}} >      

                            {(itemsVideo).map((element, i) => {
                                let index =-1;
                                for (let i = 0; i < itemsEscogidos.length; i++) {
                                    let item = itemsEscogidos[i]
                                    if(item.id === element.id){
                                        index = i
                                        i = itemsEscogidos.length
                                    }

                                }
                                if(index === -1){

                            
                                return(   
                                <Slider.Item key={i}>                   
                                    <CardGeneralvideo key={element.id} {...element} managerDrag={managerDrag} />            
                                </Slider.Item>
                                )
                                }
                            
                            })}      
                             </Slider>
                    
                        </div>:null}
                        
                        {showSound?
                            <div 
                            className={classes.containGeneral}>
                    
                            <Slider showDots={true} dot={MyDot} cols={3} rows={3} gap={10} containerStyle={{ background: 'transparent',  width:'348px', 
                            height: '300px', margin: '0 auto'}} >      

                            {(itemsSonido).map((element, i) => {
                                let index =-1;
                                for (let i = 0; i < itemsEscogidos.length; i++) {
                                    let item = itemsEscogidos[i]
                                    if(item.id === element.id){
                                        index = i
                                        i = itemsEscogidos.length
                                    }

                                }
                                if(index === -1){

                            
                                return(   
                                <Slider.Item key={i}>                   
                                    <CardGeneralsonido key={element.id} {...element} managerDrag={managerDrag} />            
                                </Slider.Item>
                                )
                                }
                            
                            })}       
                             </Slider>
                    
                        </div>:null}
                        
                        
                        
                        </div>

                      
                        <div id="capture" className={classes.columns}>

                            {listaSentidos.map((item, index)=>{

                                return <div key={index} className={classes.senses}>
                                
                                    <div className={classes.label}> <img onClick={(event)=>{
                                        console.log(item.title)
                                        setOpenSentidos(true) 
                                        if(item.title==='vista'){
                                            setUrlDialog('/images/vistaLeer.svg')
                                        }
                                        if(item.title==='oido'){
                                            setUrlDialog('/images/oidoLeer.svg')
                                        }
                                        if(item.title==='olfato'){
                                            setUrlDialog('/images/olfatoLeer.svg')
                                        }
                                        if(item.title==='gusto'){
                                            setUrlDialog('/images/gustoLeer.svg')
                                        }
                                        if(item.title==='tacto'){
                                            setUrlDialog('/images/tactoLeer.svg')
                                        }
                                       
                                        console.log(openSentidos)
                                    }} src={item.img} width='54px' alt='media'/> </div>
                                       
                                        
                                        <div id={item.title} className={classes.containVista + " container__sentidos"} >
                                            {itemsEscogidos.map((element, i) => {

                                                if(element.categoria === item.title){

                                                    

                                                    return(
                                                        <div 
                                                            key={i}>  
                                                            <CardMoodboard key={element.id}{...element}managerDrag={managerDrag}
                                                            onChange={(event)=>{
                                                               
                                                                element.descripcion= event.target.value;
                                                            
                                                                setValueMensaje()
                                                                }}/>         
                                                        </div>)
                                                }
                                            })}
                                        </div>
                                    </div>
                            })}
                         
                        </div>
                      
       
             

                </div>     
                
                </div>




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
            </div>
     
      </div>
      );

}
      const useStyles = makeStyles(theme => ({
        body:{
            boxSizing: 'border-box',
            width: 'auto',
            overflow:'hidden',
            height: '100vh',
            flexWrap: 'no-wrap',
            backgroundColor:'#FAFAFA',

    
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
            justifyContent:'flex-between',
            alignContent:'center',
            alignItems:'center',
            width:'100%',

        },
        text:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'flex-start',
            alignContent:'center',
            alignItems:'center',

        },
        actionsCarousel:{
            marginTop:'15px',
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignContent:'center',
            alignItems:'center',

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
                flexWrap:'no-wrap',
                height:'335px',
                
            },

      

          contentBottom:{
            display:'flex',
            width:'79%',    
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
          answers:{
            display:'flex',
            flexDirection:'row',
            flexWrap:'no-wrap',
           
        },
        actions:{
            display:'flex',
            flexDirection:'row',
            alignSelf:'flex-end',
            justifyContent:'space-between',
            width:'100%',
            height:'auto',
            marginTop:'136px'
    
        },
          tutorial:{
              cursor:'pointer',
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
          imgS:{
            width:'92px',
            height:'92px',
            borderRadius:'15px',
          },



        title:{
            fontFamily:'Poppins',
            fontSize:'21px',
        },
        carousel:{
            display:'flex',
            flexDirection:'column',
            marginTop:'5px',
            justifyContent:'center',
            width:'348px',
            background: '#F4F6F8',
            borderRadius:'15px',
            height:'408px',

        },
        btns:{
            display:'flex',
            flexDirection:'row',
            flexWrap:'no-wrap',
        },

 
        containImg:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            alignContent:'center',
            borderRadius:'10px',
            width:'106px',
            height:'106px',
            border: '1px dashed #CCCCCC',
            boxSizing: 'border-box',
        },


        senses:{
  
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignContent:'center',
            alignItems:'center',
            flexWrap:'no-wrap',
            marginRight:'30px', 
  
           
        },
        columns:{
  
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'flex-start',
            marginLeft:'40px', 
           
            height:'auto'

           
        },
        containGeneral:{
     
            background: '#F4F6F8',
            display:'flex',
            flexWrap:'wrap',
            marginTop:'18px',
            justifyContent:'center',
            alignContent:'center',
            alignItems:'center',
            boxSizing: 'border-box',
            borderRadius: '15px',
            width: '348px',
            height: '370px',
        },

        containVista:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            alignContent:'center',
            alignItems:'center',
            background: '#F4F6F8',
            height: '400px',
            width: '120px',
            borderRadius:'15px',

        },
        containOido:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            alignContent:'center',
            alignItems:'center',
            background: '#F4F6F8',
            height: '370px',
            width: '120px',
            borderRadius:'15px',
        },
        containOlfato:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            alignContent:'center',
            alignItems:'center',
            background: '#F4F6F8',
            height: '370px',
            width: '120px',
            borderRadius:'15px',
        },
        containTacto:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            alignContent:'center',
            alignItems:'center',
            background: '#F4F6F8',
            height: '370px',
            width: '120px',
            borderRadius:'15px',
        },
        containGusto:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            alignContent:'center',
            alignItems:'center',
            background: '#F4F6F8',
            height: '370px',
            width: '120px',
            borderRadius:'15px',
        },


 

        divScore:{
            marginLeft:'98px',
            display:'flex'
        },
        insignias:{
            marginLeft:'20px',
            display:'flex'
        },
        insignia:{
            marginRight:'22px',
        },

        score:{
            width:'129px',
            display:'flex',
            justifyContent:'center',
            alignContent:'center',
            alignItems:'center',
            height:'32px',
            borderRadius:'10px',
            backgroundColor:'#CAE9FF',
        },
        scoreP:{
            fontFamily:'Poppins',
            fontSize:'16px',
            fontWeight:400,
        },
        scoreBold:{
            fontFamily:'Poppins',
            fontSize:'16px',
            fontWeight:600,
        }
 

    
    }));




export default Step4; 