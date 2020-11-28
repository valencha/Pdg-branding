import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import BtnOutlinedSkip from '../BtnOutlinedSkip/BtnOutlinedSkip';


function DialogShare(props){

    const classes = useStyles({ urlBanner: 'images/imgDefaultProject.svg', urlBack:'images/Ellipse.svg'});

  

    return <div className={classes.body}>
        <Dialog classes={{paper: classes.paper}}  onClose={props.handleOpen} aria-labelledby="simple-dialog-title" open={props.open}>
            <div className={classes.content}>
                <div className={classes.contentClose}>
                    <img className={classes.closeDialog} width='24px' src={('/images/close.svg')} onClick={() => props.handleClose()} alt="close" />
                </div>
                <div className={classes.contentText}>
                    <h1  className={classes.textHeader}>
                    Escribe una descripción del moodboard en forma
                    <span className={classes.textB}> breve</span>
                    </h1>
                </div>
                <div className={classes.containText}>
                <input className={classes.inputText} type='text' value={props.description} onChange={props.onChange} placeholder='Escribe una descripción...'/>
               
                </div>
              
                <div className={classes.btns}>
                <BtnOutlinedSkip content='Cancelar' onClick={props.handleClose} width='112px' height='48px'/>
                <button onClick={props.onClick}  className={classes.btn}>Crear</button>
                </div>
            </div>
            
           
        </Dialog>
       
    </div>;
}

const useStyles = makeStyles(theme => ({
    body:{
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        
     
    },
    content:{
        width:530,
        height:338,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius: 15,
    },
    paper:{
    width:530,
    height:338,
    borderRadius: 15,
    backgroundColor:'transparent',
    boxShadow: 'none',
    },
    contentText:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    paddingLeft:'40px',
    paddingTop:'10px'
    },

    closeDialog:{
      marginRight:'26px',
      marginTop:'21px',
      cursor:'pointer',
    },
    contentClose:{
        width:'100%',
        display:'flex',
        justifyContent:'flex-end',
    },
    light:{
        marginRight:'8px',
    },
    btn:{
        display:'flex',
        marginLeft:'26px',
        alignSelf:'flex-end',
        width:'112px',
        height:'48px',
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
    },
    icon:{
        marginLeft:'5px',
    },
    imgLogro:{
        
    },
    text:{
        fontFamily:'Poppins',
        fontWeight:400,
        fontSize:'16px',
        lineHeight:'24px'
    },
    textHeader:{
        fontFamily:'Poppins',
        fontWeight:500,
        fontSize:'21px',
        lineHeight:'24px',
    },
    textB:{
        fontFamily:'Poppins',
        fontWeight:700,
        fontSize:'21px',
        lineHeight:'24px'
    },
    containText:{
        alignSelf:'center',
        marginTop:'20px'

    },
    btns:{
        display:'flex',
        flexDirection:'row',
        width:'80%',
        marginTop:'35px',
        justifyContent:'flex-end',
        alignItems:'center',
        alignContent:'center',
    },


    inputText:{
        width:'422px',
        height:'100px',
        background:'#F4F6F8',
        alignSelf:'flex-start',
        border: '1px solid #DDE2E5',
        borderRadius: '15px',
        outline:'none',
        textIndent:'4px',
        fontFamily:'Poppins',
        alignItems:'flex-start'
    },



}));


export default DialogShare;