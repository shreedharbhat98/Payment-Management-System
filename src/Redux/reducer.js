import { ADD_EXPENSE, ADD_CATEGORY, ADD_USERS, REMOVE_CATEGORY, DELETE_EXPENSE } from "./actionTypes";


const initState = {
   users :['Shreedhar', 'Akshay'],
   category :['Accomodation', 'Food', 'Transportation'],
   data :[],
   type:['Income', 'Expense']
}


const reducer = (state = initState, { type, payload }) => {
    console.log(payload)
    switch (type) {
        case ADD_EXPENSE:{
            return{
                ...state, data : [...state.data, payload]
            }
        }

        case DELETE_EXPENSE:
            return {...state}
        case ADD_CATEGORY:
            return { ...state }
        case REMOVE_CATEGORY:
            return { ...state }
        case ADD_USERS:
            return {...state}
        default:
            return state
    }
}

export default reducer