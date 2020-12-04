import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';


function DialogSentidos(props){

    const classes = useStyles({ urlBanner: 'images/imgDefaultProject.svg', urlBack:'images/Ellipse.svg'});

  

    return <div className={classes.body}>
        <Dialog classes={{paper: classes.paper}}  onClose={props.handleOpen} aria-labelledby="simple-dialog-title" open={props.open}>
            <div className={classes.content}>
                <div className={classes.contentClose}>
                    <img className={classes.closeDialog} width='24px' src={('/images/close.svg')} onClick={() => props.handleClose()} alt="close" />
                </div>
                <div className={classes.contentText}>

                <img  style={{marginLeft:'40px'}}width='100%' src={props.url}  alt="close" />
                </div>
                <button onClick={props.handleClose} className={classes.btn}>Entendido <img className ={classes.icon} alt='arrow'  src={('/images/checked.svg')} /> </button>
               
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
        height:401,
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
    height:401,
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
    width:'500px',
    height:'60%',
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
        marginTop:10,
        marginRight:'26px',
        alignSelf:'flex-end',
        width:'149px',
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
        marginTop:'15px',
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
        textAlign:'center',
    },
    textB:{
        fontFamily:'Poppins',
        fontWeight:700,
        fontSize:'21px',
        lineHeight:'24px'
    },
    containText:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        marginTop:'50px',
    }


}));


export default DialogSentidos;