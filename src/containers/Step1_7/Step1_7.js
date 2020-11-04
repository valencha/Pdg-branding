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
import Selector from '../../components/Selector/Selector';
import Slider from '../../components/SliderQuestion/SliderQuestion';



function Step1_7(){

    let {project}= useParams();
    const data = React.useContext(DataContext);
    const classes = useStyles();
    let history = useHistory();
    
    
    const [value, setValue] = React.useState(28.5714285714*4);
    const [slider1, setSlider1]=React.useState(0); 
    const [disabled, setDisabled] = React.useState(true);
    const [answers,setAnswers] = React.useState([])
    const [selector1_1, setSelector1_1] = React.useState('');
  
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
        setDisabled(false);
        


      }

      
      function handleChange(event,value){
        
       answers.slider=value;

        console.log(value);
        
        
      }


      function handleOnChange1(event){

        answers.categoria1=event.target.value;
 
      }

      function handleOnChange2(event){
        
        answers.categoria1_1=event.target.value;
        
      }
      function handleOnChange3(event){
        console.log(event.target.value);
      }

      function handleOnChange4(event){
  
        console.log(event.target.value);
      }

      function handleOnChange5(event){
       

        console.log(event.target.value);
      }

      function handleOnChange6(event){
        console.log(event.target.value);
      }


      function handleBackPage(event){
        history.push(`/dashboard/${project}/step1_2`);
      } 


    React.useEffect(() => {

        console.log(answers);
     if(disabled===true){
        setValue(28.5714285714+(14.2857142857*4)); 
        
     }else{
        setValue(100); 
     }
    
      
        
    }, [project,disabled,answers]);




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
                                    onChange={handleOnChange1}
                                />
                            
                                <Slider onChange={handleChange} value={slider1}/>
                                <Selector classes={classes.select2}
                                 options={options2}
                                 onChange={handleOnChange2}/>
                            </div>
                            <div className={classes.selectors2}>
                                <Selector classes={classes.select1}
                                 options={options1}
                                 onChange={handleOnChange3}/>
                            
                                <Slider/>
                                <Selector classes={classes.select2}
                                 options={options2}
                                 onChange={handleOnChange4}/>
                            </div>
                            <div className={classes.selectors3}>
                                <Selector classes={classes.select1}
                                 options={options1}
                                 onChange={handleOnChange5}/>
                            
                                <Slider/>
                                <Selector classes={classes.select2}
                                 options={options2}
                                 onChange={handleOnChange6}/>
                            </div>
                        
                        </div>     
                        <div className={classes.imageBtn}>
                        <img alt='imagePerson'  src={('/images/loadingImage.jpg')} width='223px' />
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
    }
   
    
    
    }));




export default Step1_7; 