import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


function PlaceHolder(props){

    const classes = useStyles({ width: `${props.width}` , height:`${props.height}`});;
    

    return <div className={props.className}>
    
    <div className={classes.contentPlaceHolder}>
    
        <div className= {classes.labels}>   
        {props.focusInput ?
            <span className={classes.principaLabel}>{props.label}</span>
            :  <span className={classes.principaLabel}></span>
        }
           
        </div>  
    <input onKeyDown={props.handleKeyDown} value={props.value} placeholder={props.placeHolder} width ={props.width} height={props.height} className= {classes.placeHolder} type ={props.type} onChange={props.onChange}/>
    <div className={classes.alternativeLabels}><span className={classes.alternativeLabel}>{props.alternativeLabel}</span></div>
    
    </div>
    </div>;
}

const useStyles = makeStyles(theme => ({

  
   contentPlaceHolder: {
          width:'100%',
          display:'flex',
          flexDirection:'column'

    },

    labels:{
        display:'flex',
        flexDirection: 'row',
        flexWrap:'no-wrap',
        alignContent:'center',
        alignItems:'center',
        width:'412px',
    },

    principaLabel:{
        fontFamily: 'Poppins',
        fontSize:'12px',
        color:'#070707',
        fontWeight: 600,
        position: 'fixed',
    },

    alternativeLabels:{
        display:'flex',
        flexDirection: 'row',
        flexWrap:'no-wrap',
        justifyContent:'flex-end',
        alignContent:'flex-start',
        alignItems:'flex-start',
        width:'412px',
        marginTop:'20px',
    },

    alternativeLabel:{

        alignSelf:'flex-end',
        fontFamily: 'Open Sans',
        fontSize:'12px',
        color:'#525252',
        fontWeight: 400,
    },

    placeHolder:{
        marginTop:'18px',
        width: (props) => `${props.width}`,
        height: (props) => `${props.height}`,
        background: '#F8F8F8',
        border: '1px solid #C7C7C7',
        borderRadius: '15px',
        outline:'none',
        textIndent: '10px',
        fontFamily: 'Poppins',
        fontWeight: 400,
        color:'#070707',
    }

}));


export default PlaceHolder;