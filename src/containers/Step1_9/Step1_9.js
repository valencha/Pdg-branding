import React from 'react';
import{useParams} from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import LateralBar from '../../components/LateralBar/LateralBar';
import ProgressTool from '../../components/ProgressTool/ProgressTool';
import BtnOutlinedStep from '../../components/BtnOutlinedStep/BtnOutlinedStep';
import BtnStep from '../../components/BtnStep/BtnStep';
import BtnYellow from '../../components/BtnYellow/BtnYellow';
import SelectorLabel from '../../components/SelectorLabel/SelectorLabel';


//Todos los imports se coloca   n arriba de este 

import { fb } from '../../utils/firebase'
let db = fb.firestore();
require('firebase/auth');

let btns=[{
    id:1,
    content:'Sí',
    checked:false,
},
{
    id:2,
    content:'No',
    checked:false,
},
{
    id:3,
    content:'Omitir',
    checked:false,
},
]


function Step1_9(){

    let {project,id}= useParams();

    const classes = useStyles();

    const [showPlaceHolder, setShowPlaceHolder] = React.useState(false);
   
    const [valueGenre, setValueGenre] = React.useState([]);
    const [valueAge, setValueAge] = React.useState([]);
    const [valuePoints, setValuePoints] = React.useState([]);
    const [valueInterests, setValueInterests] = React.useState([]);
    const [indexOption, setIndexOption] = React.useState('none') 
    const [value, setValue] = React.useState(0);
    const [disabled, setDisabled] = React.useState(true);


    const options1=['Hombre', 'Mujer','Otro'];

    const options2=['0-10 años', '10-20 años','20-30 años','30-40 años','40-50 años','50-60 años','60-90 años'];
    const options3=['Puntos de venta', 'Packaging','Redes sociales','Tv','Radio', 'Prensa','Presentaciones','Exterior'];
    const options4=['Deportes','Diseño','Arte','Viajes', 'Literatura', 'Cine','Cocina','Finanzas' ];

    let history = useHistory();

 
    function handleNextPage(event){
        history.push('/dashboard/'+project+'/'+id+'/finished1');

        let db = fb.firestore();

        db.collection("projects").doc(id).update({
            "url":  '/dashboard/'+project+'/'+id+'/finished1',
            "percent": 40,
       

        })

    }

      function handleBackPage(event){
        history.push('/dashboard/'+project+'/'+id+'/step1_8');
      } 

    function onChangeGenre(event){
       let valueGenre=Object.values(event.target.value)

       setValueGenre(event.target.value)
     

       var docRef = db.collection("projects").doc(id).collection('esencia-de-marca').doc('paso-10');

  
  
       docRef.update({
        "genero": valueGenre,
    })
    .then(function() {
        console.log("Document successfully updated!");
    });
        
    }


    function onChangeAge(event){
        let valueAge=Object.values(event.target.value)

        setValueAge(event.target.value)
      
 
        var docRef = db.collection("projects").doc(id).collection('esencia-de-marca').doc('paso-10');
 
   
   
        docRef.update({
         "edad": valueAge,
     })
     .then(function() {
         console.log("Document successfully updated!");
     });
    }

    function onChangePoints(event){
        let valuePoints=Object.values(event.target.value)

        setValuePoints(event.target.value)
      
 
        var docRef = db.collection("projects").doc(id).collection('esencia-de-marca').doc('paso-10');
 
   
   
        docRef.update({
         "puntosContacto": valuePoints,
     })
     .then(function() {
         console.log("Document successfully updated!");
     });
    }

    function onChangeInterests(event){
        let valueInterests=Object.values(event.target.value)

        setValueInterests(event.target.value)
      
 
        var docRef = db.collection("projects").doc(id).collection('esencia-de-marca').doc('paso-10');
        docRef.update({
         "intereses": valueInterests,
     })
     .then(function() {
         console.log("Document successfully updated!");
     });
    }   

    React.useEffect(() => {


        
        var docRef = db.collection("projects").doc(id).collection('esencia-de-marca').doc('paso-10')

        const listener = docRef.onSnapshot(function(doc) {
            
           
            if(doc.exists){
              
              
            setIndexOption(doc.data()?.optionSelected ?? 'none')
            setShowPlaceHolder(doc.data()?.optionSelected === 'Sí')

            if(doc.data().genero){
                setValueGenre(doc.data().genero)
            }else{
                setValueGenre([])
            }
            if(doc.data().edad){
                setValueAge(doc.data().edad)
            }else{
                setValueAge([])
            }
            if(doc.data().intereses){
                setValueInterests(doc.data().intereses)
            }else{
                setValueInterests([])
            }
            if(doc.data().puntosContacto){

                setValuePoints(doc.data().puntosContacto)
            }else{
                setValuePoints([])
            }
            setDisabled(false);


            }else{
            setValueGenre([])
            setValueAge([])
            setValueInterests([])
            setValuePoints([])
            }
        })
        return () => listener()
   
    }, [id]);


    React.useEffect(() => {
        var docRef = db.collection("projects").doc(id);
        docRef.get().then(function(doc) {
            if(disabled===true){
                db.collection("projects").doc(id).update({
                    "percentStep2": 90,
                    }) 
            }else{
                db.collection("projects").doc(id).update({
                    "percentStep2": 100,
           
                    }) 
            }
            if(doc.exists){
                setValue(doc.data().percentStep2)
            }
            

        })
      },[id,disabled])

      






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
                            numStep='10'
                            numTotalStep='10'
                            value={value}
                   

                        />
                    </div>
                    <div className={classes.contentText}>
                       <h1 className={classes.question}> <span className={classes.num}>10. ¡Súper!</span> Por último ¿conoces las características de tu público objetivo (género,edad...)?</h1>
                    </div>
                    <div className={classes.contentBottom}>
                        <div className={classes.options}>
                        <div className={classes.answers}>
                        {btns.map((item,i)=>
                               <BtnYellow key={i}{...item}
                               checked={ indexOption === item.content} onChange={async(event)=>{
                                setIndexOption(item.content)
                                let db = fb.firestore();
                                var docRef = db.collection("projects").doc(id).collection('esencia-de-marca').doc('paso-1')
                                await docRef.set({optionSelected:item.content})

                                if(item.content==='Sí'){   
                                setShowPlaceHolder(prev => !prev)
                                }
                                else if(item.content==='No'){
                                    setShowPlaceHolder(false)
                                }
                                else if(item.content==='Omitir'){
                                    setShowPlaceHolder(false)
                                }
                            }}/>
                               

                           
                        )}  
                        </div>

                        {showPlaceHolder &&
                            <div className={classes.nameSlogan}>
                                <p className={classes.question}>Selecciona por favor cada una de las siguientes opciones</p>
                                <div className={classes.selectors}>
                                <SelectorLabel             
                                 options={options1}
                                 label='Género'
                                 value={valueGenre}
                                 onChange={onChangeGenre}/>

                                <SelectorLabel
                                 options={options2}
                                 label='Edad'
                                 value={valueAge}
                                 onChange={onChangeAge}/>
                                <SelectorLabel
                                 options={options3}
                                 label='Puntos de contacto'
                                 value={valuePoints}
                                 onChange={onChangePoints}/>
                               
                                <SelectorLabel
                                 options={options4}
                                 label='Intereses'
                                 value={valueInterests}
                                 onChange={onChangeInterests}/>
                                </div>


    
                            </div>
                        
                        }
                           
                        </div>


 
                    
                    <div className={classes.actions}>
                        <BtnOutlinedStep
                        width='149px'
                        height='48px'
                        onClick={handleBackPage}
                        />
                        <img className ={classes.tutorial} alt='tutorial'  src={('/images/tutorial.svg')}/>
                        <BtnStep
                        disabled={disabled}
                        content='Continuar'
                        width='149px'
                        height='48px'
                        onClick={handleNextPage}
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
              alignSelf:'flex-end',
              justifyContent:'space-between',
              width:'100%',
              marginTop:'30px',
 
          },
          tutorial:{
              cursor:'pointer',
          },
          question:{
              fontFamily:'Open Sans',
              color:'#212429',
              fontWeight:400,
              fontSize:'18px'
          },
          num:{
            fontFamily:'Open Sans',
            fontWeight:700,
            fontSize:'18px'
          },

          btn: {
            width: '149px',
            height: '48px',
            cursor:'pointer',
            textTransform: 'none',
            fontFamily: 'Poppins',
            fontSize:'16px',
            color:'#212429',
            marginRight:'74px',
            background: 'white',
            border: 'none',
            boxSizing: 'border-box',
            borderRadius: '15px',
            fontWeight:500,
            outline:'none',
            boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',
  
          '&:hover':{
              background: '#FFD984',
              outline:'none',
          },
              
  
  
      },
  
  
  
      btnClick: {
          width: '149px',
          height: '48px',
          cursor:'pointer',
          textTransform: 'none',
          fontFamily: 'Poppins',
          marginRight:'74px',   
          fontSize:'16px',
          color:'#212429',
          background: '#FFD984',
          border: '1px solid #FFB600',
          boxSizing: 'border-box',
          borderRadius: '15px',
          fontWeight:500,
          outline:'none',
          boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',
  
  
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
    nameSlogan:{
        marginTop:'40px',
    },

    firstPlaceHolder:{
        marginTop:'12px'
    },
    selectors:{
        marginTop:'37px',
        display:'flex',
        flexDirection:'row'
    }
    
    
    }));





export default Step1_9; 