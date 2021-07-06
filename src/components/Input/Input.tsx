
import { IonImg, IonInput, IonItem, IonLabel } from '@ionic/react'
import React, { useState } from 'react'
import "./Input.scss"



const Input = (element: { class: string; label: string; type: any; placeholder: string }) => {
    var [img, nextImg] = useState("ok-icon d-none")
    var email = ""
    function checker(ev: any): any {
        var value = ev.target.value
        if ((element.type === "email" && value.match(/[a-zA-Z\d]+@[a-zA-Z\d]+.com$/g)) || ((element.type === "password" || element.type === "text") && value.length > 6)) {
            email = value
            nextImg("ok-icon")
            console.log(email)
        }
        else nextImg("ok-icon d-none")
    }
    return (
        <>
            <IonItem lines="none" className={"input-cover " + element.class}>
                <IonLabel position="floating" className="lbl">{element.label}</IonLabel>
                <IonInput onIonChange={checker} type={element.type} className="input-inner" placeholder={element.placeholder}>
                    <IonImg src="assets/login/ok.png" className={img}></IonImg>
                </IonInput>
            </IonItem>
        </>
    )
}

export default Input
