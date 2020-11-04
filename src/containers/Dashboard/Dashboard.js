import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PlaceHolderBuscar from '../../components/PlaceHolderBuscar/PlaceHolderBuscar';
import ToolBar from '../../components/ToolBar/ToolBar';
import { useHistory } from "react-router-dom";
import BtnInitial from '../../components/BtnInitial/BtnInitial';
import BtnOutlined from '../../components/BtnOutlined/BtnOutlined';
import CardProject from '../../components/CardProject/CardProject';
import Dialog from '@material-ui/core/Dialog';
import PlaceHolder from '../../components/PlaceHolder/PlaceHolder';



//Todos los imports se coloca   n arriba de este 

import { fb } from '../../utils/firebase'
require('firebase/auth');


function Dashboard(props){
  


  const classes = useStyles({urlLogo: 'images/logoEasyBrandingColor.svg'});
  const [contentShow, setContentShow] = React.useState(true);
  const [contentShow2, setContentShow2] = React.useState(false);
  const [contentShow3, setContentShow3] = React.useState(false);
  const [contentShow4, setContentShow4] = React.useState(false);
  const [contentShow5, setContentShow5] = React.useState(false);
  const [contentShow6, setContentShow6] = React.useState(false);
  const [contentShow7, setContentShow7] = React.useState(false);
  const [contentShow8, setContentShow8] = React.useState(false);

  const [option1, setOption1] = React.useState(classes.btnOptionYellow);
  const [option2, setOption2] = React.useState(classes.btnOption);
  const [option3, setOption3] = React.useState(classes.btnOption);
  const [option4, setOption4] = React.useState(classes.btnOption);


  const [contentOption1, setContentOption1] = React.useState(true);
  const [contentOption2, setContentOption2] = React.useState(false);
  const [contentOption3, setContentOption3] = React.useState(false);
  const [contentOption4, setContentOption4] = React.useState(false);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [titleProject, setTitleProject] = React.useState('Sin titulo');
  const [dateProject, setDateProject] = React.useState('Sin titulo');
  const [openDialog, setOpenDialog] = React.useState(false);
  const [user, setUser] = React.useState('');
  const [marginBell, setMarginBell] = React.useState('40px');
  const [project, setProject] = React.useState([]);
  const [step, setStep]=React.useState(titleProject);
  const [url, setUrl] = React.useState('/dashboard/'+step);

  let history = useHistory();


  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

 


  function handleMenuOpen(event) {
    setIsMenuOpen(prev => !prev);
    if(isMenuOpen ===true){
      setMarginBell('40px');
    }else{
      setMarginBell('320px');
    }
    
  };

function handleTitle(event) {
  setTitleProject(event.target.value);
  setDateProject(formatDate(new Date()));
}

 
function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();
  
  return monthNames[monthIndex] + ' ' + day + ' ' + year;
}

function handleOption(){

  setContentOption1(true);
  setContentOption2(false);
  setContentOption3(false);
  setContentOption4(false);

  setOption1(classes.btnOptionYellow);
  setOption2(classes.btnOption);
  setOption3(classes.btnOption);
  setOption4(classes.btnOption);

}

function handleOption2(){
  setContentOption1(false);
  setContentOption2(true);
  setContentOption3(false);
  setContentOption4(false);

  setOption2(classes.btnOptionYellow);
  setOption1(classes.btnOption);
  setOption3(classes.btnOption);
  setOption4(classes.btnOption);
}


function handleOption3(){
  setContentOption1(false);
  setContentOption2(false);
  setContentOption3(true);
  setContentOption4(false);

  setOption3(classes.btnOptionYellow);
  setOption1(classes.btnOption);
  setOption2(classes.btnOption);
  setOption4(classes.btnOption);
}

