import firebaseInit from "../firebase/firebase.init"
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

firebaseInit();
const useFirebase = () =>{

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const handleGoogleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              
            } else {
                setUser({});
            }
            setLoading(false)
        });
        return () => unsubscribed;
    },[])

    const handleSignOut = () =>{
        const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success btn-confirm',
            cancelButton: 'btn btn-danger btn-cancel'
        },
        buttonsStyling: false
        })
        
        swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You will be Sign Out!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Sign Out!',
        cancelButtonText: 'No, Cancel!',
        reverseButtons: true
        }).then((result) => {
        if (result.isConfirmed) {
            // deleted
            signOut(auth).then(() => {
                setUser({})
            })
            swalWithBootstrapButtons.fire(
            'Sign Out!',
            'You have been Sign Out.',
            'success'
            )
        }
        })
        
    }

    return {
        user,
        handleGoogleSignIn,
        setUser,
        setLoading,
        loading,
        handleSignOut
    }
}
export default useFirebase;