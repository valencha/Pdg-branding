import React from 'react';
import{useParams} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import TopBar from '../../components/TopBar/TopBar';
import { makeStyles } from '@material-ui/core/styles';
import LateralBar from '../../components/LateralBar/LateralBar';
import ProgressTool from '../../components/ProgressTool/ProgressTool';
import BtnOutlinedStep from '../../components/BtnOutlinedStep/BtnOutlinedStep';
import BtnStep from '../../components/BtnStep/BtnStep';
import Selector from '../../components/Selector/Selector';




//Todos los imports se coloca   n arriba de este 

import { fb } from '../../utils/firebase'
require('firebase/auth');

function Step1_7(){

    let {project}= useParams();
    const classes = useStyles();
    let history = useHistory();
    


    const [value, setValue] = React.useState(0);
    const [disabled, setDisabled] = React.useState(false);
    const [sliders, setSliders] =React.useState([]);
  
    const [limit,setLimit] = React.useState(true); 
    const [answers,setAnswers] = React.useState([]); 
    const [select,setSelect] = React.useState(''); 

    const [currentSelect,setCurrentSelect] = React.useState([]); 
  
    const [urlNext, setUrlNext] = React.useState('');
    const[imgChange, setImgChange]= React.useState('/images/loading.svg');
  

  
   

    function handleNextPage(event){
      
        history.push(urlNext);

        let db = fb.firestore();
        fb.auth().onAuthStateChanged(user => {
            db.collection(`${user.email}`).doc(project).collection('Esencia de marca').doc('paso 8').set({
             respuestas:answers,
             currentSelect: currentSelect,  
        
              
            })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
            
            
          
              
                  
        })

        
    }

      
    function handleAddCategory(event){
        setLimit(false);
    
     
    }

 
  


    function handleBackPage(event){
        history.push(`/dashboard/${project}/step1_7`);
    } 


    React.useEffect(() => {
        let isCancelled = false;



    
     if (!isCancelled) {
        let db = fb.firestore();
        fb.auth().onAuthStateChanged(user => {
        var docRef = db.collection(`${user.email}`).doc(project);

        if(disabled=== false){
    
        docRef.update({
            url: '/dashboard/'+project+'/step1_9',
            step:'esenciaMarca_paso9',
            percentStep2:80,
        })
        .then(function(db) {
     
            console.log('done');
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
        }else{
            docRef.update({
                url: '/dashboard/'+project+'/step1_8',
                step:'esenciaMarca_paso8',
                percentStep2:70,
            })
            .then(function(db) {
         
                console.log('done');
            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
        }

        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log(doc.data().url);
                setUrlNext(doc.data().url);
                setValue(doc.data().percentStep2);
                if(doc.data().percentStep2===100){
                    docRef.update({
                        percentStep2:100
                    })
                    .then(function(db) {
                 
                        console.log('done');
                    })
                    .catch(function(error) {
                      //   console.error("Error updating document: ", error);
                    });
                }
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

 
   


          
              
    })
 

    if(answers.length>=1){
        setDisabled(false);
    }

    }
     return () => {
            isCancelled = true;
        };
        
    }, [project,disabled,answers.length]);



React.useEffect(() => {
    let options1=[
        {  item: 'Selecciona una',
        value: '',
        disabled:false,

        },
    
         {
            item: 'Tradicional',
            value: 'tradicional',
            disabled:false,

         },
         {
            item: 'Adulta',
            value: 'adulta',
            disabled:false,
         },
         {
            item: 'Clásica',
            value: 'clásica',
            disabled:false,
         },
         {
            item: 'Emocional',
            value: 'emocional',
            disabled:false,
         },
         {
            item: 'Racional',
            value: 'racional',
            disabled:false,
         },
         {
            item: 'Local',
            value: 'local',
            disabled:false,
         },
         {
            item: 'Global',
            value: 'global',
            disabled:false,
         },
         {
            item: 'Premium',
            value: 'premium',
            disabled:false,
         },
         {
            item: 'Popular',
            value: 'popular',
            disabled:false,
         },
         {
            item: 'Innovadora',
            value: 'innovadora',
            disabled:false,
         },
         {
            item: 'Joven',
            value: 'joven',
            disabled:false,
         },
         {
            item: 'Creativa',
            value: 'creativa',
            disabled:false,
         },
    
        ]
        let db = fb.firestore();

        currentSelect.map((o)=>{
 
            options1.map((l)=>{
                if(l.value=== o.value){
                    l.disabled=true;
                }




                return l;
            })


  

        
        return o;
    })

   
      
      
    
  
   
    let slider=[{
        options:options1,
        id: 1,
        value:'',
        value2:50,
    },
    {
        options:options1,
        id: 2,
        value:'',
        value2:50,
    },
    {
        options:options1,
        id: 3,
        value:'',
        value2:50,
    }
    ]
     
          

    fb.auth().onAuthStateChanged(user => {
        var docRef = db.collection(`${user.email}`).doc(project);
        docRef.collection('Esencia de marca').doc('paso 8').get().then(function(doc) {
    
            if (doc.exists) {
              // console.log(Object.values(doc.data().respuestas));
                
                var respuestas =doc.data().respuestas;

                let currentl =doc.data().currentSelect;


     
               
                setSelect(doc.data().currentSelect.value)
    
                setAnswers(respuestas)

           
                let sTemp=slider;
                let current = currentSelect;

                respuestas.map((r)=>{
               
                    
     
      
                    sTemp.map((d)=>{
                   

                            if(d.id===r.id){
                                
                                d.value= r.value;
                                d.value2= r.value2;
                            
                                current.push({value:r.value, id: r.id})
                            
                                d.options.map((o)=>{
                                    if(r.value=== o.value){
                                        o.disabled=true;
                                        
                                    }
                                    return o;
                                })

                                
          
                            }
                            return d;
                        
                        })
                        
                        
                return r;
                    
                })
                    setSliders(sTemp)
                    setCurrentSelect(current)
           

            } else {
                setSliders(slider)
            }
        }).catch(function(error) {
           // console.log("Error getting document:", error);
        });
    })
        
  
    if(limit === false){
        slider.push({ options:options1, id: 4, value:'', value2:50})
    
    }

   



    

   

},[currentSelect,select,limit,project])



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
                            numStep='8'
                            numTotalStep='10'
                            value={value}
                   

                        />
                    </div>
                    <div className={classes.contentText}>
                       <h1 className={classes.question}> <span className={classes.num}>8. </span>Si tu marca fuera una persona ¿Cómo sería? Ubica los deslizadores entre los dos extremos que selecciones.</h1>
                    </div>
                    <div className={classes.contentBottom}>

                        <div className={classes.options}>
                        <div className={classes.answers}>
                        {sliders.map((item, i) =>
                            <div className={classes.selectors} key={i}>
                                <Selector className={classes.select}
                                    {...item}
                                    
                      
                                    onChange={(event)=>{
                                        item.value=event.target.value;
                                        let current =currentSelect;
                   
                                       setSelect( event.target.value);
                                
                                 
                          
                    
                                       answers.push({id:item.id, value:event.target.value, value2:50});

                                    
                                    var j = -1;
                                    
                                    current.forEach((answer,k) => {
                                        if(item.id===answer.id){
                                           j=k;
                                        }
                                    });
                                    //ENCONTRO
                                    if(j!== -1){
                                        if(event.target.value===item.value){
                                        current[j].value=item.value;
                                        }else{
                                            current.splice(j,1);
                                        }

                                    }else{//NO ENCONTRO
                                        current.push({value: event.target.value,id:item.id})
                                    }
                                    setCurrentSelect(current);
                          
                                    if(current.length>0){
                                        setDisabled(false)
                                    }else{   
                                        setDisabled(true);
                                    }
 
         
                            
                                     
                                        
                                    }}
                                    onChange2={(event, newValue)=>{

                                        let aTemp= answers;
                                    
                                        item.value2=newValue;
                        
                                        
                                        aTemp.map((a)=>{
                                            if(a.value=== select){
                                               a.value2=newValue
                                            }
                                            return a;   
                                        })
                                        setAnswers(aTemp)
                                        

                                     }}
                                />
                            
                  
                             
                            </div>
                        )}
                            <div className={classes.add}>
                            <img  src='/images/add.svg' alt="watch" width='73px' onClick={handleAddCategory} />
                        
                            </div>
                        </div>     
                        <div className={classes.imageBtn}>
                        <div className={classes.img}>
                        <img className={classes.imgCircle} src='/images/help-circle2.svg'alt="watch" width='20px' />
                        <img className={classes.imgPerson} src={imgChange} alt="watch" width='83px' />

                        </div>
                        <button className={classes.btnChangeImg}>Cambiar a Femenino</button>
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

         select:{

            display:'flex',
            flexDirection:'row',
            justifyContent:'flex-start',
            alignContent:'center',
            alignItems:'center',
            padding:'10px'

          },

    options:{
        display:'flex',
        width:'100',
        flexDirection:'row',
        flexWrap:'no-wrap',
        height:'355px',
        alignContent:'flex-start',
        alignItems:'flex-start',
        justifyContent:'space-between',
        
    },

    answers:{
        display:'flex',
        width:'725px',
        height:'300px',
        flexDirection:'column',
        flexWrap:'no-wrap', 
        alignSelf:'flex-start',
        alignContent:'flex-start',
        justifyContent:'flex-start'
       
    },

    iconsAction:{
        cursor:'pointer'
    },


    
    imageBtn:{
        display:'flex',
        flexDirection:'column',
    },
    btnChangeImg:{
        marginTop:'25px',
        cursor:'pointer',
        outline:'none',
        backgroundColor:'white',
        borderRadius:'15px',
        border:'none',
        boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',
        height: '48px',
        color:'#7A76FF',
        fontWeight:600,
        fontFamily:'Poppins'
    },

    img:{

        width:'183px',
        height:'206px',
        borderRadius:'15px',
        backgroundColor:'white',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        padding:'10px'

    },
    imgCircle:{
        alignSelf:'flex-end',
        justifyContent:'flex-start'
        
    },

    imgPerson:{
        height:'80%',
        alignSelf:'center'

    },
    add:{
        display:'flex',
        cursor:'pointer',
        justifyContent:'center',
        alignContent:'center',
        width:'223px'
    }
    
   
    
    
    }));




export default Step1_7; 