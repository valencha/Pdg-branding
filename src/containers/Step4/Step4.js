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
import BtnYellow from '../../components/BtnYellowG/BtnYellowG';
import BtnOutlinedStep from '../../components/BtnOutlinedStep/BtnOutlinedStep';
import BtnStep from '../../components/BtnStep/BtnStep';
import Slider from 'react-grid-carousel';
import './styles.css';
import html2canvas from 'html2canvas';
import { fb } from '../../utils/firebase'
let db = fb.firestore();
require('firebase/auth');

var columns={
    general:[],
    vista: [],
    oido: [],
    olfato: [],
    tacto: [],
    gusto: [],
}


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
    const [score, setScore] = React.useState(0);

    const  itemsG =[];
    const itemsV =[];
    const itemsOi =[];
    const itemsOl =[];
    const itemsT =[];
    const itemsGu =[];

    const [itemsImg, setItemsImg] = React.useState([]);
    const [itemsVideo, setItemsVideo] = React.useState([]);
    const [itemsSonido, setItemsSonido] = React.useState([]);
    
    const[itemsVista, setItemsVista]= React.useState([]);
    const[itemsOido, setItemsOido]= React.useState([]);
    const[itemsOlfato, setItemsOlfato]= React.useState([]);
    const[itemsTacto, setItemsTacto]= React.useState([]);
    const[itemsGusto, setItemsGusto]= React.useState([]);

    const [openVista, setOpenVista] = React.useState(false);
    const [openOlfato, setOpenOlfato] = React.useState(false);
    const [openGusto, setOpenGusto] = React.useState(false);
    const [openTacto, setOpenTacto] = React.useState(false);
    const [openOido, setOpenOido] = React.useState(false);
    const [openGuru, setOpenGuru] = React.useState(false);
  
    const handleOpenVista = () => {
      setOpenVista(true);
    };
  
    const handleCloseVista = () => {
      setOpenVista(false);
    };

    const handleOpenGusto = () => {
        setOpenGusto(true);
    };
    
      const handleCloseGusto = () => {
        setOpenGusto(false);
    };

    const handleOpenOlfato = () => {
        setOpenOlfato(true);
    };
    
      const handleCloseOlfato = () => {
        setOpenOlfato(false);
    };

    const handleOpenTacto = () => {
        setOpenTacto(true);
    };
    
      const handleCloseTacto = () => {
        setOpenTacto(false);
    };

    const handleOpenOido = () => {
        setOpenOido(true);
    };
    
      const handleCloseOido = () => {
        setOpenOido(false);
    };

    const handleOpenGuru = () => {
        setOpenGuru(true);
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



 

    function handleBackPage(event){
        history.push('/dashboard/'+project+'/'+id+'/intro4');
    } 

    React.useEffect(() => {
      
        var docRef = db.collection("projects").doc(id).collection('moodboard-sensorial').doc('score')

        const listener = docRef.onSnapshot(function(doc) {
          
        if(doc.exists){
            
            setScore(doc.data().score)
            if(doc.data().score >=150){
                setLogroGu('/images/mguru.svg')
            }
            setItemsImg([])    
            setItemsVideo([])  
            setItemsSonido([])      
            console.log(doc.id)


            var docVista= db.collection("projects").doc(id).collection('moodboard-sensorial').doc('vista')
            docVista.get().then(function(doc) {
                if (doc.exists) {
                    var respuestas = doc.data().recursos
                    console.log(respuestas)    
                    setItemsVista(respuestas)            
                    
                } else {
                    setItemsVista([])  
                }
            })

            var docOido= db.collection("projects").doc(id).collection('moodboard-sensorial').doc('oido')
            docOido.get().then(function(doc) {
                if (doc.exists) {
                    var respuestas = doc.data().recursos
                    console.log(respuestas)    
                    setItemsOido(respuestas)            
                    
                } else {
                    setItemsOido([])  
                }
            })

            var docOl= db.collection("projects").doc(id).collection('moodboard-sensorial').doc('olfato')
            docOl.get().then(function(doc) {
                if (doc.exists) {
                    var respuestas = doc.data().recursos
                    console.log(respuestas)    
                    setItemsOlfato(respuestas)            
                    
                } else {
                    setItemsOlfato([])  
                }
            })

            var docTacto= db.collection("projects").doc(id).collection('moodboard-sensorial').doc('tacto')
            docTacto.get().then(function(doc) {
                if (doc.exists) {
                    var respuestas = doc.data().recursos
                    console.log(respuestas)    
                    setItemsTacto(respuestas)            
                    
                } else {
                    setItemsTacto([])  
                }
            })

            var docGusto= db.collection("projects").doc(id).collection('moodboard-sensorial').doc('gusto')
            docGusto.get().then(function(doc) {
                if (doc.exists) {
                    var respuestas = doc.data().recursos
                    console.log(respuestas)    
                    setItemsGusto(respuestas)            
                    
                } else {
                    setItemsGusto([])  
                }
            })

      
        }else{
            var docInit = db.collection("projects").doc(id).collection('seleccion-recursos').doc('recursos-seleccionados')
            docInit.get().then(function(doc) {
                if (doc.exists) {
                    var respuestas = doc.data().answersT                  
                    setItemsImg(respuestas.filter((r)=> r.tipo === 'imagen'))                        
                    setItemsVideo(respuestas.filter((r)=> r.tipo === 'video'))                       
                    setItemsSonido(respuestas.filter((r)=> r.tipo === 'audio'))
            
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });

        }   
        })
        return () => listener()
   
    }, [id]);
    	


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

    const onDragOver=(e)=>{
        e.preventDefault();
    }
    const onDragStart=(e,id)=>{
        console.log('dragstart:',id);
        let item =JSON.stringify(id)
        e.dataTransfer.setData("id",item)
    }

    const onDrop=(e, tipo)=>{
        

        let i = e.dataTransfer.getData("id");

        if(score>=150){
            setOpenGuru(true)
            setLogroGu('/images/mguru.svg');
        }

        var docRef = db.collection("projects").doc(id).collection('moodboard-sensorial');
        
        setScore(score + 10);
        docRef.doc('score').set({score: score})

        var item = JSON.parse(i);
        console.log(item)
    
        console.log(tipo)
  

        if(tipo === 'vista'){
        itemsV.push((item))
            
          docRef.doc('vista').set({recursos:itemsV})
        }

        if(tipo === 'oido'){    
            itemsOi.push((item))
            docRef.doc('oido').set({recursos:itemsOi})
        }

        if(tipo === 'olfato'){    
            itemsOl.push((item))
            docRef.doc('olfato').set({recursos:itemsOl})
        }

        if(tipo === 'tacto'){    
            itemsT.push((item))
            docRef.doc('tacto').set({recursos:itemsT})
        }


        if(tipo === 'gusto'){    
            itemsGu.push((item))
            docRef.doc('gusto').set({recursos:itemsGu})
        }


        if(tipo === 'general'){    
            itemsG.push((item))
            docRef.doc('general').set({recursos:itemsG})
        }
        

  

    }

   
    React.useEffect(()=>{

        if(itemsVista.length>=3){
            setOpenVista(true)
            setLogroV('/images/mvista.svg');
        }

        else if(itemsOido.length>=3){
            setOpenOido(true)
            setLogroOi('/images/moido.svg');
        }

        if(itemsOlfato.length>=3){
            setOpenOlfato(true)
            setLogroOl('/images/molfato.svg');
        }

        else if(itemsTacto.length>=3){
            setOpenTacto(true)
            setLogroT('/images/mtacto.svg');
        }

    




    },[itemsVista.length,itemsOido.length,itemsOlfato.length,itemsTacto.length])

  


    return (
        <div className={classes.body}>
            <div>
                <DialogVista openVista={openVista} handleCloseVista={handleCloseVista} handleOpenVista={handleOpenVista}/>
                <DialogOido openOido={openOido} handleCloseOido={handleCloseOido} handleOpenOido={handleOpenOido}/>
                <DialogOlfato openOlfato={openOlfato} handleCloseOlfato={handleCloseOlfato} handleOpenOlfato={handleOpenOlfato}/>
                <DialogTacto openTacto={openTacto} handleCloseTacto={handleCloseTacto} handleOpenTacto={handleOpenTacto}/>
                <DialogGusto openGusto={openGusto} handleCloseGusto={handleCloseGusto} handleOpenGusto={handleOpenGusto}/>
                <DialogGuru openGuru={openGuru} handleCloseGuru={handleCloseGuru} handleOpenGuru={handleOpenGuru}/>
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
                           <div className={classes.score}> <p className={classes.scoreP}>Puntaje:<span className={classes.scoreBold}> {score}</span></p></div>
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
                            <div onDragOver={(e)=>{
                            onDragOver(e)}}   onDrop={(e)=>{onDrop(e,"general")}} 
                            className={classes.containGeneral}>
                    
                            <Slider showDots={true} dot={MyDot} cols={3} rows={3} gap={10} containerStyle={{ background: 'transparent',  width:'348px', 
                            height: '300px', margin: '0 auto'}} >      

                            {itemsImg.map((element, i) => {

                                return(   
                                <Slider.Item  key={i}>  

                                <div onDragStart={(e)=>onDragStart(e,element)} draggable                    
                                className={classes.containGeneralItem}> 
                                                        
                                    <CardGeneralimg key={element.id} {...element}/>             
                                </div>
                                </Slider.Item>
                                )
                            })}     
                             </Slider>
                    
                        </div>:null}
                        
                        {showVideo ?
                            <div onDragOver={(e)=>{
                            onDragOver(e)}}   onDrop={(e)=>{onDrop(e,"general")}} 
                            className={classes.containGeneral}>
                    
                            <Slider showDots={true} dot={MyDot} cols={3} rows={3} gap={10} containerStyle={{ background: 'transparent',  width:'348px', 
                            height: '300px', margin: '0 auto'}} >      

                            {itemsVideo.map((element, i) => {

                                return(   
                                <Slider.Item  key={i}>  

                                <div onDragStart={(e)=>onDragStart(e,element)} draggable                    
                                className={classes.containGeneralItem}> 
                                                        
                                    <CardGeneralvideo key={element.id} {...element}/>                     
                                </div>
                                </Slider.Item>
                                )
                            })}     
                             </Slider>
                    
                        </div>:null}
                        
                        {showSound?
                            <div onDragOver={(e)=>{
                            onDragOver(e)}}   onDrop={(e)=>{onDrop(e,"general")}} 
                            className={classes.containGeneral}>
                    
                            <Slider showDots={true} dot={MyDot} cols={3} rows={3} gap={10} containerStyle={{ background: 'transparent',  width:'348px', 
                            height: '300px', margin: '0 auto'}} >      

                            {itemsSonido.map((element, i) => {

                                return(   
                                <Slider.Item  key={i}>  

                                <div onDragStart={(e)=>onDragStart(e,element,element)} draggable                    
                                className={classes.containGeneralItem}> 
                                                        
                                    <CardGeneralsonido key={element.id} {...element}/>       
                                </div>
                                </Slider.Item>
                                )
                            })}     
                             </Slider>
                    
                        </div>:null}
                        
                        
                        
                        </div>

                      
                        <div id="capture" className={classes.columns}>
                            <div className={classes.senses}>
                        
                                <div className={classes.label}> <img src='/images/vista.svg' width='54px' alt='media'/> </div>
                                <div className={classes.containVista} onDragOver={(e)=>{
                            onDragOver(e)
                        }}
                        onDrop={(e)=>{
                            onDrop(e,"vista")
                        }}>
                        {itemsVista.map((element,i)=>
                            <div 
                               key={element.id}                     
                               onDragStart={(e)=>onDragStart(e,element.id)}                    
                               draggable                    
                                                
                              >  
                              <CardMoodboard key={element.id}{...element}/>
                           
                                        
                            </div>)}
                        </div>
                            </div>

                            <div className={classes.senses}>
                                <div className={classes.label}> <img src='/images/oido.svg' width='54px' alt='media'/> </div>
                                <div className={classes.containOido} onDragOver={(e)=>{
                            onDragOver(e)
                        }}
                        onDrop={(e)=>{
                            onDrop(e,"oido")
                        }}>
                        {itemsOido.map((element,i)=>
                            <div 
                               key={element.id}                     
                               onDragStart={(e)=>onDragStart(e,element.id)}                    
                               draggable                    
                                  
                              >  
                            <CardMoodboard key={element.id}{...element}/>            
                            </div>)}
                        </div>
                            </div>
                            <div className={classes.senses}>
                                <div className={classes.label}> <img src='/images/olfato.svg' width='54px' alt='media'/> </div>
                                <div className={classes.containOlfato} onDragOver={(e)=>{
                            onDragOver(e)
                        }}
                        onDrop={(e)=>{
                            onDrop(e,"olfato")
                        }}>
                        {itemsOlfato.map((element,i)=>
                            <div 
                            key={element.id}                     
                            onDragStart={(e)=>onDragStart(e,element.id)}                    
                            draggable                    
                            className={classes.containVistaItem}                    
                            >  
                            <CardMoodboard key={element.id}{...element}/>             
                            </div>)}
                        </div>
                            </div>
                            <div className={classes.senses}>
                            <div className={classes.label}> <img src='/images/tacto.svg' width='54px' alt='media'/> </div>
                            <div className={classes.containTacto} onDragOver={(e)=>{
                            onDragOver(e)
                        }}
                        onDrop={(e)=>{
                            onDrop(e,"tacto")
                        }}>
                        {itemsTacto.map((element,i)=>
                            <div 
                               key={element.id}                     
                               onDragStart={(e)=>onDragStart(e,element.id)}                    
                               draggable                    
                               className={classes.containVistaItem}                    
                              >  
                            <CardMoodboard key={element.id}{...element}/>             
                            </div>)}
                        </div>
                            </div>
                            <div className={classes.senses}>
                            <div className={classes.label}> <img src='/images/gusto.svg' width='54px' alt='media'/> </div>
                            <div className={classes.containGusto} onDragOver={(e)=>{
                            onDragOver(e)
                        }}
                        onDrop={(e)=>{
                            onDrop(e,"gusto")
                        }}>
                        {itemsGusto.map((element,i)=>
                            <div 
                               key={element.id}                     
                               onDragStart={(e)=>onDragStart(e,element.id)}                    
                               draggable                    
                               className={classes.containVistaItem}                    
                              >  
                            <CardMoodboard key={element.id}{...element}/>          
                            </div>)}
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
            marginLeft:'40px', 
            overflow: 'scroll'
           
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
            height: '370px',
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