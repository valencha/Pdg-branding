import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function LateralBar(props){
    const classes = useStyles();
    return (
        <div className={classes.body}>
            <Button className={classes.btnToolPrincipal}> <div className={classes.contentBtn}><img src='/images/Home.svg'alt="home" width='20px' /><span className={classes.btnSpan}>Inicio</span> </div> </Button>
            <Button className={classes.btnTool}> <div className={classes.contentBtn}><img src='/images/flag.svg'alt="progress" width='20px' /><span className={classes.btnSpan}>Progreso</span> </div> </Button>
            <Button className={classes.btnTool}> <div className={classes.contentBtn}><img src='/images/file-text.svg'alt="progress" width='20px' /><span className={classes.btnSpan}>Notas</span> </div> </Button>
            <Button className={classes.btnTool}> <div className={classes.contentBtn}><img src='/images/help-circle.svg'alt="help" width='20px' /><span className={classes.btnSpan}>Ayuda</span> </div> </Button>

            <div className={classes.toolBottom}>  <Button className={classes.btnToolBottom}> <div className={classes.contentBtn}><img src='/images/log-out.svg'alt="log-out" width='20px' /></div> </Button></div>
          
        </div>
      );
    }
    const useStyles = makeStyles(theme => ({
        body:{
            width:'100px',
            borderRadius:'20px',
            backgroundColor:'#ffff',
            boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',
            height:'374px',
            marginLeft:'33px',
            marginTop:'89px',
            display:'flex',   
            flexDirection:'column',
            justifyContent:'flex-start',
            alignItems:'center',    
            alignContent:'center',
        },

        btnTool:{
        marginTop:'15px',
        display:'flex',
        width:'76px',
        height:'76px',
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center',
        borderRadius:'20px',
    },

        btnToolPrincipal:{
        marginTop:'20px',
        display:'flex',
        width:'76px',
        height:'76px',
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center',
        borderRadius:'20px',
    },

        btnToolBottom:{
        display:'flex',
        width:'76px',
        height:'76px',
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center',
        borderRadius:'20px',
        },
        btnSpan:{
        textTransform: 'capitalize',
        textDecoration:'none',
        fontFamily: 'Poppins',
        fontWeight:400,
        color: '#686B6E',
        },

        contentBtn:{
        display:'flex',
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center',
  
        },
        toolBottom:{
        marginTop:'17px',
        }
        
    }));
    
    export default LateralBar;
    
    