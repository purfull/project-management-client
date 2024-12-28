import { combineReducers } from "@reduxjs/toolkit";
import { projectManagementReducer } from "./projectManagementReducer";

const rootReducer = combineReducers({
    projectManagement: projectManagementReducer,
})

export default rootReducer;