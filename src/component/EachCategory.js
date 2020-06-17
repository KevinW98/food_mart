import React from "react";
import EachFood from "./EachFood";
import {makeStyles} from "@material-ui/core/styles";


const EachCategory =({title,items})=> {
    const classes = categoryStyle();

    return (
        <div>
            <h2 className={classes.titleStyle}>{title}</h2>
            <div className={classes.beveragesContainer}>
                {items.map((eachOne) => {
                    return (
                       <EachFood item={eachOne}/>
                       )
                })}
            </div>
        </div>)
}


const categoryStyle= makeStyles({
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
    }
})


export default EachCategory;



