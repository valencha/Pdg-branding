import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


function TextArea(props){
    const classes = useStyles({ urlBorder: 'images/borderImage.svg'});
    const [value, setValue]= React.useState(props.text);
    const [btnTools, setBtnTools] = React.useState(false);
  
    const onChange=(e)=>{
        props.onChange(e)
        let value=e.target.value;
        setValue(value);
     }
    const handleClickAway = () => {
        setBtnTools(false);
      };
    

    function changeState(event){

        setBtnTools(true);
      
     
    }

    return (
     
  
        <ClickAwayListener onClickAway={handleClickAway}>
           <div className ={classes.body}>
            <TextareaAutosize 
            className={classes.contentText}
            onChange = {onChange}
            placeholder='Escribe aqui...'
            value={value}
            onFocus={changeState}
            />
            { btnTools ?
            
                    <div className={classes.contentTool}>
                         <img className ={classes.move} alt='move'  src={('/images/move2.svg')} />
                         <input type="number" placeholder='Auto' className={classes.selectFontSize}/>
                         <img className ={classes.line} alt='line'  src={('/images/line.svg')} height='48px'/>
                         <button className={classes.btnTool}> <img src='/images/Aa.svg'alt="move" width='23px' /></button>
                         <button className={classes.btnTool}><img src='/images/align-left.svg'alt="move" width='16px' /></button>
                         <button className={classes.btnTool}> <img src='/images/link.svg'alt="move" width='16px' /></button>
                         <img className ={classes.line} alt='line'  src={('/images/line.svg')} height='48px'/>
                         <button className={classes.btnTool}>Size</button>
                    </div>
               :null
            }



           </div>
           </ClickAwayListener>  
    
       
      );
    }
    const useStyles = makeStyles(theme => ({
        body:{
            width:'250px',
            position:'absolute',
            display:'flex',
            flexDirection:'column',
            alignContent:'center',
            justifyContent:'center',
            alignItems:'center',
            paddingLeft:'10px',

        },

        contentText:{
            width:'100px',
            height:'100px',
            borderRadius:'15px',
            backgroundColor:'white',
            border:'1px solid #DDE2E5',
            fontFamily:'Open Sans',
            fontWeight:400,
            padding:'19px',
            fontSize:'14px',  
            boxShadow:' 2px 8px 16px 0px #3D3E42 10%',

            '&:focus':{
                outline:'1px solid #7A76FF',
                outlineOffset:'11px',
                borderImage:(props) => `url(${props.urlBorder}) 10 round`,
            }


        },


        contentTool:{
            marginTop:'25px',
            width:'250px',
            height:'48px',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-around',   
            alignContent:'center',
            alignItems:'center',
            backgroundColor:'white',
            boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1) ',
            borderRadius:'15px',
        },

        selectFontSize:{
            width:'52px',
            border:'none',
            height:'24px'
        },
        btnTool:{
            width:'auto',
            backgroundColor:'transparent',
            border:'none',
            fontFamily:'Poppins',
            fontSize:'14px',
            cursor:'pointer'
        }
    

   


       
        
    }));
    
    export default TextArea;
    
    
