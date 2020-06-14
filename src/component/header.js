import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import HomeIcon from '@material-ui/icons/HomeOutlined';
import {Button} from "@material-ui/core";
import {auth} from "../firebase/firebase.utils";
import {connect} from 'react-redux';
import CartIcon from "./CartIcon";
import Cart from "./cart";

const Header =({currentUser,hidden})=>{
    const classes = headerStyle();
    return(
            <div>
            <Link to='/'>
                <HomeIcon className={classes.homeIcon}/>
            </Link>
            <div>
                {currentUser ?
                    <Button onClick={()=>auth.signOut()} className={classes.signIn}>Sign Out</Button>
                    :
                    <Link to='signIn'>
                    <Button className={classes.signIn} >Sign in</Button></Link>}
            </div>
            <div>
                <Button className={classes.contact}>Contact</Button>
            </div>
          <CartIcon/>
                {
                    hidden||!currentUser ? null: <Cart/>
                }
        </div>

    )
}

const headerStyle = makeStyles({
  homeIcon:{
      position:'absolute',
      top:'3.5%',
      left:'6%',
      fontSize:'40px',
      color:'#cfd8dc'
  },
    signIn:{
      position: 'absolute',
        top: '4%',
        right:'10%',
        fontFamily:'Architects Daughter,cursive',
        color:'#757575'
    },
    contact:{
        position: 'absolute',
        top: '4%',
        right: '17%',
        fontFamily:'Architects Daughter,cursive',
        color:'#757575'
    }

})

const mapStateToProps = ({user:{currentUser},cart:{hidden}})=>({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
