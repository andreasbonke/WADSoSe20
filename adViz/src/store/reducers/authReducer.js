const initState = {
    user: {
        username: "",
        password: "",
        isAdmin: false,
    },
    loggedIn: false
}

export default function (state = initState, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
            };
        case "LOGGEDIN":
            return {
                ...state,
                loggedIn: true
            }
        case "LOGOUT":
            return {
                user: initState,
                loggedIn: false
            }
        default:
            return state;
    };
}
