const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            console.log("action.payload", action.payload);
            state.push(action.payload);
            localStorage.setItem('cartData', action.payload);
            const cartData = localStorage.getItem('cartData');
            console.log("cartData", cartData);
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
