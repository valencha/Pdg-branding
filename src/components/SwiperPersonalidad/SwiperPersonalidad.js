import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Slider from 'react-grid-carousel';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function SwiperPersonalidad(props){

    const classes = useStyles({ width: `${props.width}`, height: `${props.height}`, marginTop:`${props.marginTop}`,  urlBack:'/images/ellipseBrief.svg'});
    const ColorCircularProgress = withStyles({
        root: {
          color: '#FCC949',
          width:'75px',
          height:'75px',

          '& > bottom': {
            color:'#FCC949',
            fontSize:25,
            width:'75px',
            height:'75px',
        },
 
        },
        circleStatic: {
            color: '#FCC949',
            width:'75px',
            height:'75px',
        },


        circle: {
            strokeLinecap: 'round',
            width:'75px',
            height:'75px',
        },
        
      })(CircularProgress);
  
     
    const MyDot = ({ isActive }) => (
        <span
          style={{
            display: 'inline-block',
            height: '10px',
            width: '10px',
            borderRadius:'10px',
            background: isActive ? '#7A76FF' : '#C4C4C4',
          }}
        ></span>
      )

    return <div className={classes.divContainer}>
         <div className={classes.containerRespuesta}>
        <Slider showDots={true} dot={MyDot} cols={3} rows={1} gap={props.gap} containerStyle={{display:'flex', justifyContent:'center', alignItems:'center', alignContent:'center', background: 'transparent',  width:'592px', height: '129px', margin: '0 auto'}} >
        
        {props.list.map((item, i) => 
       
             <Slider.Item  key={i}>
         
                <div className={classes.cardContent}>
                    <p className={classes.label}>{item.value}</p> 

             
                    <Box position="relative" display="inline-flex" >
                    <ColorCircularProgress variant="static" value={item.value2} size={75} className={classes.bottom}/>
                    <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"

                    >
                    <Typography variant="caption" className={classes.text} component="div">{`${Math.round(
                    `${item.value2}`,
                    )}%`}</Typography>
                    </Box>
                    </Box>

                </div>
         
             </Slider.Item>

            
        )}
        
        </Slider> 
        <div className={classes.containerTitleRespuesta}>
            <img alt='avatar'src={props.urlPersonalidad} width='155px'/>
        </div>          
        </div>
    
       
       
    </div>;
}
    
const useStyles = makeStyles(theme => ({

  
    divContainer:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        background: '#F3F7FB',
        borderRadius: '15px',
        width: '100%',
        height: '271px',
        marginTop: (props) => `${props.marginTop}`,
        
        
    },
    containerTitleRespuesta:{
        display:'flex',
        flexDirection:'row',
        alignSelf:'flex-start',
        marginLeft:'30px'

        
    },
    containerRespuesta:{
        display:'flex',
        marginTop:'15px',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        alignContent:'center',     

    },

    titleRespuesta:{
        fontFamily:'Poppins',
        flexWrap:'no-wrap',
        fontWeight:600,
        color:'#CCCCCC',
        marginTop:'12px',
        marginLeft:'12px',   
        fontSize:'12px',
        alignSelf:'flex-start',
    },
    cardContent:{
        width:'142px',
        height:'160px',
        padding:'5px',
        display:'flex',
        border: '1px solid #DDE2E5',
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        background: '#FFFFFF',            
        boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.105)',
        borderRadius: '15px',
    },
    img:{
        alignSelf:'center',
    },
    label:{
        marginTop:'3px',
        alignSelf:'center',
        fontFamily:'Poppins',
        fontWeight:600,
        color:'#212429',
        padding:'5px',
        textTransform:'capitalize',
        fontSize:'16px'
    },
    bottom:{
        backgroundImage: (props) => `url(${props.urlBack})`,
        backgroundSize:'contain',
        marginTop:'24px',
        
        
        
    },
    text:{
        fontFamily:'Poppins',
        color:'#495057',
        fontWeight:700,
        fontSize:'16px',
        marginTop:'24px'
    },

    circular:{
        width:'75px',
        height:'75px'
    }

}));


export default SwiperPersonalidad;