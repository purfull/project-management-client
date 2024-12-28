import { createSlice, PayloadAction } from "@reduxjs/toolkit"


const initialState = {}

export const projectManagementReducer = createSlice({
    name: "projectManagement",
    initialState,
    reducers: {
        loginLoad: (state: any,action: PayloadAction<any>) => {

        }
    }
})

export const { loginLoad } = projectManagementReducer.actions