import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Dialog} from '@material-ui/core';
import ReactPlayer from 'react-player'



function CardGeneralvideo(props){
  
    const classes = useStyles({ urlIcon: '/images/checked.svg'});
   
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return <Card className= {classes.imgS} >

        <img src={`${props.url}`} alt='media'width="100px" height="auto" className={classes.img} onClick={handleClickOpen}   />
        <Dialog open={open} onClose={handleClose}    
        BackdropProps={{
        classes: {
         root: classes.root
        }
       }
      }aria-labelledby="form-dialog-title" classes={{paper:classes.dialog, root: classes.dialog}}>
        <div className={classes.containImg}>
        <ReactPlayer
          url={props.video}
          playing
          controls
          width='516px'
          height='400px'
        />
      </div>

      <img src='/images/x.svg' alt='icon' onClick={handleClose} className={classes.iconBtn} />
        </Dialog>
     
    </Card>;
}

const useStyles = makeStyles(theme => ({
    imgS:{
        width:'92px',
        height:'92px',
        borderRadius:'15px',
        cursor:'pointer'
      },

    img:{
    borderRadius:15
    },

    containImg:{
        backgroundColor:'transparent'
    },
    tools:{
        backgroundColor:'transparent',
        display:'flex',
        width:'100%',
        justifyContent:'center',
        marginTop:'24px',

    },
    dialog:{
        backgroundColor:'transparent',
        display:'flex',
        boxShadow: "none",
        overflow: "hidden",
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'flex-start',
        alignItems:'flex-start',

    },
    iconZoom:{
        marginRight:'24px',
        cursor:'pointer',
    },
    root: {
        backgroundColor: 'rgba(33,36,41,0.8)',
        opacity:75,
      },

    iconZoomIn:{
        cursor:'pointer',
    },

    iconBtn:{
        cursor:'pointer'
    }




}));



export default CardGeneralvideo;