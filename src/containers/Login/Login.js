import React from 'react';
import { Button, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DataContext from '../../context/DataContext/DataContext';
import PlaceHolder from '../../components/PlaceHolder/PlaceHolder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import BtnInitial from '../../components/BtnInitial/BtnInitial';
import { useHistory } from "react-router-dom";
//Todos los imports se coloca   n arriba de este 

import { fb } from '../../utils/firebase'
require('firebase/auth');




function Login(){
    const value = React.useContext(DataContext);
    const [email, setEmail] = React.useState('');
    const [email2, setEmail2] = React.useState('');
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [password2, setPassword2] = React.useState('');
    let db = fb.firestore();
    const [sign, setSign] = React.useState(true);
    const [user, setUser] = React.useState(value.user);
    const [changeBanner, setChangeBanner] = React.useState('images/imgLogin.jpg');
    const classes = useStyles({ urlBanner: `${changeBanner}`, urlLogo: 'images/LogoColor.svg'});
    const [changeDesc, setChangeDesc] = React.useState('La plataforma que te facilita aprender y aplicar');
    const [focusInput, setFocusInput]= React.useState(false);
    const [focusInput2, setFocusInput2]= React.useState(false);
    const [focusInput3, setFocusInput3]= React.useState(false);

    let history = useHistory();
    React.useEffect(() => {
        let isCancelled = false;
        if (!isCancelled) {
          

            if (user !== null) {

               history.push('/dashboard');

            } else {
             
                   console.log("usuario nullo");

                   
            }
          
            

          
        }
        return () => {
          isCancelled = true;
        };
      }, [history,user]);

  
    function getEmail(event){
        setEmail(event.target.value);

        if(event.target.value === ''){
            setFocusInput(false);  
        }
        else{
            setFocusInput(true);  
        }
      
    }
    function getEmail2(event){
        setEmail2(event.target.value);

        if(event.target.value === ''){
            setFocusInput(false);  
        }
        else{
            setFocusInput(true);  
        }
      
    }

   
    function getName(event){
        setName(event.target.value);

        if(event.target.value === ''){
            setFocusInput3(false);  
        }
        else{
            setFocusInput3(true);  
        }
      
    }
    
    function getPassword(event){
        setPassword(event.target.value);
        if(event.target.value === ''){
            setFocusInput2(false);  
        }
        else{
            setFocusInput2(true);  
        }
      
    }
    function getPassword2(event){
        setPassword2(event.target.value);
        if(event.target.value === ''){
            setFocusInput2(false);  
        }
        else{
            setFocusInput2(true);  
        }
      
    }
    

    function handleSign(event){
        setSign(prev => !prev); 
        if(sign === true){
            setChangeBanner('images/bannerSignUp.jpg');
    
            setChangeDesc('Comienza la experiencia de crear marcas que lleguen al corazón de las personas');

        }else {
    
            setChangeDesc('La plataforma que te facilita aprender y aplicar');
            setChangeBanner('images/imgLogin.jpg');
           
        }
    }
       
    function handleAuthGoogle(event){
        const provider = new fb.auth.GoogleAuthProvider();
        
        fb.auth().signInWithPopup(provider)
        .then((res)=>{
            history.push('/dashboard');
            return db.collection('users').doc(res.user.email).set({
                name: res.user.displayName,
                email: res.user.email,
                id: res.user.uid
            })
        })
        .catch(error => console.log (`Error ${error.code}: ${error.message}`));

    }


  const signUp=(event)=>{

    fb.auth().createUserWithEmailAndPassword(email2, password2).then((res)=>{
 
        return db.collection('users').doc(`${email2}`).set({
            name: name,
            email: email2,
            id:res.user.uid

        })
    }).then(()=>{
        history.push('/dashboard');
        console.log('creo')
    }).catch(err=>{
        console.log('no funciono')
    })
  }

    function loginEmail(event){

        fb.auth().signInWithEmailAndPassword(email,password).then(
            
            history.push("/dashboard"))
        .catch(error => console.log (`Error ${error.code}: ${error.message}`)); 


    }
    function handleLogOut(event){
        fb.auth().signOut();
       
       
    }



    return <div className={classes.body}>
      
        <button onClick={handleLogOut}>Cerrar</button>
        
        <div className={classes.contentLeft}>
            <div className={classes.logo}></div>
        <h1 className={classes.description} style={{ width:'500px' }}>{changeDesc} {sign && <span className={classes.titleItalic}>Branding</span>}</h1>
        </div>

 

    <div className={classes.contentRight}>
   
  
    
    {sign ?
    <div >  
        <div className={classes.optionSignUp}>        
            <span className={classes.captionSignUp}>¿No tienes cuenta aún?</span>
            <Button className={classes.linkSignUp} variant="outlined"   onClick={handleSign}>Regístrate
            </Button>
            
        </div>

            <h1 className={classes.titleLogin}>Iniciar sesión</h1>
            <p className={classes.subtitleLogin}>Ingresa tus datos a continuación</p>
            <PlaceHolder
                type="email"
                onChange={getEmail}
                value={email}
                width='412px'
                height='50px'
                label="E-mail"
                placeHolder="E-mail"
                className={classes.contentPlaceHolder}
                focusInput ={focusInput}
            />
            <PlaceHolder
            type="password"
            onChange={getPassword}
            value={password}
            label="Contraseña"
            width='412px'
            height='50px'
            placeHolder="Contraseña"         
            alternativeLabel="¿Olvidaste tu contraseña?"
            className={classes.contentPlaceHolder2}
            focusInput ={focusInput2}
            />

       
            <BtnInitial className={classes.btnStartNow}
            content="Iniciar sesión"
            width='410px'
            height='60px'
            onClick={loginEmail}
            marginTop='40px'
            />
         
            <div className={classes.sectionGoogle}>
            <img src={'images/divisorLogin.svg'} alt="divisor" width='406px' />
         
            <Button  variant="outlined" onClick={handleAuthGoogle} className={classes.btnGoogle}> <img className={classes.logoGoogle}src={'images/logoGoogle.svg'} alt="divisor" width='39px' /> Iniciar sesión con Google
            </Button>

            </div>
    </div>:
        <div>
            <div className={classes.optionSignUp}>        
                <span className={classes.captionSignUp}>¿Ya tienes una cuenta?</span>
                <Button className={classes.linkSignUp} variant="outlined"   onClick={handleSign}>Inicia Sesión
                </Button>
            
            </div>
            <h1 className={classes.titleLogin}>Crear una cuenta</h1>
            <p className={classes.subtitleLogin}>Regístrate absolutamente gratis </p>
            <PlaceHolder
                type="name"
                label="Nombre de usuario"
                placeHolder="Nombre de usuario"
                width='412px'
                height='50px'
                className={classes.contentPlaceHolder3}
                onChange={getName}
                value={name}
                focusInput ={focusInput3}
            />


            <PlaceHolder
                type="email"
                label="E-mail"
                placeHolder="E-mail"
                width='412px'
                height='50px'
                onChange={getEmail2}
                value={email2}
                className={classes.contentPlaceHolder4}
                focusInput ={focusInput}
            />

            <PlaceHolder
            type="password"
            onChange={getPassword2}
            width='412px'
            height='50px'
            value={password2}
            label="Contraseña"
            placeHolder="Contraseña"         
            className={classes.contentPlaceHolder4}
            focusInput ={focusInput2}
            />
            <FormControlLabel
                
                control={
                    <Checkbox
                    className={classes.checkBox}
                    color="primary"
                    />
                }
                label={<span style={{ fontFamily: 'Poppins', color:'#495057' }}>Acepto términos y condiciones</span>}
            />
            <BtnInitial className={classes.btnStartNow}
            content="Regístrate gratis"
            width='410px'
            onClick={signUp}
            height='60px'
            marginTop='15px'
            />
                   
            <div className={classes.sectionGoogle}>
                <img src={'images/divisorLogin.svg'} alt="divisor" width='406px' />
         
                <Button  variant="outlined" onClick={handleAuthGoogle} className={classes.btnGoogle}> <img className={classes.logoGoogle}src={'images/logoGoogle.svg'} alt="divisor" width='39px' /> Regístrate con Google
                </Button>

            </div>
   
        </div>
    }
    </div>

    
   

    </div>;
}
const useStyles = makeStyles(theme => ({


    body:{
        boxSizing: 'border-box',
        display:'flex',
        flexDirection:'row',
        width: 'auto',
        height: '100vh',
        flexWrap: 'nowrap',
        justifyContent:'flex-start',
        alignContent: 'space-between',
        alignItems: 'stretch',   
        backgroundSize: 'cover',
        overflowY:'hidden',
    },

    contentLeft:{
        backgroundImage: (props) => `url(${props.urlBanner})`,
        width:'50%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        flexWrap:'no-wrap',
        alignItems:'stretch'


    },
       
    logo:{
        backgroundImage: (props) => `url(${props.urlLogo})`,
        width: '179.31px',
        marginTop:'35px',
        marginLeft:'37px',
        height:'24.73px',
        alignSelf:'flex-start'
    },
    description:{
        alignSelf:'center',
        fontFamily:'Poppins',   
        fontWeight:700, 
        fontStyle:'bold',
        fontSize:'40px',
        color:'white',
        paddingTop:'25%',
        textAlign:'center',
        lineHeight:'57px',
    },
    titleItalic:{
        fontFamily: 'Poppins',
        fontStyle:'italic',
        fontWeight:700,
    },

    contentRight:{
        backgroundColor:'#ffff',
        width:'50%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        flexWrap:'no-wrap',
        marginTop:'55px',
        paddingLeft:'120px',
    },

    optionSignUp:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignContent:'flex-start',
        alignItems:'center',
        marginRight:'60px'
    },
    linkSignUp:{
        textTransform: 'none',
        fontFamily: 'Poppins',
        color:'#636363',
        backgroundColor: 'transparent',
        border: '2px solid #7A76FF',
        boxSizing: 'border-box',
        paddingLeft:'30px',
        paddingRight:'30px',
        paddingTop:'14px',
        paddingBottom:'14px',
        borderRadius: '15px',
        fontWeight:700,

        '&: hover':{
            backgroundColor: 'transparent',
        }
    },



    titleLogin:{
        fontFamily: 'Poppins',
        fontWeight:700,
        fontSize: '25px',
        color:'#070707',
        marginTop:'25px'
    },
    subtitleLogin:{
        display:'flex',
        flexWrap:'no-wrap',
        fontFamily: 'Poppins',
        fontSize: '16px',
        color:'#070707',
        fontWeight:400,
        width:'300px',
        marginTop:'23px',   
        
    },
    contentPlaceHolder:{
        marginTop:'50px',
        
    },
    contentPlaceHolder2:{
        marginTop:'10px'
    },
    contentPlaceHolder3:{
        marginTop:'30px'
    },
    contentPlaceHolder4:{
        marginTop:'2px'
    },
    checkBox:{
        fontFamily:'Poppins',
        color:'#495057'
    },

    sectionGoogle:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'flex-start',
        marginTop:20,
        alignItems:'flex-start',
    },

    btnGoogle:{
        display:'flex',
        fontFamily: 'Poppins',
        fontWeight:700,
        borderRadius:'15px',
        width:'410px',
        height:'60px',
        marginTop:20,
        fontSize: 16,
        textTransform: 'none',
    },

    logoGoogle:{
        position:'left',
        alignSelf:'flex-start',
        marginRight:'30px'
    },

    captionSignUp:{
        fontFamily: 'Poppins',
        fontWeight:400,
        fontSize: 16,
        color:'#636363',
        marginRight:'14px'
    }
}));
export default Login;