import React from "react";
import {firestore} from "../firebase/firebase.utils";
import {withStyles} from "@material-ui/core";
import {Button} from "@material-ui/core";


class BeveragesPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            beverages:[]
        };
    }

    async componentDidMount (){
        var  drinks= [];
       await firestore.collection('beverages').get().then((snapshot)=>{
            snapshot.docs.forEach(doc=>{
                drinks.push(doc.data());
            })
        })
       this.setState({beverages:drinks});
    }





    render() {
        const {classes} = this.props;


        return(
            <div  >
                <h2 className={classes.titleStyle}>Beverages</h2>
                <div className={classes.beveragesContainer} >
                    {this.state.beverages.map((drink)=>{
                        return(
                            <div   className={classes.eachDrink}>
                                <span className={classes.nameTag}>{drink.name}</span>

                            <img  className={classes.eachImage} src={drink.imageUrl}/>
                                <Button color='grey' variant='text' className={classes.buttonStyle}  >ADD TO CART</Button>
                                <span className={classes.priceTag}>${drink.price}</span></div>

                        )

                    })}


                </div>
            </div>
        )
    }
}


const beverageStyle ={
   buttonStyle:{
       position:'relative',
       left:'0%',
       bottom:'0%',
       color: '#b0bec5',
       fontWeight: '600',
       fontFamily:'Gloria Hallelujah, cursive',
   },

    titleStyle:{
         position:'absolute',
         fontFamily:'Gloria Hallelujah, cursive',
          left:'40%',
          top:'6%',
          fontSize:'35px',
        color:'#757575'

    },
    beveragesContainer:{
        position:'absolute',
        display:'flex',
        height:'70%',
        width:'70%',
        top:'20%',
        left:'15%',
        flexWrap:'wrap',
        overflow:'auto'
    },
    eachDrink:{
        position:'relative',
        width:'22%',
        height:'38%',
        marginTop:'5%',
         marginLeft:'10%',
        flex:'column'


    },
    eachImage:{
        position:'relative',
        height:'75%',
        width:'100%',
        transition:'transform 2s',
        '&:hover':{
            opacity:'0.7',
            cursor:'pointer'
        }
    },
    nameTag:{
     position:'relative',
        fontFamily:'Gloria Hallelujah, cursive',
        fontSize: '14px',
        fontWeight:'400',
        left:'25%'
    },
    priceTag:{
     position:'absolute',
      left:'80%',
        bottom:'0%'
    }
}


export default withStyles(beverageStyle)( BeveragesPage);
