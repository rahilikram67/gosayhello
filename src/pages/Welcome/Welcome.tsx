
import { IonContent, IonPage } from '@ionic/react';
import React from 'react'
import { useHistory } from 'react-router';
import "./Welcome.scss"
const Welcome = () => {
    const history = useHistory()
    return (
        <IonPage>
            <IonContent>
                <div className="body">
                    <div className="space"></div>
                    <button className="btn started text-light" onClick={(ev) => { history.push('login') }}> Get Started</button>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Welcome;
