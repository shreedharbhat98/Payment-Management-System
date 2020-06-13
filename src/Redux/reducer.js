import { ADD_EXPENSE, ADD_CATEGORY, ADD_USERS, REMOVE_CATEGORY, DELETE_EXPENSE } from "./actionTypes";
import { v4 as uuidv4 } from 'uuid';

const initState = {
   users :[
    {
        name : 'Shreedhar',
        id:uuidv4()
    },
    {
        name : 'Akshay',
        id:uuidv4()
    },
   ],


   category :[
        {
            title : 'Accomodation',
            id:uuidv4()
        },
        {
            title : 'Food',
            id:uuidv4()
        },
        {
            title : 'Travel',
            id:uuidv4()
        }],
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
        case ADD_CATEGORY:{
            return {
                 ...state, category : [...state.category, payload]
                }
        }
        case REMOVE_CATEGORY:{
            return {
                 ...state, category : state.category.map(item => console.log(item, payload))
                }
        }
        case ADD_USERS:
            return {...state}
        default:
            return state
    }
}

export default reducer