// Filename - App.js
import { useRouter } from "next/router";
import auth from "./firebase";
// import "./App.css";
import { useState } from "react";
import firebase from "firebase";

function App() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const router = useRouter();

    const signup = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // send verification mail.
                if (userCredential.user) {
                    userCredential.user.sendEmailVerification();
                }

                // auth.signOut();
                alert("Email sent");
                console.log('>>> 11', userCredential.user?.emailVerified)
            })
            .catch(alert);
            console.log('>>> 000', auth.currentUser?.emailVerified)

    };
    const signin = async () => {
        // e.preventDefault()
        // firebase.auth().sendPasswordResetEmail(email)
        // .then(function (response) {
        //             console.log(response);
        //             console.log("Successfully logged in.")
        //             // router.push("/");
        //         })
        //         .catch(function (error) {
        //             var errorCode = error.code;
        //             var errorMessage = error.message;
        //             console.log(errorCode);
        //             console.log(errorMessage);
        //         });
        // auth.signInWithEmailAndPassword(email, password)
        //     .then(function (response) {
        //         console.log(response);
        //         console.log("Successfully logged in.")
        //         router.push("/");
        //     })
        //     .catch(function (error) {
        //         var errorCode = error.code;
        //         var errorMessage = error.message;
        //         console.log(errorCode);
        //         console.log(errorMessage);
        //     });
        console.log('>>> 000', auth.checkActionCode)

    };

    return (
        <div className="App">
            <br />
            <br />
            <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                    setemail(e.target.value);
                }}
            ></input>
            <br />
            <br />
            <input
                type="password"
                placeholder="password"
                onChange={(e) => {
                    setpassword(e.target.value);
                }}
            ></input>
            <br />
            <br />
            <button onClick={signup}>Sign-up</button>
            <button onClick={signin}>check</button>
        </div>
    );
}

export default App;

