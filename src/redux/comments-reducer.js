import { SET_COMMENTS, ADD_COMMENT, SHOW_FORM } from "./actionsType";

const initialState = {
  comments: [],
  formIsShow: false,
};
const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS: {
      return { ...state, comments: action.comments };
    }
    case ADD_COMMENT: {
      return { ...state, comments: [...state.comments, action.comment] };
    }
    case SHOW_FORM: {
      return { ...state, formIsShow: action.formIsShow };
    }
    default:
      return state;
  }
};

export default commentsReducer;
