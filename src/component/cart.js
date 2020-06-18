import React from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import CartItem from "./cartItem";
import {connect} from 'react-redux';
import {selectCartItems} from "../redux/cart/cart.selector";
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from "../redux/cart/cart.actions";



const Cart =({cartItems,history,dispatch})=>{

    const classes = cartStyles();
  return(  <div className={classes.cartPage}>
      <div className={classes.items}>
          {cartItems.length ==0 ?
              <h5 className={classes.emptyStyle}>The cart is empty</h5>:
              cartItems.map((eachItem)=> {
               return(   <CartItem item={eachItem}/>);
              })
          }
      </div>
      <Button  onClick={()=>{history.push('/checkout');
                             dispatch(toggleCartHidden());
      }} variant='contained' className={classes.buttonStyle}> CHECK OUT</Button>
    </div>)
}

const mapStateToProps = (state)=>({
    cartItems:selectCartItems(state)
})


const cartStyles = makeStyles({
    cartPage:{
        position:'absolute',
        right:'3%',
        top:'9%',
        height:'35%',
        width:'14%',
        display: 'flex',
        flexDirection:'column',
        border:'1px solid grey',
        borderRadius:'10px'

    },
    emptyStyle:{
        position:'relative',
        top:'0%',
        left:'7%',
        width:'100%',
        height:'40%',
        fontFamily:'Architects Daughter,cursive'
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
        fontFamily:'Architects Daughter,cursive',
        '&:hover':{
            cursor:'pointer'
        }
    }
})

export default withRouter(connect(mapStateToProps) (Cart));


