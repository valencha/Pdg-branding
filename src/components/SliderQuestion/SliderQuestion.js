import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';




function SliderQuestion(props){

    const classes = useStyles({marginRight: `${props.marginRight}`, width: `${props.width}`, height: `${props.height}`, marginTop:`${props.marginTop}`});
    const[value, setValue]= React.useState(props.value);
    const onChange=(e,newValue)=>{
      props.onChange(e, newValue)
      setValue(newValue)
     
   }
    

    return <div className={props.className}>
    <div className={classes.slider}>
   
    <Slider
        min={0}
        step={1}
        max={100}
        defaultValue={50}
        value={value}
        classes={{root:classes.sliderQ, track:classes.track, rail:classes.rail, thumb:classes.thumb}}
        onChange = { onChange } 
      />
    <Typography id="non-linear-slider" className={classes.percent}>
    {value}%
    </Typography>
    </div>

    </div>;
}

const useStyles = makeStyles(theme => ({

  
    sliderQ:{
    width:'330px',
    height:5,
    color:'#DDE2E5'   
  },

  track:{
    height:5,
    borderRadius: '15px',
    background: '#7A76FF',
  },
  rail: {
    height: 5,
    borderRadius: '15px',
    background: '#DDE2E5',
  },

  thumb: {
    height: 23.63,
    width: 23.63,
    backgroundColor: '#fff',
    border: '2px solid #7A76FF',
    boxSizing: 'border-box',
    marginTop: -10,
    marginLeft: -10,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
    },
    active: {},
    valueLabel: {
    left: 'calc(-50% + 10px)',
    },
    slider:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      alignContent:'center',
    },

    percent:{
      marginLeft:'20px',
      fontFamily:'Poppins',
      color:'#5975FF'
    }

}));


export default SliderQuestion; 