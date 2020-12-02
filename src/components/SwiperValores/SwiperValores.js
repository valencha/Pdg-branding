import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-grid-carousel';


function SwiperValores(props){

    const classes = useStyles({ width: `${props.width}`, height: `${props.height}`, marginTop:`${props.marginTop}`});
     
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

    return <div className={classes.divContainer}>
        <div className={classes.containerTitleRespuesta}><p className={classes.titleRespuesta}>{props.title}</p></div>
        <div className={classes.containerRespuesta}>
        <Slider showDots={true} dot={MyDot} cols={props.cols} hideArrow={true} rows={props.rows} gap={props.gap} containerStyle={{display:'flex', justifyContent:'center', alignItems:'center', alignContent:'center', background: 'transparent', width:'467px', height: '200px', margin: '0 auto'}} >

         
            <Slider.Item>
           
                <div className={classes.cardContentAlta}>
                    <div className={classes.containerTitleRespuesta}><h1 className={classes.titleContent} style={{color:'#24EA8B'}}>Relevancia alta</h1></div>
     
                    <div>
                    <Slider showDots={true} dot={MyDot}  cols={3} rows={1} gap={props.gap} containerStyle={{display:'flex', justifyContent:'center', alignItems:'center', alignContent:'center', background: 'transparent',  width:'400px', height: '80px', margin: '0 auto'}} >
                        {props.list.map((item, i) => 
                        <Slider.Item  key={i}>
                            <div className={classes.cardContent}><p className={classes.label}>{item.text}</p></div>         
                          

                        </Slider.Item>
               

                        )}

                    </Slider> 
                    </div>   
                </div>
           
            </Slider.Item>

            <Slider.Item>
           
           <div className={classes.cardContentMedia}>
               <div className={classes.containerTitleRespuesta}><h1 className={classes.titleContent} style={{color:'#FCC010'}}>Relevancia media</h1></div>

               <div>
               <Slider showDots={true} dot={MyDot}  cols={3} rows={1} gap={props.gap} containerStyle={{display:'flex', justifyContent:'center', alignItems:'center', alignContent:'center', background: 'transparent',  width:'400px', height: '80px', margin: '0 auto'}} >
                   {props.list.map((item, i) => 
                   <Slider.Item  key={i}>
                       <div className={classes.cardContent}><p className={classes.label}>{item.text}</p></div>         
                     

                   </Slider.Item>
          

                   )}

               </Slider> 
               </div>   
           </div>
      
       </Slider.Item>

            <Slider.Item>
           
             <div className={classes.cardContentBaja}>
               <div className={classes.containerTitleRespuesta}><h1 className={classes.titleContent} style={{color:'#FF6B6C'}}>Relevancia baja</h1></div>

               <div>
               <Slider showDots={true} dot={MyDot}  cols={3} rows={1} gap={props.gap} containerStyle={{display:'flex', justifyContent:'center', alignItems:'center', alignContent:'center', background: 'transparent',  width:'400px', height: '80px', margin: '0 auto'}} >
                   {props.list.map((item, i) => 
                   <Slider.Item  key={i}>
                       <div className={classes.cardContent}><p className={classes.label}>{item.text}</p></div>         
                     

                   </Slider.Item>
          

                   )}

               </Slider> 
               </div>   
           </div>
      
       </Slider.Item>

        
        
        </Slider>           
        </div>
    
    </div>;
}
    
const useStyles = makeStyles(theme => ({

  
    divContainer:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        alignContent:'center',
        background: '#F3F7FB',
        borderRadius: '15px',
        width: 710,
        height: (props) => `${props.height}`,
        marginTop: (props) => `${props.marginTop}`,
        
        
    },
    containerTitleRespuesta:{
        display:'flex',
        flexDirection:'row',
        alignSelf:'flex-start',    
    },
    containerRespuesta:{
        display:'flex',
        marginTop:'15px',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',     

    },

    titleRespuesta:{
        fontFamily:'Poppins',
        flexWrap:'no-wrap',
        fontWeight:600,
        color:'#CCCCCC',
        marginTop:'12px',
        marginLeft:'12px',   
        fontSize:'12px',
        alignSelf:'flex-start',
    },
    cardContentAlta:{
        width:'400px',
        height:'142px',
        display:'flex',
        border: '2px dashed #24EA8B ',
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        padding:'5px',
        boxSizing: 'border-box',
        background: 'rgba(36, 234, 139, 0.15)',            
        boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.105)',
        borderRadius: '15px',
    },

    cardContentMedia:{
        width:'400px',
        height:'142px',
        display:'flex',
        border: '2px dashed #FCC010',
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        padding:'5px',
        boxSizing: 'border-box',
        background: 'rgba(252, 192, 16, 0.15)',
        boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.105)',            
        borderRadius: '15px',
    },

    cardContentBaja:{
        width:'400px',
        height:'142px',
        display:'flex',
        border: '2px dashed #FF6B6C',
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        padding:'5px',
        boxSizing: 'border-box',
        background: 'rgba(255, 107, 108, 0.15)',
        boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.105)',            
        borderRadius: '15px',
    },

    label:{
        alignSelf:'center',
        fontFamily:'Open Sans',
        fontWeight:400,
        color:'#212429',
        margin:'3px',
 
    },
    cardContent:{
        width:'auto',
        height:'auto',
        display:'flex',
        border: '1px solid #DDE2E5',
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        padding:'5px',
        background: '#FFFFFF',            
        boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.105)',
        borderRadius: '15px',
    },
    titleContent:{
        fontFamily: 'Poppins',
        fontWeight: 600,
        fontSize: '12px',
        marginLeft:'12px',
    }


}));


export default SwiperValores;