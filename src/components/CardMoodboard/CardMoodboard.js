import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



function CardMoodboard(props){
  
    const classes = useStyles({ urlIcon: '/images/checked.svg'});
   
    return <div className={classes.containVistaItem}>
        <div className={classes.containImg}> <img src={props.url} width='92px' alt='media'className={classes.imgS}/> </div>                     
        <input onChange={props.onChange} className={classes.containInput} value={props.content} type='text'/>  
    </div>;
}

const useStyles = makeStyles(theme => ({
    imgS:{
        width:'92px',
        height:'92px',
        borderRadius:'15px',
        cursor:'pointer'
    },
    containVistaItem:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        alignContent:'center',
        backgroundColor:'transparent'
    },
    containInput:{

        width: '106px',
        height: '32px',
        marginTop:'3px',
        borderRadius:'5px',
        boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.105)',
        border: '1px solid #DDE2E5',

    },

    img:{
    borderRadius:15
    },

    containImg:{
        backgroundColor:'transparent'
    },
    tools:{
        backgroundColor:'transparent',
        display:'flex',
        width:'100%',
        justifyContent:'center',
        marginTop:'24px',

    },

    root: {
        backgroundColor: 'rgba(33,36,41,0.8)',
        opacity:75,
      },

    iconZoomIn:{
        cursor:'pointer',
    },

    iconBtn:{
        cursor:'pointer'
    }




}));



export default CardMoodboard;