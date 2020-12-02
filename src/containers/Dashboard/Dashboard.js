import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PlaceHolderBuscar from '../../components/PlaceHolderBuscar/PlaceHolderBuscar';
import ToolBar from '../../components/ToolBar/ToolBar';
import DataContext from '../../context/DataContext/DataContext';
import BtnInitial from '../../components/BtnInitial/BtnInitial';
import BtnOutlined from '../../components/BtnOutlined/BtnOutlined';
import CardProject from '../../components/CardProject/CardProject';
import CardMoodboards from '../../components/CardMoodboards/CardsMoodboards';
import Dialog from '@material-ui/core/Dialog';
import PlaceHolder from '../../components/PlaceHolder/PlaceHolder';
import Slider from 'react-grid-carousel';
import './style.css'

//Todos los imports se coloca   n arriba de este 

import { fb } from '../../utils/firebase'
let db = fb.firestore();
require('firebase/auth');


function Dashboard(props){
  

  const value = React.useContext(DataContext);
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

  const [option5, setOption5] = React.useState(classes.btnOptionYellow);
  const [option6, setOption6] = React.useState(classes.btnOption);


  const [contentOption1, setContentOption1] = React.useState(true);
  const [contentOption2, setContentOption2] = React.useState(false);
  const [contentOption3, setContentOption3] = React.useState(false);
  const [contentOption4, setContentOption4] = React.useState(false);

  const [contentOption5, setContentOption5] = React.useState(true);
  const [contentOption6, setContentOption6] = React.useState(false);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMoodOpen, setIsMoodOpen] = React.useState(false);
  const [titleProject, setTitleProject] = React.useState('Sin titulo');
  const [collaborator, setCollaborator] = React.useState('');
  const [dateProject, setDateProject] = React.useState('Sin fecha');
  const [openDialog, setOpenDialog] = React.useState(false);
  
  const [marginBell, setMarginBell] = React.useState('40px');
  const [project, setProject] = React.useState([]);
  const [projectShare, setProjectShare] = React.useState([]);
  const [moodboard, setMoodboard] = React.useState([]);
  const [moodGeneral, setMoodGeneral] = React.useState([]);
  const [comMood, setComMood] = React.useState('');
  const [valoraciones, setValoraciones] = React.useState(0);
  const [comentarios, setComentarios] = React.useState([]);
  const [nameUser, setNameUser] = React.useState('');


  const [colaborador, setColaborador] = React.useState(false);

  var idUrl = titleProject;
  var newUrl = idUrl.replace(/ /g,"")

  let userM = localStorage.getItem('user');
 

  const MyDot = ({ isActive }) => (
    <span
      style={{
        display: 'inline-block',
        height: '10px',
        width: '10px',
        borderRadius:'10px',
        background: isActive ? '#7A76FF' : '#C4C4C4',
      }}
    ></span>
  )
  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleOpenMood = () => {
    setIsMoodOpen(true);
  };

  const handleCloseMood = () => {
    setIsMoodOpen(false);
  };
 
  const handleColaborador= () => {
    setColaborador(prev=>!prev);
    if(colaborador === false){
      setCollaborator('');
    }
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

function handleCollaborator(event) {
  setCollaborator(event.target.value);

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



function handleOption5(){
  setContentOption5(true);
  setContentOption6(false);

  setOption5(classes.btnOptionYellow);
  setOption6(classes.btnOption);

}


function handleOption6(){
  setContentOption5(false);
  setContentOption6(true);

  setOption6(classes.btnOptionYellow);
  setOption5(classes.btnOption);

}





function handleAddProject(){
  let users= [value.user.email,collaborator]

  let db = fb.firestore();


  console.log(users)
  setOpenDialog(false);


  let data = {
    titleProject: titleProject,
    dateProject: dateProject,
    step: 'Esencia de la marca',
    id:'',
    url:'', 
    percent:0,
    percentStep1:0,
    percentStep2:0,
    percentStep3:0,
    percentStep4:0,
    percentStep5:0,
    percentStep6:0,

  }
  var docRefU = db.collection('users');
  db.collection("projects").add(data)
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
   
    db.collection("projects").doc(docRef.id).update({
      "id":  docRef.id,
      "url": '/dashboard/'+newUrl+'/'+docRef.id+'/step1'
  }).then(function() {
      console.log("Document successfully updated!");
  });
 
    docRefU.get().then(function(querySnapshot) {
      
    querySnapshot.forEach(function(doc) {
      Object.values(users).forEach(element => {
        if(element === doc.id){
          if(doc.id===value.user.email){
            db.collection("projects").doc(docRef.id).collection("users").doc(doc.id).set({            
              owner:true,
            })
            db.collection('users').doc(doc.id).collection("projects").doc(docRef.id).set({            
              owner:true,
            })


          }      
          if(doc.id ===collaborator){
            db.collection("projects").doc(docRef.id).collection("users").doc(doc.id).set({            
              owner:false,

            })
            db.collection('users').doc(doc.id).collection("projects").doc(docRef.id).set({            
              owner:false,

            })
          }
       
          console.log(doc.id, " => ", doc.data());
        }
      })
        // doc.data() is never undefined for query doc snapshots
       
    });
});


})
.catch(function(error) {
    console.error("Error adding document: ", error);
});


}





