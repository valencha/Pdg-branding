import React from 'react';
import{useParams} from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import LateralBar from '../../components/LateralBar/LateralBar';
import ProgressTool from '../../components/ProgressTool/ProgressTool';
import BtnStep from '../../components/BtnStep/BtnStep';
import CardCheckBox from '../../components/CardCheckBox/CardCheckBox';
import BtnOutlinedStep from '../../components/BtnOutlinedStep/BtnOutlinedStep';


let listCategory =[
    {
        id:1,
       label:'Entrada',
       urlImage:'/images/entrada.png',
       select:false

   },
    {
        id:2,
       label:'Plato fuerte',
       urlImage:'/images/platofuerte.png',
       select:false
   },

    {
        id:3,
        label:'Postre',
        urlImage:'/images/postre.png',
        select:false
    },


  

 
]

function StepGusto2(){

    let {project,id}= useParams();
    const classes = useStyles();
    let history = useHistory();
    const [value, setValue] = React.useState(80);
    const [disabled, setDisabled] = React.useState(true);
    

      function handleNextPage(event){
     
        history.push('/dashboard/'+project+'/'+id+'/finished2');
      }
     
      function handleBackPage(event){
     
        history.push('/dashboard/'+project+'/'+id+'/stepgusto');
      }
     


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
                            numStep={5}
                            numTotalStep='5'
                            value={value}
                            onClick={handleNextPage}

                        />
                    </div>
                    <div className={classes.contentText}>
                        <h1 className={classes.titleStep}>Sentido gustativo</h1>
                        <p className={classes.description}><span className={classes.bold}>2. </span>Si la marca de tu proyecto/emprendimiento/empresa fuera una <span className={classes.bold}>comida </span>¿cuál sería? Elige las opciones que mejor se acoplen a tu marca.</p>

                    </div>
                    <div className={classes.contentBottom}>
                        
                        
                     
                        <div className={classes.options}> 
 
                        {listCategory.map((item, i) =>
                        <div key={i}>
                            <CardCheckBox {...item} onChange={(event)=>{
                                let checked=event.target.checked;
                                item.select=checked;
                                setValue(100);
                                console.log(disabled)
                                if(item.select === true){
                                    setDisabled(false);
                                
                                }else{
                                    setDisabled(true);
                                    

                                }
                            }}
                            />
                        
                                
                                
                        </div>
                        )}

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




export default StepGusto2; 