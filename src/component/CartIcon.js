import LocalMallIcon from '@material-ui/icons/LocalMallOutlined';
import React from "react";
import {connect} from 'react-redux';
import {toggleCartHidden} from "../redux/cart/cart.actions";
import {makeStyles} from "@material-ui/core/styles";

const CartIcon =({toggleCartHidden})=>{
    const classes = iconStyle();
  return( <div onClick={toggleCartHidden}>
      < LocalMallIcon className={classes.iconStyle}/>
  </div>)
}

const mapDispatchToProps = dispatch =>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});

const iconStyle = makeStyles({
    iconStyle:{
        position: 'absolute',
        top:'4%',
        right:'5%',
        fontSize:'30px',
        color:'#cfd8dc'
    }
})


export default connect(null,mapDispatchToProps)(CartIcon);
