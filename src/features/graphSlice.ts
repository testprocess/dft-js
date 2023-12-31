import { createSlice } from '@reduxjs/toolkit'

type state = {
    value: number[]
}

const initialState: state = {
    value: []
}

const graphSlice = createSlice({
    name: 'graph',
    initialState,
    reducers: {
        addX(state, action) {
            console.log(action)
            state.value.push(action.payload.x)
        }
    }
})

export const { addX } = graphSlice.actions
export default graphSlice.reducer