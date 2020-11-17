import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { Card } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';





function Step(props){

    const classes = useStyles({ urlBack:'/images/Ellipse.svg'});

    let history = useHistory();

    const ColorCircularProgress = withStyles({
        root: {
            width:400,
            color: '#5975FF',

          '& > bottom': {
            color:'#7A76FF',
            fontSize:25,
            width:400,
        },
 
        },
        circleStatic: {
            color: '#5975FF',
            width:400,
        },


          circle: {
            strokeLinecap: 'round',
            width:400,
           
          },
        
      })(CircularProgress);
  
 

      function handleClickProject(){
            history.push(props.urlNext);
            console.log(props.urlNext);
      }


    return <div className={classes.body}  onClick={handleClickProject}>
    

        <Card className={ `${props.active ? classes.card : classes.cardInactive}`} >
     
            <h1 className={ `${props.active ? classes.titleProject : classes.titleInactive}`}>{props.title}</h1>
            <img src={props.urlImage} alt="img" width='114px' className={classes.imgStep}/>
 
        <div className={classes.contentBottom}>
 
            <Box position="relative" display="inline-flex">
            <ColorCircularProgress variant="static" value={props.percent} className={classes.bottom}/>
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
            <Typography variant="caption" className={classes.text}component="div">{`${Math.round(
            props.percent,
            )}%`}</Typography>
            </Box>
            </Box>
        
        </div>
        </Card>
     
    </div>;
}

const useStyles = makeStyles(theme => ({
    body:{
        marginTop:'5px',
        display:'flex',
    },

    card:{
        width:'163px',
        height:'300px',
        cursor:'pointer',
        background:'#ffff',
        boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',
        borderRadius: '20px',
        display:'flex',
        paddingBottom:'20px',
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center',
        marginRight:'28px',
        justifyContent:'space-between',

    },

    cardInactive:{
        width:'163px',
        height:'300px',
        cursor:'pointer',
        background:'#F5F5F5',
        boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',
        borderRadius: '20px',
        display:'flex',
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center',
        paddingBottom:'20px',
        marginRight:'28px',
        justifyContent:'space-between',


    },

    titleProject:{
        fontFamily:'Poppins',
        color:'#212429',
        fontSize:'16px',
        fontWeight:500,
        marginTop:20,
        width:150,
        textAlign:'center'

    },


    titleInactive:{
        fontFamily:'Poppins',
        color:'#CCCCCC',
        fontSize:'16px',
        fontWeight:500,
        width:150,
        marginTop:20,
        textAlign:'center'

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

    imgStep:{
        padding:'10px'
    },

    contentBottom:{
        height:'auto',
    }
  

}));


export default Step;