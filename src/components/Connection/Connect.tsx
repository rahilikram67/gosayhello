import { IonContent, IonIcon, IonPage } from '@ionic/react'
import React from 'react'
import { useHistory } from 'react-router'
import Btn from "../../components/Btn/Btn"
import "./Connect.scss"
import { chevronBack } from "ionicons/icons"

function Slider(params: { text: string; class: string; imgText: { text: string; path: string; }[]; onClick: any }) {
    return (
        <>
            <p className={params.class}>{params.text}</p>
            <div className="card-top">
                {
                    params.imgText.map(el => {
                        return (
                            <div onClick={params.onClick} key={Math.random()} className="text-white mx-2 card-outer" style={{ backgroundImage: "url(" + el.path + ")" }}>
                                <div className="text-margin-top"></div>
                                <div className="text-center text-size" style={{ opacity: "1" }}>{el.text}</div>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

const Connects = (element: { from: string; }) => {
    const history = useHistory()
    const serial_1 = [
        {
            text: "City Emerges",
            path: "assets/city.jpg"
        },
        {
            text: "Man Saying Hello",
            path: "assets/man.jpg"
        },
        {
            text: "Father and Son",
            path: "assets/father.jpg"
        },
        {
            text: "City Emerges",
            path: "assets/city.jpg"
        }
    ]
    return (
        <IonPage>
            <IonContent>

                <h1 className={(element["from"] == "signup") ? "fw-bold mt-4 mx-3" : "fw-bold mt-4 text-center"}>
                    <IonIcon hidden={element["from"] == "signup"} src={chevronBack} onClick={() => history.goBack()} className="connect-icon" />
                    {(element["from"] == "signup") ? "Discover Connections" : "Discover"}
                </h1>
                <Slider text="People Nearby" class="nearby mx-3 mb-1" imgText={serial_1} onClick={() => history.push("/profile")} />
                <Slider text="Businesses Nearby" class="nearby mx-3 mt-3 mb-1" imgText={serial_1} onClick={() => history.push("/profile")} />
                <Slider text="New Events" class="nearby mx-3 mt-3 mb-1" imgText={serial_1} onClick={() => history.push("/profile")} />
                <div className="divider"></div>
                <footer className="footer mt-4 w-100" hidden={element["from"] != "signup"}>
                    <Btn type="button" classname="btn d-block mx-auto my-3 w-100 btn-sac" bgcolor="#EC7D30" label="Continue" click={() => history.push("home")} />
                </footer>
            </IonContent>
        </IonPage>
    )
}
export default Connects