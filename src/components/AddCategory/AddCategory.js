import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import PlaceHolder from '../../components/PlaceHolder/PlaceHolder';
import BtnOutlined from '../../components/BtnOutlined/BtnOutlined';
import BtnInitial from '../../components/BtnInitial/BtnInitial';

function AddCategory(props){
    const classes = useStyles();

    return (


            <Dialog classes={{paper: classes.rootStyle}} open={props.openDialog} onClose={props.handleClose} >
                    
                <div width='465px' height='367px'  className={classes.contentDialog} >

                    <div className={classes.dialogTop}>
                        <h1 className={classes.titleDialog}>Nuevo Categoría</h1>
                        <img className={classes.closeDialog} width='24px' src={('/images/close.svg')} onClick={() => props.handleClose()}alt="divisor" />
                    </div>
                    <div className={classes.placeHolder}>
                        <PlaceHolder      
                        type="text"
                        placeHolder="Nombre de nueva categoría"
                        width='357px'
                        height='48px'/>

                    </div>
                    <div className={classes.btnImage}>
                          <button onClick={props.onClick} className={classes.btn}> <img className ={classes.iconEdit} alt='iconImage'  src={('/images/image.svg')}/>Agregar Imagen</button>
                          <p className={classes.span}>*Opcional</p>
                    </div>

                    <div className={classes.actionsDialog}>
                      <BtnOutlined
                      content="Cancelar"
                      width='112px'
                      height='48px'
                      marginRight='16px'
                      onClick={props.handleClose}
                      marginTop='12px'
                      

            
                      /> 
                      
                      <BtnInitial
                      content="Crear"
                      width='112px'
                      height='48px'
                      marginTop='12px'
                      /> 
                      </div>

                    
                    
                </div>
            </Dialog>
           
    );
    }
    const useStyles = makeStyles(theme => ({
        closeDialog:{
            cursor:'pointer'
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
            marginTop:'24px',
            marginRight:'54px',
          
          },
          rootStyle: {
            borderRadius: 15,
            width:465,
            height:367,
          },
          placeHolder:{
            display:'flex',
            alignSelf:'center',
            width:'357px',
            marginTop:'28px'
          },

            btn: {
        width: (props) => `${props.width}`,
        height: (props) => `${props.height}`,
        marginTop: (props) => `${props.marginTop}`,
        marginRight: (props) => `${props.marginRight}`,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        cursor:'pointer',
        textTransform: 'none',
        fontFamily: 'Poppins',
        fontSize:'16px',
        color:'#686B6E',
        paddingRight:'19px',
        paddingLeft:'19px',
        paddingTop:'12px',
        paddingBottom:'12px',
        border:'none',
        backgroundColor: '#FFFFFF',
        boxSizing: 'border-box',
        outline:'none',
        borderRadius: '15px',
        fontWeight:600,
        boxShadow:' 2px 8px 16px rgba(61, 62, 66, 0.1)',  
  
        '&: hover':{
            backgroundColor: 'transparent',
        }

    },

    iconEdit:{
        marginRight:'5px'
    },

    btnImage:{
        display:'flex',
        justifyContent:'space-around',
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center'
    },

    span:{
        fontFamily:'Poppins',
        fontSize:'16px',
        fontWeight:400,
        marginLeft:'16px'

    }

    }));
    
    export default AddCategory;