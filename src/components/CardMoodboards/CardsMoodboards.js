import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { Card, Dialog } from '@material-ui/core';



function CardMoodboards(props){

    const classes = useStyles({ urlBanner: `${props.url}`, urlBack: `${props.url}`});
    let history = useHistory();
    
      
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
function handleClose2 (event){
    setOpen(false);
}

    return <div className={classes.body}  onClick={handleOpen}>
        


        <Dialog open={open} onClose={handleClose}   >
        <img src={props.url} alt="watch" width='224px' />
       
     
        <img src='/images/x.svg' alt='icon' onClick={handleClose} className={classes.iconBtn} />
        <img onClick={props.onClick}className={classes.iconDedo}src={'images/thumbs.svg'} alt="watch" width='16px' />
        <h1>{props.valoraciones}</h1>
            
 
        </Dialog>
    

        <Card className={classes.card}>
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
        marginTop:'52px',
    },
    progress:{
        width:55,
        height:55,
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

    dateProject:{
        fontFamily:'Poppins',
        color:'#CCCCCC',
        fontSize:'12px',
        fontWeight:400,
        marginTop:'9px',
        
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
    }


}));


export default CardMoodboards;