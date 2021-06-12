import React from 'react'
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider'
import { Button } from '@material-ui/core';
import { actionTypes } from './reducer'
import Profile from './svg/profile.svg'

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () =>{
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        }).catch(error => alert(error.message));
    }

    return (
        <div>
            <Button  className="lgoogle" onClick={signIn}  >Login with Google</Button>
            <div className="profile">
                <img src={Profile} alt="" />
            </div>
        </div>
    )
}

export default Login
