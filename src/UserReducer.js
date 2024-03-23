import { createSlice } from "@reduxjs/toolkit";
import { users } from "./Users";


const userSlice = createSlice({
    name: 'users',
    initialState: users,
    reducers: {

        addUser: (state, action) => {
            state.push(action.payload)
        },

        editUser: (state, action) => {
            const { id, name, email } = action.payload;
            return state.map(user => {
                if (user.id === id) {
                    return {
                        ...user,
                        name: name,
                        email: email
                    };
                }
                return user; 
            })
        },

        deleteUser: (state, action) => {
            const { id } = action.payload;
            return state.filter(user => user.id !== id);
        }
    }
})

export const {addUser, editUser, deleteUser} = userSlice.actions;
export default userSlice.reducer