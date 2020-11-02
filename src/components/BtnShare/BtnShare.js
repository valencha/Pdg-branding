import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function BtnShare(props){

    const classes = useStyles();

    return (
        <div className={props.className}>
            <button className={classes.btnShare}>Compartir</button>
            
      </div>
      );
}
const useStyles = makeStyles(theme => ({
    btnShare:{
        backgroundColor: '#FF6B6C',
        borderRadius:'15px',
        width:'145px',  
        color:'#F8F9FA',
        border:'none',
        height:'48px',
        fontFamily:'Poppins',
        fontSize:'16px',
        cursor:'pointer',
        paddingLeft:'28px',
        outline:'none',
        paddingRight:'28px',

    },


}));

export default BtnShare; 