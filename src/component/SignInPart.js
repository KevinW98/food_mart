import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {Input,TextField,Button} from "@material-ui/core";
import {signInWithGoogle} from "../firebase/firebase.utils";

class signInPart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }

    handlePasswordChange = event =>{
        this.setState({password:event.target.value})
    }

    handleEmailChange = event =>{
        this.setState({email:event.target.value})
    }


    render() {
        const {classes} = this.props;
        return(
            <div >
                <h2 className={classes.instructionStyle}> I already have an account</h2>
                <span className={classes.textStyle} > Sign in with your email and password</span>
                <form  className={classes.formStyle} onSubmit={this.handleSubmit}>
                    <span className={classes.labelEmailStyle}>Email :</span>
                    <TextField
                        id = 'email'
                        type='email'
                        color='primary'
                        onChange={this.handleEmailChange}
                        className={classes.inputStyle}></TextField>
                    <br/>
                    <span className={classes.labelPasswordStyle}>Password :</span>
                    <TextField
                        id = 'password'
                        color='primary'
                        type='password'
                        onChange={this.handlePasswordChange}
                        className={classes.inputStyle}></TextField>
                   <br/>
                    <Button className={classes.submitInput}  type='submit'>Sign In</Button>
                    <Button className={classes.signWithGoogle} onClick={signInWithGoogle}
                            >Sign In With Google</Button>
                </form>
            </div>
        )
    }
}

const signInComponentStyle ={


    instructionStyle:{
        position:'absolute',
        top:'25%',
        left:'14%',
        fontSize:'25px',
        fontFamily: 'Amatic SC, cursive;',
    },
    textStyle:{
        fontFamily: 'Gloria Hallelujah, cursive',
        position:'absolute',
        width:'90%',
        top: '35%',
        left: '11%'
    },
    formStyle:{
        position:'absolute',
        top:'45%',
        left:'7%'
    },
    inputStyle:{
      position:'relative',
        left:'70%',
        width:'110%',
        fontFamily: 'Amatic SC, cursive',
        paddingBottom:'12%'
    },
    signWithGoogle:{
        position:'absolute',
        fontFamily:'Indie Flower ,cursive',
        fontWeight:'600',
        fontSize:'13px',
        left:'110%',
        width:'120%',
        bottom:'-25%'
    },
    submitInput:{
        position:'relative',
        fontFamily:'Indie Flower ,cursive',
        fontWeight:'600',
        paddingTop:'10%',
        fontSize:'20px',
        marginTop:'10%',
        left:'140%'
    },
    labelEmailStyle:{
        fontFamily:'Architects Daughter,cursive',
        position:'absolute',
        bottom:'80%',
        left:'29%',
        fontSize: '18px'
    },
    labelPasswordStyle:{
        fontFamily:'Architects Daughter,cursive',
        position:'absolute',
        bottom:'52%',
        left:'7%',
        fontSize: '18px'
    }
};

export default withStyles(signInComponentStyle)(signInPart);
