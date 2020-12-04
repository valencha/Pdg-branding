import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BtnShare from '../../components/BtnShare/BtnShare';

function TopBar(props){
    const classes = useStyles();



  
    return (
        <div className={classes.body}>
            <img className ={classes.logo} alt='logo'  src={('/images/logoEasyBrandingColor.svg')} />
            <div className={classes.contentName}><h1 className={classes.titleProject}>{props.titleProject}</h1></div>
            
            <BtnShare className={classes.btn}/>
      </div>
      );
    }
    const useStyles = makeStyles(theme => ({
        body:{
            display:'flex',
            width:'100%',   
            flexDirection:'row',
            flexWrap:'no-wrap',
            justifyContent:'space-between',
            alignItems:'center',    
            alignContent:'center',
            marginTop:'24px',
        },
        logo:{
            marginLeft:'33px',
        },
        btn:{
            marginRight:'122px',
        },
        contentName:{
            backgroundColor:'#ffff',
            width:'261px',
            height:'48px',
            display:'flex',
            marginLeft:'120px',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:'15px',
        },
        titleProject: {
            fontFamily:'Poppins',
            fontWeight:500,
            color:'#212429',

        },
    }));
    
    export default TopBar;
    
    