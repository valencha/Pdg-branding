import React from 'react';
import{useParams} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import TopBar from '../../components/TopBar/TopBar';
import { makeStyles } from '@material-ui/core/styles';
import LateralBar from '../../components/LateralBar/LateralBar';
import ProgressTool from '../../components/ProgressTool/ProgressTool';
import BtnOutlinedStep from '../../components/BtnOutlinedStep/BtnOutlinedStep';
import BtnStep from '../../components/BtnStep/BtnStep';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import uuid from "uuid/v4";

//Todos los imports se coloca   n arriba de este 

import { fb } from '../../utils/firebase'
let db = fb.firestore();
require('firebase/auth');

const columnsFromBackend ={
    [uuid()]: {
        name: 'Todo',
        className:'classes.contentNotes',
        items: [{text: "Empleados",id: uuid()},
        {text: "Colaboradores",id: uuid()},
        {text: "Clientes",id: uuid()},
        {text: "Accionistas",id: uuid()},
        {text: "Proveedores",id: uuid()},
        {text: "Consumidores",id: uuid()},
        {text: "Líderes de opinión",id: uuid()},
        {text: "Redes sociales",id: uuid()},
        ],
        showTitle:false,
        
      },
      [uuid()]: {
        name: 'Audiencia Interna',
        className:'classes.board1',
        items: [],
        classNameTitle:'classes.titleBoard',
        showTitle:true,
      },
      [uuid()]: {
        name: 'Audiencia Externa',
        className:'classes.board2',
        classNameTitle:'classes.titleBoard',
        items: [],
        showTitle:true,
      },

}

