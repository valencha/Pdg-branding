import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card} from '@material-ui/core';
import 'react-circular-progressbar/dist/styles.css';




function CardMediaS(props){
  
    const classes = useStyles({ urlIcon: '/images/checked.svg'});
    

   
  

    return <Card className={classes.containCheckBox}>
 
        <img src={`${props.url}`} alt='media'width="60px" height="auto" className={classes.img}/>

        <img src={'/images/trash.svg'} alt='media'width="20px" height="auto" className={classes.imgTrash} onClick={props.onClick}/>
       
       </Card>;
}

const useStyles = makeStyles(theme => ({




    containCheckBox:{
        width:'92px',
        height:'116px',
        backgroundColor:'#ffff',
        boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'no-wrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        margin:'3px',
      

        '&:hover': {
            backgroundColor: '#FFD984',
        },

    },  


    imgTrash:{

    cursor:'pointer',
    marginTop:'4px',
    },

    img:{
        borderRadius:15,
        cursor:'pointer',
        },



}));



export default CardMediaS;