function handleOption4(){
  setContentOption1(false);
  setContentOption2(false);
  setContentOption3(false);
  setContentOption4(true);

  setOption4(classes.btnOptionYellow);
  setOption1(classes.btnOption);
  setOption2(classes.btnOption);
  setOption3(classes.btnOption);
}




  function handleAddProject(){
    let db = fb.firestore();
    let data = {
      titleProject: titleProject,
      dateProject: dateProject,
      step: step,
      url:url,
      percent:0,

    }
    

    // Add a new document in collection "cities" with ID 'LA'
    db.collection(`${user.email}`).doc(titleProject).set(data)
  .then(function(docRef) {
      window.location.reload();

  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
  

  }


    
  React.useEffect(() => {
    let isCancelled = false;
    setStep(titleProject);
    setUrl('/dashboard/'+step); 
    
    let db = fb.firestore();

    console.log(url);
    fb.auth().onAuthStateChanged(user => {
      setUser(user);
      
     
      if (user) {
            console.log('ingreso' + user.displayName);
             
    db.collection(`${user.email}`).get().then((snapShots) => {
      if (!isCancelled) {
        setProject(snapShots.docs.map(doc => {
          
          return {
            titleProject: doc.data().titleProject,
            dateProject: doc.data().dateProject,
            step: doc.data().step,
            url:doc.data().url,
            id: doc.id,

          }
        })
        )
      }
     
    })
        } else {
         history.push('/login');
             
        }
    
      
    })
    
   
    
    return () => {
      isCancelled = true;
    };
    
  }, [user.email,history,step,url,setUrl,titleProject]);
  
  
   

    return (
        <div className={classes.body}>
            <div className={classes.toolMenu}>
              <div className={classes.topTools}>
                <div className={classes.logo}></div>
                <div><PlaceHolderBuscar      
                type="text"
                placeHolder="Buscar"/></div>
              </div>

              <div className={classes.icons}>
                <img className ={classes.bell} style ={{marginRight:`${marginBell}`}}src={'images/bell.svg'} alt="notification" width='24px' />
                <img className ={classes.menu}  src={('./images/User.svg')} onClick={() => handleMenuOpen()} alt="menu" />
              </div>
              {isMenuOpen && 
               <div className={classes.menuOpen}>
                <img className ={classes.close}  src={('./images/close.svg')} onClick={() => handleMenuOpen()} alt="menu" />
                <div className ={classes.infoPrincipal}>
                  <div><img className ={classes.photoPerfil}  src={('./images/photoDefault.png')} alt="fotoperfil" /></div>
                
                <div>
                  <h1 className={classes.titleMenu}>¡Hola!</h1>
                  <p className={classes.nameMenu}>Amig@</p>
                </div>
                </div> 
                <div className={classes.numbers}>
                  <p className={classes.descriptionMenu}>Valoraciones</p>
                  <span className={classes.numMenu}>16</span>
                </div>
                <div className={classes.numbers}>
                  <p className={classes.descriptionMenu}>Seguidores</p>
                  <span className={classes.numMenu}>10</span>
                </div>
                <div className={classes.numbers}>
                  <p className={classes.descriptionMenu}>Siguiendo</p>
                  <span className={classes.numMenu}>5</span>
                </div>

                <div className={classes.stateProjects}>
                  <div className={classes.stateProjectsComplete}>
                    <h1 className={classes.stateTitle}> Proyectos Completados </h1>
                    <img className ={classes.divisor}  src={('./images/lineBlue.svg')} alt="divisor" />
                    <h1  className={classes.stateNumber}> 4 </h1>
                  </div>

                  <div className={classes.stateProjectsProcess}>
                    <h1 className={classes.stateTitle}> Proyectos en proceso </h1>
                    <img className ={classes.divisor}  src={('./images/lineYellow.svg')} alt="divisor" />
                    <h1 className={classes.stateNumber}> 2 </h1>
                  </div>
        
                </div>
                <div className={classes.achievement}>
                  <h1 className={classes.achievementTitle}>Logros</h1>
                </div>
               </div>
              }
             




            </div>
            <div className={classes.contentBottom}>
              <div>
                <ToolBar className={classes.tools}
                setContentShow={setContentShow}
                setContentShow2={setContentShow2}
                setContentShow3={setContentShow3}
                setContentShow4={setContentShow4}
                setContentShow5={setContentShow5} 
                setContentShow6={setContentShow6}
                setContentShow7={setContentShow7}  
                setContentShow8={setContentShow8} 
                />
              </div>

              <div>
              
                <div className ={classes.contentOptions}>
                  {contentShow &&
                    <div>

                      <div className={classes.optionsMenu}>
                      <button className={classes.btnNuevo} onClick={handleClickOpen}>+ Nuevo</button>
              
                      <Dialog classes={{paper: classes.rootStyle}} open={openDialog} onClose={handleClose} >
                    
                        <div width='465px' height='299px'  className={classes.contentDialog} >

                          <div className={classes.dialogTop}>
                            <h1 className={classes.titleDialog}>Nuevo Proyecto</h1>
                            <img className={classes.closeDialog} width='24px' src={('./images/close.svg')} onClick={() => handleClose()}alt="divisor" />
                          </div>
                          <div className={classes.placeHolder}>
                            <PlaceHolder      
                            type="text"
                            placeHolder="Nombre de nuevo proyecto"
                            onChange={handleTitle}
                            width='357px'
                            height='50px'/>

                          </div>
                          <div className={classes.actionsDialog}>
                          <BtnOutlined
                          content="Cancelar"
                          width='112px'
                          height='48px'
                          marginRight='16px'
                          onClick={handleClose}
                          marginTop='12px'
                          

                
                          /> 
                          
                          <BtnInitial
                          content="Crear"
                          width='112px'
                          height='48px'
                          onClick={handleAddProject} 
                          marginTop='12px'
                          /> 
                          </div>
 
                        
                        
                        </div>
                      </Dialog>
                     


                      <button className={option1} onClick={handleOption}>Mis proyectos</button>
                      <button className={option2}  onClick={handleOption2}>Compartidos Conmigo</button>
                      <button className={option3}  onClick={handleOption3}>Recientes</button>
                      <button className={option4}  onClick={handleOption4}>Papelera</button>
                      </div>
                      { contentOption1 &&

                      <div className={classes.projects}>
                    
                          
                        {project.map((item, i) =>
      
                          <CardProject key={i}
                          {...item}
                       
                          />
      
                        )}

                          
                         
                      </div>
                      }

                      { contentOption2 &&

                      <div>
                         <h1>Compartidos conmigo</h1>
                      </div>
                      }
                      { contentOption3 &&

                      <div>
                        <h1>Recientes</h1>
                      </div>
                      }

                    { contentOption4 &&

                      <div>
                      <h1>Papelera</h1>
                      </div>
                    }






                    </div>
                  }





                  {contentShow2 &&
                    <div>
                      <h1>Hola2</h1>
                    </div>
                  }
                  
                  {contentShow3 &&
                    <div>
                      <h1>Hola3</h1>
                    </div>
                  }

                  {contentShow4 &&
                    <div>
                      <h1>Hola4</h1>
                    </div>
                  }   
                  {contentShow5 &&
                    <div>
                      <h1>Hola5</h1>
                    </div>
                  } 

                  {contentShow6 &&
                    <div>
                      <h1>Hola6</h1>
                    </div>
                  } 
                  {contentShow7 &&
                    <div>
                      <h1>Hola6</h1>
                    </div>
                  } 
                  {contentShow8 &&
                    <div>
                      <h1>Hola8</h1>
                    </div>
                  } 

                              
                </div>
       
              </div>

            </div>
          
          

      </div>
      );

}

const useStyles = makeStyles(theme => ({
  rootStyle: {
    borderRadius: 15,
    width:465,
    height:299,
  },
  body:{
    boxSizing: 'border-box',
    display:'flex',
    flexDirection:'column',
    width: 'auto',
    height: '100vh',
    flexWrap: 'nowrap',
    backgroundColor:'#FAFAFA',
    overflowY:'hidden',
},
contentBottom:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'flex-start',
  marginLeft:'32px',
  marginRight:'32px',
  marginTop:'20px ',
},

bell:{
  cursor:'pointer', 
},
menu:{
  cursor:'pointer', 
},

infoPrincipal:{
  display:'flex',
  flexDirection:'row',
  marginTop:'70px',
  justifyContent:'flex-start',
  alignItems:'center',
  alignContent:'center',
},

contentDialog:{
  backgroundColor:'transparent',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  flexWrap:'no-wrap',
  alignContent:'center',
  flexDirection:'column',
},
closeDialog:{
  alignSelf:'flex-start',
  cursor:'pointer',
},

placeHolder:{
  display:'flex',
  alignSelf:'center',
  width:'357px',
  marginTop:'38px'
},


close:{
  cursor:'pointer', 
  position:'fixed',
  marginTop:'44px',
  right: '24px',
},
dialogTop:{
  display:'flex',
  width:'357px',
  height:'39px',
  marginTop:'38px',
  flexDirection:'row',
  justifyContent:'space-between',
  alignContent:'stretch',
  alignItems:'flex-start'

},
titleDialog:{
  fontFamily:'Poppins',
  alignSelf:'flex-end',
  fontWeight:500,
  fontSize:'21px',
  color:'#212429'
},
actionsDialog:{
  display:'flex',
  alignSelf:'flex-end',
  marginRight:'54px',

},

menuOpen:{
  width:'400px',
  height:'1095px',
  left: '1095px',
  display:'flex',
  flexDirection:'column',
  justifyContent:'flex-start',
  alignContent:'center',
  position:'fixed',
  top: '0px',
  backgroundColor:'#F9FAFC',
  boxShadow: '-8px 0px 16px rgba(228, 228, 228, 0.25)',
},
titleMenu:{
  fontFamily:'Poppins',
  color:'#495057',
  fontSize:'16px',
},

nameMenu:{
  fontFamily:'Poppins',
  color:'#495057',
  fontSize:'16px',
  fontWeight:500,
},
tools:{
  marginLeft:'33px',
},
toolMenu:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  flexWrap:'nowrap',
  alignContent:'center',
  alignItems:'center',
  width:'auto',
  marginTop:'32px',
  marginLeft:'32px',
  marginRight:'32px',
},

icons:{
  display:'flex',
  flexDirection:'row',

},
photoPerfil:{

  marginLeft:'20px',
},
numbers:{
  marginTop:'8px',
  display:'flex',
  width:'261px',
  fontFamily:'Open Sans',
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'flex-start',
  alignContent:'flex-start',
},

numMenu:{
  fontWeight:600,
},
descriptionMenu:{
  fontWeight:500,
  alignSelf:'flex-start',
  textAlign:'left',
},

stateProjects:{
  marginTop:'30px',
  display:'flex',
  alignSelf:'center',
  flexDirection:'row',
  marginRight:'30px',

},
stateProjectsComplete:{
  display:'flex',
  flexDirection:'column',
  width:'125px',
  height:'130px',
  color:'#495057',
  paddingLeft:'10px',
  paddingRight:'10px',
  paddingTop:'10px',
  fontFamily:'Poppins',
  fontWeight:500,
  backgroundColor:'#CAE9FF',
  borderRadius:'10px',
  lineHeight:'24px',

},

stateProjectsProcess:{
  display:'flex',
  flexDirection:'column',
  width:'125px',
  height:'130px',
  color:'#495057',
  paddingLeft:'10px',
  paddingRight:'10px',
  paddingTop:'10px',
  marginLeft:'20px',
  marginRight:'20px',
  fontFamily:'Poppins',
  fontWeight:500,
  backgroundColor:'#FFE6AE',
  borderRadius:'10px',
  lineHeight:'24px',


},

stateTitle:{
  width:'100px',
},

stateNumber:{
  marginTop:'15px',
  alignSelf:'flex-end',
  fontSize:'38px',
},



divisor:{
marginTop:'15px',
},

achievement:{
backgroundColor:'#F4F6F8',
width: '310px',
marginTop:'10px', 
height: '230px',
alignSelf:'center',
marginRight:'50px',
borderRadius:'10px'
},
achievementTitle:{
  paddingTop:'20px',
  paddingLeft:'20px',
  fontSize:'16px',
  fontFamily:'Poppins',
  fontWeight:700,
  color:'#495057'
},

topTools:{
   display:'flex',
   flexDirection:'row',
   justifyContent:'flex-start',
   flexWrap:'nowrap',
   alignContent:'center',
   alignItems:'center',
   width:'auto',
  
},

  logo:{
    backgroundImage: (props) => `url(${props.urlLogo})`,
    width: '126px',
    height:'17.43px',
    marginRight:'90px'
},

btnNuevo:{
  backgroundColor:'#ffff',
  borderRadius:'20px',
  width:'110px',
  height:'46px',
  border:'none',
  fontFamily:'Poppins',
  color:'#7A76FF',
  fontWeight:500, 
  outline:'none',
  cursor:'pointer',
  boxShadow: '2px 8px 16px rgba(61, 62, 66, 0.1)',
},

contentOptions:{
  marginLeft:'110px',

},

btnOption:{
  marginLeft:'30px',
  color:'#CCCCCC',
  fontFamily:'Poppins',
  border:'none',
  background:'none',
  outline:'none',
  cursor:'pointer',
},



btnOptionYellow:{
  marginLeft:'30px',
  backgroundColor:'#FFD984',
  color:'#212429',
  width:'auto',
  paddingLeft:'20px',
  paddingRight:'20px',
  height:'46px',
  borderRadius:'20px',
  fontWeight:500,
  fontFamily:'Poppins',
  border:'none',
  outline:'none',
  cursor:'pointer',
},

projects:{
  display:'flex',
  flexDirection:'row',
}

}));

export default Dashboard;