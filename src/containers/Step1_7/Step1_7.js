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
import Slider from '../../components/SliderQuestion/SliderQuestion';


//Todos los imports se coloca   n arriba de este 

import { fb } from '../../utils/firebase'
require('firebase/auth');

function Step1_7(){

    let {project}= useParams();
    const classes = useStyles();
    let history = useHistory();
    
    var list= [];
    const [value, setValue] = React.useState(28.5714285714*4);
    const [disabled, setDisabled] = React.useState(true);
  
    const  [slider1, setSlider1] = React.useState(false);
    const  [select1, setSelect1] = React.useState(false);
    const  [select1_1, setSelect1_1] = React.useState(false);

    const  [slider2, setSlider2] = React.useState(false);
    const  [select2, setSelect2] = React.useState(false);
    const  [select2_2, setSelect2_2] = React.useState(false);

    const  [slider3, setSlider3] = React.useState(false);
    const  [select3, setSelect3] = React.useState(false);
    const  [select3_3, setSelect3_3] = React.useState(false);



    const [answers,setAnswers] = React.useState({}); 
    const [answers2,setAnswers2] = React.useState({}); 
    const [answers3,setAnswers3] = React.useState({}); 

    const [selectValue1,setSelectValue1] = React.useState(''); 
    const [selectValue1_1,setSelectValue1_1] = React.useState(''); 
    const [sliderValue,setSliderValue] = React.useState(0);


    const [selectValue2,setSelectValue2] = React.useState(''); 
    const [selectValue2_2,setSelectValue2_2] = React.useState(''); 
    const [sliderValue2,setSliderValue2] = React.useState(0);


    const [selectValue3,setSelectValue3] = React.useState(''); 
    const [selectValue3_3,setSelectValue3_3] = React.useState(''); 
    const [sliderValue3,setSliderValue3] = React.useState(0);


    const [urlNext, setUrlNext] = React.useState('');
    const[imgChange, setImgChange]= React.useState('/images/loading.svg');
  

  
    let options1=[
        {
            item: 'Seleciona uno',
            value: ''
        },
     {
        item: 'Tradicional',
        value: 'tradicional'
     },
     {
        item: 'Adulta',
        value: 'adulta'
     },
     {
        item: 'Clásica',
        value: 'clásica'
     },


    ]

    let options2=[
        {
            item: 'Seleciona uno',
            value: ''
        },
        {
           item: 'Innovadora',
           value: 'innovadora'
        },
        {
           item: 'Joven',
           value: 'joven'
        },
        {
           item: 'Creativa',
           value: 'creativa'
        },
   
   
       ]


    function handleNextPage(event){
        history.push(urlNext);

        let db = fb.firestore();
        fb.auth().onAuthStateChanged(user => {
            db.collection(`${user.email}`).doc(project).collection('Esencia de marca').doc('paso 7').set({
             respuestas: list,
              
            })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
            
            
          
              
                  
        })

        
    }

      
      const handleSlider1=(event,value)=>{
        setSliderValue(value);
        if(value=== 4){
            setSlider1(true);
        }
        
        answers.slider=value;

      }


      const handleOnChange1=(event)=>{
        setSelectValue1(event.target.value);
        
        answers.categoria1=event.target.value;

        if(event.target.value=== 'tradicional'){
            setSelect1(true);
        }
 
      }

      const handleOnChange2=(event)=>{
        setSelectValue1_1(event.target.value);
        answers.categoria1_1=event.target.value;

        if(event.target.value=== 'innovadora'){
            setSelect1_1(true);
        }

      }

      function handleOnChange3(event){
        setSelectValue2(event.target.value);
        answers2.categoria1=event.target.value;

        if(event.target.value=== 'adulta'){
            setSelect2(true);
        }

      }
      const handleSlider2=(event,value)=>{
        setSliderValue2(value);
        answers2.slider=value;

        if(value=== 3){
            setSlider2(true);
        }

      }

      function handleOnChange4(event){
        setSelectValue2_2(event.target.value);
  
        answers2.categoria1_1=event.target.value;


        if(event.target.value=== 'joven'){
            setSelect2_2(true);
        }
      }

      function handleOnChange5(event){
        setSelectValue3(event.target.value);
       
        answers3.categoria1=event.target.value;
        if(event.target.value=== 'clásica'){
            setSelect3(true);
        }
      }

      const handleSlider3=(event,value)=>{
        setSliderValue3(value);
        answers3.slider=value;
        if(value=== 6){
            setSlider3(true);
        }

      }

      function handleOnChange6(event){
        setSelectValue3_3(event.target.value);
        answers3.categoria1_1=event.target.value;

        if(event.target.value=== 'creativa'){
            setSelect3_3(true);
        }

      }


      function handleBackPage(event){
        history.push(`/dashboard/${project}/step1_2`);
      } 


    React.useEffect(() => {
        let isCancelled = false;
        setAnswers(answers);
        setAnswers2(answers2);
        setAnswers3(answers3);


      
        list.push(answers)
        list.push(answers2)
        list.push(answers3)

        console.log(list);


        if(select1 === true && select1_1 === true && slider1 === true){
            setImgChange('/images/ilus1.svg')
        }
        if(select2 === true && select2_2 === true && slider2 === true){
            setImgChange('/images/ilus2.svg')
        }
        if(select3 === true && select3_3 === true && slider3 === true){
            setImgChange('/images/ilus3.svg');
            setDisabled(false); 
        }

       

     if(disabled===true){
        setValue(28.5714285714+(14.2857142857*4)); 
        
     }else{
        setValue(100); 
     }
    
     if (!isCancelled) {
        let db = fb.firestore();
        fb.auth().onAuthStateChanged(user => {
        var docRef = db.collection(`${user.email}`).doc(project);
    
        docRef.update({
            url: '/dashboard/'+project+'/step1_8',
            step:'esenciaMarca_paso8'
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

  


      
        
    }, [project,list,disabled,answers,slider1,answers2,answers3,select1,select1_1,select2,select2_2,select3, select3_3,slider2,slider3]);




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
                            numStep='7'
                            numTotalStep='7'
                            value={value}
                   

                        />
                    </div>
                    <div className={classes.contentText}>
                       <h1 className={classes.question}> <span className={classes.num}>7. </span>Si tu marca fuera una persona ¿Cómo sería? Ubica los deslizadores entre los dos extremos que selecciones.</h1>
                    </div>
                    <div className={classes.contentBottom}>

                        <div className={classes.options}>
                        <div className={classes.answers}>
                            <div className={classes.selectors}>
                                <Selector classes={classes.select1}
                                    options={options1}
                                    value={selectValue1}
                                    onChange={handleOnChange1}
                                />
                            
                                <Slider onChange={handleSlider1} value={sliderValue}/>
                                <Selector classes={classes.select2}
                                 options={options2}
                                 value={selectValue1_1}
                                 onChange={handleOnChange2}/>
                            </div>
                            <div className={classes.selectors2}>
                                <Selector classes={classes.select1}
                                 options={options1}
                                 value={selectValue2}
                                 onChange={handleOnChange3}/>
                            
                                <Slider onChange={handleSlider2}  value={sliderValue2}/>
                                <Selector classes={classes.select2}
                                 options={options2}
                                 value={selectValue2_2}
                                 onChange={handleOnChange4}/>
                            </div>
                            <div className={classes.selectors3}>
                                <Selector classes={classes.select1}
                                 options={options1}
                                 value={selectValue3}
                                 onChange={handleOnChange5}/>
                            
                                <Slider onChange={handleSlider3} value={sliderValue3}/>
                                <Selector classes={classes.select2}
                                 options={options2}
                                 value={selectValue3_3}
                                 onChange={handleOnChange6}/>
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
        width:'800px',
        height:'300px',
        flexDirection:'column',
        flexWrap:'no-wrap', 
        alignSelf:'flex-start',
        alignContent:'space-between',
        justifyContent:'flex-start'
       
    },

    iconsAction:{
        cursor:'pointer'
    },
    selectors:{
        display:'flex',
        height:'auto',
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'flex-start',
        alignItems:'center',
    },
    selectors2:{
        display:'flex',
        height:'auto',
        marginTop:'46px',
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'flex-start',
        alignItems:'center',
    },
    selectors3:{
        display:'flex',
        height:'auto',
        marginTop:'46px',
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'flex-start',
        alignItems:'center',
    },
    
    imageBtn:{
        marginLeft:'20px',
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

        width:'200px',
        height:'240px',
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
        height:'90%',
        alignSelf:'center'

    }
    
   
    
    
    }));




export default Step1_7; 