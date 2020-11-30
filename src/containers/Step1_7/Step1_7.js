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
let db = fb.firestore();
require('firebase/auth');

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

function Step1_7(){

    let {project,id}= useParams();
    const classes = useStyles();
    let history = useHistory();
    


    const [value, setValue] = React.useState(0);
    const [disabled, setDisabled] = React.useState(true);
    const [sliders, setSliders] =React.useState([]);
    
    const [answers,setAnswers] = React.useState([]); 
    const [select,setSelect] = React.useState(''); 

    const [currentSelect,setCurrentSelect] = React.useState([]); 
    
    const[imgChange, setImgChange]= React.useState('/images/loading.svg');
    let max= 3
    let min= 1


    function handleBackPage(event){
        history.push('/dashboard/'+project+'/'+id+'/step1_7');
    } 

    function handleSaveF(event){
        let db = fb.firestore();
    
        var random =Math.random() * (max - min) + min;
        var randomC= parseInt(random)
        var docRef = db.collection("projects").doc(id);
      
        docRef.collection('esencia-de-marca').doc('paso-8').set({
            respuestas:answers,
            currentSelect: currentSelect,  
            url:'/images/ilus-'+randomC+'.svg'
        })
    }
 
    function handleNextPage(event){
        history.push('/dashboard/'+project+'/'+id+'/step1_9');

        let db = fb.firestore();

        db.collection("projects").doc(id).update({
            "url":  '/dashboard/'+project+'/'+id+'/step1_9',
       

        })
      
   

        
    }


React.useEffect(() => {
   
       

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
    },
    {
        options:options1,
        id: 4,
        value:'',
        value2:50,
    }
    ]
   
    var docRef = db.collection("projects").doc(id).collection('esencia-de-marca').doc('paso-8')
    
        const listener = docRef.onSnapshot(function(doc) {
            let sTemp=Object.assign([],slider);
            let current = [];
            
            if(doc.exists){
            
            setDisabled(false);
            setCurrentSelect([])
            setAnswers([]);
            setSliders([])
            setCurrentSelect([])
            setImgChange(doc.data().url)
         
            var respuestas =doc.data().respuestas;
          
            //setAnswers(respuestas)
            //setSelect(doc.data().currentSelect.value)
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
       
            } else{
                setSliders(slider)
            }
        })
        
        return () => listener()
 

},[id])

React.useEffect(()=>{

    if(disabled===true){
        db.collection("projects").doc(id).update({
            "percentStep2": 70,
            }) 
    }else{
        db.collection("projects").doc(id).update({
            "percentStep2": 80,
            }) 
    }

},[disabled,id])

React.useEffect(() => {
    var docRef = db.collection("projects").doc(id);
    docRef.get().then(function(doc) {
        if(doc.exists){
            setValue(doc.data().percentStep2)
        }

    })
  },[id])

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
                                
                                        currentSelect.map((o)=>{
                                
                                            item.options.map((l)=>{
                                                if(l.value=== o.value){
                                                    l.disabled=true;
                                                }




                                                return l;
                                            })

                                        return o;
                                    })
                                 
                          
                    
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
                          

                                        
                                    }}
                                    onChange2={(event, newValue)=>{

                                        let aTemp= answers;
                                    
                                        item.value2=newValue;
                        
                                        
                                        aTemp.map((a)=>{
                                            if(a.value=== select){
                                               a.value2=newValue
                                               setDisabled(true);
                                            }
                                            return a;   
                                        })
                                        setAnswers(aTemp)
                                        

                                     }}
                                />
                            
                  
                             
                            </div>
                        )}
                            <div className={classes.add}>
                            <img  src='/images/add.svg' alt="watch" width='73px' />
                        
                            </div>
                        </div>     
                        <div className={classes.imageBtn}>
                        <div className={classes.img}>
                        <img className={classes.imgCircle} src='/images/help-circle2.svg'alt="watch" width='20px' />
                        <img className={classes.imgPerson} src={imgChange} alt="watch" width='202.62px' />

                        </div>
                        <button onClick={handleSaveF}className={classes.btnChangeImg}>Generar Avatar</button>
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
