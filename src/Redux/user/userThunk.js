import Axios from "axios";
import * as AC from "./userAC";

export const fetchUsersThunk = () => {
    return (dispatch) => {
        dispatch(AC.loadingInitActionCreator());
        Axios.get("https://registrationapp-54f92.firebaseio.com/users.json")
            .then((Response) => {
                dispatch(AC.loadingStopActionCreator());
                console.log("Fetch response is: ", Response);

                for (let key in Response.data) {
                    console.log("item of object:", Response.data[key]);
                    dispatch(AC.addUserActionCreator(Response.data[key]));
                }
            })
            .catch((error) => {
                dispatch(AC.loadingStopActionCreator());
                console.log("Fetch error:", error);
            });
    };
};

export const postUserThunk = (object) => {
    return (dispatch) => {
        dispatch(AC.addUserActionCreator(object));
        dispatch(AC.loadingInitActionCreator());
        Axios.post(
                "https://registrationapp-54f92.firebaseio.com/users.json",
                object
            )
            .then((Response) => {
                dispatch(AC.loadingStopActionCreator());
                // console.log("Response is: ", Response);
            })
            .catch((error) => {
                dispatch(AC.loadingStopActionCreator());
                console.log("Error:", error);
            });
    };
};