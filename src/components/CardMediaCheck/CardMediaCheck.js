import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox,Card, Dialog} from '@material-ui/core';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import clsx from "clsx";


function CardMediaCheck(props){
  
    const classes = useStyles({ urlIcon: '/images/checked.svg'});
   
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
   
     const onChange=(e)=>{
        props.onChange(e)
    
     }
        
   

    return <Card className= {props.select ? classes.cardYellow : classes.containCheckBox} >

        <img src={`${props.url}`} alt='media'width="100px" height="auto" className={classes.img} onClick={handleClickOpen}   />
        <Dialog open={open} onClose={handleClose}    
        BackdropProps={{
        classes: {
         root: classes.root
        }
       }
      }aria-labelledby="form-dialog-title" classes={{paper:classes.dialog, root: classes.dialog}}>
        <div className={classes.containImg}>
        <TransformWrapper 
        defaultScale={1}
        defaultPositionX={200}
        defaultPositionY={100}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>     
            <TransformComponent>
              <img src={`${props.url}`}  alt='icon' width="516px" />
            </TransformComponent>
            <div className={classes.tools}>
                <img src='/images/zoom-out.svg' alt='icon'className={classes.iconZoom}  onClick={zoomOut}/>
                <img src='/images/zoom-in.svg' alt='icon'className={classes.iconZoomIn}   onClick={zoomIn}/>
            </div>
          </React.Fragment>
        )}
      </TransformWrapper>
      </div>

      <img src='/images/x.svg' alt='icon' onClick={handleClose} className={classes.iconBtn} />
        </Dialog>

            <Checkbox
            onChange = {onChange}
            checked={props.select ? props.select : false}
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            color='primary'

            classes={{
                root: classes.checkBox,
                
               
            }}
       
            name="checkedF"
            />
            
       
            </Card>;
}

const useStyles = makeStyles(theme => ({

    cardYellow:{
        width:'156px',
        height:'180px',
        cursor:'pointer',
        background:'#FFD984',
        backgroundPosition: 'right 28px bottom 80px',
        backgroundSize: '167px',
        backgroundRepeat:'no-repeat',
        backgroundColor:'#FFD984',
        boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'no-wrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft:'7px',
        border: '1px solid #FFB600',
        '&:hover': {
            backgroundColor: '#FFD984',
        },

    },



    containCheckBox:{
        width:'156px',
        height:'180px',
        cursor:'pointer',
        backgroundImage: (props) => `url(${props.urlImage})`,
        backgroundPosition: 'right 28px bottom 80px',
        backgroundSize: '167px',
        backgroundRepeat:'no-repeat',
        backgroundColor:'#ffff',
        boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'no-wrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft:'7px',
      

        '&:hover': {
            backgroundColor: '#FFD984',
        },

    },  

    checkBox:{
        color:'#DDE2E5',
        stroke:'10px',
        fontFamily:'Open Sans',
        '&:hover': {
            backgroundColor: 'transparent',
          },
        "&:after": {
            backgroundColor: "gray"
        },

    },
    icon:{
    borderRadius: 4,
    border: '1px solid #DDE2E5',
    width: 28,
    height: 28,
    backgroundColor: "white",
    '&:hover': {
        backgroundColor: 'transparent',
      },

    },
    img:{
    borderRadius:15
    },

    checkedIcon: {
        backgroundColor: "#7A76FF",
        border: 'none',
        width: 28,
        height: 28,
        backgroundImage: (props) => `url(${props.urlIcon})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition: 'center',
        '&:hover': {
            backgroundColor: 'black',
          },


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



export default CardMediaCheck;