import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


export const AuthContext  = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoading(true);
        signOut(auth)
        .then(()=>{
            Swal.fire("You logged out successfully");
        })
    }

    const updateUserProfile =(name, photo)=>{
        updateProfile(auth.currentUser, {
            displayName:name, photoURL: photo
        })
        .then(() =>{
            console.log('profile updated with name and photo')
        })
        .catch(error =>{
            console.log(error)
        })
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            // console.log(currentUser)
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            return unSubscribe();
        }
    },[])

    const authInfo = {
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        loading,
        user

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;