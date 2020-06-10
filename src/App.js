import React from 'react';
import './App.css';
import HomePage from "./homepage.component";
import beveragesPage from "./categories/beveragesPage";
import snacksPage from "./categories/snacksPage";
import diaryPage from "./categories/diaryPage";
import preparedFoodPage from "./categories/preparedFoodPage";
import breadsPage from "./categories/breads";
import signIn from "./pages/signIn";
import {Route} from 'react-router-dom';
import Header from "./component/header";
import {auth,createUserProfile} from "./firebase/firebase.utils";


class  App extends React.Component{
   constructor(){
       super();
       this.state={
           currentUser:null
       }
   }

   unsubscribeFromAuth = null;

   componentDidMount() {
      this.unsubscribeFromAuth= auth.onAuthStateChanged( async userAuth => {
          if(userAuth) {
                   const userRef = await createUserProfile(userAuth);
                   userRef.onSnapshot(snapshot => {
                       this.setState({currentUser:{
                           id:snapshot.id,
                               ...snapshot.data()
                           }}
                       )
                       console.log(this.state);
                   });

          }
          this.setState({currentUser:userAuth});
       });

   }

   componentWillUnmount() {
       this.unsubscribeFromAuth();
   }


    render() {


    return (
    <div>
        <Header currUser ={this.state.currentUser}/>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/beverages' component={breadsPage}></Route>
        <Route exact path='/snacks'  component={snacksPage}></Route>
        <Route exact path='/diary' component={diaryPage} ></Route>
        <Route exact path='/preparedFood' component={preparedFoodPage}></Route>
        <Route exact path='/breads' component={breadsPage}></Route>
        <Route exact path='/signIn' component={signIn}></Route>

    </div>
  );
}}

export default App;
