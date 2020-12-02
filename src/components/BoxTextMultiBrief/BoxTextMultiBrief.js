import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function BoxTextMultiBrief(props){

    const classes = useStyles({ width: `${props.width}`, height: `${props.height}`, marginTop:`${props.marginTop}`});

    return <div className={classes.divContainer}>
        <div className={classes.containerTitleRespuesta}><p className={classes.titleRespuesta}>{props.title}</p></div>

                                           
        <div className={classes.container}> 
            <div className={classes.containerInput}><span className={classes.titleInput}>Dueño/s del proyecto: <span className={classes.text}>{props.dueno}</span></span></div>
            <div className={classes.containerInput}><span className={classes.titleInput}>Email dueño/s: <span className={classes.text}>{props.duenoEmail}</span></span></div>
            <div className={classes.containerInput}><span className={classes.titleInput}>Celular dueño/s: </span><input className={classes.input} value={props.duenoCel} onChange={props.onChangeCelDueno} type='text' placeholder={props.placeholderCelDueno}/></div>
        </div>

        <div className={classes.container}> 
            <div className={classes.containerInput}><span className={classes.titleInput}>Diseñador: </span><input className={classes.input} value={props.disenador} onChange={props.onChangeDisenador} type='text' placeholder={props.placeholderDisenador}/></div>
            <div className={classes.containerInput}><span className={classes.titleInput}>Email diseñador: </span><input className={classes.input} value={props.disenadorEmail} onChange={props.onChangeEmailDisenador} type='text' placeholder={props.placeholderEmailDisenador}/></div>
            <div className={classes.containerInput}><span className={classes.titleInput}>Celular diseñador: </span><input className={classes.input} value={props.disenadorCel} onChange={props.onChangeCelDisenador} type='text' placeholder={props.placeholderCelDisenador}/></div>
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
        height: 219,
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
    }


}));


export default BoxTextMultiBrief;