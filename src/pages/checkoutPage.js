import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {createStructuredSelector} from "reselect";
import {selectCartItems,selectorCartTotal} from "../redux/cart/cart.selector";
import {connect} from 'react-redux';
import CheckoutItem from "../component/checkoutItem";
import OrderPlaced from "../component/OrderPlaced";

const CheckoutPage=({cartItems,total})=> {
    const classes = checkoutStyle();
 return(
     <div>
         <span className={classes.titleStyle}>CHECKOUT</span>

         <div className={classes.itemsHeader}>
             <span className={classes.headerType}></span>
             <span className={classes.headerType}>Name</span>
             <span className={classes.headerType}>Price</span>
             <span className={classes.headerType}>
                 Quantity</span>
             <span className={classes.headerType}>Remove</span>
         </div>

     <div className={classes.itemsContainer}>


         {cartItems.map((eachItem)=>{
             return(<CheckoutItem cartItem={eachItem}/>)
         })}
     </div>
         <div className={classes.totalStyle}>Total:${total}</div>

        {cartItems.length==0 ?
        null:<OrderPlaced />}
     </div>)



}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectorCartTotal

})

const checkoutStyle = makeStyles({
    titleStyle:{
        position:'absolute',
        left:'34%',
        fontFamily:'Special Elite, cursive',
        top:'9%',
        fontSize:'45px'
    },
    itemsContainer:{
        position: 'absolute',
        height:'45%',
        width:'60%',
        left:'14%',
        top:'31%',
        overflow:'scroll',
        flex:'column',
        borderBottom:'1px solid black',
    },
    headerType: {
        position: 'relative',
        width: '15%',
        marginLeft: '5%',
        paddingTop:'4%',
        marginBottom:'10%',
        fontSize:'18px',
        fontWeight:'400',
        fontFamily:'Architects Daughter,cursive',
    },
    itemsHeader :{
        position:'absolute',
        display:'flex',
        borderBottom:'2px solid black',
        width: '60%',
        left:'14%',
        height: '10%',
        top:'15%',
    },
    totalStyle:{
        position:'absolute',
        left:'60%',
        bottom:'15%',
        fontFamily:'Architects Daughter,cursive',
        fontWeight:'600',
        fontSize: '22px'

    }
})

export default connect(mapStateToProps)(CheckoutPage);
