import React from 'react';
import{useParams} from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import LateralBar from '../../components/LateralBar/LateralBar';
import BtnYellow from '../../components/BtnYellowG/BtnYellowG';
import BtnOutlinedStep from '../../components/BtnOutlinedStep/BtnOutlinedStep';
import BtnStep from '../../components/BtnStep/BtnStep';
import uuid from "uuid/v4";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';






function Step4(){

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

    const [items, setItems] = React.useState([]);

    const[columns,setColumns]=React.useState({});
 

    function handleBackPage(event){
        history.push(`/dashboard/${project}/intro4`);
    } 

      

    function onAlert(event){
        console.log('hola')
      }
    	


      function handleNextPage(event){
        console.log(project.step);
       
       history.push('/dashboard/'+project+'/finished3');
      }
 

      const onDragEnd=(result,columns, setColumns)=>{
        if(!result.destination) return;

        
        
        const {source, destination} =result;
        if(source.droppableId !== destination.droppableId){
            
            const sourceColumn = columns[source.droppableId];
            const destColumn=columns[destination.droppableId];
            const sourceItems=[...sourceColumn.items];
            const destItems=[...destColumn.items];
            const [removed]= sourceItems.splice(source.index,1);
            
            destItems.splice(destination.index,0,removed);

            setColumns({
                ...columns,
                [source.droppableId]:{
                    ...sourceColumn,
                    items:sourceItems
                },
                [destination.droppableId]:{
                    ...destColumn,
                    items: destItems
                }
            });


        }else{
            
            const column = columns[source.droppableId];
           
            const copiedItems=[...column.items];
            const[removed]= copiedItems.splice(source.index,1);
  
            copiedItems.splice(destination.index,0, removed);

                var itemsFilter= '';
    
         
                
         
            
            setColumns({
                ...columns,[source.droppableId]:{
                    ...column,
                    items:copiedItems
                }
            })
        }
  
    };
    React.useEffect(()=>{
    
        const columnsFromBackend ={
            [uuid()]: {
                name: 'Todo',
                className:classes.board1,
                items: items,
                showTitle:false,
                different:false,
           
              },
              [uuid()]: {
                name: 'Vista',
                className:classes.board2,
                items: [],
                url:'/images/vista.svg',
                different:true,
                showTitle:true,
              },
        }
     
  
        

        setColumns(columnsFromBackend);

        },[project,classes.board1,items,classes.board2,showImg])

     
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

    React.useEffect(()=>{
  

    let list=[{
        url:'/images/db/fresas.png',
        id: uuid(),
        tipo:'img'
        
    },
    {
        url:'/images/db/aguacate.png',
        id: uuid(),
        tipo:'video'
        
    },
    {
        url:'/images/db/fresas.png',
        id: uuid(),
        tipo:'img'
        
    },
    {
        url:'/images/db/limon.png',
        id: uuid(),
        tipo:'sonido'
        
    },


]
    setItems(list)
 
        
        
    },[])

    React.useEffect(()=>{
       
        Object.values(columns).forEach(element => {


            if(element.name ==='Todo' && showImg===true ){
               

            }
        
        });
    },[columns,showImg])

  


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

                </div>
                
          
                <div className={classes.contentBottom}>

                <div className={classes.options}>
                <div className={classes.answers} >


                <DragDropContext onDragEnd={result=> onDragEnd(result, columns, setColumns)} >
                    {Object.entries(columns).map(([id,column])=>{
                        return(
                            
                            <div key={id}>
                            <img  src='/images/vista.svg' width='54px' className={classes.imgVista}height='83.17px' alt='media'/>      
                            <Droppable droppableId={id} key={id} >
                                {(provided,snapshot)=>{
                                    return(
                                      
                                        <div
                                        {...provided.droppableProps} 
                                        ref={provided.innerRef}
                                        key={id}
                                        
                                        className={column.className}
                                        >
                          

                                            {column.items.map((item, index)=>{
                                                return(
                                                    <Draggable key={item.id} draggableId={item.id} index={index} >
                                                        {(provided, snapshot)=>{
                                                            return(
                                                                <div ref={provided.innerRef} 
                                                                {...provided.draggableProps} 
                                                                {...provided.dragHandleProps}
                                                                key={item.id}
                                                                style={{
                                                                    userSelect:'none',
                                                                 
                                                                
                                                                    ...provided.draggableProps.style
                                                                }}
                                                                >
                                                                





                                                                {column.different ?
                                                                <div className={classes.containImgInput}>
                                                                <div className={classes.containImg}>  
                                                                    <img key={item.id} src={item.url} width='92px' alt='media'className={classes.imgS}/>
                                                                </div>   
                                                            
                                                                <input type='text'/>

                                                                </div>: <img key={item.id} src={item.url} width='92px' alt='media'className={classes.imgU} />

                                                                }

                                                                
                                                                </div>
                                                            )
                                                            
                                                        }
                                                    
                                                        }

                                                    </Draggable>
                                                )
                                            })}
                                            {column.name === 'Todo'?
                                            <div className={classes.plus}>
                                            <img alt='tutorial' className={classes.iconsAction} onClick={onAlert}  src={('/images/plus.svg')}/>
                                            </div>:null}
                                        
                                        {provided.placeholder}
                                        </div>
                                    )
                                }
                                
                                }
                            </Droppable>

                            </div>
                        )



                    })}



                </DragDropContext>
                    

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
        board1:{
            left: '243px',
            top: '230px',      
            background: '#F4F6F8',
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'center',
            alignContent:'center',
            alignItems:'center',
            position:'absolute',
            boxSizing: 'border-box',
            borderRadius: '15px',
            width: '348px',
            height: '398px',

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

      
        board2:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignContent:'center',
            alignItems:'center',
            position:'absolute',
            width: '148px',
            backgroundColor:'red',
            height: '398px',
            left: '734px',
            top: '230px', 
    
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

        },
        imgU:{
            borderRadius:'15px',
        },
        containImgInput:{
            width:'106px',
            display:'flex',
            flexDirection:'column',

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
        imgVista:{
            position: 'absolute',
            width: '54px',
            height: '83.17px',
            left: '780px',
            top: '150px',
        }

          
    
    
    }));




export default Step4; 