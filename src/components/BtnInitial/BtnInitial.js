import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function BtnInitial(props){

    const classes = useStyles({ width: `${props.width}`, height: `${props.height}`, marginTop:`${props.marginTop}`,marginRight:`${props.marginRight}`});

    return <div>
    
        
        <button onClick={props.onClick}width ={props.width} height={props.height}className={classes.btn}>{props.content}</button>
    
    </div>;
}

const useStyles = makeStyles(theme => ({

  
    btn: {
          fontFamily: 'Poppins',
          background: '#7A76FF',
          width: (props) => `${props.width}`,
          height: (props) => `${props.height}`,
          marginTop: (props) => `${props.marginTop}`,
          marginRight: (props) => `${props.marginRight}`,
          borderRadius: 15,
          border: 0,
          cursor:'pointer',
          color: 'white',
          padding: '0 30px',
          fontWeight: 600,
          fontSize: 16,
          outline:'none',
          '&:hover':{

          }

    },

}));


export default BtnInitial;