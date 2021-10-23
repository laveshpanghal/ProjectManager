export const SetProjectData = (data) => (dispatch) => {

    dispatch({
        type: "SET_PROJECTDATA",
        payload: data,
    });
};
