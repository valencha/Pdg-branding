import React from 'react';
import{useParams} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import TopBar from '../../components/TopBar/TopBar';
import { makeStyles } from '@material-ui/core/styles';
import LateralBar from '../../components/LateralBar/LateralBar';
import ProgressTool from '../../components/ProgressTool/ProgressTool';
import BtnOutlinedStep from '../../components/BtnOutlinedStep/BtnOutlinedStep';
import BtnStep from '../../components/BtnStep/BtnStep';
import ToolBoxText from '../../components/ToolBoxText/ToolBoxText';
import TextArea from '../../components/TextArea/TextArea';
import Draggable from 'react-draggable';

//Todos los imports se coloca   n arriba de este 

import { fb } from '../../utils/firebase'
let db = fb.firestore();
require('firebase/auth');

function Step1_5(){

    let {project,id}= useParams();
    const classes = useStyles();
    let history = useHistory();
    
    const [value, setValue] = React.useState(0);
    const [disabled, setDisabled] = React.useState(true);

    const [listNotes, setListNotes] = React.useState([]);
    var listNotesTemp= Object.assign([],listNotes);


   
    function handleNextPage(event){
        history.push('/dashboard/'+project+'/'+id+'/step1_6');
        let db = fb.firestore();
        db.collection("projects").doc(id).update({
            "url": '/dashboard/'+project+'/'+id+'/step1_6',
        }) 
    }
      

      function handleBackPage(event){
        history.push('/dashboard/'+project+'/'+id+'/step1_4');
      } 

      function handleSaveF(event){

        let db = fb.firestore();

        var docRef = db.collection("projects").doc(id);

        docRef.collection('esencia-de-marca').doc('paso-5').set({notas :listNotesTemp})
        .then(function(docRef) {

        
        })
      }
      function handleCreateNotes(event){
        listNotesTemp.push({text:' '});  
        setListNotes(listNotesTemp);
        console.log(listNotes);

    }
    React.useEffect(() => {
        
        var docRef = db.collection("projects").doc(id).collection('esencia-de-marca').doc('paso-5')

        const listener = docRef.onSnapshot(function(doc) {
           
            const updated = []
            if(doc.exists){
            setListNotes([]);
                const respuestas =doc.data().notas;
                console.log(respuestas)

                respuestas.forEach((value) => {

           
                    updated.push({text:value.text})
         
                })
              setListNotes(updated);
         
            }   
        })
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
    let db = fb.firestore();
    if(listNotes.length>0){
        setDisabled(false);   

            db.collection("projects").doc(id).update({
            "percentStep2": 50,
            }) 
    }else{
        setDisabled(true); 
        db.collection("projects").doc(id).update({
            "percentStep2": 40,
            })  
    }



},[listNotes,id])


     
  
   


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
                            numStep='5'
                            numTotalStep='10'
                            value={value}
                   

                        />
                    </div>
                    <div className={classes.contentText}>
                       <h1 className={classes.question}> <span className={classes.num}>5. ¡Vamos conociendo tu marca muy bien! </span>Ahora, por favor escribe cuál es la razón central por la que tu empresa/proyecto/emprendimiento existe.</h1>
                    </div>
                    <div className={classes.contentBottom}>

                        <div className={classes.options}>
                        <div className={classes.answers}>
                            <ToolBoxText
                            handleCreateNotes={handleCreateNotes}
                            handleSaveF={handleSaveF}
                            />
                    
                    <div className="box" style={{display:'flex', flexDirection:'row', flexWrap:'wrap',height: '386px', width: '1000px', position: 'relative', overflow: 'auto'}}>
        
                    {listNotesTemp.map((item, i) =>
                    <Draggable bounds="body" key={i}>
                     <div key={i} className="box" style={{paddingRight: '190px'}}>
                    <TextArea  {...item} onChange={(event)=>{
                    let value=event.target.value;
                    item.text=value;
                    setDisabled(false);
         
                    }}
                    />
                    </div>
                </Draggable>

        )}
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
        marginTop:'20px',
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
    notes:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        width:'905px',
        height:'386px'

        
    }

    
    
    }));




export default Step1_5; 