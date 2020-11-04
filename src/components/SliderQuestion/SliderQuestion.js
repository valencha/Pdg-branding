import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';





function SliderQuestion(props){

    const classes = useStyles({marginRight: `${props.marginRight}`, width: `${props.width}`, height: `${props.height}`, marginTop:`${props.marginTop}`});
   
  
    

    return <div className={props.classes}>
    
   
    <Slider
        min={0}
        step={1}
        max={6}
        defaultValue={0}  
        value={props.value}
        classes={{root:classes.sliderQ, track:classes.track, rail:classes.rail, thumb:classes.thumb}}
        onChange = { (event,value) => { props.onChange(event,value) } }
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
        
    
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

}));


export default SliderQuestion; 