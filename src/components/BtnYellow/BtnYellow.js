import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


function BtnYellow(props){

    const classes = useStyles({marginRight: `${props.marginRight}`, marginTop:`${props.marginTop}`});
    let select= props.checked;
    
    const onClick=(e)=>{
        props.onClick(e);

     }

    return <button onClick={onClick}  className={select ? classes.btnClick:classes.btn }>{props.content}</button>;
}

const useStyles = makeStyles(theme => ({

  
    btn: {
        width: '149px',
        height: '48px',
        cursor:'pointer',
        textTransform: 'none',
        fontFamily: 'Poppins',
        fontSize:'16px',
        color:'#212429',
        marginRight:'74px',
        background: 'white',
        border: 'none',
        boxSizing: 'border-box',
        borderRadius: '15px',
        fontWeight:600,
        outline:'none',
        boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',

      '&:hover':{
          background: '#FFD984',
          outline:'none',
      },
          


  },

  btnClick: {
    width: '149px',
    height: '48px',
    cursor:'pointer',
    textTransform: 'none',
    fontFamily: 'Poppins',
    marginRight:'74px',   
    fontSize:'16px',
    color:'#212429',
    background: '#FFD984',
    border: '1px solid #FFB600',
    boxSizing: 'border-box',
    borderRadius: '15px',
    fontWeight:600,
    outline:'none',
    boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',


},

}));


export default BtnYellow; 