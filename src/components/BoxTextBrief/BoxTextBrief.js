import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function BoxTextBrief(props){

    const classes = useStyles({ width: `${props.width}`, height: `${props.height}`, marginTop:`${props.marginTop}`});

    return <div className={classes.divContainer}>
        <div className={classes.containerTitleRespuesta}><p className={classes.titleRespuesta}>{props.title}</p></div>
                                           
        <div className={classes.containerMarca}><textarea className={classes.input} value={props.descripcion} onChange={props.onChange} type='text' placeholder={props.placeholder}/></div>
    
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
        height: 106,
        marginTop: (props) => `${props.marginTop}`,
        
        
    },
    containerTitleRespuesta:{
        display:'flex',
        flexDirection:'row',
        alignSelf:'flex-start',

        
    },
    containerMarca:{
        display:'flex',
        marginTop:'15px',
     

    },
    input:{
      width:297,
      height:50, 
      backgroundColor:'transparent',
      border:'none',
      outline:'none',
      color:'#495057',
      fontFamily:'Poppins',
      fontWeight:400,
      fontSize:14, 
      resize: 'none',    
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


}));


export default BoxTextBrief;