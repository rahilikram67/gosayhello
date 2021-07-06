import { IonAvatar, IonIcon, IonImg, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { addCircle, chatbubble, home, search } from "ionicons/icons";
import React from "react";
import { Route } from "react-router";
import Home from "./Home/Home"
import Search from "./Search/Search"
import Add from "./Add/Add"
import Messages from "./Messages/Messages"
import "./Main.scss"
import Connect from "./Connection/Connect";
import Profile from "./Profile/Profile";
import Hello from "./Hellos/Hello";
import EditProfile from "../EditProfile/EditProfile";
const Main: React.FC = () => (
    <IonTabs>
        <IonRouterOutlet>
            <Route path="/home" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/add" component={Add} />
            <Route path="/messages" component={Messages} />
            <Route path="/main/profile" component={Profile} />
            <Route path="/main/connect" component={Connect} />
            <Route path="/hello" component={Hello} />
            <Route path="/edit-profile" component={EditProfile} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
                <IonIcon icon={home} />
            </IonTabButton>
            <IonTabButton tab="search" href="/search">
                <IonIcon icon={search} />
            </IonTabButton>
            <IonTabButton tab="add" href="/add">
                <IonIcon className="addCircle" icon={addCircle} />
            </IonTabButton>
            <IonTabButton tab="messages" href="/messages">
                <IonIcon icon={chatbubble} />
            </IonTabButton>
            <IonTabButton tab="/main/profile" href="/main/profile">
                <IonAvatar className="profile">
                    <IonImg src="assets/father.jpg"></IonImg>
                </IonAvatar>
            </IonTabButton>
        </IonTabBar>
    </IonTabs>
);

export default Main;