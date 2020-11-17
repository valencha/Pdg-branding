import React from 'react';
import{useParams} from 'react-router-dom';
import Papa from 'papaparse'
import TopBar from '../../components/TopBar/TopBar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import LateralBar from '../../components/LateralBar/LateralBar';


//Todos los imports se coloca   n arriba de este 

import { fb } from '../../utils/firebase'
require('firebase/auth');


function Step2(){

    let {project}= useParams();
    const classes = useStyles();
    let history = useHistory();
 
    const [rows, setRows] = React.useState([]);
    const [data, setData] = React.useState([]);
    
 

   

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
    var objetoX = proto
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
					valorK: valorFinalK ,
				});
            }

            setListaOrdenados(nuevosK.sort((a, b) => (a.valorK > b.valorK) ? - 1 : 1));
		}
        
    },[newArray,objetoX])

      function handleNextPage(event){
        console.log(project.step);
       
       history.push('main');
      }
     


      

    return (
        <div className={classes.body}>
            <div>
                <TopBar titleProject={project}/>
            </div>
            <div className={classes.content}>
                <LateralBar/>
                <div className={classes.contentRight}>
                    <div className={classes.progressContent}>

                    </div>
                    <div className={classes.media}>
                    {listaOrdenados.map((item, i) =>
                    <div key={i}>
                    <h1>{item.nombreArchivo}</h1>
                    <span>{item.valorK}</span>
                    </div>
                    )}
                    </div>  
        
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
            overflowY:'hidden',
            flexDirection:'column',
            justifyContent:'flex-start',
            alignContent:'center',
    
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
            flexWrap:'no-wrap',
            
        },
        progress:{
            display:'flex',
            flexWrap:'no-wrap',            
        },

        contentText:{
            display:'flex',
            flexDirection:'column',
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
            alignSelf:'flex-end',
            justifyContent:'space-between',
            width:'100%',   
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
              flexDirection:'row',
              flexWrap:'wrap'
          }

          
    
    
    }));




export default Step2; 