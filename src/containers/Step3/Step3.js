import React from 'react';
import{useParams} from 'react-router-dom';
import Papa from 'papaparse'
import TopBar from '../../components/TopBar/TopBar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import LateralBar from '../../components/LateralBar/LateralBar';
import CardMediaCheck from '../../components/CardMediaCheck/CardMediaCheck';
import BtnYellow from '../../components/BtnYellowG/BtnYellowG';
import BtnOutlinedStep from '../../components/BtnOutlinedStep/BtnOutlinedStep';
import BtnStep from '../../components/BtnStep/BtnStep';
import CardMediaS from '../../components/CardMediaS/CardMediaS';
import PlaceHolderBuscarMedia from '../../components/PlaceHolderBuscarMedia/PlaceHolderBuscarMedia';
import Slider from 'react-grid-carousel';
import './style.css'


//Todos los imports se coloca   n arriba de este 

import { fb } from '../../utils/firebase'
require('firebase/auth');


function Step3(){

    let {project}= useParams();
    const classes = useStyles();
    let history = useHistory();
    const [disabled, setDisabled] = React.useState(false);
    const [rows, setRows] = React.useState([]);
    const [data, setData] = React.useState([]);
    const  [btns, setBtns ]= React.useState([]);

    const [showImg, setShowImg] = React.useState(true);
    const [showVideo, setShowVideo] = React.useState(false);
    const [showSound, setShowSound] = React.useState(false);

    const [isClick, setIsClick] = React.useState(true);
    const [isClick2, setIsClick2] = React.useState(false);
    const [isClick3, setIsClick3] = React.useState(false);
    const [optionSelected, setOptionSelected] = React.useState('Imágenes');

    const [answers, setAnswers] = React.useState([]);
    let answersTemp=Object.assign([],answers)

 
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

     
    function handleBackPage(event){
        history.push(`/dashboard/${project}/main`);
    } 

    React.useEffect(() => {
        let protoData= {
            alimentos:1,
            viajes:1,
            moda:1,
            hogar:1,
            educacion:1,
            marketing:1,
            joyeria:1,
            familia:1,
            gamificacion:1,
            solidaridad:1,
            empatia:1,
            seguridad:1,
            sostenibilidad:1,
            confianza:1,
            fidelidad:1,
            lealtad:1,
            respeto:1,
            compasion:1,
            compromiso:1,
            amor:1,
            honestidad:1,
            responsabilidad:1,
            felicidad:1,
            sencillez:1,
            tranquilidad:1,
            apoyo:1,
            flexibilidad:1,
            joven:1,
            adulta:1,
            creativa:1,
            innovadora:1,
            clasica:1,
            tradicional:1,
            artesanal:1,
            tecnologia:1,
            racional:1,
            emocional:1,
            masculina:1,
            femenina:1,
            global:1,
            local:1,
            premium:1,
            popular:1,
            juguetona:1,
            seria:1,
            autoridad:1,
            amigable:1,
        }

        let db = fb.firestore();
        fb.auth().onAuthStateChanged(user => {
            var docRef = db.collection(`${user.email}`).doc(project);
            docRef.collection('Esencia de marca').doc('paso 2').get().then(function(doc) {
                if (doc.exists) {
                    var words = doc.data().respuestas;
                    words.map((t)=>{

                        if(t==='Alimentos'){
                            protoData.alimentos=5;
                        
                        }
                        if(t==='Viajes'){
                            protoData.viajes=5;
                 
                        }
                        if(t==='Moda'){
                            protoData.moda=5;
                 
                        }
                        if(t==='Hogar'){
                            protoData.hogar=5;
                            protoData.familia=5;
                 
                        }
                        return t;
                    })
                    setData(protoData)
                } else {
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });

            docRef.collection('Esencia de marca').doc('paso 3').get().then(function(doc) {
                if (doc.exists) {
                    var words = doc.data().respuestas;
                    words.map((t)=>{
 
                            var text= Object.values(t);
                            var string= text.toString().split(" ");
                 
                             string.map((w)=>{
  
                                if(w==='Hacemos' || w==='hacemos' ){
                                     protoData.artesanal=5
                                }
                                if(w==='Diseñamos'|| w==='Diseñar'|| w==='diseñamos' || w==='diseño'|| w==='Creamos' || w==='creamos' || w==='ideamos' || w==='Ideamos' ){
                                    protoData.creativa=5
                               }

                                if(w==='educación' || w==='Educación' || w=== 'Educacion' || w==='educacion'){
                                    protoData.educacion=5
                                }

                                if(w==='tecnologia' || w==='Tecnologia' || w=== 'tecnología' || w==='Tecnología'){
                                    protoData.tecnologia=5
                                }

                                if(w==='gamificacion' || w==='Gamificación' || w=== 'gamificación' || w==='Gamificacion'){
                                    protoData.gamificacion=5
                                }



                                 return w;
                             })
                       

                        return t;
                    })
                    setData(protoData)
                } else {
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });

            docRef.collection('Esencia de marca').doc('paso 4').get().then(function(doc) {
                if (doc.exists) {
                    var words = doc.data().respuestas;
                    words.map((t)=>{

                            var text= Object.values(t);
                            var string= text.toString().split(" ");
                 
                             string.map((w)=>{
           
                                if(w==='Sostenible'|| w==='Eco' || w==='Ecológicos'|| w==='ecológicos' || w==='eco' || w==='ecologicos' || w==='ecoamigables' ){
                                     protoData.sostenibilidad=5
                                }

                                if(w==='Creatividad'|| w==='creación' || w==='crear'|| w==='Crear' || w==='Creando'  ){
                                    protoData.creativa=5
                               }

                               if(w==='Apoyar'|| w==='apoyar' || w==='apoyamos'|| w==='Apoyamos' || w==='acompañando' || w==='acompañamos'  ){
                                protoData.apoyo=5
                            }
   



                                 return w;
                             })
                       

                        return t;
                    })
                    setData(protoData)
                } else {
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });

            docRef.collection('Esencia de marca').doc('paso 5').get().then(function(doc) {
                if (doc.exists) {
                    var words = doc.data().respuestas;
                    words.map((t)=>{
                            var text= Object.values(t);
                            var string= text.toString().split(" ");
                 
                             string.map((w)=>{
                                if(w==='pasion' || w==='apasionados' || w==='amor' || w==='pasión' || w==='Pasión' ){
                                     protoData.amor=5
                                     protoData.emocional=4
                                }

                                if(w==='innovación' || w==='Innovación' ){
                                    protoData.innovadora=5
                         
                               }

                                 return w;
                             })
                       

                        return t;
                    })
                    setData(protoData) 
                } else {
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });

            docRef.collection('Esencia de marca').doc('paso 6').get().then(function(doc) {
                if (doc.exists) {
                    var words = doc.data().respuestas;
                    words.map((t)=>{
                            var text= Object.values(t);
                    
                        if(text === 'amor' || text ==='Amor' || text==='AMOR'){
                            protoData.amor=5;
                        }
       
                        if(text === 'SOLIDARIDAD' || text ==='Solidaridad' || text==='solidaridad'){
                            protoData.solidaridad=5;
                        }

                        if(text === 'Empatía' || text ==='Empatia' || text==='EMPATÍA' || text==='EMPATIA' || text==='empatía' || text==='empatia'){
                            protoData.empatia=5;
                        }

                        if(text === 'Seguridad' || text==='SEGURIDAD'  || text ==='seguro' || text==='SEGURO' || text==='Seguro' || text==='segura' || text==='SEGURA' || text === 'Segura'){
                            protoData.seguridad=5;
                        }

                        if(text === 'Confianza' || text==='CONFIANZA'  || text ==='confianza' || text==='Confiable' || text==='CONFIABLE' || text==='confiable' ){
                            protoData.confianza=5;
                        }

                        if(text === 'Fiel' || text==='fidelidad'  || text ==='FIEL' || text==='FIDELIDAD' || text==='fiel' || text==='Fidelidad' ){
                            protoData.fidelidad=5;
                        }

                        if(text === 'Leal' || text==='lealtad'  || text ==='LEAL' || text==='LEALTAD' || text==='leal' || text==='Lealtad' ){
                            protoData.lealtad=5;
                        }
                        if(text === 'Respeto' || text==='respeto'  || text ==='RESPETO' ){
                            protoData.respeto=5;
                        }
                        if(text === 'Compasión' || text==='COMPASIÓN'  || text ==='compasión' || text === 'Compasion' || text==='COMPASION'  || text ==='compasion'){
                            protoData.compasion=5;
                        }
                        if(text === 'Compromiso' || text==='COMPROMISO'  || text ==='compromiso' || text === 'Comprometidos' || text==='Comprometido'  || text ==='Comprometida'){
                            protoData.compromiso=5;
                        }
                        if(text === 'Honestidad' || text==='HONESTIDAD'  || text ==='honestidad' ){
                            protoData.honestidad=5;
                        }

                        if(text === 'Felicidad' || text==='feliz'  || text ==='FELICIDAD' ||text ==='felicidad' ){
                            protoData.felicidad=5;
                        }

                        if(text === 'sencillez' || text==='Sencillez'  || text ==='sencillo' ||text ==='SENCILLEZ' || text ==='Sencillo' || text==='fácil' || text==='a la mano'){
                            protoData.sencillez=5;
                        }

                        if(text === 'responsable' || text==='Responsable'  || text ==='RESPONSABLE' ||text ==='responsabilidad' || text ==='Responsabilidad' || text==='RESPONSABILIDAD'){
                            protoData.responsabilidad=5;
                        }
                        if(text === 'tranquilidad' || text==='Tranquilidad'  || text ==='TRANQUILIDAD' ||text ==='Tranquilo' || text ==='TRANQUILO' || text==='TRANQUILA'){
                            protoData.tranquilidad=5;
                        }
                       

                        return t;
                    })
                    setData(protoData) 
                } else {
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
              
    setData(protoData)

     
})



    }, [project]);

    React.useEffect(() =>{
        async function getData() {
			const response = await fetch('/database/baseDatosSistema.csv')
			const reader = response.body.getReader()
			const result = await reader.read() // raw array
			const decoder = new TextDecoder('utf-8')
			const csv = decoder.decode(result.value) // the csv text
			const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
			const rows = results.data // array of objects
			setRows(rows)
		}
		getData()

    }, [])
    	

    let proto =Object.assign(data) ;
    var objetoX = proto;
    var newRows= Object.assign(rows);
    var newArray = newRows;
    const [listaOrdenados, setListaOrdenados] = React.useState([]);

    React.useEffect(()=>{
        var nuevosK = [];
      
        let objetoB;
        let objetoA=Object.values(objetoX);

        for (let index = 0; index < newArray.length; index++) {
            objetoB = Object.values(newArray[index]).slice(3);
          
			
			var numerador = 0;
			var denominadorA = 0;
			var denominadorB = 0;
	
			
			for (let index = 0; index < objetoA.length; index++) {
				numerador += (parseInt(objetoA[index]) * parseInt(objetoB[index]));
				denominadorA += (parseInt(objetoA[index]) * parseInt(objetoA[index]));
				denominadorB += (parseInt(objetoB[index]) * parseInt(objetoB[index]));
			}
			
			denominadorA = Math.sqrt(denominadorA);
			denominadorB = Math.sqrt(denominadorB);
			var valorK = numerador / (denominadorA * denominadorB);
            var valorFinalK = parseInt(valorK * 100);

       
            
			
			if (valorFinalK < 99) {
				nuevosK.push({
                    nombreArchivo: newArray[index].nombre,
                    url: newArray[index].url,
                    valorK: valorFinalK ,
                    select:false,
				});
            }
           
            setListaOrdenados( nuevosK.sort((a, b) => (a.valorK > b.valorK) ? - 1 : 1));
       
		}
        
    },[newArray,objetoX])

      function handleNextPage(event){
        console.log(project.step);
       
       history.push('/dashboard/'+project+'/finished3');
      }
 

  
     
    React.useEffect(()=>{

        let btns=[{
            id:1,
            content:'Imágenes',
            checked:isClick,
        },
        {
            id:2,
            content:'Sonidos',
            checked:isClick2,
        },
        {
            id:3,
            content:'Vídeos',
            checked:isClick3,
        },
    ]

    setBtns(btns);
   

  
    },[isClick,isClick2,isClick3])

    React.useEffect(()=>{
        
    })


      

    return (
        <div className={classes.body}>
            <div>
            <div>
                <TopBar titleProject={project}/>
            </div>
            <div className={classes.content}>
                <LateralBar/>
                <div className={classes.contentRight}>

                <div className={classes.contentText}>
                        <img className ={classes.skip} alt='skip'  src={('/images/skipStep.svg')} onClick={handleNextPage}/>
                       <h3 className={classes.title}>Panel de recursos</h3>

                </div>
                <div className={classes.btns}>
                {btns.map((item,i)=>
                               <BtnYellow key={i}{...item}  onClick={(event)=>{
                                setOptionSelected(`${item.content}`);

                            
                                if(item.content==='Imágenes'){
                                    setIsClick(true);
                                    setShowImg(true);
                                      
                                }else{
                                    setIsClick(false);
                                    setShowImg(false);
                               
                                }
                                if(item.content==='Sonidos'){
                                    setIsClick2(true);
                                    setShowSound(true);
                                   
                                }else{
                                    setIsClick2(false);
                                    setShowSound(false);
                                
                                }
                                if(item.content==='Vídeos'){
                                    setIsClick3(true); 
                                    setShowVideo(true); 
                                }else{
                                 setIsClick3(false);
                                 setShowVideo(false); 

                                }

                               }}/>
                               

                           
                            )}
                        <PlaceHolderBuscarMedia placeHolder='Buscar'/>
                            
                </div>
          
                {showImg ?
                    <div className={classes.carousel}>
                    <Slider showDots={true} dot={MyDot} cols={4} rows={2} gap={10} containerStyle={{ background: 'transparent',  width:'820px', 
                    height: '400px', margin: '0 auto'}} >
          
                    {listaOrdenados.map((item, i) =>
                    <Slider.Item  key={i}>         
                        <CardMediaCheck
                        {...item}
                        onChange={(event)=>{
                            let checked=event.target.checked;
                                var j = -1;
                                
                                answersTemp.forEach((answer,k) => {
                                 
                                    if(item.nombreArchivo===answer.nombre){
                                        console.log(item.nombreArchivo);
                                        console.log(answers.nombre)
                                       j=k;
                                    }
                            
                                });
                                item.select=checked;
                                //ENCONTRO
                                if(j!== -1){
                                    
                                    if(checked===true){
                                        answersTemp[j].select=true;
                                    }else{
                                        
                                        answersTemp.splice(j,1);
                                    }

                                }else{//NO ENCONTRO
                                    answersTemp.push({nombre:item.nombreArchivo, url:item.url, select:true, tipo:item.tipo})
                                    
                                }
                                setAnswers(answersTemp)
                        
                                if(answersTemp.length>0){
                                    setDisabled(false)
                                }
                        }}

                        />
                    </Slider.Item>
           
  
                )}
                </Slider>
                </div>:null}
                
                {showSound ?
                    <div className={classes.carousel}>
                    <Slider showDots={true} dot={MyDot} cols={4} rows={2} gap={10} containerStyle={{ background: 'transparent',  width:'820px', 
                    height: '400px', margin: '0 auto'}} >
          
                    {listaOrdenados.map((item, i) =>
                    <Slider.Item  key={i}>         
                        <CardMediaCheck
                        {...item}
                        onChange={(event)=>{
                            let checked=event.target.checked;
                                var j = -1;
                                
                                answersTemp.forEach((answer,k) => {
                                 
                                    if(item.nombreArchivo===answer.nombre){
                                        console.log(item.nombreArchivo);
                                        console.log(answers.nombre)
                                       j=k;
                                    }
                            
                                });
                                item.select=checked;
                                //ENCONTRO
                                if(j!== -1){
                                    
                                    if(checked===true){
                                        answersTemp[j].select=true;
                                    }else{
                                        
                                        answersTemp.splice(j,1);
                                    }

                                }else{//NO ENCONTRO
                                    answersTemp.push({nombre:item.nombreArchivo, url:item.url, select:true})
                                    
                                }
                                setAnswers(answersTemp)
                        
                                if(answersTemp.length>0){
                                    setDisabled(false)
                                }
                        }}

                        />
                    </Slider.Item>
           
  
                )}
                </Slider>
                </div>:null}
                
                {showVideo ?
                    <div className={classes.carousel}>
                    <Slider showDots={true} dot={MyDot} cols={4} rows={2} gap={10} containerStyle={{ background: 'transparent',  width:'820px', 
                    height: '400px', margin: '0 auto'}} >
          
                    {listaOrdenados.map((item, i) =>
                    <Slider.Item  key={i}>         
                        <CardMediaCheck
                        {...item}
                        onChange={(event)=>{
                            let checked=event.target.checked;
                                var j = -1;
                                
                                answersTemp.forEach((answer,k) => {
                                 
                                    if(item.nombreArchivo===answer.nombre){
                                        console.log(item.nombreArchivo);
                                        console.log(answers.nombre)
                                       j=k;
                                    }
                            
                                });
                                item.select=checked;
                                //ENCONTRO
                                if(j!== -1){
                                    
                                    if(checked===true){
                                        answersTemp[j].select=true;
                                    }else{
                                        
                                        answersTemp.splice(j,1);
                                    }

                                }else{//NO ENCONTRO
                                    answersTemp.push({nombre:item.nombreArchivo, url:item.url, select:true})
                                    
                                }
                                setAnswers(answersTemp)
                        
                                if(answersTemp.length>0){
                                    setDisabled(false)
                                }
                        }}

                        />
                    </Slider.Item>
           
  
                )}
                </Slider>
                </div>:null}
                
                
                
                
                
                
                <div className={classes.actions}>
                        <BtnOutlinedStep
                        width='149px'
                        height='48px'
                        onClick={handleBackPage}
                        />
                        <div className={classes.icons}>
                        <img alt='tutorial' className={classes.iconsAction}   src={('/images/tutorial.svg')}/>
                        </div>
                        
                        <BtnStep
                        disabled={disabled}
                        content='Continuar'
                        width='149px'
                        height='48px'
                        onClick= {handleNextPage}
                        
                        />

      
                    </div>
                </div>
            </div>
            </div>

            <div className={classes.mediaSelect}>
                <div>
                    <h1 className={classes.titleMediaSelect}>Recursos seleccionados</h1>
                </div>
                <div className={classes.cardSelects}>
                {answers.map((item,i)=>
                               <CardMediaS key={i}{...item} onClick={(event)=>{
                                
                               
                               let lista=Object.assign([],listaOrdenados)
                                lista.forEach((answer,k) => {
                                 
                                    if(answer.nombreArchivo===item.nombre){
                                        answer.select=false;
                                        console.log(answer.select);
                                        console.log(item.nombre)
                                
                                    }
                            
                                });
                                setListaOrdenados(lista)
                                answersTemp.splice(i, 1);
                                setAnswers(answersTemp);
                  
                             
                               }
                            }/>
                )}


          
                </div>
               

            </div>
            

      </div>
      );

}
      const useStyles = makeStyles(theme => ({
        body:{
            boxSizing: 'border-box',
            display:'flex',
            width: 'auto',
            height: '100vh',
            flexWrap: 'no-wrap',
            backgroundColor:'#FAFAFA',
   
            flexDirection:'row',
            justifyContent:'flex-start',
            alignContent:'center',
    
        },
        mediaSelect:{
            display:'flex',
            flexDirection:'column',
            backgroundColor:'#F9FAFC',
            boxShadow: '-8px 0px 16px rgba(228, 228, 228, 0.25)',
            height: '100%',
            width: '345px',


        },
        titleMediaSelect:{
            padding:50,
            fontFamily:'Poppins',
            fontSize:'19px',
            fontWeight:500,

        },
        cardSelects:{
            justifyContent:'center',
            overflow: 'scroll',
            alignSelf:'center',
            width:'332px',
            height:'auto',
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',

        },

        content:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-around',
            flexWrap:'no-wrap',
        },
        progressContent:{
            display:'flex',
            marginTop:'20px',
            
        },
        progress:{
            display:'flex',
            flexWrap:'no-wrap',            
        },

        contentText:{
            marginTop:'16px',
            display:'flex',
            flexDirection:'row',
            justifyContent:'flex-start',
            alignContent:'center',
            alignItems:'center',
            width:'100%',
            flexWrap:'no-wrap',
            
         
        },

        contentRight:{
            display:'flex',
            width:'85%',
            marginLeft:'110px',
            flexDirection:'column', 
            alignContent:'flex-start',
            alignItems:'flex-start',
            flexWrap:'no-wrap',
            justifyContent:'flex-start',
        },

        titleStep:{
            fontFamily:'Poppins',
            flexWrap:'no-wrap',
            fontWeight:600,
            fontSize:'23px',
        },
        description:{
            fontFamily:'Open Sans',
            flexWrap:'no-wrap',
            marginTop:'18px',   
            fontWeight:400,
            fontSize:'18px',
        },

      


        btnOption:{
            color:'#CCCCCC',
            fontFamily:'Poppins',
            border:'none',
            background:'none',
            outline:'none',
            cursor:'pointer',
            marginTop:'32px',
            fontWeight:600,
           
          },

          options:{
            display:'flex',
            flexDirection:'column',
            width:'50%',
            flexWrap:'no-wrap', 
            justifyContent:'flex-start',
            alignContent:'flex-start',
            alignItems:'flex-start',

          },

          contentBottom:{
            display:'flex',
            width:'79%',    
            marginTop:'30px',
            flexDirection:'column',
            flexWrap:'no-wrap',
            alignItems:'flex-start',
            justifyContent:'center'
          },
          
          
          
          btnOptionYellow:{
            fontWeight:600,
            backgroundColor:'#FFD984',
            color:'#212429',
            width:'auto',
            paddingLeft:'20px',
            paddingRight:'20px',
            height:'46px',
            marginTop:'20px',
            borderRadius:'20px',
            fontFamily:'Poppins',
            border:'none',
            outline:'none',
            cursor:'pointer',
          },
          actions:{
            display:'flex',
            flexDirection:'row',
            flexWrap:'no-wrap',
            alignSelf:'flex-start',
            justifyContent:'space-between',
            width:'850px',   
            marginTop:'20px'
          },
          tutorial:{
              cursor:'pointer',
          },
          contentVideo:{
            display:'flex',
            flexDirection:'row',
            flexWrap:'no-wrap',
            width:'100%',
            height:'342px',
          },

          video:{
              borderRadius:'155px',
          },
          media:{
              display:'flex',
              width:'800px',
              flexDirection:'row',
              flexWrap:'wrap'
          },
          cards:{
              display:"flex",
          },



        title:{
            fontFamily:'Poppins',
            fontSize:'21px',
        },
        carousel:{
            display:'flex',
            justifyContent:'center',
            width:'850px',
            height:'400px',

        },
        btns:{
            display:'flex',

        }

          
    
    
    }));




export default Step3; 