import React from "react";
import {connect} from 'react-redux';
import {Button} from "@material-ui/core";
import {addItem} from "../redux/cart/cart.actions";

import {makeStyles} from "@material-ui/core/styles";

const EachFood =({item,addItem})=>{
    const{name,price,imageUrl,itemId}= item;
    const classes = itemStyle();
    return(
        <div   className={classes.eachItem}>
            <span className={classes.nameTag}>{name}</span>

            <img  className={classes.eachImage} src={imageUrl}/>
            <Button onClick={()=>addItem(item)} color='grey' variant='text' className={classes.buttonStyle}>
                ADD TO CART
            </Button>
            <span className={classes.priceTag}>${price}</span></div>
    );
};

const itemStyle = makeStyles({
    eachItem:{
        position:'relative',
        width:'22%',
        height:'40%',
        marginTop:'5%',
        marginLeft:'10%',
        flex:'column'


    },
    eachImage:{
        position:'relative',
        height:'75%',
        width:'100%',
        borderRadius:'15px',
        transition:'transform 2s',
        '&:hover':{
            opacity:'0.7',
            cursor:'pointer'
        }
    },
    nameTag:{
        position:'relative',
        fontFamily:'Gloria Hallelujah, cursive',
        fontSize: '17px',
        fontWeight:'400',
        left:'25%'
    },
    priceTag:{
        position:'relative',
        width:'10%'
    },
    buttonStyle:{
        position:'relative',
        left:'0%',
        width:'80%',
        color: '#b0bec5',
        fontWeight: '600',
        fontFamily:'Gloria Hallelujah, cursive',
    }
})

const mapDispatchToProps = dispatch =>({
    addItem: item =>dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(EachFood)
