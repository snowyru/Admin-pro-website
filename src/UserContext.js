// Import functions to create and provision a Context Component
import React, { useReducer, createContext, useCallback } from 'react';

// Create the Context componet
export const Context = createContext();


// Create an initial state
const initialState = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "loginStatus": false
}

// Declare the actions
const UPDATE_USER = 'UPDATE_USER';


function reducer(state=false, action) {
    if (action.type === UPDATE_USER) {

        console.log(action)

        return {
            ...state,
            ...action.payload
        }
    }
};


export function UserContextProvider(props) {

    const [state, dispatch] = useReducer(reducer, initialState);

    // Functions to change user state
    const setUserState = useCallback(
        function(payload) {

            const theAction = {
                type: UPDATE_USER,
                payload: {
                    firstName: payload.firstName,
                    lastName: payload.lastName,
                    email: payload.email,
                    loginStatus: payload.loginStatus
                }
            }

            dispatch(
                theAction
            );

        },
        [ dispatch ]
    );

    return (
        <Context.Provider 
        value={
            {
                state,       // Provide consumers with current state
                setUserState // Provide consumers with function to change the current state
            }
        }>
            {props.children}
        </Context.Provider>
    )
};