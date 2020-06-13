import { ADD_EXPENSE, ADD_CATEGORY, ADD_USERS, REMOVE_CATEGORY, DELETE_EXPENSE } from "./actionTypes";

export const addExpense = payload => ({
    type: ADD_EXPENSE,
    payload
})

export const deleteExpense = payload => ({
    type: DELETE_EXPENSE,
    payload
})
export const addCategory = payload => ({
    type: ADD_CATEGORY,
    payload
})
export const removeCategory = payload => ({
    type: REMOVE_CATEGORY,
    payload
})

export const addUsers = payload => ({
    type: ADD_USERS,
    payload
})

