import { ADD_EXPENSE, ADD_CATEGORY, ADD_USERS,REMOVE_USERS, REMOVE_CATEGORY, DELETE_EXPENSE } from "./actionTypes";
import { v4 as uuidv4 } from 'uuid';

export const addExpense = payload => ({
    type: ADD_EXPENSE,
    payload:{
        title : payload,
        id:uuidv4(),
    }
})

export const deleteExpense = payload => ({
    type: DELETE_EXPENSE,
    payload
})
export const addCategory = payload => ({
    type: ADD_CATEGORY,
    payload :{
        title:payload,
        id:uuidv4()
    }
})
export const removeCategory = payload => ({
    type: REMOVE_CATEGORY,
    payload
})

export const addUsers = payload => ({
    type: ADD_USERS,
    payload :{
        name :payload,
        id:uuidv4()
    }
})

export const removeUsers = payload => ({
    type: REMOVE_USERS,
    payload
})
