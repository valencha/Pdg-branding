import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



//Todos los imports se coloca   n arriba de este 

import { fb } from '../../utils/firebase'
require('firebase/auth');



function ToolBar(props){

    const classes = useStyles();
    const [contentShow, setContentShow] = React.useState(true);
    const [contentShow2, setContentShow2] = React.useState(false);
    const [contentShow3, setContentShow3] = React.useState(false);
    const [contentShow4, setContentShow4] = React.useState(false);
    const [contentShow5, setContentShow5] = React.useState(false);
    const [contentShow6, setContentShow6] = React.useState(false);
    const [contentShow7, setContentShow7] = React.useState(false);

    
    const [changeClass, setChangeClass] = React.useState(classes.btnToolClick);
    const [changeClass2, setChangeClass2] = React.useState(classes.btnTool);
    const [changeClass3, setChangeClass3] = React.useState(classes.btnTool);
    const [changeClass4, setChangeClass4] = React.useState(classes.btnTool);
    const [changeClass5, setChangeClass5] = React.useState(classes.btnTool);
    const [changeClass6, setChangeClass6] = React.useState(classes.btnTool);
    const [changeClass7, setChangeClass7] = React.useState(classes.btnTool);
  

    const [clickOnButton, setClickOnButton] = React.useState(true);
    const [clickOnButton2, setClickOnButton2] = React.useState(false);
    const [clickOnButton3, setClickOnButton3] = React.useState(false);
    const [clickOnButton4, setClickOnButton4] = React.useState(false);
    const [clickOnButton5, setClickOnButton5] = React.useState(false);
    const [clickOnButton6, setClickOnButton6] = React.useState(false);
    const [clickOnButton7, setClickOnButton7] = React.useState(false);
    

    const [changeIcon, setChangeIcon] = React.useState('images/HomeColor.svg');
    const [changeIcon2, setChangeIcon2] = React.useState('images/hash.svg');
    const [changeIcon3, setChangeIcon3] = React.useState('images/star.svg');
    const [changeIcon4, setChangeIcon4] = React.useState('images/bookmark.svg');
    const [changeIcon5, setChangeIcon5] = React.useState('images/folder.svg');
    const [changeIcon6, setChangeIcon6] = React.useState('images/help-circle.svg');

    const [changeIcon7, setChangeIcon7] = React.useState('images/settings.svg');


  


    function showContentClick(event){
        setContentShow(true);  
        setChangeClass(classes.btnToolClick);

        setClickOnButton(true); 
        setChangeIcon('images/HomeColor.svg');



        setContentShow2(false);  
        setClickOnButton2(false); 
        setChangeClass2(classes.btnTool);
        setChangeIcon2('images/hash.svg');

        setContentShow3(false);  
        setClickOnButton3(false); 
        setChangeClass3(classes.btnTool);
        setChangeIcon3('images/star.svg');


        setContentShow4(false);  
        setClickOnButton4(false); 
        setChangeClass4(classes.btnTool);
        setChangeIcon4('images/bookmark.svg');


        setContentShow5(false);  
        setClickOnButton5(false); 
        setChangeClass5(classes.btnTool);
        setChangeIcon5('images/folder.svg'); 

        setContentShow6(false);  
        setClickOnButton6(false); 
        setChangeClass6(classes.btnTool);
        setChangeIcon6('images/help-circle.svg');

        setContentShow7(false);  
        setClickOnButton7(false); 
        setChangeClass7(classes.btnTool);
        setChangeIcon7('images/settings.svg');

    
        
        
        if(clickOnButton === false){
            setChangeClass(classes.btnToolClick);
            setChangeIcon('images/HomeColor.svg');
        }else{
            setChangeClass(classes.btnTool);
            setChangeIcon('images/Home.svg');
        }

        props.setContentShow(true);  
        props.setContentShow2(false);  
        props.setContentShow3(false);  
        props.setContentShow4(false);  
        props.setContentShow5(false);  
        props.setContentShow6(false);  
        props.setContentShow7(false);  
    

    }
    function showContentClick2(event){
        setContentShow2(true);  
        setChangeClass2(classes.btnToolClick);

        setClickOnButton2(true); 
        setChangeIcon2('images/hashColor.svg');


        setContentShow(false);  
        setClickOnButton(false); 
        setChangeClass(classes.btnTool);
        setChangeIcon('images/Home.svg');

        setContentShow3(false);  
        setClickOnButton3(false); 
        setChangeClass3(classes.btnTool);
        setChangeIcon3('images/star.svg');


        setContentShow4(false);  
        setClickOnButton4(false); 
        setChangeClass4(classes.btnTool);
        setChangeIcon4('images/bookmark.svg');


        setContentShow5(false);  
        setClickOnButton5(false); 
        setChangeClass5(classes.btnTool);
        setChangeIcon5('images/folder.svg'); 

        setContentShow6(false);  
        setClickOnButton6(false); 
        setChangeClass6(classes.btnTool);
        setChangeIcon6('images/help-circle.svg');

        setContentShow7(false);  
        setClickOnButton7(false); 
        setChangeClass7(classes.btnTool);
        setChangeIcon7('images/settings.svg');


        
        
        if(clickOnButton2 === false){
            setChangeClass2(classes.btnToolClick);
            setChangeIcon2('images/hashColor.svg');
        }else{
            setChangeClass2(classes.btnTool);
            setChangeIcon2('images/hash.svg');
        }

        props.setContentShow(false);  
        props.setContentShow2(true);  
        props.setContentShow3(false);  
        props.setContentShow4(false);  
        props.setContentShow5(false);  
        props.setContentShow6(false);  
        props.setContentShow7(false);  

    }

    function showContentClick3(event){
        setContentShow3(true);
    

        setClickOnButton3(prev => !prev); 
        setChangeIcon3('images/starColor.svg');

        setContentShow(false);  
        setClickOnButton(false); 
        setChangeClass(classes.btnTool);
        setChangeIcon('images/Home.svg');

        setContentShow2(false);  
        setClickOnButton2(false); 
        setChangeClass2(classes.btnTool);
        setChangeIcon2('images/hash.svg');


        setContentShow4(false);  
        setClickOnButton4(false); 
        setChangeClass4(classes.btnTool);
        setChangeIcon4('images/bookmark.svg');


        setContentShow5(false);  
        setClickOnButton5(false); 
        setChangeClass5(classes.btnTool);
        setChangeIcon5('images/folder.svg'); 

        setContentShow6(false);  
        setClickOnButton6(false); 
        setChangeClass6(classes.btnTool);
        setChangeIcon6('images/help-circle.svg');

        setContentShow7(false);  
        setClickOnButton7(false); 
        setChangeClass7(classes.btnTool);
        setChangeIcon7('images/settings.svg');

        
        
        
        if(clickOnButton3 === false){
            setChangeClass3(classes.btnToolClick);
            setChangeIcon3('images/starColor.svg');
        }else{
            setChangeClass3(classes.btnTool);
            setChangeIcon3('images/star.svg');
        }

        props.setContentShow(false);  
        props.setContentShow2(false);  
        props.setContentShow3(true);  
        props.setContentShow4(false);  
        props.setContentShow5(false);  
        props.setContentShow6(false);  
        props.setContentShow7(false);  
   
    }

    function showContentClick4(event){
        setContentShow4(true);  
         
        setClickOnButton4(prev => !prev); 
        setChangeIcon4('images/bookmarkColor.svg');

        setContentShow(false);  
        setClickOnButton(false); 
        setChangeClass(classes.btnTool);
        setChangeIcon('images/Home.svg');

        setContentShow2(false);  
        setClickOnButton2(false); 
        setChangeClass2(classes.btnTool);
        setChangeIcon2('images/hash.svg');


        setContentShow3(false);  
        setClickOnButton3(false); 
        setChangeClass3(classes.btnTool);
        setChangeIcon3('images/star.svg');


        setContentShow5(false);  
        setClickOnButton5(false); 
        setChangeClass5(classes.btnTool);
        setChangeIcon5('images/folder.svg'); 

        setContentShow6(false);  
        setClickOnButton6(false); 
        setChangeClass6(classes.btnTool);
        setChangeIcon6('images/help-circle.svg');

        setContentShow7(false);  
        setClickOnButton7(false); 
        setChangeClass7(classes.btnTool);
        setChangeIcon7('images/settings.svg');

        
        
        
        
        if(clickOnButton4 === false){
            setChangeClass4(classes.btnToolClick);
            setChangeIcon4('images/bookmarkColor.svg');
        }else{
            setChangeClass4(classes.btnTool);
            setChangeIcon4('images/bookmark.svg');
        }
        props.setContentShow(false);  
        props.setContentShow2(false);  
        props.setContentShow3(false);  
        props.setContentShow4(true);  
        props.setContentShow5(false);  
        props.setContentShow6(false);  
        props.setContentShow7(false);  

    }

    function showContentClick5(event){
        setContentShow5(true);  
        setChangeClass5(classes.btnToolClick);

        setClickOnButton5(true); 
        setChangeIcon5('images/folderColor.svg');


        setContentShow(false);  
        setClickOnButton(false); 
        setChangeClass(classes.btnTool);
        setChangeIcon('images/Home.svg');

        setContentShow2(false);  
        setClickOnButton2(false); 
        setChangeClass2(classes.btnTool);
        setChangeIcon2('images/hash.svg');


        setContentShow4(false);  
        setClickOnButton4(false); 
        setChangeClass4(classes.btnTool);
        setChangeIcon4('images/bookmark.svg');


        setContentShow3(false);  
        setClickOnButton3(false); 
        setChangeClass3(classes.btnTool);
        setChangeIcon3('images/star.svg'); 

        setContentShow6(false);  
        setClickOnButton6(false); 
        setChangeClass6(classes.btnTool);
        setChangeIcon6('images/help-circle.svg');

        setContentShow7(false);  
        setClickOnButton7(false); 
        setChangeClass7(classes.btnTool);
        setChangeIcon7('images/settings.svg');

   
        
        
        if(clickOnButton5 === false){
            setChangeClass5(classes.btnToolClick);
            setChangeIcon5('images/folderColor.svg');
        }else{
            setChangeClass5(classes.btnTool);
            setChangeIcon5('images/folder.svg');
        }


        props.setContentShow(false);  
        props.setContentShow2(false);  
        props.setContentShow3(false);  
        props.setContentShow4(false);  
        props.setContentShow5(true);  
        props.setContentShow6(false);  
        props.setContentShow7(false);  
   
    }

    function showContentClick6(event){
        setContentShow6(true);  
        setChangeClass6(classes.btnToolClick);

        setClickOnButton6(true); 
        setChangeIcon6('images/help-circleColor.svg');


        setContentShow(false);  
        setClickOnButton(false); 
        setChangeClass(classes.btnTool);
        setChangeIcon('images/Home.svg');

        setContentShow3(false);  
        setClickOnButton3(false); 
        setChangeClass3(classes.btnTool);
        setChangeIcon3('images/star.svg');


        setContentShow4(false);  
        setClickOnButton4(false); 
        setChangeClass4(classes.btnTool);
        setChangeIcon4('images/bookmark.svg');


        setContentShow5(false);  
        setClickOnButton5(false); 
        setChangeClass5(classes.btnTool);
        setChangeIcon5('images/folder.svg'); 

        setContentShow2(false);  
        setClickOnButton2(false); 
        setChangeClass2(classes.btnTool);
        setChangeIcon2('images/star.svg');

        setContentShow7(false);  
        setClickOnButton7(false); 
        setChangeClass7(classes.btnTool);
        setChangeIcon7('images/settings.svg');


        
        
        if(clickOnButton6 === false){
            setChangeClass6(classes.btnToolClick);
            setChangeIcon6('images/help-circle.svg');
        }else{
            setChangeClass6(classes.btnTool);
            setChangeIcon6('images/help-circleColor.svg');
        }

        props.setContentShow(false);  
        props.setContentShow2(false);  
        props.setContentShow3(false);  
        props.setContentShow4(false);  
        props.setContentShow5(false);  
        props.setContentShow6(true);  
        props.setContentShow7(false);  
  
    }


    function showContentClick7(event){
        setContentShow7(true);  
        setChangeClass7(classes.btnToolClick);

        setClickOnButton7(true); 
        setChangeIcon7('images/settingsColor.svg');


        setContentShow(false);  
        setClickOnButton(false); 
        setChangeClass(classes.btnTool);
        setChangeIcon('images/Home.svg');

        setContentShow3(false);  
        setClickOnButton3(false); 
        setChangeClass3(classes.btnTool);
        setChangeIcon3('images/star.svg');


        setContentShow4(false);  
        setClickOnButton4(false); 
        setChangeClass4(classes.btnTool);
        setChangeIcon4('images/bookmark.svg');


        setContentShow5(false);  
        setClickOnButton5(false); 
        setChangeClass5(classes.btnTool);
        setChangeIcon5('images/folder.svg'); 

        setContentShow2(false);  
        setClickOnButton2(false); 
        setChangeClass2(classes.btnTool);
        setChangeIcon2('images/star.svg');

        setContentShow6(false);  
        setClickOnButton6(false); 
        setChangeClass6(classes.btnTool);
        setChangeIcon6('images/help-circle.svg');

 
        
        
        if(clickOnButton7 === false){
            setChangeClass7(classes.btnToolClick);
            setChangeIcon7('images/settingsColor.svg');
        }else{
            setChangeClass7(classes.btnTool);
            setChangeIcon7('images/settings.svg');
        }

        props.setContentShow(false);  
        props.setContentShow2(false);  
        props.setContentShow3(false);  
        props.setContentShow4(false);  
        props.setContentShow5(false);  
        props.setContentShow6(false);  
        props.setContentShow7(true);  
     
    }
/*
    React.useEffect(() => {
        let isCancelled = false;
        if (!isCancelled) {
          
       
          fb.auth().onAuthStateChanged(user => {
            if (user) {
         
              } else {
                props.history('/login');
                   
              }
          
            
          })
          
        }
        return () => {
          isCancelled = true;
        };
      }, [props.history]);
   */

    function handleLogOut(event){
        fb.auth().signOut();
       
       
    }

    return <div className={classes.body}>
    
    <div className={classes.contentToolBar}>
        <div> 
            <Button className={changeClass} onClick={showContentClick}> <div className={classes.contentBtn}><img src={changeIcon} alt="watch" width='20px' />{contentShow && <span className={classes.btnSpan}>Inicio</span>} </div> </Button>
            <Button className={changeClass2} onClick={showContentClick2}> <div className={classes.contentBtn2}><img src={changeIcon2} alt="watch" width='20px' />{contentShow2 && <span className={classes.btnSpan}>Explorar</span>} </div> </Button>
            <Button className={changeClass3} onClick={showContentClick3}> <div className={classes.contentBtn3}><img src={changeIcon3} alt="watch" width='20px' />{contentShow3 && <span className={classes.btnSpan}>Favoritos</span>} </div> </Button>
            <Button className={changeClass4} onClick={showContentClick4}> <div className={classes.contentBtn4}><img src={changeIcon4} alt="watch" width='20px' />{contentShow4 && <span className={classes.btnSpan}>Guardados</span>} </div> </Button>
            <Button className={changeClass5} onClick={showContentClick5}> <div className={classes.contentBtn5}><img src={changeIcon5} alt="watch" width='20px' />{contentShow5 && <span className={classes.btnSpan}>Recursos</span>} </div> </Button>
            <Button className={changeClass6} onClick={showContentClick6}> <div className={classes.contentBtn6}><img src={changeIcon6} alt="watch" width='20px' />{contentShow6 && <span className={classes.btnSpan}>Ayuda</span>} </div> </Button>
        </div>
        <div className={classes.toolBottom}>
        <Button className={changeClass7} onClick={showContentClick7}> <div className={classes.contentBtn7}><img src={changeIcon7} alt="watch" width='20px' />{contentShow7 && <span className={classes.btnSpan}>Ajustes</span>} </div> </Button>
        <Button className={classes.btnTool} onClick={handleLogOut}> <div className={classes.contentBtn8}><img src='images/log-out.svg' alt="watch" width='20px' /> </div> </Button>
        </div>
    </div>
 
    </div>;
}

const useStyles = makeStyles(theme => ({

  
   contentToolBar: {
        width:'100px',
        height:'620px',
        background:'#fffff',
        display:'flex',
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center',
        boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',
        borderRadius: '20px',

    },

    btnTool:{
        display:'flex',
        width:'76px',
        height:'76px',
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center',
        borderRadius:'20px',

        '&:hover':{
            backgroundColor: 'rgb(122,118,255,0.2)',

        },
  

    },
    btnToolClick:{
        display:'flex',
        width:'76px',
        height:'76px',
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center',
        borderRadius:'20px',
        backgroundColor: 'rgb(122,118,255,0.2)',

        '&:hover':{
            backgroundColor: 'rgb(122,118,255,0.2)',

        },
  

    },

    contentBtn:{
        display:'flex',
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center',
  
    },
    btnSpan:{
        textTransform: 'capitalize',
        textDecoration:'none',
        fontFamily: 'Poppins',
        fontWeight:400,
        color: '#7A76FF',
    },
    toolBottom:{
        marginTop:'20px',
    }



}));


export default ToolBar;