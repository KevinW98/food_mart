import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import diaryImage from './images/diary.JPG';
import beverageImage from './images/beverages.JPG';
import snacksImage from './images/snacks.JPG';
import preparedFoodImage from './images/preparedFood.JPG';
import breadImage from './images/breads.JPG';
import{Button} from "@material-ui/core";


export default function HomePage () {
const classes = homPageStyle();

  return ( <div className={classes.homePage}>
            <div className={classes.directoryMenu}>
                <div className={classes.categoryBeverage}>
                    <h1 className={classes.title}>Beverages</h1>
                    <br/><br/><br/><br/>
                    <Button  variant='contained' style={{color:'#689f38'}} href='/beverages' className={classes.subtitle}>SHOP NOW</Button>
                </div>
                <div className={classes.categorySnacks} >
                    <h1 className={classes.title}>Snacks</h1>
                    <br/><br/><br/><br/>
                    <Button  variant='contained' style={{color:'#689f38'}} href='/snacks' className={classes.subtitle}>SHOP NOW</Button>
                </div>
                <div className={classes.categoryDiary}>
                    <h1  className={classes.title}>Dairy & Eggs</h1>
                    <br/><br/><br/><br/>
                    <Button  variant='contained' style={{color:'#689f38'}} href='/diary' className={classes.subtitle}>SHOP NOW</Button>
                </div>
                <div className={classes.categoryPrepared}>
                    <h1 className={classes.title}>Prepared Foods</h1>
                    <Button  variant='contained' style={{color:'#689f38'}}  href='/preparedFood' className={classes.subtitle}>SHOP NOW</Button>

                </div>
                <div className={classes.categoryBreads}>
                    <h1  className={classes.title}>Breads</h1>
                    <Button  variant='contained' style={{color:'#689f38'}}  href='/breads' className={classes.subtitle}>SHOP NOW</Button>
                </div>
            </div>
    </div>)
}


const homPageStyle = makeStyles({
    homePage:{
       display:'flex',
       flexDirection:'column',
       alignItems:'center',
       padding:'10% 15%'

    },
    directoryMenu:{
        position:'absolute',
        top:'22%',
        width:'80%',
       display:'flex',
       flexWrap:'wrap',
       flexDirection:'row',
       justifyContent:'center',

    },
      categorySnacks:{
          borderRadius:'10px',
          backgroundImage:`url(${snacksImage})`,
          backgroundSize:'cover',
          paddingBottom:'2%',
          display:'flex',
          flexDirection:'column',
          justifyContent:'stretch',
          height:'0%',
          width:'23%',
          alignItems:'center',
          marginLeft:'2%' ,
          transition:'transform 2s',
          marginBottom:'1.5%',
          '&:hover':{
              transform:'scale(1.1)',
              cursor:'pointer'
          }
    },
    categoryBeverage:{
        borderRadius:'10px',
        backgroundImage:`url(${beverageImage})`,
        backgroundSize:'cover',
        paddingBottom:'2%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'stretch',
        height:'0%',
        width:'23%',
        alignItems:'center',
        marginLeft:'2%' ,
        transition:'transform 2s',
        marginBottom:'2%',
        '&:hover':{
            transform:'scale(1.1)',
            cursor:'pointer'
        }
    },
    categoryDiary:{
        borderRadius:'10px',
        backgroundImage:`url(${diaryImage})`,
        backgroundSize:'cover',
        paddingBottom:'2%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'stretch',
        height:'0%',
        width:'23%',
        alignItems:'center',
        marginLeft:'2%' ,
        transition:'transform 2s',
        marginBottom:'2%',
        '&:hover':{
            transform:'scale(1.1)',
            cursor:'pointer'
        }
    },
    categoryPrepared:{
        borderRadius:'10px',
        backgroundImage:`url(${preparedFoodImage})`,
        backgroundSize:'cover',
        paddingBottom:'10%',
        textAlign:'center',
        transition:'transform 2s',
        width:'35%',
        marginLeft:'2%',
        justifyContent: 'center',
        '&:hover':{
            transform:'scale(1.1)',
            cursor:'pointer'
        }
    },
    categoryBreads:{
        borderRadius:'10px',
        backgroundImage:`url(${breadImage})`,
        backgroundSize:'cover',
        textAlign:'center',
        paddingBottom:'10%',
        transition:'transform 2s',
        width:'35%',
        marginLeft:'2%',
        flexDirection: 'column',
        justifyContent: 'center',
        '&:hover':{
            transform:'scale(1.1)',
            cursor:'pointer'
        }
    },

    title:{
        fontWeight:'bold',
        position:'relative',
        height:'100%',
        fontFamily: 'Amatic SC, cursive;',
        fontSize:'30px',
        color:'white'
    },
    subtitle:{
        textAlign:'center',
        fontWeight: 'lighter',
        fontSize: '15px',
        fontFamily:'Caveat,cursive',
    }


})



