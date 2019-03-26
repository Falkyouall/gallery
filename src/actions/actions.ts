export const SET_COUNTER: any = 'SET_COUNTER'
export const INCREMENT_COUNTER: any = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER: any = 'DECREMENT_COUNTER'

export const NEXT = "NEXT";
export const PREV = "PREV";

export const set = (value: number) => ({
    type: SET_COUNTER,
    payload: value
})

export const increment = () => ({
    type: INCREMENT_COUNTER
})

export const decrement = () => ({
    type: DECREMENT_COUNTER
})

