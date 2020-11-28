import React from 'react';
import{useParams} from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import LateralBar from '../../components/LateralBar/LateralBar';
import BtnOutlinedStep from '../../components/BtnOutlinedStep/BtnOutlinedStep';
import BtnStep from '../../components/BtnStep/BtnStep';
import BtnYellow from '../../components/BtnYellow/BtnYellow';
import Dialog from '../../components/DialogShare/DialogShare';



//Todos los imports se coloca   n arriba de este 

import { fb } from '../../utils/firebase'
let db = fb.firestore();
require('firebase/auth');

let btns=[{
    id:1,
    content:'Sí',
    checked:false,
},
{
    id:2,
    content:'No',
    checked:false,
},
]





function Step4Share(){

    let {project,id}= useParams();
    const classes = useStyles();
    let history = useHistory();
    const [indexOption, setIndexOption] = React.useState('none') 
    var image = localStorage.getItem('imgCanvas')
    const [showContent, setShowContent] = React.useState(true) 

    
    const [description, setDescription] = React.useState('') 
    //console.log( JSON.parse(image))
    const handleOpen = () => {
        setShowContent(true);
      };
    
      const handleClose = () => {
        setShowContent(false);
      };

    function handleNextPage(event){
      //  history.push('/dashboard/'+project+'/'+id+'/step1');

      }


    function handleShareMoodboard(event){

        
        var storageRef= fb.storage().ref(`/${id}/`)
       storageRef.putString(image,'data_url').then(function(snapshot){
           console.log('done')
       })
  
        console.log(event)
        db.collection("moodboards").doc(id).set({
            titleProject:project,
            description:description,
            valoraciones:[],
            comentarios:[]

        }).then(function(docRef){
            var docRefP = db.collection("projects").doc(id).collection('users')
        
            docRefP.get().then(function (querySnapshot) {
            
                querySnapshot.forEach(function (doc) {
                    

                    var docRefU = db.collection("users").doc(doc.id)
                    db.collection("users").doc(doc.id).collection('moodboards').doc(id).set({titleProject:project})
                    docRefU.get().then(function(doc) {
                        if(doc.exists){
                            var name= doc.data().name   
                            db.collection("moodboards").doc(id).collection('users').doc(doc.id).set({name})
                            
                        }
               
                       
                    })
                    
     
                });
  

        })

    })}



    function handleBackPage(event){
      history.push('/dashboard/'+project+'/'+id+'/step4');
    }
      
    function onChangeDescription(event){
        setDescription(event.target.value)
    }
 
      

    return (
        <div className={classes.body}>
            <div>
                <TopBar titleProject={project}/>
            </div>
            <div className={classes.content}>
                <LateralBar/>
                <div className={classes.contentRight}>

                    <div className={classes.contentText}>
                        <img className ={classes.skip}  alt='skip'  src={('/images/skipStep.svg')} onClick={handleNextPage}/>
                       <h1 className={classes.title}>Moodboard sensorial</h1>

                    </div>
                    <div className={classes.contentBottom}>
                    <div className={classes.contentVideo}>
                   
                    <div>
                        <div>
                            <p className={classes.description}>¿Te gustaría publicar el Moodboard sensorial de tu proyecto para que otros usuarios lo vean, califiquen y lo retroalimenten?</p>
                        </div>
                        <div className={classes.btns}>
                            {btns.map((item,i)=>
                               <BtnYellow key={i}{...item}
                               checked={ indexOption === item.content} onChange={async(event)=>{
                                setIndexOption(item.content)
                   
                

                                if(item.content==='Sí'){   
                                setShowContent(prev => !prev)
                                }
                                else if(item.content==='No'){
                                    setShowContent(false)
                                }

                            }}/>
                               

                           
                        )} 
                        </div> 
                    </div>
                    {showContent?
                     <Dialog onChange={onChangeDescription} description={description} onClick={handleShareMoodboard} open={showContent} handleOpen={handleOpen} handleClose={handleClose}/>:null}
                   
                    <div><img className ={classes.video} alt='video'  width='710px' src={image}/></div>
                    
                    </div>         
                    
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
                        content='Continuar'
                        width='149px'
                        height='48px'
                        onClick={handleNextPage}
                        
                        />
                    </div>
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

        contentText:{
            marginTop:'46px',
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


        title:{
            fontFamily:'Poppins',
            fontSize:'21px',
        },
        description:{
            fontFamily:'Open Sans',
            flexWrap:'no-wrap',
            lineHeight: '29px',  
            color:'#212429',
            marginLeft:'32px',
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


          contentBottom:{
            display:'flex',
            width:'79%',  
            height:'100%',  
            marginTop:'20px',
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
            marginTop:'86px'
                  
          },
          tutorial:{
              cursor:'pointer',
          },

          
          
          num:{
            fontFamily:'Open Sans',
            fontWeight:700,
            fontSize:'18px'
          },

          branding:{
              fontStyle:'italic',
          },

          contentVideo:{
              display:'flex',
              flexDirection:'row',
              height:'335px',
          },
          skip:{
              cursor:'pointer',
          },
          btns:{
              display:'flex',
              marginTop:'64px'
          },



          

          

    
    
    }));




export default Step4Share; 