import { useState, useContext, useEffect, createContext } from "react";
import { auth, db } from "../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";


const AuthContext = createContext()

export function AuthContextProvider({children}) {

    const [user, setUser] = useState({})

    function signUp (email, password)  {
        createUserWithEmailAndPassword(auth, email, password);
        setDoc(doc(db, 'users', email), {
            savedMovies: []
        })
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const none = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            none()
        }
    })

    return (
        <AuthContext.Provider value={{signUp, logIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}