import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import './style.css';



function SelectorLabel(props){

    const classes = useStyles({marginRight: `${props.marginRight}`, width: `${props.width}`, height: `${props.height}`, marginTop:`${props.marginTop}`});


    const onChange=(e)=>{
      props.onChange(e);

   }



    const BootstrapInput = withStyles((theme) => ({
        root:{
            marginTop:'15px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:'8px',
            alignContent:'center',
            boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',
            '& > svg': {
                color:'#7A76FF',
                fontSize:25,
                borderRadius:'8px',
            },
            '&:hover':{
                backgroundColor: 'transparent',
                borderRadius:'8px',
            },
            '&:focus':{
                backgroundColor: 'transparent',
                borderRadius:'8px',
            }
        },
        input: {
            borderRadius: 8,
            backgroundColor: 'white',
            border: 'none',
   
            display:'flex',
         
            justifyContent:'center',
            width:'173px',
            height:'38px',
            alignContent:'center',
            alignItems:'center',
            fontWeight:300,
            fontFamily:'Poppins',
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
    const CustomCheckBox = withStyles({
        root: {
          color: '#7A76FF',
          '&$checked': {
            color: '#7A76FF',
          },
        },
        checked: {},
      })((props) => <Checkbox color="default" {...props} />);
    
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 1;
    const MenuProps = {
        PaperProps: {
          style: {
            backgroundColor:'white',
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            borderRadius:'8px',
            fontFamily:'Poppins',
            width: 250,
            position:'absolute',
            top:0,
          },
        },

      };

    return <div className={classes.body}>
    
     
    <FormControl className={classes.formControl}  variant="outlined">
        <InputLabel shrink htmlFor="select-multiple-native" classes={{
                root: classes.label,
                focused:classes.labelFocus,
                shrink:classes.labelFocus
            }}>
          {props.label}
        </InputLabel>

        <Select
        multiple
        labelId="demo-mutiple-checkbox-label"
        id="demo-mutiple-checkbox"
        onChange = {onChange}
        input={<BootstrapInput />}  
        defaultValue={props.value}
        renderValue={(selected) => selected.join(', ')}
        classes={{
            root: classes.select,
    

        }}
        IconComponent = {ExpandMoreRoundedIcon}
        MenuProps={MenuProps}
        >
            <MenuItem value="Selecciona varios"  >
              <em>Selecciona varios</em>
         </MenuItem>
   
      {props.options.map((item, i) =>  
           <MenuItem key={i} classes={{root: classes.selectOption, selected: classes.selected}} value={item}  >
           <CustomCheckBox classes={{root: classes.check}}checked={props.value.indexOf(item) > -1} />
           <ListItemText classes={{primary: classes.select}}primary={item} />
         </MenuItem>
      )}

       
        </Select>

        
      </FormControl>
   
    </div>;
}

const useStyles = makeStyles(theme => ({

  body:{
    padding:'10px'
  },
  formControl:{
    
    height:'85px',
  },

  label:{
      color:'#495057',
      fontFamily:'Poppins',
      fontSize:'16px',
     
  },

  label2:{
    color:'#495057',
    padding:100,
    fontFamily:'Poppins',
    fontSize:'16px',
   
},

  labelFocus:{
    color:'#495057',
    fontFamily:'Poppins',
    fontSize:'16px',
   
},
  select:{
    fontFamily:'Poppins',
    color:'#495057',
    fontSize:'12px',

    '&:focus': {
        color:'#495057',
      },

      '&:hover':{
        color:'#495057',
        
    },  
    '&:active':{
        color:'#495057',
        
    },   
  },

  selectOption:{


    '&:hover':{
        backgroundColor: 'rgba(122, 118, 255, 0.2)',
        
    },      
    '&:focus': {
        backgroundColor: 'rgba(122, 118, 255, 0.2)',
      },
      '&$selected': {
        backgroundColor: 'rgba(122, 118, 255, 0.2)',
      },
  },
  selected:{
    backgroundColor: 'rgba(122, 118, 255, 0.2)',
    '&:hover':{
        backgroundColor: 'rgba(122, 118, 255, 0.2)',
        
    },
    '&:focus':{
        backgroundColor: 'rgba(122, 118, 255, 0.2)',
        
    },
  }

}));


export default SelectorLabel; 