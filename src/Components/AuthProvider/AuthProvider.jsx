import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../Firebase/Firebase.init";

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const register=(email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>console.log(result.user))
    }
    const login=(email,password)=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>console.log(result.user))
    }
    const authInfo={
        register,
        login
    }
    console.log(children);
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;