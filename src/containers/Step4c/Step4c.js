import React from 'react';
import{useParams} from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import LateralBar from '../../components/LateralBar/LateralBar';
import BtnYellow from '../../components/BtnYellowG/BtnYellowG';
import BtnOutlinedStep from '../../components/BtnOutlinedStep/BtnOutlinedStep';
import BtnStep from '../../components/BtnStep/BtnStep';
import './styles.css';


import uuid from "uuid/v4";









function Step4c(){

    let {project}= useParams();
    const classes = useStyles();
    let history = useHistory();
    const [disabled, setDisabled] = React.useState(false);
  
    const  [btns, setBtns ]= React.useState([]);

    const [showImg, setShowImg] = React.useState(true);
    const [showVideo, setShowVideo] = React.useState(false);
    const [showSound, setShowSound] = React.useState(false);

    const [isClick, setIsClick] = React.useState(true);
    const [isClick2, setIsClick2] = React.useState(false);
    const [isClick3, setIsClick3] = React.useState(false);
    const [optionSelected, setOptionSelected] = React.useState('Imágenes');

    const [items, setItems] = React.useState([{
        url:'/images/db/fresas.png',
        category:"general",
        tipo:'img',
        id: uuid(),
        
    },
    {
        url:'/images/db/aguacate.png',
        category:"general",
        tipo:'video',
        id: uuid(),
        
    },
    {
        url:'/images/db/fresas.png',
        category:"general",
        tipo:'img',
        id: uuid(),
        
    },
    {
        url:'/images/db/limon.png',
        category:"general",
        tipo:'sonido',
        id: uuid(),
        
    },


]);
const[columns, setColumns]= React.useState({});
const[itemsGeneral, setItemsGeneral]= React.useState([]);
const[itemsVista, setItemsVista]= React.useState([]);
const[itemsOido, setItemsOido]= React.useState([]);
const[itemsOlfato, setItemsOlfato]= React.useState([]);
const[itemsTacto, setItemsTacto]= React.useState([]);
const[itemsGusto, setItemsGusto]= React.useState([]);

const onDragStart=(e,id)=>{
    console.log('dragstart:',id);
    e.dataTransfer.setData("id",id)
}


    React.useEffect(()=>{
        var itemsT=[];
        var columns={
            general:[],
            vista: [],
            oido: [],
            olfato: [],
            tacto: [],
            gusto: [],
        }

        if(showImg===true){
            for (const item in columns) {
          
            }
        }


        items.forEach(element=> {
         
          console.log(element)
   
            columns[element.category].push(element)
   
            
        }); 

     
        if(showImg===true){
           itemsT=columns.general.filter(item => item.tipo === 'img');
           
            
        }
        if(showVideo===true){
            itemsT=columns.general.filter(item => item.tipo === 'video');
            
        }
        if(showSound===true){
            itemsT=columns.general.filter(item => item.tipo === 'sonido');
            
        }
        setItemsGeneral(itemsT)
        setItemsVista(columns.vista);
        setItemsOido(columns.oido);
        setItemsOlfato(columns.olfato);
        setItemsTacto(columns.tacto);
        setItemsGusto(columns.gusto);
    
        
        setColumns(columns)


    },[items,showImg,showVideo,showSound])
 

    function handleBackPage(event){
        history.push(`/dashboard/${project}/intro4`);
    } 


    	


      function handleNextPage(event){
        console.log(project.step);
       
       history.push('/dashboard/'+project+'/finished3');
      }
 

  
    React.useEffect(()=>{
    
      

        },[project])

     
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
    const onDrop=(e, cat)=>{
        let id = e.dataTransfer.getData("id");
        let itemsT = items.filter((item)=>{
            if(item.id === id){
                item.category =cat;
               
            }
            return item;
        });

        setItems(itemsT)
        

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

                        <div className={classes.text}>
                        <img className ={classes.skip} alt='skip'  src={('/images/skipStep.svg')} onClick={handleNextPage}/>
                       <h3 className={classes.title}>Moodboard Sensorial</h3>
                       </div>
                       <div className={classes.btns}>
                           <div>
                        {btns.map((item,i)=>
                               <BtnYellow key={i}{...item}  onClick={(event)=>{
                                setOptionSelected(`${item.content}`);

                            
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
                        <div className={classes.labels}>
                            <div className={classes.label}> <img src='/images/vista.svg' width='54px' alt='media'/> </div>
                            <div className={classes.label}> <img src='/images/oido.svg' width='54px' alt='media'/> </div>
                            <div className={classes.label}> <img src='/images/olfato.svg' width='54px' alt='media'/> </div>
                            <div className={classes.label}> <img src='/images/tacto.svg' width='54px' alt='media'/> </div>
                            <div className={classes.label}> <img src='/images/gusto.svg' width='54px' alt='media'/> </div>
                                          
                        </div>
                </div>

                </div>
                
          
                <div className={classes.contentBottom}>

                <div className={classes.options}>
                <div className={classes.answers} >
                    

                    <div className={classes.containerDnD}>
                        <div>
                        <div onDragOver={(e)=>{
                            onDragOver(e)}}   onDrop={(e)=>{onDrop(e,"general")}} 
                            className={classes.containGeneral}>

                               {itemsGeneral.map((element,i)=>
                               <div 
                               key={element.id}                     
                               onDragStart={(e)=>onDragStart(e,element.id)}                    
                               draggable                    
                               className={classes.containGeneralItem}                   
                              >                       
                                   <img key={element.id} src={element.url} width='92px' alt='media'className={classes.imgS}/>             
                             </div>)}
                            
                               

                        </div>
                        </div>
                        <div className={classes.senses}>
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
                               className={classes.containVistaItem}                    
                              >  
                              <div className={classes.containImg}> <img key={element.id} src={element.url} width='92px' alt='media'className={classes.imgS}/> </div>                     
                           
                            <input className={classes.containInput} type='text'/>               
                            </div>)}
                        </div>
               
                        
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
                               className={classes.containVistaItem}                    
                              >  
                              <div className={classes.containImg}> <img key={element.id} src={element.url} width='92px' alt='media'className={classes.imgS}/> </div>                     
                           
                            <input className={classes.containInput} type='text'/>               
                            </div>)}
                        </div>
               
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
                              <div className={classes.containImg}> <img key={element.id} src={element.url} width='92px' alt='media'className={classes.imgS}/> </div>                     
                           
                            <input className={classes.containInput} type='text'/>               
                            </div>)}
                        </div>
               
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
                              <div className={classes.containImg}> <img key={element.id} src={element.url} width='92px' alt='media'className={classes.imgS}/> </div>                     
                           
                            <input className={classes.containInput} type='text'/>               
                            </div>)}
                        </div>
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
                              <div className={classes.containImg}> <img key={element.id} src={element.url} width='92px' alt='media'className={classes.imgS}/> </div>                     
                           
                            <input className={classes.containInput} type='text'/>               
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
            flexDirection:'column',
            justifyContent:'center',
            alignContent:'center',
            alignItems:'flex-start',
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
            marginTop:'55px'
    
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
            width:'80%',
            justifyContent:'space-around'

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

        containerDnD:{
  
            width: '890px',
            justifyContent:'space-between',
            display:'flex',
            flexDirection:'row',
            flexWrap:'no-wrap',
           
        },
        senses:{
  
            display:'flex',
            flexDirection:'row',
            flexWrap:'no-wrap',
            marginLeft:'30px'
           
        },
        containGeneral:{
     
            background: '#F4F6F8',
            display:'flex',
            flexWrap:'wrap',
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
            backgroundColor:'red',
            height: '370px',
            marginRight:'30px',  
            width: '120px',
        },
        containOido:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            alignContent:'center',
            alignItems:'center',
            backgroundColor:'black',
            height: '370px',
            marginRight:'30px',  
            width: '120px',
        },
        containOlfato:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            alignContent:'center',
            alignItems:'center',
            marginRight:'30px',  
            backgroundColor:'yellow',
            height: '370px',
            width: '120px',
        },
        containTacto:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            alignContent:'center',
            alignItems:'center',
            marginRight:'30px',  
            backgroundColor:'pink',
            height: '370px',
            width: '120px',
        },
        containGusto:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            alignContent:'center',
            alignItems:'center',
            backgroundColor:'blue',
            height: '370px',
            width: '120px',
        },


        containVistaItem:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            padding:10,
            alignContent:'center'
        },

        containInput:{

            width: '106px',
            height: '32px',
            border:'none',
            marginTop:'3px',
            borderRadius:'5px',
        },
        labels:{
            display:'flex',
            flexDirection:'row',
            alignSelf:'flex-end'
        },
        label:{
            width: '120px',
        }
    
    }));




export default Step4c; 