React.useEffect(()=>{

  var docRefU = db.collection("projects");
  var docRef = db.collection("users").doc(userM);
  var docRefM = db.collection("moodboards");


  const listener = docRef.onSnapshot(function(doc) {

    
    if(doc.exists){
      setProject([])
      setProjectShare([])
      setMoodboard([])
      setNameUser(doc.data().name)
      var docUserCurrent = db.collection("users").doc(doc.id).collection("projects");
      var docUserCurrentM = db.collection("users").doc(doc.id).collection("moodboards");

      docUserCurrentM.onSnapshot(function(querySnapshot) {
        setMoodboard([])
        let idsMp= []
        let moodboards= []
        let moodboardsGeneral= []
        querySnapshot.forEach(function(doc) {
         idsMp.push(doc.id);
    
        });
        docRefM.onSnapshot(function(querySnapshot) {
          moodboards= []
          moodboardsGeneral= []
          querySnapshot.forEach(function(doc) {
            console.log(doc.data())
            const up={...doc.data()}
            moodboardsGeneral.push(up)
            setMoodGeneral(moodboardsGeneral)
           
            Object.values(idsMp).forEach(element => {
              if(doc.id ===element){
                const up={...doc.data()}
                moodboards.push(up);
             
              }
         
            });
  

          }); 
          setMoodboard(moodboards)
         
        });
       
    });

         docUserCurrent.onSnapshot(function(querySnapshot) {
          setProject([])
          setProjectShare([])
          let idsP= []
          let idsPS= []
          let projects= []
          let projectsShare= []
        
              querySnapshot.forEach(function(doc) {
                
              
                if(doc.data().owner===true){
                  idsP.push(doc.id)
                }
                if(doc.data().owner===false){
                  idsPS.push(doc.id)
                }
              });

              docRefU.onSnapshot(function(querySnapshot) {
              
             
                querySnapshot.forEach(function(doc2) {

                 
                Object.values(idsP).forEach(element => {
                  if(doc2.id ===element){
                    const up={...doc2.data()}
                    projects.push(up);
                 
                  }
             
                });
  
                Object.values(idsPS).forEach(element => {
                  if(doc2.id ===element){
                    const up={...doc2.data()}
                    projectsShare.push(up);
     
                  }

             
                });
                     
           
      
              });
              setProject(projects)
              setProjectShare(projectsShare)
    
            })
 
   
        });

    }else{

    }


  })
  return () => listener()

},[userM])


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
                  <p className={classes.nameMenu}>{nameUser}</p>
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
                            <span onClick={handleColaborador}className={classes.spanColaborator}>Añadir colaboradores</span>
                            {colaborador ?
                            <PlaceHolder      
                            type="text"
                            placeHolder="Escribe el correo electrónico del colaborador"
                            onChange={handleCollaborator}
                            width='357px'
                            height='50px'/>
                            :null}
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
                        <Slider showDots={true} dot={MyDot} cols={3} rows={2} gap={5} containerStyle={{ background: 'transparent',  width:'920px', 
                        height: 'auto', margin: '0 auto'}} >
                          
                        {project.map((item, i) =>
                        <Slider.Item  key={i}>  
                          <CardProject key={i}
                          {...item}
                       
                          />
                        </Slider.Item>
                        )}

                      </Slider>
                         
                      </div>
                    }

                      { contentOption2 &&

                        <div className={classes.projects}>
                        <Slider showDots={true} dot={MyDot} cols={3} rows={2} gap={5} containerStyle={{ background: 'transparent',  width:'920px', 
                        height: 'auto', margin: '0 auto'}} >
                          
                                                  
                        {projectShare.map((item, i) =>
                          <Slider.Item  key={i}>  
                          <CardProject key={i}
                          {...item}

                          />
                          </Slider.Item>

                        )}

                          
                        </Slider>
                        </div>
                      }
                      { contentOption3 &&

                      <div>
                      
                      </div>
                      }

                    { contentOption4 &&

                      <div>
                 
                      </div>
                    }

                    </div>
                  }


                  {contentShow2 &&
                    <div>
                      <div className={classes.optionsMenu}>
                      <button className={option5} onClick={handleOption5}>Mis moodboards</button>
                      <button className={option6}  onClick={handleOption6}>Todos</button>
                      </div>

                    {contentOption5 ?
                      <div className={classes.projects}>
                          
                        <Slider showDots={true} dot={MyDot} cols={3} rows={2} gap={5} containerStyle={{ background: 'transparent',  width:'920px', 
                        height: 'auto', margin: '0 auto'}} >
                       {moodboard.map((item, i) =>
                          <Slider.Item  key={i}>  
                          <CardMoodboards {...item} key={i} 
                          onClick={(event)=>{
                            console.log(item.id)

                            setValoraciones(1)
                            if(valoraciones ===1 ||valoraciones ===0  ){
                    
                              db.collection("moodboards").doc(item.id).update({
                                "valoraciones": valoraciones,
                                }) 
                              
                            }
                            if(valoraciones ===1){
                              setValoraciones(0)
                            }
    
                           
                          }} 
                          onChange={(event)=>{
                            setComMood(event.target.value)
                         
                            
                          }
                          }
                          onSend={(event)=>{
                            var aTemp= comentarios;
                           
                            aTemp.push({comentario:comMood,nombre:nameUser})
                        
                            setComentarios(aTemp)
                            db.collection("moodboards").doc(item.id).update({
                              "comentarios": comentarios,
                            }) 
                            
                          }
                          }
                          />
                          </Slider.Item>

                      )}
                      
                        </Slider>
                      </div>:null}
                      
                      
                      {contentOption6 ?
                      <div className={classes.projects}>
                          
                        <Slider showDots={true} dot={MyDot} cols={3} rows={2} gap={5} containerStyle={{ background: 'transparent',  width:'920px', 
                        height: 'auto', margin: '0 auto'}} >
                       {moodGeneral.map((item, i) =>
                          <Slider.Item  key={i}>  
                          <CardMoodboards {...item} key={i}open ={isMoodOpen} onClickOpenDialog ={handleOpenMood}onClickCloseDialog={handleCloseMood} 
                          onClick={(event)=>{
                            console.log(item.id)

                            setValoraciones(1)
                            if(valoraciones ===1 ||valoraciones ===0  ){
                    
                              db.collection("moodboards").doc(item.id).update({
                                "valoraciones": valoraciones,
                                }) 
                              
                            }
                            if(valoraciones ===1){
                              setValoraciones(0)
                            }
    
                           
                          }} 
                          onChange={(event)=>{
                            setComMood(event.target.value)
                         
                            
                          }
                          }
                          onSend={(event)=>{
                        
                           
                            comentarios.push({comentario:comMood,nombre:nameUser})
                            db.collection("moodboards").doc(item.id).update({
                              "comentarios": comentarios,
                            }) 
                            
                          }
                          }
                          />
                          </Slider.Item>

                      )}
                      
                        </Slider>
                      </div>:null}
                      
                      
                      
                      
                      
                      </div>
                  
                  
                  
                  
                  }
                  
                  
                  {contentShow3 &&
                    <div>
                      <h1>No tienes acceso. Adquiere uno de nuestros planes</h1>
                    </div>
                  }

                  {contentShow4 &&
                    <div>
                      <h1>No tienes acceso. Adquiere uno de nuestros planes</h1>
                    </div>
                  }   
                  {contentShow5 &&
                    <div>
                       <h1>No tienes acceso. Adquiere uno de nuestros planes</h1>
                    </div>
                  } 

                  {contentShow6 &&
                    <div>
                      <h1>No tienes acceso. Adquiere uno de nuestros planes</h1>
                    </div>
                  } 
                  {contentShow7 &&
                    <div>
                      <h1>No tienes acceso. Adquiere uno de nuestros planes</h1>
                    </div>
                  } 
                  {contentShow8 &&
                    <div>
                       <h1>No tienes acceso. Adquiere uno de nuestros planes</h1>
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
    padding:10,
    borderRadius: 15,
    width:465,
    height:'auto',
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
  flexDirection:'column',
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

carousel:{
  display:'flex',
  justifyContent:'center',
  marginTop:'20px'

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
  marginTop:'15px',
  flexDirection:'row',
},

spanColaborator:{
  fontFamily:'Open Sans',
  color:'#7A76FF',
  fontSize:'13px',
  alignSelf:'flex-end',
  cursor:'pointer'
}

}));

export default Dashboard;