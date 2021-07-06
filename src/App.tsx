
import {
  IonApp,
  IonRouterOutlet
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from "react-router"

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import "./bootstrap.css"

import Login from "./pages/Login/Login"
import Main from "./pages/Main/Main"
import Welcome from "./pages/Welcome/Welcome"
import Settings from "./pages/Settings/Settings"
import Forget from "./pages/Forget/Forget"
import Signup from "./pages/Signup/Signup"
import Prefer from './pages/Signup/Prefer/Prefer';
import Connect from './pages/Connection/Connect';

import React from 'react';
import Profile from './pages/Profile/Profile';


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet mode="ios">
        <Redirect exact path="/" to="/welcome" />
        <Route path="/login" component={Login} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/forget" component={Forget} />
        <Route path="/settings" component={Settings} />
        <Route path="/signup" component={Signup} />
        <Route path="/signup/prefer" component={Prefer} />
        <Route path="/connect" component={Connect}/>
        <Route path="/profile" component={Profile}/>
        <Main />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>

);

export default App;
