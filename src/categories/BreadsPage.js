import React from "react";
import {firestore} from "../firebase/firebase.utils";
import EachCategory from "../component/EachCategory";


class BreadsPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            breads:[]
        };
    }


    async componentDidMount (){
        var  allBreads= [];
        await firestore.collection('breads').get().then((snapshot)=>{
            snapshot.docs.forEach(doc=>{
                allBreads.push(doc.data());
            })
        })
        this.setState({breads:allBreads});
    }

    render() {
        return(
            <div>
                <EachCategory title='Breads' items={this.state.breads}/>
            </div>
        )
    }
}

export default BreadsPage;
