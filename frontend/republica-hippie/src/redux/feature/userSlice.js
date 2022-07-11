import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id_client: "",
    name: "",
    email: "",
    isLogged: false,
    accessToken: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        signIn(state, action){
            Object.assign(state, {
                id_client: action.payload.id_client,
                name: action.payload.name,
                email: action.payload.email,
                isLogged: true,
                accessToken: action.payload.accessToken,
            })
        },
        signOut(state){
            Object.assign(state, initialState)
        }
    }
})

export const { signIn, signOut } = userSlice.actions

export default userSlice.reducer;