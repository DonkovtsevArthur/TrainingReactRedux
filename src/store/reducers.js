import { ACTION_CHANGE_FIRST_NAME, ACTION_CHANGE_SECOND_NAME} from './actions';

//исходное состояние 
const intitialState ={
  firstName: '',
  secondName: ''
};

//reducer
export const rootReducer = (state = intitialState, action) => {
  switch (action.type) {
    case ACTION_CHANGE_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case ACTION_CHANGE_SECOND_NAME:
      return { ...state, secondName: action.payload };
    default:
      return state;
  }
};