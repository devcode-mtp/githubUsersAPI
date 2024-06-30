import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [],
    selectedUser: null,
    isLoading: false,
    hasError: false
}

export const users = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUsersFromAPI: (state, action) => {
            state.users = action.payload
            state.isLoading = false
            state.hasError = false
        },
        addLoading: (state, action) => {
            state.isLoading = true
            state.hasError = false
        },
        addError: (state, action) => {
            state.hasError = true
            state.isLoading = false
        },
        selectUser: (state, action) => {
            state.selectedUser = action.payload
        },
        clearUser: (state, action) => {
            state.selectedUser = null
        }
    }
})

export const { addUsersFromAPI, addLoading, addError, selectUser, clearUser } = users.actions
export default users.reducer

