import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {createStructuredSelector} from "reselect";
import {selectCartItems,selectorCartTotal} from "../redux/cart/cart.selector";
import {connect} from 'react-redux';


const CheckoutPage=({cartItems,total})=> {
    const classes = checkoutStyle();
 console.log(cartItems);
 console.log(total);
 return(
     <div>
         <span className={classes.titleStyle}>CHECKOUT</span>

     <div className={classes.itemsContainer}>
         <div className={classes.itemsHeader}>
             <span className= {classes.headerType}></span>
             <span className= {classes.headerType}>Name</span>
             <span className= {classes.headerType}>Price</span>
             <span className= {classes.headerType}>Quantity</span>
             <span className= {classes.headerType}>Remove</span>
         </div>
     </div></div>)



}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectorCartTotal

})

const checkoutStyle = makeStyles({
    titleStyle:{
        position:'absolute',
        left:'45%',
        fontFamily:'Special Elite, cursive',
        top:'12%',
        fontSize:'45px'
    },
    itemsContainer:{
        position: 'absolute',
        height:'60%',
        width:'60%',
        border:'1px solid black',
        left:'20%',
        top:'20%',
        overflow:'scroll',
    },
    headerType: {
        position: 'relative',
        width: '15%',
        marginLeft: '5%',
        paddingTop:'2%',
        fontFamily:'Architects Daughter,cursive',
    },
    itemsHeader :{
        position:'relative',
        display:'flex',
        border:'1px solid red',
        width: '100%',
        height: '12%',


    }
})

export default connect(mapStateToProps)(CheckoutPage);
