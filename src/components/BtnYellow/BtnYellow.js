import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


function BtnYellow(props){

    const classes = useStyles({marginRight: `${props.marginRight}`, marginTop:`${props.marginTop}`});
    const [select,setSelect]=React.useState(props.checked)
    
    const onChange=(e)=>{
        props.onChange(e)
        let checked=e.target.checked;
        setSelect(checked);
     }

     React.useEffect(()=>{
        setSelect(props.checked);
     },[props.checked])

     return (
        <label className={select ? classes.btnClick:classes.btn }>{props.content} <input hidden type="checkbox"   checked={select ? select : false} onChange={onChange} id="Name" name="Name" /></label>
  
      );
}

const useStyles = makeStyles(theme => ({

  
    btn: {
        width: '149px',
        height: '48px',
        cursor:'pointer',
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        textTransform: 'none',
        fontFamily: 'Poppins',
        fontSize:'16px',
        color:'#212429',
        marginRight:'74px',
        background: 'white',
        border: 'none',
        boxSizing: 'border-box',
        borderRadius: '15px',
        fontWeight:600,
        outline:'none',
        boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',

      '&:hover':{
          background: '#FFD984',
          outline:'none',
      },
          


  },

  btnClick: {
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    width: '149px',
    height: '48px',
    cursor:'pointer',
    textTransform: 'none',
    fontFamily: 'Poppins',
    marginRight:'74px',   
    fontSize:'16px',
    color:'#212429',
    background: '#FFD984',
    border: '1px solid #FFB600',
    boxSizing: 'border-box',
    borderRadius: '15px',
    fontWeight:600,
    outline:'none',
    boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',


},

}));


export default BtnYellow; 