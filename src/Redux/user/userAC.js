import * as userTypes from "./userTypes";
export const addUserActionCreator = (userPayload) => ({
  type: userTypes.ADD_USER,
  userPayload: userPayload,
});

export const fetchUsersActionCreator = (fetchedUsers) => ({
  type: userTypes.FETCH_USERS,
  fetchedUsers: fetchedUsers,
});

export const loadingInitActionCreator = () => ({
  type: userTypes.LOADING_INIT,
});

export const loadingStopActionCreator = () => ({
  type: userTypes.LOADING_STOP,
});
