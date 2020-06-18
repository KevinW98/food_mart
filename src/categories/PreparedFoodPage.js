import React from "react";
import {firestore} from "../firebase/firebase.utils";

import EachCategory from "../component/EachCategory";

class PreparedFoodPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            preparedFoods:[]
        };
    }

    async componentDidMount(){
        var allPrepared =[];
        await firestore.collection('preparedFood').get().then((snapshot)=>{
            snapshot.docs.forEach(doc=>{
                allPrepared.push(doc.data());
            })
        })
        this.setState({preparedFoods:allPrepared});
    }


    render() {
        return(
            <div>
                <EachCategory title='Prepared Food' items={this.state.preparedFoods}/>
            </div>
        )

    }}


export default PreparedFoodPage;
