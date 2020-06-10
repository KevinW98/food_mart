import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import {Button} from "@material-ui/core";
import {auth} from "../firebase/firebase.utils";

export default function Header({currUser}){
    const classes = headerStyle();
    return(
        <div>
            <Link to='/'>
                <HomeIcon className={classes.homeIcon}/>
            </Link>
            <div>
                {currUser ?
                    <Button onClick={()=>auth.signOut()} className={classes.signIn}>Sign Out</Button>
                    :
                    <Link to='signIn'>
                    <Button className={classes.signIn} >Sign in</Button></Link>}
            </div>
            <div>
                <h4 className={classes.contact}>Contact</h4>
            </div>
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
        right:'6%',
        fontFamily:'Architects Daughter,cursive',
    },
    contact:{
        position: 'absolute',
        top: '2%',
        right: '15%',
        fontFamily:'Architects Daughter,cursive'
    }
})
