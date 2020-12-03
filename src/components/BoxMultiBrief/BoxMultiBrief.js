import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function BoxMultiBrief(props){

    const classes = useStyles({ width: `${props.width}`, height: `${props.height}`, marginTop:`${props.marginTop}`});

    return <div className={classes.divContainer}>
        <div className={classes.containerTitleRespuesta}><p className={classes.titleRespuesta}>{props.title}</p></div>

                                           
        <div className={classes.container}> 
            <div className={classes.containerInput}><span className={classes.titleInput}>Género:  <span className={classes.text}>{props.generoAudiencia}</span></span></div>
            <div className={classes.containerInput}><span className={classes.titleInput}>Edad:  <span className={classes.text}>{props.edadAudiencia}</span></span></div>
            <div className={classes.containerInput}><span className={classes.titleInput}>Puntos de contacto:  <span className={classes.text}>{props.puntosContacto}</span></span></div>
            <div className={classes.containerInput}><span className={classes.titleInput}>Intereses: <span className={classes.text}>{props.intereses}</span> </span></div>
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
        height: 271,
        marginTop: (props) => `${props.marginTop}`,
        
        
    },
    containerTitleRespuesta:{
        display:'flex',
        flexDirection:'row',
        alignSelf:'flex-start',

        
    },
    container:{
        display:'flex',
        flexDirection:'column',
        marginTop:'10px',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        width:310,

    },
    input:{
      width:169,
      height:14, 
      marginLeft:'4px',
      border:'none',
      outline:'none',
      color:'#212429',
      fontFamily:'Open Sans',
      fontWeight:400,
      fontSize:14,
      alignSelf:'flex-end',
      background:'transparent'    
    },
    containerInput:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        alignContent:'center',
        padding:'1px'

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
    titleInput:{
        fontFamily:'Poppins',
        flexWrap:'no-wrap',
        fontWeight:500,
        color: '#495057',
        marginTop:'12px',
        marginLeft:'12px',   
        fontSize:'12px',
        alignSelf:'flex-start',
    },
    text:{
        fontFamily:'Open Sans',
        color:'#212429',
        fontSize:'13px',
        alignSelf:'flex-end'
    }


}));


export default BoxMultiBrief;