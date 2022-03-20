import { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Context as UserContext} from './UserContext';
 
function LoginScreen() {

    // Subscribe to the Provider
    const { state, setUserState } = useContext(UserContext);
    const { loginStatus } = state;

    function login() {
        // Fetch request to get user's details
        const dbDocument = {
            firstName: "",
            lastName: "",
            email: "",
            loginStatus: true
        }

        // Dispatch the details (payload) to UserContext
        setUserState(dbDocument);

    }


    if ( loginStatus === false) {

        return (
            <div className="container py-5" style={{"maxWidth": "600px"}}>

                <h1>Login</h1>

                <label>Email</label>
                <input type="text" className="form-control" />

                <label>Password</label>
                <input type="password" className="form-control" />

                <button onClick={login} className="btn btn-primary my-3">Log in</button>

            </div>
        )
    } else {
        return (
            <Redirect to="/profile-settings" />
        )
    }
}

export default LoginScreen;