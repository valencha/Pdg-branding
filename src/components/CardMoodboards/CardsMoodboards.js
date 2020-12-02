import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { Card, Dialog } from '@material-ui/core';
import BtnInitial from '../BtnInitial/BtnInitial';



function CardMoodboards(props){

    const classes = useStyles({ urlBanner: `${props.url}`, urlBack: `${props.url}`});

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
   

    

    return <div className={classes.body}  >
        
        <Dialog open={open}  fullScreen
        onClose={handleClose}
        BackdropProps={{
        classes: {
         root: classes.root2
        }
       }
      }aria-labelledby="form-dialog-title" classes={{paper:classes.dialog, root: classes.dialog}}>
        <div className={classes.containImg}>
            <div className={classes.iconBtn}>   <img src='/images/x.svg' alt='icon' onClick={handleClose}  /></div>
            <div className={classes.containerInfo} >
            <div><img className={classes.imgDialog} src={props.url} alt="watch" width='900px' /></div>
            <div className={classes.containValue}>
            <div className={classes.info}>
                <div>
                    <h1 className={classes.title}>{props.titleProject}</h1>
                    <span className={classes.owners}>{props.users}</span>
                </div>
                <div>
                    <p className={classes.des}>{props.description}</p>
                </div>
            </div>
            
            <div>
                <div className={classes.actions}>
                <img className={classes.iconDedo}src={'images/seguir.svg'} alt="watch" width='58px' />
                <img onClick={props.onClick}className={classes.iconDedo}src={'images/valorar.svg'} alt="watch" width='58px' />
                    
                </div>
                <div className={classes.comentarios}>
     
                    {props.comentarios.map((item,i)=>
                    <div className={classes.comment} key={i}>      
                    <h1 className={classes.name}>{item.nombre}</h1>
                    <h1 className={classes.decComentario}>{item.comentario}</h1>
                    </div>
 
                    )

                    }
 
                </div>
               <div className={classes.addComentario}>
                <input placeholder='Retroalimenta este proyecto...' className={classes.input}onChange={props.onChange} type='text'/>
                <div className={classes.btnSend}>
                    <BtnInitial width='117px' height='48px' content='Enviar'onClick={props.onSend}/>
                </div>
                
                </div>


                </div>
            
   
      
            </div>
            </div>
      </div>
        </Dialog>
     

       

        <Card className={classes.card} onClick={handleClickOpen}>
        <div className={classes.contentTop}> 

   
        </div>
        <img className={classes.divisor}src={'images/lineCard.svg'} alt="watch" width='224px' />
        <div className={classes.contentBottom}>
 
            <div>    
                <h1 className={classes.titleProject}>{props.titleProject}</h1>
                <p className={classes.dateProject}>{props.users}</p>
            </div>   
        
        
        </div>
        </Card>
        <div className={classes.containerValoraciones}>
        <img className={classes.iconDedo}src={'images/thumbs.svg'} alt="watch" width='16px' />
        <p className={classes.valoraciones}><span className={classes.valoracionesSpan}>{props.valoraciones}</span> valoraciones</p>
        </div>
     
    </div>;
}

const useStyles = makeStyles(theme => ({
    body:{
    },
    dialog:{
        background:'transparent',
        padding:'10px',
        display:'flex',
        boxShadow: "none",
        overflow: "hidden",
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
     
    },

    root2: {
        backgroundColor: 'rgba(33,36,41,0.8)',
        opacity:75,
        
        flexDirection:'column',
       

      },
    card:{
        width:'224px',
        height:'233px',
        cursor:'pointer',
        background:'#ffff',
        border:'1px solid #DDE2E5',
        boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',
        borderRadius: '20px',
        display:'flex',
        flexDirection:'column',
        alignContent:'center',
        marginRight:'30px',
        justifyContent:'center',

    },
    containValue:{
        display:'flex',
        flexDirection:'column',
        marginLeft:'20px'   

    },

    contentTop:{
        display:'flex',
        backgroundImage: (props) => `url(${props.urlBanner})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        width:'224px',
        height:'159px',
        flexDirection:'column',
        alignSelf:'center',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
      
    },
    
    contentBottom:{
        
        padding:'14px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        

    },
    divisor:{
        marginTop:'10px'
    },

    titleProject:{
        fontFamily:'Poppins',
        color:'#212429',
        fontSize:'16px',

    },
    containerInfo:{
        display:'flex',
        flexDirection:'row'

    },


    dateProject:{
        fontFamily:'Poppins',
        color:'#CCCCCC',
        fontSize:'12px',
        fontWeight:400,
        marginTop:'9px',
        
    },
    info:{
        background: '#FFFFFF',
        boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.42)',
        borderRadius: '15px',
        width:'360px',
        height:'90px',
        padding:'25px'
    },

    root: {
        display: 'flex',    
        '& > svg': {
           colorPrimary:'#5975FF',
        },
    },  

    text:{
        fontFamily:'Poppins',
        color:'#495057',
        fontWeight:700,
        fontSize:'11px',
    },
    bottom:{
        backgroundImage: (props) => `url(${props.urlBack})`,
        backgroundSize:'contain',
        
    },
    containerValoraciones:{
        display:'flex',
        flexDirection:'row',
        marginTop:'8px',
        justifyContent:'flex-start',
        alignContent:'center',
        alignItems:'center',
        height:'16px',
    },
    valoraciones:{
        fontFamily:'Poppins',
        fontSize:'12px'
    },
    valoracionesSpan:{
        fontFamily:'Poppins',
        fontSize:'12px',
        fontWeight:600
    },
    iconDedo:{
        marginRight:'8px'
    },
    iconBtn:{
        display:'flex',
        cursor:'pointer',
        alignSelf:'flex-end',    
        
    
    },
    containImg:{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        height:'100%'
    },

    imgDialog:{
        borderRadius:15
    },
    title:{
        fontFamily:'Poppins',
        fontWeight:500,
        color:'#212429'
    },
    owners:{
        fontFamily:'Poppins',
        fontWeight:400,
        color:'#495057'
    },
    des:{
        fontFamily:'Poppins',
        fontWeight:300,
        color:'#212429',
        marginTop:'10px'
    },
    input:{
        width:'100%',
        height:'100px',
        background: '#F4F6F8',
        border: '1px solid #DDE2E5',
        boxSizing: 'border-box',
        borderRadius: '15px',
    },
    addComentario:{
        display:'flex',
        flexDirection:'column',
        marginTop:'5px'
    },
    btnSend:{
        alignSelf:'flex-end',
        marginTop:'20px'
    },
    comentarios:{
        display:'flex',
        flexDirection:'column',
        width:'360px',
        height:'180px',
        background:'#F3F7FB',
        borderRadius:'15px',
        padding:'20px',
        overflow:'true'
    },

    name:{
        fontFamily:'Poppins',
        fontWeight:500,
        color:'#212429',
        fontSize:'14px'

    },
    decComentario:{
        fontFamily:'Poppins',
        fontWeight:300,
        color:'#212429',
        fontSize:'12px'
    },
    comment:{
        marginTop:'10px'
    }

}));


export default CardMoodboards;