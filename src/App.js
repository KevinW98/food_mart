import React from 'react';
import './App.css';
import HomePage from "./homepage.component";
import SnacksPage from './categories/SnacksPage';
import DiaryPage from "./categories/DiaryPage";
import PreparedFoodPage from "./categories/PreparedFoodPage";
import {Route,Redirect,Switch} from 'react-router-dom';
import Header from "./component/header";
import {auth,createUserProfile} from "./firebase/firebase.utils";
import {connect} from 'react-redux';
import {setCurrentUser} from "./redux/user/user.action";
import SignUp from "./component/SignUp";
import SignInPart from "./component/SignInPart";
import BreadsPage from "./categories/BreadsPage";
import BeveragesPage from "./categories/BeveragesPage";
import CheckoutPage from "./pages/checkoutPage";
import {selectCurrentUser} from "./redux/user/user.selector";
import {createStructuredSelector} from "reselect";
import {toggleCartHidden} from "./redux/cart/cart.actions";


class  App extends React.Component{


   unsubscribeFromAuth = null;

   componentDidMount() {
       const {setCurrentUser}=this.props;
      this.unsubscribeFromAuth= auth.onAuthStateChanged( async userAuth => {
          if(userAuth ) {
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
        <Route exact path = '/checkout' component={CheckoutPage}/>
        <Route  path='/beverages' component={BeveragesPage}/>
        <Route  path='/snacks'  component={SnacksPage}></Route>
        <Route  path='/diary' component={DiaryPage} ></Route>
        <Route  path='/preparedFood' component={PreparedFoodPage}></Route>
        <Route  path='/breads' component={BreadsPage}></Route>
        <Route path='/signIn' render={()=>
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
    setCurrentUser:user=>dispatch(setCurrentUser(user)),
})

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
