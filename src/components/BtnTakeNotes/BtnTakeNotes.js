import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function BtnTakeNotes(props){

    const classes = useStyles({marginRight: `${props.marginRight}`, width: `${props.width}`, height: `${props.height}`, marginTop:`${props.marginTop}`});

    return <div>
    
        
        <button onClick={props.onClick}width ={props.width} height={props.height} className={classes.btn}> <img className ={classes.iconEdit} alt='edit'  src={('/images/edit.svg')}/>{props.content}</button>
    
    </div>;
}

const useStyles = makeStyles(theme => ({

  
    btn: {
        width: (props) => `${props.width}`,
        height: (props) => `${props.height}`,
        marginTop: (props) => `${props.marginTop}`,
        marginRight: (props) => `${props.marginRight}`,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        cursor:'pointer',
        textTransform: 'none',
        fontFamily: 'Poppins',
        fontSize:'16px',
        color:'#686B6E',
        paddingRight:'19px',
        paddingLeft:'19px',
        paddingTop:'12px',
        paddingBottom:'12px',
        border:'none',
        backgroundColor: '#FFFFFF',
        boxSizing: 'border-box',
        outline:'none',
        borderRadius: '15px',
        fontWeight:600,
        boxShadow:' 2px 8px 16px rgba(61, 62, 66, 0.1)',  
  
        '&: hover':{
            backgroundColor: 'transparent',
        }

    },

    iconEdit:{
        marginRight:'5px'
    }

}));


export default BtnTakeNotes; 