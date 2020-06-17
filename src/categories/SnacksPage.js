import React from "react";
import {firestore} from "../firebase/firebase.utils";

import EachCategory from "../component/EachCategory";

class SnacksPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            snacks:[]
        };
    }

    async componentDidMount(){
        var snacks =[];
        await firestore.collection('snacks').get().then((snapshot)=>{
            snapshot.docs.forEach(doc=>{
                snacks.push(doc.data());
            })
        })
        this.setState({snacks:snacks});
    }


    render() {
        return(
            <div>
                <EachCategory title='Snacks' items={this.state.snacks}/>
            </div>
        )

}}


export default SnacksPage;


