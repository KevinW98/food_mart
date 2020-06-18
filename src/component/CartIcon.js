import LocalMallIcon from '@material-ui/icons/LocalMallOutlined';
import React from "react";
import {connect} from 'react-redux';
import {toggleCartHidden} from "../redux/cart/cart.actions";
import {makeStyles} from "@material-ui/core/styles";
import {selectCartCount} from "../redux/cart/cart.selector";
import {createStructuredSelector} from "reselect";

const CartIcon =({toggleCartHidden,itemCount})=>{
    const classes = iconStyle();
  return( <div  className={classes.containerStyle} onClick={toggleCartHidden}>

      < LocalMallIcon className={classes.iconStyle}/>
      <span className={classes.countStyle}>{itemCount}</span>

  </div>)
}

const mapDispatchToProps = dispatch =>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});
const mapStateToProps= createStructuredSelector({
    itemCount : selectCartCount
});

const iconStyle = makeStyles({
    containerStyle:{
        position: 'absolute',
        top:'1.5%',
        right:'3.5%',
    },
    iconStyle:{
        fontSize:'60px',
        color:'#cfd8dc'
    },
    countStyle:{
        position: 'absolute',
        fontSize: '18px',
        left:'40%',
        bottom:'15%',
        color: '#546e7a',
        fontWeight:'800',
        fontFamily:'Architects Daughter,cursive',
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
