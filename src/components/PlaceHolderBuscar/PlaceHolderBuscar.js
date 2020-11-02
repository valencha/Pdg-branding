import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './PlaceHolderBuscar.css';


function PlaceHolderBuscar(props){

    const classes = useStyles();
    

    return <div className={props.className}>
    
    <div className={classes.contentPlaceHolder}>
   
    <input placeholder={props.placeHolder} className= {classes.placeHolder} type ={props.type} onChange={props.onChange}/>
    
    </div>
    </div>;
}

const useStyles = makeStyles(theme => ({

  
   contentPlaceHolder: {
          width:'100%',
          display:'flex',
          flexDirection:'column'

    },

    placeHolder:{
        width:'480px', 
        height:'48px',
        border:'none',
        background: '#F4F6F8',
        borderRadius: '20px',
        outline:'none',
        textIndent: '20px',
        fontFamily: 'Poppins',
        fontWeight: 400,
        color:'#070707',
    }

}));


export default PlaceHolderBuscar;