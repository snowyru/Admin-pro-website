// Import functions to create and provision a Context Component
import React, { useReducer, createContext, useCallback } from 'react';

// Create the Context componet
export const Context = createContext();

export function UserContextProvider(props) {

    return (
        <Context.Provider>
            {props.children}
        </Context.Provider>
    )
};