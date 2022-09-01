import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        countAction: (state, action) => {
            state.count = action.payload;
        }
    }
});

export const { countAction } = counterSlice.actions;
export default counterSlice.reducer;