import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';


function DialogVista(props){

    const classes = useStyles({ urlBanner: 'images/imgDefaultProject.svg', urlBack:'images/Ellipse.svg'});

  

    return <div className={classes.body}>
        <Dialog classes={{paper: classes.paper}}  onClose={props.handleOpenVista} aria-labelledby="simple-dialog-title" open={props.openVista}>
            <div className={classes.content}>
                <div className={classes.contentClose}>
                    <img className={classes.closeDialog} width='24px' src={('/images/close.svg')} onClick={() => props.handleCloseVista()} alt="close" />
                </div>
                <div className={classes.contentText}>
                    <h1  className={classes.textHeader}>
                    <span className={classes.textB}>¡Felicitaciones! </span>Has agregado tres recursos con interpreción en el sentido de <span className={classes.textB}>vista</span>  
                    </h1>
                <div className={classes.containText}>
                <p className={classes.text}>Has obtenido el logro de:</p>
                <img className={classes.imgLogro} width='222px' src={('/images/vistaLogro.svg')} alt="logro" />

                </div>
              
                </div>
                <button onClick={props.handleCloseVista} className={classes.btn}>Continuar  <img className ={classes.icon} alt='arrow'  src={('/images/arrow.svg')} /> </button>
               
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


export default DialogVista;