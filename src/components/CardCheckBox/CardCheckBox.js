import React from 'react';
import DataContext from '../../context/DataContext/DataContext';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Checkbox } from '@material-ui/core';
import clsx from "clsx";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import 'react-circular-progressbar/dist/styles.css';



function CardCheckBox(props){

    const classes = useStyles({ urlIcon: '/images/checked.svg'});
    const [cardClass, setCardClass] = React.useState(classes.card);
    const [isHandleClick, setIsHandleClick] = React.useState(false);
    const [isChecked, setIsChecked] = React.useState(false);
    const data = React.useContext(DataContext);


    function handleClick(event){
        setIsHandleClick(prev => !prev);
        setIsChecked(prev => !prev);
        data.setIsChecked(true);
        if(data.isChecked===true){
            props.setDisabled(true);
        }
             
        if(isHandleClick === false){    
            setCardClass(classes.cardYellow);   
            setIsChecked(true);  
            props.setDisabled(false);
        }else{
            setCardClass(classes.card); 
            setIsChecked(false);
            props.setValue(14.2857142857);
           
        }




    }

  

    return <div className={classes.body} >
    

        <Card className={cardClass} onClick={handleClick} >
        <div className={classes.contentTop}> 

        <img src={props.urlImage} alt="watch" width='167px' />

        </div>
        <div className={classes.contentBottom}>

            <FormControlLabel 
            classes={{
                root: classes.containCheckBox,
                label: classes.labelCheck,

            }}
            control={
            <Checkbox
            checked={isChecked}
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
            />


        
        </div>
        </Card>
     
    </div>;
}

const useStyles = makeStyles(theme => ({
    body:{
        display:'flex',
        flexDirection:'column',
      
    },
    progress:{
        width:55,
        height:55,
    },
    card:{
        width:'223px',
        height:'283px',
        cursor:'pointer',
        background:'#ffff',
        boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',
        borderRadius: '15px',
        display:'flex',
        flexDirection:'column',
        alignContent:'center',
        marginRight:'30px',
        justifyContent:'center',
        '&:hover': {
            backgroundColor: '#FFD984',
        },

    },


    cardYellow:{
        width:'223px',
        height:'283px',
        cursor:'pointer',
        background:'#FFD984',
        boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',
        borderRadius: '15px',
        display:'flex',
        flexDirection:'column',
        alignContent:'center',
        marginRight:'30px',
        justifyContent:'center',
        border: '1px solid #FFB600',
        '&:hover': {
            backgroundColor: '#FFD984',
        },

    },


    contentTop:{
        display:'flex',
        backgroundSize:'cover',
        width:'224px',
        flexDirection:'column',
        alignSelf:'center',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
      
    },
    contentBottom:{
        marginTop:'32px',
        width:'224px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        

    },
    divisor:{
        marginTop:'10px'
    },

    titleProject:{
        fontFamily:'Poppins',
        color:'#212429',
        fontSize:'16px',

    },

    containCheckBox:{
        width:'167px',     
        color: '#212429',
        fontFamily:'Open Sans',

    },  
    labelCheck:{
        color: '#212429',
        fontFamily:'Open Sans',
        fontWeight:400,
        fontSize:'16px',

    },

    checkBox:{
        color:'#DDE2E5',
        stroke:'10px',
        fontFamily:'Open Sans',
        width: 28,
        height: 28,
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


    }
  

}));


export default CardCheckBox;