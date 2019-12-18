import React, { createContext, useReducer, useContext } from "react";

const defaultState = {
    userInfo: {},
    isLogin: false
};

function reducer(state = defaultState, action = {}) {
    // console.log(action)
    switch (action.type) {
        case "UPDATE_USER_INFO":
            return { ...state, userInfo: action.userInfo };
        case "UPDATE_LOGIN_STATU":
            return { ...state, isLogin: action.isLogin };
        default:
            return state;
    }


}

// const DispatchContext = createContext(null);
const StoreContext = createContext(null);

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, defaultState);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {props.children}
        </StoreContext.Provider>
    );
}

// export const useDispatch = () => useContext(DispatchContext);
export const useStore = () => useContext(StoreContext);
