import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


function BtnYellowG(props){

    const classes = useStyles({marginRight: `${props.marginRight}`, marginTop:`${props.marginTop}`});
    let select= props.checked;
    
    const onClick=(e)=>{
        props.onClick(e);

     }

    return <button onClick={onClick}  className={select ? classes.btnOptionYellow:classes.btnOption }>{props.content}</button>;
}

const useStyles = makeStyles(theme => ({

    btnOptionYellow:{
        fontWeight:600,
        backgroundColor:'#FFD984',
        color:'#212429',
        fontSize:'14px',
        width:'118px',
        paddingLeft:'20px',
        paddingRight:'20px',
        height:'46px',
        marginTop:'5px',
        borderRadius:'20px',
        fontFamily:'Poppins',
        border:'none',
        outline:'none',
        cursor:'pointer',
      },

      btnOption:{
        width:'118px',
        height:'46px',
        color:'#CCCCCC',
        fontSize:'14px',
        fontFamily:'Poppins',
        border:'none',
        background:'none',
        outline:'none',
        cursor:'pointer',
        marginTop:'5px',
        fontWeight:600,
       
      },    

}));


export default BtnYellowG; 