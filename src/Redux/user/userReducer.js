import * as userTypes from "./userTypes";
import {
    setFromUsers
} from "./userUtilities";


const initialState = {
    users: [
        //     {
        //     userName: 'Alex',
        //     date: '22.01.2019'
        // }, {
        //     userName: 'Bob',
        //     date: '22.01.2019'
        // }, {
        //     userName: 'Jack',
        //     date: '22.01.2019'
        // }, {
        //     userName: 'Alina',
        //     date: '22.01.2019'
        // }, {
        //     userName: 'Sasha',
        //     date: '22.01.2019'
        // }, {
        //     userName: 'Rick',
        //     date: '22.01.2019'
        // }, {
        //     userName: 'Tanya',
        //     date: '22.01.2019'
        // }
    ],
    loading: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userTypes.ADD_USER:
            return {
                ...state,
                users: [...state.users, action.userPayload],
            };
        case userTypes.FETCH_USERS:
            return {
                ...state,
                users: [...state.users, action.fetchedUsers],
            };
        case userTypes.LOADING_INIT:
            return {
                ...state,
                loading: true,
            };
        case userTypes.LOADING_STOP:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
export default userReducer;