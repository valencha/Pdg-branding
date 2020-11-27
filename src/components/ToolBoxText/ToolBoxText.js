import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function ToolBoxText(props){
    const classes = useStyles();
    return (
        <div className={classes.body}>
            <Button className={classes.btnTool}> <div className={classes.contentBtn}><img src='/images/move.svg'alt="move" width='10px' /></div> </Button>
            <Button className={classes.btnTool}> <div className={classes.contentBtn}><img src='/images/mouse-pointer.svg'alt="mouse" width='24px' /></div> </Button>
            <Button className={classes.btnTool} onClick={props.handleCreateNotes} > <div className={classes.contentBtn}><img src='/images/square.svg'alt="textArea" width='24px' /></div> </Button>
            <Button className={classes.btnTool} onClick={props.handleSaveF}> <div className={classes.contentBtn}><img src='/images/upload.svg'alt="upload" width='24px' /></div> </Button>
          
        </div>
      );
    }
    const useStyles = makeStyles(theme => ({
        body:{
            width:'48px',
            borderRadius:'15px',
            backgroundColor:'#ffff',
            boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',
            height:'184px',
            display:'flex',   
            flexDirection:'column',
            justifyContent:'space-around',
            alignItems:'center',    
            alignContent:'center',
        },

        btnTool:{
        marginTop:'2px',
        display:'flex',
        width:'auto',
        height:'auto',
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center',

        '&:hover':{
            backgroundColor: 'transparent',
        }
    },

        contentBtn:{
        display:'flex',
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center',
  
        },
        toolBottom:{
        marginTop:'68px',
        }
        
    }));
    
    export default ToolBoxText;
    
    