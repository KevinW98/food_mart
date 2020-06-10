import React from "react";
import {auth,createUserProfile} from "../firebase/firebase.utils";
import {withStyles} from "@material-ui/core";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";

class SignUp extends React.Component{
    constructor(){
    super();
    this.state ={
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert('Passwords do not match');
            return ;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
             await createUserProfile(user,{displayName});
             this.setState({
                 displayName:'',
                 email:'',
                 password:'',
                 confirmPassword:''
             });
        }catch (error) {
          console.error(error);

        }
    }



    handleChange = event =>{
        const {id,value} = event.target;
        this.setState({[id]:value});
    }
    render() {
        const {displayName,email,password,confirmPassword} = this.state;
        const {classes}=this.props;
        return(
            <div>
                <h2 className={classes.signUpTitle}> I do not have an account</h2>
                <span className={classes.signUpInstruction}>Sign Up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <span className={classes.nameLabel}>Preferred Name:</span>
                    <TextField  className={classes.nameInput} type='text' id='displayName' value={displayName}
                    onChange={this.handleChange}></TextField>
                    <span className={classes.emailLabel}>Email Address:</span>
                    <TextField className={classes.emailInput} type='email' id='email'
                    value={email} onChange={this.handleChange}></TextField>
                    <span className={classes.passwordLabel}>Set Password:</span>
                    <TextField className={classes.passwordInput} type='password' id='password'
                               value={password} onChange={this.handleChange}></TextField>
                    <span className={classes.confirmLabel}>Confirm Password:</span>
                    <TextField className={classes.confirmInput} type='password' id='confirmPassword'
                               value={confirmPassword} onChange={this.handleChange}></TextField>
                    <Button  type='submit' className={classes.signUpButton} >Sign Up</Button>
                </form>
            </div>
        )
    }
}


const SignUpStyles= {
    signUpTitle:{
        position:'absolute',
        top:'25%',
        right:'20%',
        fontSize:'25px',
        fontFamily: 'Amatic SC, cursive;',
    },
    signUpInstruction:{
        position: 'absolute',
        top:'35%',
        right:'17%',
        fontFamily: 'Gloria Hallelujah, cursive'
    },
    nameLabel:{
        position:'absolute',
        bottom:'52%',
        right:'34%',
        fontFamily:'Architects Daughter,cursive',
    },
    nameInput:{
       position:'absolute',
        bottom:'52.2%',
        right:'12%',
        width:'19%'
    },
    emailLabel:{
        position:'absolute',
        bottom: '46%',
        right:'34%',
        fontFamily:'Architects Daughter,cursive',
    },
    emailInput:{
        position:'absolute',
        bottom:'46.2%',
        right:'12%',
        width:'19%'
    },
    passwordLabel:{
        position:'absolute',
        bottom: '40%',
        right:'34%',
        fontFamily:'Architects Daughter,cursive',
    },
    passwordInput:{
        position:'absolute',
        bottom:'40.2%',
        right:'12%',
        width:'19%'
    },
    confirmLabel:{
        position:'absolute',
        bottom: '34%',
        right:'34%',
        fontFamily:'Architects Daughter,cursive',
    },
    confirmInput:{
        position:'absolute',
        bottom:'34.2%',
        right:'12%',
        width:'19%'
    },
    signUpButton:{
        position:'absolute',
        bottom:'25%',
        right:'8%',
        fontFamily:'Indie Flower ,cursive',
        fontWeight:'600',
        fontSize:'20px',
    }

}

export default withStyles(SignUpStyles)(SignUp);
