import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function BtnStep(props){

    const classes = useStyles({marginRight: `${props.marginRight}`, width: `${props.width}`, height: `${props.height}`, marginTop:`${props.marginTop}`});

    return <div>


    <Button disabled={props.disabled}   onClick={props.onClick} width ={props.width} height={props.height}   classes={{
                root: classes.btn,
                disabled: classes.disabled
            }}>  {props.content} {!props.disabled ?
                <img className ={classes.icon} alt='arrow'  src={('/images/arrow.svg')}/>:<img className ={classes.icon} alt='arrow'  src={('/images/arrowGrey.svg')}/>
            }
    </Button>
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
          alignContent:'center',
          alignItems:'center',
          cursor:'pointer',
          textTransform: 'none',
          fontFamily: 'Poppins',
          fontSize:'16px',
          color:'#FAFAFA',
          backgroundColor: '#7A76FF',
          border: '1px solid #7A76FF',
          boxSizing: 'border-box',
          outline:'none',
          borderRadius: '15px',
          fontWeight:600,
          boxShadow:' 2px 8px 16px rgba(61, 62, 66, 0.1)',  

        '&:hover':{
            backgroundColor: '#7A76FF',
        }
  

    },
    icon:{
        marginLeft:'5px'
    },

    disabled: {
        backgroundColor: '#DDE2E5',
        color:'#B3B1B1',
        border: 'none',
    }

}));


export default BtnStep; 