import React from 'react';
import './App.css';
import HomePage from "./homepage.component";
import snacksPage from "./categories/snacksPage";
import diaryPage from "./categories/diaryPage";
import preparedFoodPage from "./categories/preparedFoodPage";
import breadsPage from "./categories/breads";
import {Route,Redirect,Switch} from 'react-router-dom';
import Header from "./component/header";
import {auth,createUserProfile} from "./firebase/firebase.utils";
import {connect} from 'react-redux';
import {setCurrentUser} from "./redux/user/user.action";
import SignUp from "./component/SignUp";
import SignInPart from "./component/SignInPart";
import BeveragesPage from "./categories/beveragesPage";


class  App extends React.Component{


   unsubscribeFromAuth = null;

   componentDidMount() {
       const {setCurrentUser}=this.props;
      this.unsubscribeFromAuth= auth.onAuthStateChanged( async userAuth => {
          if(userAuth) {
                   const userRef = await createUserProfile(userAuth);
                   userRef.onSnapshot(snapshot => {
                 setCurrentUser({
                     id:snapshot.id,
                     ...snapshot.data()
                   });

          });

       }
          setCurrentUser(userAuth);

   });}

   componentWillUnmount() {
       this.unsubscribeFromAuth();
   }


    render() {


    return (
    <div>
        <Header />
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/beverages' component={BeveragesPage}></Route>
        <Route exact path='/snacks'  component={snacksPage}></Route>
        <Route exact path='/diary' component={diaryPage} ></Route>
        <Route exact path='/preparedFood' component={preparedFoodPage}></Route>
        <Route exact path='/breads' component={breadsPage}></Route>
        <Route exact path='/signIn' render={()=>
            this.props.currentUser?
                (<Redirect to='/'/>):
                (<div>
                    <SignInPart/>
                    <SignUp/>
                </div>)}></Route></Switch>

    </div>
  );
}}

const mapDispatchToProps = dispatch =>({
    setCurrentUser:user=>dispatch(setCurrentUser(user))
})

const mapStateToProps =({user})=>({
    currentUser:user.currentUser
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
