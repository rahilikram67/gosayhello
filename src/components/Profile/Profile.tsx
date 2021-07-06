import { IonChip, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonIcon, IonImg, IonPage, IonRow } from '@ionic/react'
import React from 'react'
import { chevronBack, close, pencil, settings } from "ionicons/icons"
import "./Profile.scss"
import { useHistory } from 'react-router'

const Profiles = (element: { from: string }) => {
    const history = useHistory()
    var prefers = ["Travel", "Valorant", "PhotoGraphy", "Nature", "Foods", "Swimming", "Hiking", "Biking", "Science Fiction", "Arts"]
    var images = [["assets/man.jpg", "assets/father.jpg"], ["assets/city.jpg", "assets/man.jpg"], ["assets/father.jpg", "assets/city.jpg"]]
    var ref = React.createRef<HTMLDivElement>()
    return (
        <IonPage>
            <IonContent>
                <IonFab className="fab-close" hidden={element["from"] == "main"}>
                    <IonFabButton onClick={() => history.goBack()}>
                        <IonIcon src={close}></IonIcon>
                    </IonFabButton>
                </IonFab>
                <IonFab className="fab-tick" hidden={element["from"] == "main"}>
                    <IonFabButton onClick={() => history.goBack()}>
                        <IonImg src="assets/hand.png" className="hand-icon"></IonImg>
                    </IonFabButton>
                </IonFab>
                <div className="back-img"></div>
                <IonIcon onClick={() => (element["from"] == "main") ? history.push("/edit-profile") : history.goBack()} src={(element["from"] == "main") ? pencil : chevronBack} color="medium" className="close-icon fixed-top" />
                <IonIcon hidden={element["from"] != "main"} onClick={() => history.push("/settings")} src={settings} color="medium" className="close-icon fixed-top profile-settings" />
                <div ref={ref} className="container-inside w-100">
                    <img className="profile-img mx-auto" src="data:image/jpeg;base64,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" alt="" />
                    <h1 className="text-center w-100 mt-1 fw-bold">John Doe</h1>
                    <IonGrid>
                        <IonRow>
                            <IonCol className="mx-3">
                                {
                                    prefers.map(el => (
                                        <IonChip key={Math.random()} className="bg-primary text-white chip">
                                            {el}
                                        </IonChip>
                                    ))
                                }
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="text-center">
                                <span className="h5 fw-bold"> 1.2k</span>
                                <p>Posts</p>
                            </IonCol>
                            <IonCol>
                                <span className="h5 fw-bold text-left"> 120k</span>
                                <p>Connections</p>
                            </IonCol>
                        </IonRow>
                        {
                            images.map(el => {
                                return (
                                    <IonRow key={Math.random()}>
                                        {el.map(vl => (
                                            <IonCol key={Math.random()}>
                                                <img className="rounded" src={vl} alt="" />
                                            </IonCol>
                                        ))}
                                    </IonRow>
                                )
                            })
                        }
                    </IonGrid>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Profiles
