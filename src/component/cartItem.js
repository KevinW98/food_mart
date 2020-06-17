import React from "react";
import {makeStyles} from "@material-ui/core";

const CartItem =({item:{imageUrl,price,itemId,quantity,name}})=>{
    const classes = itemStyle();
    return(
        <div className={classes.lineStyle}>
            <h6 className={classes.nameStyle}>{name}</h6>
            <img src={imageUrl} className={classes.picStyle}></img>
            <span className={classes.priceStyle}>${price+'   '}x{'   '+quantity}</span>

        </div>
    );
}

const itemStyle = makeStyles({
    lineStyle:{
        position:'relative',
        width:'100%',
        height:'40%',
    },
    nameStyle:{
        position: 'relative',
        width: '100%',
        height:'100%',
        marginTop:'0px',
        left:'5%',
        top:'10%',
        fontFamily:'Gloria Hallelujah, cursive'
    },
    picStyle:{
        position:'absolute',
        top:'40%',
        left:'5%',
        width:'30%',
        height:'50%',
        fontFamily:'Gloria Hallelujah, cursive'
    },
    priceStyle:{
        position:'absolute',
        top:'50%',
        left:'55%'
    }

})

export default CartItem;
