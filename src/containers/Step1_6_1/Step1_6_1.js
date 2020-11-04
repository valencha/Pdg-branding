import React from 'react';
import DataContext from '../../context/DataContext/DataContext';
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
require('firebase/auth');

function Step1_6_1(){

    let {project}= useParams();
    const data = React.useContext(DataContext);
    const classes = useStyles();
    let history = useHistory();
    
    
    const [value, setValue] = React.useState(28.5714285714+14.2857142857);
    const [disabled, setDisabled] = React.useState(true);
    const [showTitle, setShowTitle] = React.useState(true);
    var temp = JSON.parse(localStorage.getItem("arreglo"));
    const [urlNext, setUrlNext] = React.useState('');

    var listNotesTemp= Object.assign([],temp);
    const [relevanciaAlta, setRelevanciaAlta]= React.useState([]);
    const [relevanciaMedia, setRelevanciaMedia]= React.useState([]);
    const [relevanciaBaja, setRelevanciaBaja]= React.useState([]);

    const columnsFromBackend ={
        [uuid()]: {
            name: 'Todo',
            className:classes.contentNotes,
            items: listNotesTemp,
            showTitle:false,
          },
          [uuid()]: {
            name: 'Relevancia Alta',
            className:classes.board1,
            items: [],
            showTitle:showTitle,
            setShowTitle:setShowTitle,
          },
          [uuid()]: {
            name: 'Relevancia Media',
            className:classes.board2,
            items: [],
            showTitle:showTitle,
            setShowTitle:setShowTitle,
          },
          [uuid()]: {
            name: 'Relevancia Baja',
            className:classes.board3,
            items: [],
            showTitle:showTitle,
            setShowTitle:setShowTitle,
          },
    }

    const[columns,setColumns]=React.useState(columnsFromBackend);

  

    function handleNextPage(event){
        history.push(urlNext);
      
        let db = fb.firestore();
        fb.auth().onAuthStateChanged(user => {
            db.collection(`${user.email}`).doc(project).collection('Esencia de marca').doc('paso 6').set({
               relevanciaAlta: relevanciaAlta,
               relevanciaMedia: relevanciaMedia,
               relevanciaBaja: relevanciaBaja,
              
            })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
            
            
          
              
                  
        })

      }


      function handleBackPage(event){
        history.push(`/dashboard/${project}/step1_6`);
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
  
    React.useEffect(() => {
        let isCancelled = false;
        Object.entries(columns).map(([id,column])=>{
         
                if(column.name === 'Relevancia Alta'){

                    setRelevanciaAlta(column.items);
                }
                if(column.name === 'Relevancia Media'){

                    setRelevanciaMedia(column.items);
                }

                if(column.name === 'Relevancia Baja'){
                    
                    setRelevanciaBaja(column.items);
                }
                
                return column;
            
        });
     
      if(disabled===true){
         setValue(28.5714285714+(14.2857142857*3)); 
         
      }else{
         setValue(28.5714285714+(14.2857142857*4)); 
      }
      if (!isCancelled) {
        let db = fb.firestore();
        fb.auth().onAuthStateChanged(user => {
        var docRef = db.collection(`${user.email}`).doc(project);
    
        docRef.update({
            url: '/dashboard/'+project+'/step1_7',
            step:'esenciaMarca_paso7'
        })
        .then(function(db) {
     
            console.log('done');
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });

        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log(doc.data().url);
                setUrlNext(doc.data().url);
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
          
              
    })

        }




        return () => {
            isCancelled = true;
        };

  









     }, [project,data,disabled,columns]);

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
                            numStep='6'
                            numTotalStep='7'
                            value={value}
                   

                        />
                    </div>
                    <div className={classes.contentText}>
                       <h1 className={classes.question}> <span className={classes.num}>6. </span>¡Es tiempo de conocer tus valores de marca! Escribe mediante palabras claves los valores de tu empresa/proyecto/emprendimiento.</h1>
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
                                                        <h2 className={classes.titleBoard}key={id}>{column.name}</h2>:null
                                                    }
                                                     
                                               
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
                                                                            width:'100px',
                                                                            height:'60px',
                                                                            border: '1px solid #DDE2E5',
                                                                            boxSizing: 'border-box',
                                                                            boxShadow:' 2px 8px 16px rgba(61, 62, 66, 0.1)',
                                                                            borderRadius: '15px',    
                                                                            outline:'none',
                                                                            fontFamily:'Open Sans',
                                                                            fontSize:'16px',
                                                                            color:'#212429', 
                                                                            marginRight:'14px',
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
                                                    {!column.showTitle?
                                                    <div className={classes.plus}>
                                                    <img alt='tutorial' className={classes.iconsAction}   src={('/images/plus.svg')}/>
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
        flexDirection:'column',
        flexWrap:'no-wrap',
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
        border: '2px dashed #24EA8B',
        boxSizing: 'border-box',
        borderRadius: '15px',
        left: '734px',
        top: '294px',
        width: '477px',
        height: '100px',

    },

    board2:{
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        border: '2px dashed #FCC010',
        boxSizing: 'border-box',
        borderRadius: '15px',
        width: '477px',
        position:'absolute',
        height: '100px',
        left: '734px',
        top: '404px',

    },

    board3:{
        display:'flex',
        position:'absolute',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        border: '2px dashed #FF6B6C',
        boxSizing: 'border-box',
        borderRadius: '15px',
        width: '477px',
        height: '100px',
        left: '734px',
        top: '516px',

    },

    titleBoard:{
        fontFamily:'Poppins',
        fontWeight:600,
        fontSize:'22px',
        color:'#CCCCCC'
    },

    
    
    }));




export default Step1_6_1; 