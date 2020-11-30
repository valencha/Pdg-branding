import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { Card } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';





function CardProject(props){

    const classes = useStyles({ urlBanner: 'images/imgDefaultProject.svg', urlBack:'images/Ellipse.svg'});
    let history = useHistory();
    
    const ColorCircularProgress = withStyles({
        root: {
          color: '#5975FF',

          '& > bottom': {
            color:'#7A76FF',
            fontSize:25
        },
 
        },
        circleStatic: {
            color: '#5975FF',
          },


          circle: {
            strokeLinecap: 'round',
          },
        
      })(CircularProgress);
  
 

      function handleClickProject(){
        console.log(props.id);
        var idUrl = props.titleProject;
        var newUrl = idUrl.replace(/ /g,"")

        history.push('/dashboard/'+newUrl+'/'+props.id+'/main');
           
      }


    return <div className={classes.body}  onClick={handleClickProject}>
    

        <Card className={classes.card}>
        <div className={classes.contentTop}> 

        <img src={'images/defaultImageProject.svg'} alt="watch" width='136px' />
        <img className={classes.divisor}src={'images/lineCard.svg'} alt="watch" width='224px' />

        </div>
        <div className={classes.contentBottom}>
            
            <div>    
                <h1 className={classes.titleProject}>{props.titleProject}</h1>
                <p className={classes.dateProject}>{props.dateProject}</p>
            </div>

             
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
            `${props.percent}`,
            )}%`}</Typography>
            </Box>
            </Box>
        
        
        </div>
        </Card>
     
    </div>;
}

const useStyles = makeStyles(theme => ({
    body:{
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
        backgroundSize:'contain',
        width:'224px',
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
        
    }


}));


export default CardProject;