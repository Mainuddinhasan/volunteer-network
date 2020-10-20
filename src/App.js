import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import BookedItems from './components/BookedItems/BookedItems';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotMatched from './components/NotMached/NotMached';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Registration from './components/Registration/Registration';


export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({})
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     <p>Name:{loggedInUser.email}</p>
    <Router>
       <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
{/*           
           <Route path="/registration/:itemId">
            <Registration />
          </Route> */}
          <PrivateRoute path="/registration/:uniqueId">
            <Registration />
          </PrivateRoute>
          <Route path="/bookedItems">
            <BookedItems />
          </Route>
         


          <Route exact path="/">
              <Home />
          </Route>
          
          <Route path="*">
              <NotMatched />
          </Route>
          
        
        </Switch>
    </Router>
    </UserContext.Provider>

  );
}

export default App;
