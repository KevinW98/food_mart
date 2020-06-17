import React from "react";
import {firestore} from "../firebase/firebase.utils";
import EachCategory from "../component/EachCategory";

class BeveragesPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
           beverages:[]
        };
    }


    async componentDidMount (){
        var  drinks=[];
        await firestore.collection('beverages').get().then((snapshot)=>{
            snapshot.docs.forEach(doc=>{
                drinks.push(doc.data());
            })
        })

        this.setState({beverages:drinks});
    }

    render() {
        return(
            <div>
                <EachCategory title='Beverages' items={this.state.beverages}/>
            </div>
        )
    }
}

export default BeveragesPage;
