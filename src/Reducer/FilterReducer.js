const intialState = {
    filter_name: "All"
}

export default function filter_name(state = intialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "SETFILTER":
            return { ...state, filter_name: payload }
        case "RESETFILTER":
            return { ...state, filter_name: "All" }
        default:
            return state;
    }
}