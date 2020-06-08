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



function App() {
  return (
    <div>
        <Header/>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/beverages' >{beveragesPage()}</Route>
        <Route exact path='/snacks' >{snacksPage()}</Route>
        <Route exact path='/diary' >{diaryPage()}</Route>
        <Route exact path='/preparedFood'>{preparedFoodPage()}</Route>
        <Route exact path='/breads'>{breadsPage()}</Route>
        <Route exact path='/signIn'>{signIn()}</Route>

    </div>
  );
}

export default App;
