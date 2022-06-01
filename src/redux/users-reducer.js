import { SET_USERS, SET_PROFILE } from './actionsType';

const initialState = {
  users: [],
  userProfile: {},
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return {
        ...state,
        users: [...action.users],
      };
    }
    case SET_PROFILE: {
      return {
        ...state,
        userProfile: action.userProfile,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
