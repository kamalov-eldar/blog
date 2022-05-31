import { SET_USERS } from "./actionsType";


const usersReducer = (state = [], action) => {
  switch (action.type) {
    case SET_USERS: {
      return [...action.users];
    }
    default:
      return state;
  }
};

export default usersReducer;
