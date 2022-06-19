export const setfilter = (value) => async dispatch => {
    dispatch({
        type: "SETFILTER",
        payload: value
    })
}
export const resetfilter = () => async dispatch => {
    dispatch({
        type: "RESETFILTER",
    })
}