function Step1_8(){

    let {project,id}= useParams();

    const classes = useStyles();
    let history = useHistory();
    
    
    const [value, setValue] = React.useState(0);
    const [disabled, setDisabled] = React.useState(true);

   
   

    const [todo, setTodo]= React.useState([]);
    const [audienciaInterna, setAudienciaInterna]= React.useState([]);
    const [audienciaExterna, setAudienciaExterna]= React.useState([]);



    const[columns,setColumns]=React.useState(columnsFromBackend);

    function handleSaveF(event){
     
      
        let db = fb.firestore();

        var docRef = db.collection("projects").doc(id);

        docRef.collection('esencia-de-marca').doc('paso-9').set({
        todo:todo,
        audienciaExterna:audienciaExterna,
        audienciaInterna:audienciaInterna,
        })

    }

    function handleNextPage(event){
        history.push('/dashboard/'+project+'/'+id+'/step1_10');
        let db = fb.firestore();

        db.collection("projects").doc(id).update({
            "url":  '/dashboard/'+project+'/'+id+'/step1_10',
       

        })
        var docRef = db.collection("projects").doc(id);

        docRef.collection('esencia-de-marca').doc('paso-9').set({
        todo:todo,
        audienciaExterna:audienciaExterna,
        audienciaInterna:audienciaInterna,
        })

      }


      function handleBackPage(event){
        history.push('/dashboard/'+project+'/'+id+'/step1_8');
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
           
            setDisabled(false);
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
            setColumns({
                ...columns,[source.droppableId]:{
                    ...column,
                    items:copiedItems
                }
            })
        }
  
    };

    React.useEffect(()=>{
        Object.entries(columns).map(([id,column])=>{
            
            if(column.name === 'Audiencia Interna'){

                setAudienciaInterna(column.items);

                if(column.items.length> 0){
                    column.className = classes.board1_1;
                    column.classNameTitle = classes.titleBoard2;
                }else{
                    column.className = classes.board1;
                    column.classNameTitle = classes.titleBoard;
                }
            }
            if(column.name === 'Audiencia Externa'){

                setAudienciaExterna(column.items);
                if(column.items.length> 0){
                    column.className = classes.board2_2;
                    column.classNameTitle = classes.titleBoard2;
                }else{
                    column.className = classes.board2;
                    column.classNameTitle = classes.titleBoard;
                }
            }
            if(column.name === 'Todo'){
                column.className = classes.contentNotes;
                setTodo(column.items);
                if(column.items.length> 0){
                   setDisabled(true);
                }
            }

            
            return column;
        
    });
    },[disabled,classes.contentNotes,columns,classes.titleBoard2,classes.board1_1,classes.board2_2,classes.board1,classes.board2,classes.titleBoard])
  
    React.useEffect(() => {
        
        var docRef = db.collection("projects").doc(id).collection('esencia-de-marca').doc('paso-9')

        const listener = docRef.onSnapshot(function(doc) {
      

            if(doc.exists){
            setColumns([]);
                const todo =doc.data().todo;
                const respuestasE =doc.data().audienciaExterna;
                const respuestasI =doc.data().audienciaInterna;
               


                Object.entries(columnsFromBackend).map(([id,value])=>{
                    console.log(value)
                   
                    if(value.name==='Todo'){
                        value.items=todo
                    }

                    if(value.name==='Audiencia Interna'){
                       
                            value.items=respuestasI
                   
                    }
                    if(value.name==='Audiencia Externa'){
                        value.items=respuestasE
                    }

                    return value;
                    
                  
                })
              setColumns(columnsFromBackend);
   
            }else{
                setColumns(columnsFromBackend);
                
                
            } 

            
        }
        
        )
        return () => listener()
   
    }, [id]);

        React.useEffect(() => {
            var docRef = db.collection("projects").doc(id);
            docRef.get().then(function(doc) {
                if(doc.exists){
                    setValue(doc.data().percentStep2)
                }
    
            })
          },[id])

        React.useEffect(()=>{


            Object.entries(columns).map(([id,column])=>{
                    
                if(column.name === 'Todo' ){
                    console.log(Object.entries(column.items).length);
                    if(Object.entries(column.items).length ===0){
                  
    
                        setDisabled(false);  
                      
    
                     
                    }else{
                        setDisabled(true);
                       
                    }
                    
    
                }
                        
                return column;
                    
            });
                 
            },[columns])
    
            React.useEffect(()=>{
            
                if(disabled===true){
                    db.collection("projects").doc(id).update({
                        "percentStep2": 80,
                        }) 
                }else{
                    db.collection("projects").doc(id).update({
                        "percentStep2": 90,
                        }) 
                }
    
    
            },[disabled,id])

    return (
        <div className={classes.body}>
            <div>
                <TopBar titleProject={project}/>
            </div>
            <div className={classes.content}>
                <LateralBar/>
                <div className={classes.contentRight}>
                    <div className={classes.progressContent}>
                        <ProgressTool
                            className={classes.progress}
                            titleStep='Conociendo tu marca'
                            numStep='9'
                            numTotalStep='10'
                            value={value}
                   

                        />
                    </div>
                    <div className={classes.contentText}>
                       <h1 className={classes.question}> <span className={classes.num}>9. </span>¡Ya falta poco! Es hora de categorizar los tipos de audiencia de tu marca. Por favor arrastra las opciones del lado izquierda a la sección del lado derecho que creas más pertinente.</h1>
                    </div>
                    <div className={classes.contentBottom}>

                        <div className={classes.options}>
                        <div className={classes.answers} >


                        <DragDropContext onDragEnd={result=> onDragEnd(result, columns, setColumns)} >
                            {Object.entries(columns).map(([id,column])=>{
                                return(
                                    
                                    <div key={id}>
                           
                                    <Droppable droppableId={id} key={id} >
                                        {(provided,snapshot)=>{
                                            return(
                                                <div
                                                {...provided.droppableProps} 
                                                ref={provided.innerRef}
                                                key={id}
                                                
                                                className={column.className}
                                                >
                                                    {column.showTitle?
                                                        <h2 className={column.classNameTitle}key={id}>{column.name}</h2>:null
                                                    }
                                                     
                                                    <div className={classes.notes}>
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
                                                                            display:'flex',
                                                                            flexDirection:'row',
                                                                            justifyContent:'center',
                                                                            alignItems:'center',
                                                                            alignContent:'center',
                                                                            backgroundColor:'white',
                                                                            width:'auto',
                                                                            paddingRight:'5px',
                                                                            paddingLeft:'5px',
                                                                            height:'60px',
                                                                            border: '1px solid #DDE2E5',
                                                                            boxShadow:' 2px 8px 16px rgba(61, 62, 66, 0.1)',
                                                                            borderRadius: '15px',    
                                                                            outline:'none',
                                                                            fontFamily:'Open Sans',
                                                                            fontSize:'14px',
                                                                            color:'#212429', 
                                                                            marginRight:'10px',
                                                                            ...provided.draggableProps.style
                                                                        }}
                                                                        >
                                                                           
                                                                           <h1 key={item.id}>{item.text}</h1>
                                                                         
                                                                        </div>
                                                                    )
                                                                    
                                                                }
                                                               
                                                                }

                                                            </Draggable>
                                                        )
                                                    })}
                                                    </div>
                                                    {!column.showTitle?
                                                    <div className={classes.plus}>
                                                    
                                                    <img alt='tutorial' className={classes.iconsAction} onClick={handleSaveF}  src={('/images/guardar.svg')}/>
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
        progressContent:{
            display:'flex',
            marginTop:'20px',
            flexWrap:'no-wrap',
            
        },
        progress:{
            display:'flex',
            flexWrap:'no-wrap',         
        },

        icons:{
            display:'flex',
            alignItems:'center',
        },

        contentText:{
            width:'100%',
            display:'flex',
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
            marginTop:'18px',
            flexDirection:'column',
            flexWrap:'no-wrap',
            alignItems:'flex-start',
            justifyContent:'center'
          },
          
          actions:{
            display:'flex',
            flexDirection:'row',
            flexWrap:'no-wrap',
            alignSelf:'flex-end',
            justifyContent:'space-between',
            width:'100%',
            marginTop:'20px'
            
 
          },
          tutorial:{
              cursor:'pointer',
          },
          question:{
              fontFamily:'Open Sans',
              color:'#212429',
              width:'900px',
              fontWeight:400,
              fontSize:'18px',
              lineHeight:'29.6px',
          },
          num:{
            fontFamily:'Open Sans',
            fontWeight:700,
            fontSize:'18px'
          },

    options:{
        display:'flex',
        flexDirection:'column',
        flexWrap:'no-wrap',
        height:'335px',
        
    },

    answers:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'no-wrap',
       
    },

    iconsAction:{
        cursor:'pointer'
    },
    contentNotes:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        width:'453px',
        height:'325px',
        backgroundColor:'#F4F6F8',
        boxSizing: 'border-box',
        borderRadius: '15px',   

        
    },

    plus:{
        alignSelf:'center',
        marginTop:250,
        position:'absolute',
    },

    boards:{
        marginLeft:'20px',
        width:'453px',
        height:'320px',
        display:'flex',
        flexDirection:'column',
    },

    board1:{
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        position:'absolute',
        border: '2px dashed #CCCCCC',
        boxSizing: 'border-box',
        borderRadius: '15px',
        left: '734px',
        top: '294px',
        width: '477px',
        height: '150px',

    },
    board1_1:{
        display:'flex',
        justifyContent:'flex-start',
        alignContent:'center',
        alignItems:'flex-start',
        position:'absolute',
        backgroundColor:'rgba(202, 233, 255, 0.15)',
        border: '2px dashed #CAE9FF',
        boxSizing: 'border-box',
        borderRadius: '15px',
        left: '734px',
        top: '294px',
        width: '477px',
        height: '150px',

    },
    board2:{
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        position:'absolute',
        border: '2px dashed #CCCCCC',
        boxSizing: 'border-box',
        borderRadius: '15px',
        left: '734px',
        top: '460px',
        width: '477px',
        height: '150px',

    },

    board2_2:{
        display:'flex',
        justifyContent:'flex-start',
        alignContent:'center',
        alignItems:'flex-start',
        position:'absolute',
        backgroundColor:'rgba(202, 233, 255, 0.15)',
        border: '2px dashed #CAE9FF',
        boxSizing: 'border-box',
        borderRadius: '15px',
        left: '734px',
        top: '460px',
        width: '477px',
        height: '150px',
    },

    titleBoard:{
        fontFamily:'Poppins',
        fontWeight:600,
        fontSize:'22px',
        color:'#CCCCCC'
    },

    titleBoard2:{
        fontFamily:'Poppins',
        fontWeight:600,
        fontSize:'12px',
        color:'#CCCCCC',
        alignSelf:'flex-start',
        alignItems:'flex-start',
        justifyItems:'flex-start',
        position:'absolute',
        padding:'5px',
    },

    notes:{
        marginTop:'16px',
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        height:'68%',
    }
    
    
    }));




export default Step1_8; 