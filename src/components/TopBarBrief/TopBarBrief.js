import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BtnInitial from '../../components/BtnInitial/BtnInitial';
import { useHistory } from "react-router-dom";
function TopBarBrief(props){
    const classes = useStyles();
    let history = useHistory();


    const onClick = (event) => {
        history.push(`/`);
      };

      const handleLogin = (event) => {
        history.push(`/login`);
      };

  
    return (
        <div className={classes.body}>
            <img className ={classes.logo} alt='logo'  src={('/images/logoEasyBrandingColor.svg')} onClick={onClick}/>
            <div className={classes.contentName}><h1 className={classes.titleProject}>{props.titleProject}</h1></div>
            
            <BtnInitial className={classes.btnStartNow}
            content="Comenzar ahora"
            marginRight='33px'
            width='205px'
            height='48px'
            onClick={handleLogin}
            />
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
            cursor:'pointer'
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
    
    export default TopBarBrief;
    
    