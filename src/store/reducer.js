const initialState = {
    authCredentials: {
        phoneNumber: "",
        password: "",
    },
    signUpData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
    },
    userTypes: ["buy gas", "sell gas"],
    actionTypes: [],
    errors: {},
    token: "",
    actionAfterOTP: "",
    url: ""
}

const reducer = (state = initialState, action) => {
    return state;
}

export default reducer;