import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox} from '@material-ui/core';
import clsx from "clsx";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import 'react-circular-progressbar/dist/styles.css';




function CardCheckBox(props){
  
    const classes = useStyles({ urlIcon: '/images/checked.svg', urlImage: `${props.urlImage}`});
    const [select, setSelect]= React.useState(props.select);

   
     const onChange=(e)=>{
        props.onChange(e)
        let checked=e.target.checked;
        setSelect(checked);
     }

    return <FormControlLabel 
            classes={{
              
                root: `${select ? classes.cardYellow : classes.containCheckBox}`,
                label: classes.labelCheck,

            }}  
            
            control={
            <Checkbox
            onChange = {onChange}
            checked={select ? select : false}
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            color='primary'

            
            classes={{
                root: classes.checkBox,
                
               
            }}
       
            name="checkedF"
            />
            }
            label={props.label}
            />;
}

const useStyles = makeStyles(theme => ({

    cardYellow:{
        width:'223px',
        height:'283px',
        cursor:'pointer',
        background:'#FFD984',
        backgroundImage: (props) => `url(${props.urlImage})`,
        backgroundPosition: 'right 28px bottom 80px',
        backgroundSize: '167px',
        backgroundRepeat:'no-repeat',
        backgroundColor:'#FFD984',
        boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignContent: 'flex-end',
        alignItems: 'center',
        marginLeft:'7px',
        border: '1px solid #FFB600',
        '&:hover': {
            backgroundColor: '#FFD984',
        },

    },



    containCheckBox:{
        width:'223px',
        height:'283px',
        cursor:'pointer',
        backgroundImage: (props) => `url(${props.urlImage})`,
        backgroundPosition: 'right 28px bottom 80px',
        backgroundSize: '167px',
        backgroundRepeat:'no-repeat',
        backgroundColor:'#ffff',
        boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignContent: 'flex-end',
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
        width: 28,
        height: 28,
        marginLeft:'18px',
        marginBottom:'18px',
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


export default CardCheckBox;