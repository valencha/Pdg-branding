import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BtnInitial from '../../components/BtnInitial/BtnInitial';
import './Reset.css';



function Home (props){
    const classes = useStyles({ urlBanner: '/images/fondoInicio.jpg', urlLogo: '/images/LogoColor.svg'});

     return <div className ={classes.body}>
       
       
        <div className={classes.menu}>
            <div className={classes.logo}></div>

            <div className={classes.options}>
                <h1 className={classes.option}>Acerca de</h1>
                <h1 className={classes.option}>Producto</h1>
                <h1 className={classes.option}>Planes</h1>
                <h1 className={classes.option}>Nosotros</h1>
            </div>
            <div>
                <Link className={classes.linkSignIn}  to={ `/login`}>Iniciar sesión</Link>  
                <Link  className={classes.linkSignUp} to={ `/login`}>Registrarse</Link>  
             
            </div>
        </div>
        <div className={classes.title}>
            <h1>Anímate a innovar en <span className={classes.titleItalic}>Branding</span></h1>
        </div>
        <div className={classes.description}>
            <h1>La mejor marca que jamás hayas creado te está esperando</h1>
        </div>
        <div className={classes.btnInitials}>
            <BtnInitial className={classes.btnStartNow}
            content="Comenzar ahora"
            width='203px'
            height='48px'
            />
            <div className={classes.btnWatchDemo}>
            <img src={'/images/IconPlay.png'} alt="watch" width='32px' />
            <h1 className={classes.watchDemo}>Ver demo</h1>
            </div>
        
        </div>

    </div>;
}
const useStyles = makeStyles(theme => ({
    
    
    body:{
        boxSizing: 'border-box',
        display:'flex',
        flexDirection:'column',
        width: 'auto',
        height: '100vh',
        flexWrap: 'nowrap',
        alignContent: 'center',
        alignItems: 'center',   
        backgroundImage: (props) => `url(${props.urlBanner})`,
        backgroundSize: 'cover',
        overflowY:'hidden',

    },
    menu:{
        display:'flex',
        flexDirection:'row',
        paddingTop:'35px',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',  
        width:'100%',

    },
    logo:{
        backgroundImage: (props) => `url(${props.urlLogo})`,
        width: '179.31px',
        height:'24.73px',
    },
    options:{
        fontFamily: 'Poppins',
        color:'white',
        display:'flex',
        flexDirection:'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',  
        order: 0,
        flex: '0 1 auto',
        alignSelf: 'auto',
        width:'35%',   
    },
    option:{
        order: 0,
        flex: '0 1 auto',
        marginRight:'41px',
        alignSelf: 'auto',
        fontWeight:700,
    },
    linkSignIn:{
        textDecoration:'none', 
        fontFamily: 'Poppins',
        color:'white',
        marginRight:'41px',
        fontWeight:700,
    },
    linkSignUp:{
        textDecoration:'none', 
        fontFamily: 'Poppins',
        color:'white',
        marginRight:'41px',
        border: '2px solid #7A76FF',
        boxSizing: 'border-box',
        paddingLeft:'30px',
        paddingRight:'30px',
        paddingTop:'14px',
        paddingBottom:'14px',
        borderRadius: '15px',
        fontWeight:700,
    },
    title:{
        alignSelf:'center',
        paddingTop:'100px',
        fontSize:'50px',
        fontFamily: 'Poppins',
        color:'white',
        fontWeight:700,
    },
    titleItalic:{
        fontFamily: 'Poppins',
        fontStyle:'italic',
        fontWeight:700,
    },
    description:{
        alignSelf:'center',
        fontFamily: 'Poppins',
        paddingTop:'50px',
        fontSize:'28px',
        color:'white',
        fontWeight:500,
        
    },
    btnInitials:{
        alignSelf:'center',
        paddingTop:'100px',
        display:'flex',
        flexDirection:'row',
        flexWrap:'no-wrap',
        justifyContent:'space-around',
        alignContent:'center',
        alignItems:'center',
    },
    btnWatchDemo:{
        display:'flex',
        marginLeft:'100px',
        alignContent:'center',
        alignItems:'center',
        fontWeight:700,
    },
    watchDemo:{
        fontFamily: 'Poppins',
        fontSize:'16px',
        color:'white',
        marginLeft:'10px',
        fontWeight:700,
        
    }
}));
export default Home;