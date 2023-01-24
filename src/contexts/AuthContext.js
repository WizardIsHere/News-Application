import React, { useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider} from "firebase/auth";


import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
// Email SignIN
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
      signOut(auth);
    };


// Google SignIN
    const googleSignIn = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
    }


// GithubAuthProvider
    const githubSignIn = () =>{      
      const provider = new GithubAuthProvider();
      signInWithPopup(auth, provider)
    }


// ----------------------------------------------------------------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        console.log(user)
        setCurrentUser(user);
        setLoading(false)
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
    googleSignIn,
    githubSignIn,
  };

  return <AuthContext.Provider value={value}>
    {!loading && children}
    </AuthContext.Provider>;
}
