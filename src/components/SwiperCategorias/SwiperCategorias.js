import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-grid-carousel';


function SwiperCategoria(props){

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
        <Slider showDots={true} dot={MyDot} cols={1} rows={1} gap={10} containerStyle={{display:'flex', justifyContent:'center', alignItems:'center', alignContent:'center', background: 'transparent',  width:'280px', height: '260px', margin: '0 auto'}} >
        {props.list.map((item, i) => 
       
             <Slider.Item  key={i}>
                 <div>
                <div className={classes.cardContent}>
                    <img className={classes.img} width='167px'src={item.urlImage} alt='media'/>
                    <p className={classes.label}>{item.label}</p>  
                </div>
                </div>    
             </Slider.Item>

            
        )}
        
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
        width: 345,
        height: 325,
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
    cardContent:{
        width:223,
        height:240,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        background: '#FFFFFF',            
        boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.105)',
        borderRadius: '15px',
    },
    img:{
        alignSelf:'center',
    },
    label:{
        marginTop:'3px',
        alignSelf:'center',
        fontFamily:'Open Sans',
        fontWeight:400,
        color:'#212429'
    }


}));


export default SwiperCategoria;