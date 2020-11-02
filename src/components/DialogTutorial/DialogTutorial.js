import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';


function DialogTutorial(props){

    const classes = useStyles({ urlBanner: 'images/imgDefaultProject.svg', urlBack:'images/Ellipse.svg'});
  

    return <div className={classes.body}>
        <Dialog classes={{paper: classes.paper}}  onClose={props.handleOpen} aria-labelledby="simple-dialog-title" open={props.open}>
            <div className={classes.content}>
                <div className={classes.contentClose}>
                    <img className={classes.closeDialog} width='24px' src={('/images/close.svg')} onClick={() => props.handleOpen()} alt="close" />
                </div>
                <div className={classes.contentText}>
                <img className={classes.light} width='24px' src={('/images/tutoriaLight.svg')} alt="light" />
                <p className={classes.text}>{props.text}{"\n"}Ejemplos: Honestidad, integridad, sostenible, asequible, lujo, orientados a los datos, servicio, sencillez, confianza, accesible para todos, etc.</p> 
                </div>
                <button onClick={props.handleOpen} className={classes.btn}>Entendido  <img className ={classes.icon} alt='arrow'  src={('/images/check.svg')} /> </button>
               
            </div>
            <img alt='arrow' className={classes.arrow}  src={('/images/arrowDown.svg')} />
           
        </Dialog>
       
    </div>;
}

const useStyles = makeStyles(theme => ({
    body:{
        display:'flex',
        justifyContent:'center',
       
     
    },
    content:{
        width:600,
        height:335,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius: 15,
    },
    paper:{
    width:800,
    height:375,
    borderRadius: 15,
    top:'80px',
    backgroundColor:'transparent',
    boxShadow: 'none',
    },
    contentText:{
    display:'flex',
    justifyContent:'center',
    alignContent:'flex-start',
    alignItems:'flex-start',
    width:'500px',
    height:'60%',
    },
    arrow:{
    position:'absolute',
    zIndex: 0,
    top:'333px',
    left:'260px',
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
    text:{
        fontFamily:'Poppins',
        fontWeight:300,
    }


}));


export default DialogTutorial;