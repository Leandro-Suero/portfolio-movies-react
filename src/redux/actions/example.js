import { ACTION1, ACTION2 } from "../actionTypes";

export const doAction1 = (payload) => ({
  type: ACTION1,
  payload,
});
export const doAction2 = (payload) => ({
  type: ACTION2,
  payload,
});

/* 
WITH THUNK example
export const getContact = (id) => async (dispatch) => {
    const res = await Axios.get(
        `http://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch({
        type: GET_CONTACT,
        payload: res.data,
    });
};
export const addContacts = (contact) => async (dispatch) => {
    const res = await Axios.post(
        "http://jsonplaceholder.typicode.com/users",
        contact
    );
    dispatch({
        type: ADD_CONTACTS,
        payload: res.data,
    });
};
*/
