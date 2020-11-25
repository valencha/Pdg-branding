import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import Slider from '../../components/SliderQuestion/SliderQuestion';


function Selector(props){

    const classes = useStyles({marginRight: `${props.marginRight}`, width: `${props.width}`, height: `${props.height}`, marginTop:`${props.marginTop}`});
    const[value, setValue]= React.useState(props.value)
    const BootstrapInput = withStyles((theme) => ({
        root:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            alignContent:'center',
            '& > svg': {
                color:'#7A76FF',
                fontSize:25
            },
            '&:hover':{
                backgroundColor: 'transparent',
            },
            '&:focus':{
                backgroundColor: 'transparent',
            }
        },
        input: {
            borderRadius: 8,
            backgroundColor: 'white',
            border: 'none',
            display:'flex',
            justifyContent:'center',
            width:'173px',
            fontWeight:300,
            fontFamily:'Poppins',
            height:'38px',
            fontSize: 14,
            textIndent:'18px',
            '&:hover':{
                backgroundColor: 'transparent',
            },
            '&:focus':{
                backgroundColor: 'transparent',
            }

           
        },

    }))(InputBase);

     
    const onChange=(e)=>{
        props.onChange(e)
        let value=e.target.value;
        setValue(value)
     }

 

    return <div className={props.className}>
    
     
    <FormControl className={classes.formControl}  variant="outlined">
        <Select
        onChange = {onChange}
        input={<BootstrapInput />}
        value={value}
        className={classes.select}
        IconComponent = {ExpandMoreRoundedIcon}
          native

        >
            
       
      {props.options.map((item, i) =>  
          <option disabled={item.disabled} key={i} value={item.value}>{item.item}</option>
      )}

       
        </Select>
      </FormControl>

      <Slider className={classes.slider} onChange={props.onChange2} value={props.value2}/>
   
    </div>;
}

const useStyles = makeStyles(theme => ({

  
  formControl:{
    
    backgroundColor:'white',
    boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',
    borderRadius: '8px',
    border:'none',
    marginRight:'20px'
  },

}));


export default Selector; 