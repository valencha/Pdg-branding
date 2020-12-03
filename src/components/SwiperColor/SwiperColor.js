import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { HexColorPicker } from "react-colorful";
import "react-colorful/dist/index.css";

function SwiperColor(props){

    const classes = useStyles({ width: `${props.width}`, height: `${props.height}`, marginTop:`${props.marginTop}`});
   


    return <div className={classes.divContainer}>
            <div className={classes.containerTitleRespuesta}><p className={classes.titleRespuesta}>{props.title}</p></div>
                <div className={classes.containerRespuesta}>
                <HexColorPicker color={props.color} onChange={props.onChange} />

                <div style={{display:'flex', flexDirection:'column'}}> <div className={classes.cardContent} onClick={props.onClick}  style={{background:`${props.color}`}}>                   
                </div>
                <div style={{display:'flex',marginLeft:'4px', flexDirection:'row', alignSelf:'center',justifyContent:'center', alignContent:'center', alignItems:'center'}}> 
                <p className={classes.label}>{props.color}</p>
                <img onClick={props.onClick}style={{cursor:'pointer'}} src={'/images/guardar.svg'} alt="watch" width='50px' />
                </div>
                </div>


               
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
        width: 490,
        height: (props) => `${props.height}`,
        marginTop: (props) => `${props.marginTop}`,
        
        
    },
    card:{
        width:'60px',
        height:'60px',
        marginTop:'5px',
        borderRadius:'12px'
    },
    containerTitleRespuesta:{
        display:'flex',
        flexDirection:'row',
        alignSelf:'flex-start',

        
    },
    containerRespuesta:{
        display:'flex',
        marginTop:'35px',
        flexDirection:'row',
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
        width:'142px',
        height:'130px',
        padding:'5px',
        display:'flex',
        border: '1px solid #DDE2E5',
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        background: '#FFFFFF',
        marginLeft:'20px',            
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
        color:'#212429',
        padding:'5px',
    }


}));


export default SwiperColor;