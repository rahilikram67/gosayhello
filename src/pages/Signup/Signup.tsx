import { IonContent, IonPage, IonText } from '@ionic/react'
import React from 'react'
import Input from "../../components/Input/Input"
import Btn from "../../components/Btn/Btn"
import "./Signup.scss"
import OR from '../../components/OR/OR'
import { Link, useHistory } from 'react-router-dom'



const Signup = () => {
    const history = useHistory()
    const onClick = () => {
        history.push("/signup/prefer")
    }
    return (
        <IonPage>
            <IonContent>
                <div className="container">
                    <h1 className="text-center mt-3">Sign up</h1>
                    <form action="">
                        <Input type="text" label="First name" class="mt-3 mb-2" placeholder="" />
                        <Input type="text" label="Last name" class="mt-2 mb-2" placeholder="" />
                        <Input type="email" label="Your email" class="mt-2 mb-2" placeholder="" />
                        <Input type="password" label="Your Password" class="mt-2 mb-2" placeholder="" />

                        <IonText className="mr-5 font-small">
                            By signing up yo are agreeing to our Privacy Policy and
                            Terms of Service
                        </IonText>
                        <Btn type="submit" classname="btn d-block mx-auto mt-4 w-100" bgcolor="#ec7d30" label="Signup" click={onClick} />
                        <OR />
                        <Btn type="button" imgsrc="assets/login/facebook.png" classname="btn d-block mx-auto mt-4 mb-1 w-100" bgcolor="#3c5eb0" label="Continue with facebook" />
                        <Btn type="button" imgsrc="assets/login/google.png" classname="btn d-block mx-auto w-100" bgcolor="#d15649" label="Continue with google" />
                        <Link className="text-decoration-none text-dark d-block text-center my-3" to="/login">Already have an account? <b>Login</b></Link>
                    </form>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Signup
