import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import clsx from "clsx";

function Trivia(props){
  
    const classes = useStyles({ urlIcon: '/images/checked.svg'});
   
    return <div className={classes.containVistaItem}>
        <div>
            <h1>¿Cúal es la categoría de esta marca?</h1>
        </div>
        {props.options.map((item)=>

            <FormControlLabel            
            control={
            <Checkbox
            onChange = {props.onChange}
            checked={props.select ? props.select : false}
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            color='primary'

            
            classes={{
                root: classes.checkBox,
                
               
            }}
       
            name="checkedF"
            />
            }
            label={item}
            />
        )} 
       
    </div>;
}

const useStyles = makeStyles(theme => ({
    imgS:{
        width:'92px',
        height:'92px',
        borderRadius:'15px',
        cursor:'pointer'
    },
    containVistaItem:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        backgroundColor:'#F3F7FB',
        width:'345px',
        height:'344px',
        borderRadius:'15px',
    },
    containInput:{

        width: '106px',
        height: '32px',
        border:'none',
        marginTop:'3px',
        borderRadius:'5px',
        boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.105)',
        border: '1px solid #DDE2E5',

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

    root: {
        backgroundColor: 'rgba(33,36,41,0.8)',
        opacity:75,
      },

 

    iconBtn:{
        cursor:'pointer'
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
    
        labelCheck:{
    
            color: '#212429',
            fontFamily:'Open Sans',
            fontWeight:400,
            fontSize:'16px',
            marginBottom:'18px',
        }
      


}));



export default Trivia;