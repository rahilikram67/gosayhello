import React, { useState } from 'react'
import { IonAvatar, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage } from '@ionic/react'
import "./Home.scss"
import { heart } from "ionicons/icons"
import { useHistory } from 'react-router'

const Card = (elem: { data: { image: any; likes: number; profile: string; name: string, status: string, color: string }, state: number, changeState: any }) => {

    return (
        <div className="cardy mx-auto my-3" style={{ backgroundImage: `url("${elem.data.image}")` }}>
            <div className="keep-margin"></div>
            <IonItem className="in-item">
                <IonAvatar className="avatar-img" slot="start">
                    <IonImg src={elem.data.profile}></IonImg>
                </IonAvatar>
                <IonLabel>
                    <div className="name">{elem.data.name}</div>
                    <p>{elem.data.status}</p>
                </IonLabel>
                <div slot="end">{elem.data.likes}</div>
                <div slot="end" className="heart" style={{ backgroundColor: elem.data.color }} onClick={(ev: any) => {
                    elem.changeState((state: number) => state + 1)
                    if (elem.data.color == "#2E373D") {
                        elem.data.color = "#ED4747" // color is red now 
                        elem.data.likes++
                        //add like to firebase   
                    }
                    else {
                        elem.data.color = "#2E373D" // color is red now 
                        elem.data.likes--
                        //reduce likes from firebase
                    }
                }}>
                    <IonIcon size="large" className="mt-1 mx-1" src={heart} />
                </div>
            </IonItem>
        </div>
    )
}

const Home = () => {
    const history = useHistory()
    var [cards, newCard] = useState([
        { color: "#2E373D", status: "an hour ago", image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", profile: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", name: "Tree Salxon", likes: 12 },
        { color: "#2E373D", status: "a day ago", image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80", profile: "https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=6&m=535695503&s=612x612&w=0&h=uP8aDK4xlfjk3kEiyr9wwUiuh80UwAiICweFpiBDosk=", name: "Alone In World", likes: 120 },
        { color: "#2E373D", status: "a week ago", image: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", profile: "https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg", name: "What a Day", likes: 100 }
    ])
    var [state, setState] = useState(1)
    return (
        <IonPage>
            <IonHeader className="header">
                <p className="mt-3 mx-3 mb-0">Welcome</p>
                <IonItem lines="none">
                    <h1 className="fw-bold">Marcus</h1>
                    <IonImg className="profile-cons mb-2" slot="end" src="assets/graph.png" onClick={()=>history.push("/main/connect")}></IonImg>
                    <IonImg className="profile-cons mb-2" slot="end" src="assets/hand.png" onClick={()=>history.push("/hello")}></IonImg>
                </IonItem>
            </IonHeader>
            <IonContent>
                {
                    cards.map(el => {
                        return (
                            <Card key={Math.random()} data={el as any} state={state} changeState={setState} />
                        )
                    })
                }

            </IonContent>
        </IonPage>
    )
}

export default Home



