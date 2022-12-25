const initialState = {
    data:[],
    storedata:true
}
export default (state = initialState, action) => {
    switch (action.type) {
            case "SAVE_DATA":
                return {
                ...state,
                data:[...state.data, ...action.payload]
                            }
            case "STORE_MORE_DATA":
                return {
                ...state,
                storedata:action.payload            
            }
        default:
            return state;
    }
}
