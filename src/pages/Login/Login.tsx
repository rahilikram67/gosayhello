
import React from 'react'
import { IonContent, IonPage } from "@ionic/react"
import "./Login.scss"
import { Link, useHistory } from 'react-router-dom'

import Input from '../../components/Input/Input'
import Btn from '../../components/Btn/Btn'
import OR from '../../components/OR/OR'

export default  function Login() {
    const history = useHistory()
    return (
        <IonPage>
            <IonContent>
                <div className="container">
                    <div className="row">
                        <div className="col offset-md-3 mx-auto">
                            <h1 className="font text-center mt-5 font-weight-bolder">Welcome Back</h1>
                            <p className="lead text-center text-muted text-small mb-4 mt-3 font-12">
                                Sign using your social media account or email to continue
                            </p>
                            <form action="">
                                <Input type="email" label="Your email" class="mb-2" placeholder="john@example.com" />
                                <Input type="password" label="Your password" class="mb-2" placeholder="********" />
                                <Link to="/forget" className="text-decoration-none forget mt-0">Forgot Password?</Link>
                                <Btn type="submit" classname="btn d-block mx-auto mt-4 w-100" bgcolor="#ec7d30" label="Login" click={()=>history.push("/home")} />
                                <OR />
                                <Btn type="button" imgsrc="assets/login/facebook.png" classname="btn d-block mx-auto mt-4 mb-1 w-100" bgcolor="#3c5eb0" label="Continue with facebook" click={()=>history.push("/home")} />
                                <Btn type="button" imgsrc="assets/login/google.png" classname="btn d-block mx-auto w-100" bgcolor="#d15649" label="Continue with google" />
                            </form>
                            <Link to="/signup" className="d-block mx-auto text-center mt-3 text-decoration-none text-dark my-5">
                                Don't have an account? <b>Signup</b>
                            </Link>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}
