import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function BtnOutlinedSkip(props){

    const classes = useStyles({marginRight: `${props.marginRight}`, width: `${props.width}`, height: `${props.height}`, marginTop:`${props.marginTop}`});

    return <div>
    
        
        <button onClick={props.onClick}width ={props.width} height={props.height} className={classes.btn}>{props.content}</button>
    
    </div>;
}

const useStyles = makeStyles(theme => ({

  
    btn: {
          width: (props) => `${props.width}`,
          height: (props) => `${props.height}`,
          marginTop: (props) => `${props.marginTop}`,
          marginRight: (props) => `${props.marginRight}`,
          cursor:'pointer',
          textTransform: 'none',
          fontFamily: 'Poppins',
          fontSize:'16px',
          color:'#7A76FF',
          backgroundColor: '#FAFAFA',
          border: '1px solid #7A76FF',
          boxSizing: 'border-box',
          outline:'none',
          borderRadius: '15px',
          fontWeight:600,
          boxShadow:' 2px 8px 16px rgba(61, 62, 66, 0.1)',  
  
          '&: hover':{
              backgroundColor: 'transparent',
          }

    },

}));


export default BtnOutlinedSkip; 