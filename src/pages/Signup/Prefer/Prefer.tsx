import React, { useRef, useState } from 'react'
import { IonChip, IonContent, IonFooter, IonIcon, IonPage, IonSegment, IonSegmentButton, IonText } from "@ionic/react"
import "./Prefer.scss"
import Btn from '../../../components/Btn/Btn'
import d from "./data.json"
import { close } from "ionicons/icons"
import { useHistory } from 'react-router'
const Prefer = () => {
    var array = ["Movies", "Music", "Sports", "Arts", "Technology", "Hobbies"]
    var [prefer, nextPrefer] = useState("Movies")
    var data = { ...d as any }
    var list: [] = data[prefer]
    var [selected, nextSelect] = useState([])
    var scrollToView = useRef<any>(null)
    const history = useHistory()
    function onClick(_ev: any) {
        history.push("/connect")
    }
    return (
        <IonPage>
            <IonContent>
                <h1 className="p-4  title"> Preferences</h1>
                <IonText className="pickup">
                    Pick your favorite interests to find people to connect.
                </IonText>
                <IonSegment mode="ios" value="personal" className="segment">
                    <IonSegmentButton className="seg-btn1" value="personal">
                        Personal
                    </IonSegmentButton>
                    <IonSegmentButton className="seg-btn2" value="business">
                        Business
                    </IonSegmentButton>
                </IonSegment>

                <ul className="list-1 list-group list-group-horizontal mx-auto">
                    {array.map(el => <li key={el} className="list-group-item w-75" onClick={(ev: any) => {
                        nextPrefer(ev.target["innerHTML"])
                        var element = ev.target
                        element.style.color = "#ec7d30"
                        var siblings = [...element.parentElement.children]
                        siblings.splice(siblings.indexOf(element), 1)
                        siblings.map(el => el.style.color = "#000000")
                    }}
                    >{el}</li>)}
                </ul>

                <div className="container overflow-auto w-auto slices">
                    {list.map(el => <IonChip className="mx-2 text-wrap" key={el + Math.random()} onClick={(ev: any) => {
                        var temp = [...selected as any]
                        if (!temp.includes(ev.target.innerHTML)) {
                            temp.push(ev.target.innerHTML)
                            nextSelect(temp as never);
                            if(scrollToView.current) scrollToView.current.scrollIntoView({ behavior: "smooth" })
                        }
                    }}>{el}</IonChip>)}
                </div>

                <div className=" overflow-auto w-auto ">
                    {selected.map(el => <IonChip className="mx-2 text-wrap selected" key={el + Math.random()}
                        onClick={(ev: any) => {
                            var temp = [...selected as any]
                            if (temp.includes(ev.target.textContent)) {
                                temp.splice(temp.indexOf(ev.target.textContent), 1)
                                nextSelect(temp as never)
                            }
                        }}
                    >{el}
                        <IonIcon color="light" src={close}></IonIcon>
                    </IonChip>)}
                    <div></div>
                    <div className="keep-margin-prefer" ref={scrollToView}></div>
                </div>
                <IonFooter className="footer">
                    <Btn type="submit" classname="btn d-block mx-auto mt-1 w-75" bgcolor="#ec7d30" label="Submit" click={onClick} />
                    <a href="/signup" className="not-now d-block text-center text-dark text-decoration-none mt-1 mb-3"> Not Now</a>
                </IonFooter>
            </IonContent>
        </IonPage>
    )
}

export default Prefer
