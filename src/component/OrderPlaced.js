import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {makeStyles} from "@material-ui/core/styles";
import {connect} from 'react-redux';
import {selectCartItems} from "../redux/cart/cart.selector";
import {clearCart} from "../redux/cart/cart.actions";


const OrderPlaced=({cartItems,dispatch})=> {
    const [open, setOpen] = React.useState(false);
    const classes = orderStyle();

    const handleClickOpen = () => {
        setOpen(true);
    };

   const handleClose=()=>{
        setOpen(false);
    };

    return (
        <div>
            <Button  className={classes.buttonStyle}   onClick={handleClickOpen}>
                Place Order
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent  >
                    <DialogContentText className={classes.textStyle} id="alert-dialog-description">
                       We have received your order
                    </DialogContentText> <br/>
                    <DialogContentText className={classes.textStyle} id="alert-dialog-description">
                       Thanks for Shopping with us
                    </DialogContentText>
                     <br/>
                </DialogContent>
                <DialogActions>
                    <Button style={{fontFamily:'Architects Daughter,cursive',color:'#607d8b'}}
                            href='/'
                            onClick={async ()=>{
                                await dispatch(clearCart());
                               { handleClose()}
                            }}>
                       Back To HomePage
                    </Button>
                </DialogActions>
            </Dialog></div>

    );
}

const orderStyle = makeStyles({
    buttonStyle:{
        position:'absolute',
        left:'55%',
        bottom:'8%',
        width:'20%',
        height:'6%',
        fontFamily:'Righteous, cursive',
        fontWeight:'700',
        fontSize:'25px',
        color:'#607d8b'
    },
    textStyle:{
        fontFamily:'Architects Daughter,cursive',
    }


})

const mapStateToProps = (state)=>({
 cartItems:selectCartItems(state)})

export default connect(mapStateToProps)(OrderPlaced);
