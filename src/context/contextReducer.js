const contextReducer = (state, action) => {
    let transactions
    switch (action.payload) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter(t => t.id !== action.payload)
            return transactions;
        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state]
            return transactions
        default:
            return state
    }
}

export default contextReducer