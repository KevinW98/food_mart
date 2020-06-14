import React from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

export default function Cart (){

    const classes = cartStyles();
  return(  <div className={classes.cartPage}>
      <div className={classes.items}>

      </div>
      <Button  variant='contained' className={classes.buttonStyle}> CHECK OUT</Button>

    </div>)
}


const cartStyles = makeStyles({
    cartPage:{
        position:'absolute',
        right:'3%',
        top:'9%',
        height:'35%',
        width:'16.5%',
        display: 'flex',
        flexDirection:'column',
        border:'1px solid grey',

    },
    items:{
        position:'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow:'scroll',
    },
    buttonStyle:{
        width:'80%',
        left:'10%',
        bottom:'1%',
        marginTop:'auto',
        backgroundColor:'#eeeeee',
        fontFamily:'Architects Daughter,cursive'
    }
})



