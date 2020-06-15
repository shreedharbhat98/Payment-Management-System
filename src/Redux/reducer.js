import { ADD_EXPENSE, ADD_CATEGORY, ADD_USERS, REMOVE_CATEGORY, EDIT_EXPENSE, DELETE_EXPENSE, REMOVE_USERS } from "./actionTypes";
import { v4 as uuidv4 } from 'uuid';

const initState = {
    users: [
        {
            name: 'Shreedhar',
            id: uuidv4()
        },
    ],


    category: [
        {
            title: 'Accomodation',
            id: uuidv4()
        },
        {
            title: 'Food',
            id: uuidv4()
        },
        {
            title: 'Travel',
            id: uuidv4()
        }],
    data: [],
    type: ['Income', 'Expense']
}


const reducer = (state = initState, { type, payload, }) => {
    switch (type) {
        case ADD_EXPENSE: {
            return {
                ...state, data: [...state.data, payload]
            }
        }

        case DELETE_EXPENSE: {
            return {
                ...state, data: state.data.filter(item => item.id !== payload)
            }

        }
        case EDIT_EXPENSE: {
            return {
                ...state,
                data: state.data.map(item => item.id === payload.id ?  payload : item )
            }

        }
        case ADD_CATEGORY: {
            return {
                ...state, category: [...state.category, payload]
            }
        }
        case REMOVE_CATEGORY: {
            return {
                ...state, category: state.category.filter(item => item.id !== payload)
            }
        }
        case ADD_USERS: {
            return {
                ...state, users: [...state.users, payload]
            }
        }
        case REMOVE_USERS: {
            return {
                ...state, users: state.users.filter(item => item.id !== payload)
            }
        }
        default:
            return state
    }
}

export default reducer