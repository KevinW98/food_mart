import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';



function handleRightClick(quantity){
    quantity++;
}

const CheckoutItem = ({item:{imageUrl,price,itemId,quantity,name}})=>{
    const classes = checkoutItemStyle();
    return(
        <div className={classes.rowStyle}>
            <img src={imageUrl} className={classes.imageStyle}></img>
            <span className={classes.propertyStyle}>{name}</span>
            <span className={classes.propertyStyle}>${price}</span>
            <ArrowLeftIcon className={classes.arrowLeft}/>
            <span className={classes.propertyStyle}>{quantity}</span>
            <ArrowRightIcon  className={classes.arrowRight}/>
            <DeleteOutlineIcon className={classes.deleteStyle}/>
        </div>
    )
}



const checkoutItemStyle = makeStyles({
    rowStyle:{
        position:'relative',
        width:'100%',
        height:'30%',
        display:'flex'
    },
    imageStyle:{
        position: 'relative',
        width:'12%',
        height:'60%',
        left:'4%',
        top:'14%',
        borderRadius:'8px',
        marginRight:'2%'

    },
    propertyStyle:{
        position:'relative',
        top:'30%',
        width:'15%',
        marginLeft: '8.5%',
        fontFamily:'Architects Daughter,cursive',
    },
    deleteStyle:{
        position:'relative',
        top:'30%',
        width:'10%',
        fontSize:'25px',
        '&:hover':{
            cursor:'pointer'
        }

    },

    arrowLeft:{
        position:'absolute',
        left:'65%',
        top:'28%',
        '&:hover':{
            cursor:'pointer'
        }

    },
    arrowRight:{
        position:'absolute',
        left:'72%',
        top:'28%',
        '&:hover':{
            cursor:'pointer'
        }
    }
})

export default CheckoutItem;
