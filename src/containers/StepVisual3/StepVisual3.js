import React from 'react';
import{useParams} from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import LateralBar from '../../components/LateralBar/LateralBar';
import ProgressTool from '../../components/ProgressTool/ProgressTool';
import BtnOutlinedStep from '../../components/BtnOutlinedStep/BtnOutlinedStep';
import BtnStep from '../../components/BtnStep/BtnStep';
import CardCheckBox from '../../components/CardCheckBox/CardCheckBox';
import Slider from 'react-grid-carousel';
//Todos los imports se coloca   n arriba de este 


let listCategory =[
    {
        id:1,
       label:'Cálidos',
       urlImage:'/images/calidos.png',
       select:false

   },
    {
        id:2,
       label:'Fríos',
       urlImage:'/images/frios.png',
       select:false
   },
   {
        id:3,
        label:'Vivos',
        urlImage:'/images/vivos.png',
        select:false
    },

    {
        id:4,
        label:'Pasteles',
        urlImage:'/images/pasteles.png',
        select:false
    },
    {
        id:5,
        label:'Apagados',
        urlImage:'/images/apagados.png',
        select:false
    },
]

function StepVisual3(){

    let {project,id}= useParams();
    const classes = useStyles();
    let history = useHistory();

    const [value, setValue] = React.useState(20);
    const [disabled, setDisabled] = React.useState(true);
    

      function handleNextPage(event){
     
        history.push('/dashboard/'+project+'/'+id+'/stepvisual4');
      }
     
      function handleBackPage(event){
     
        history.push('/dashboard/'+project+'/'+id+'/stepvisual2');
      }
      const MyDot = ({ isActive }) => (
        <span
          style={{
            display: 'inline-block',
            height: '10px',
            width: '10px',
            borderRadius:'10px',
            background: isActive ? '#7A76FF' : '#C4C4C4',
          }}
        ></span>
      )


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
                            titleStep='Kit sensorial'
                            numStep={1}
                            numTotalStep='5'
                            value={value}
                            onClick={handleNextPage}

                        />
                    </div>
                    <div className={classes.contentText}>
                        <h1 className={classes.titleStep}>Sentido visual</h1>
                        <p className={classes.description}><span className={classes.bold}>3. </span>De acuerdo a los recursos visuales que exploraste y escaneaste en las tarjetas del Kit, <span className={classes.bold}>selecciona los colores </span>que más se acoplen a la marca de tu proyecto/emprendimiento/empresa.</p>

                    </div>
                    <div className={classes.contentBottom}>
                        
                        
                     
                        <div className={classes.options}> 
                        <Slider showDots={true} dot={MyDot} cols={3} rows={1} gap={10} containerStyle={{ background: 'transparent',  width:'820px', 
                        height: '283px', margin: '0 auto'}} >
                        {listCategory.map((item, i) =>
                        <Slider.Item  key={i}>      
                            <CardCheckBox {...item} onChange={(event)=>{
                                let checked=event.target.checked;
                                item.select=checked;
                                setValue(20);
                                console.log(disabled)
                                if(item.select === true){
                                    setDisabled(false);
                                
                                }else{
                                    setDisabled(true);
                                    

                                }
                            }}
                            />
                        
                        </Slider.Item>
                        )}
                        </Slider>
                        </div>
               
                       
                       
                  
                    <div className={classes.actions}>
                        <BtnOutlinedStep
                        width='149px'
                        height='48px'
                        onClick={handleBackPage}
                        />
                        <img className ={classes.tutorial} alt='tutorial'  src={('/images/tutorial.svg')} />
                        <BtnStep
                        onClick={handleNextPage}
                        content='Continuar'
                        width='149px'
                        height='48px'
                        
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
            display:'flex',
            flexDirection:'column',
            width:'100%',
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
            fontSize:'32px',
        },
        bold:{
            fontFamily:'Poppins',
            flexWrap:'no-wrap',
            fontWeight:700,
            fontSize:'18px',
        },
        description:{
            fontFamily:'Open Sans',
            flexWrap:'no-wrap',
            width:'900px',
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
            flexDirection:'row',
            width:'50%',
            flexWrap:'no-wrap', 
            justifyContent:'flex-start',
            alignContent:'flex-start',
            alignItems:'flex-start',

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
          actions:{
            display:'flex',
            flexDirection:'row',
            flexWrap:'no-wrap',
            alignSelf:'flex-end',
            justifyContent:'space-between',
            width:'100%', 
            marginTop:'50px'  
          },
          tutorial:{
              cursor:'pointer',
          },
          contentVideo:{
            display:'flex',
            flexDirection:'row',
            flexWrap:'no-wrap',
            width:'100%',
            height:'342px',
          },

          video:{
              borderRadius:'155px',
          }

          
    
    
    }));




export default StepVisual3; 