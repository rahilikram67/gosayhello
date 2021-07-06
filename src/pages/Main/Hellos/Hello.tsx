import { IonContent, IonHeader, IonIcon, IonPage, IonTitle } from '@ionic/react'
import { chevronBack } from 'ionicons/icons'
import React from 'react'
import { useHistory } from 'react-router'
import "./Hello.scss"
const Hello = () => {
    const history = useHistory()
    return (
        <IonPage>
            <IonHeader className="header">
                <IonIcon src={chevronBack} className="connect-icon mt-2" onClick={()=>history.goBack()}/>
                <IonTitle className="text-center mt-2">
                    <h1 className="ml-4">Hellos</h1>
                </IonTitle>
            </IonHeader>
            <IonContent>
                <p className="mx-1 text-justified color-grey">When you wave hello to nearby users and they wave back,
                    you'll be able to send mesaages before saying “HELLO”
                    in-person. Any future posts from these connections will
                    appear on your timeline. Now, just GoSayHELLO!</p>
            </IonContent>
        </IonPage>
    )
}

export default Hello
