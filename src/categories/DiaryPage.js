import React from "react";
import {firestore} from "../firebase/firebase.utils";
import EachCategory from "../component/EachCategory";


class DiaryPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            diaryProducts:[]
        };
    }


    async componentDidMount (){
        var  allDiary= [];
        await firestore.collection('diary').get().then((snapshot)=>{
            snapshot.docs.forEach(doc=>{
                allDiary.push(doc.data());
            })
        })
        this.setState({diaryProducts:allDiary});
    }

    render() {
        return(
            <div>
                <EachCategory title='Diary & Eggs' items={this.state.diaryProducts}/>
            </div>
        )
    }
}

export default DiaryPage;
