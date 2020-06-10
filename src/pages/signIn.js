import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import SignInPart from "../component/SignInPart";
import SignUp from "../component/SignUp";

export default function signIn() {
    const classes = signPageStyle();
    return (
        <div>
            <br/><br/>
                <SignInPart></SignInPart>
                <SignUp/>
        </div>
    )
}

const signPageStyle =makeStyles({
    signIn:{
        position:'absolute',
    }
})
