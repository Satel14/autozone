import React from 'react';
import { Avatar } from '@material-ui/core';
import { useStateValue } from './StateProvider';


function Home() {
    const [{ user }, dispatch]= useStateValue();
    return (
        <div className="home">
            <Avatar src={user.photoURL} />
            <h1>Welcome {user.displayName}</h1>
        </div>
    )
}

export default Home;
