//индификатор события 
export const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME';
export const ACTION_CHANGE_SECOND_NAME = "ACTION_CHANGE_SECOND_NAME";
 

//action creator
export const changeFirstName = newFirstName => {
    return { type: ACTION_CHANGE_FIRST_NAME, payload: newFirstName };
}

export const changeSecondName = newFirstName => {
  return { type: ACTION_CHANGE_SECOND_NAME, payload: newFirstName };
};