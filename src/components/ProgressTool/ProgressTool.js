import React from 'react';
import { makeStyles,withStyles  } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

function ProgressTool(props){

    const classes = useStyles();

    const BorderLinearProgress = withStyles((theme) => ({
        root: {
            marginTop:'24px',
          height: 10,
          width:'852px',
          borderRadius: 15,
        },
        colorPrimary: {
          backgroundColor: '#DDE2E5',
        },
        bar: {
          borderRadius: 15,
          backgroundColor: '#5975FF',
        },
      }))(LinearProgress);
      
    

    return (
        <div className={props.className}>
            <div className={classes.body}>
            <h1 className={classes.title}>{props.titleStep} <span className={classes.caption}>- Paso <span className={classes.numStep}>{props.numStep} </span>de {props.numTotalStep}</span></h1>

                <div className={classes.lineProgress}>
                   
                <img className ={classes.skip} alt='skip'  src={('/images/skipStep.svg')} onClick={props.onClick}/>
                
                
                <div className={classes.contentProgress}>
                    <BorderLinearProgress variant="determinate" value={props.value} />
                 
                </div>
                </div>
                
                
            </div>
            
            
      </div>
      );
}
const useStyles = makeStyles(theme => ({
    body:{
        width:'954px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',

        },
        skip:{
           
            cursor:'pointer'
        },

        contentProgress:{
            width:'852px',   
            display:'flex',
            flexWrap:'no-wrap',
            flexDirection:'column',
            alignItems:'center',
            alignContent:'center',
        },
        line:{
            marginTop:'24px',
        },

        title:{
        fontFamily:'Poppins',
        fontWeight:600,
        color:'#495057',
    },
    caption:{
        fontFamily:'Poppins',
        fontWeight:500,
        color:'#495057',
       
    },

    numStep:{
        fontWeight:700,
    },

    lineProgress:{
        display:'flex', 
        alignContent:'center',

    },
    linear:{
        height: 10,
        width:'852px',
        borderRadius:'15px',
        background:'#DDE2E5',
        stroke:'#5975FF'
    }

}));

export default ProgressTool; 