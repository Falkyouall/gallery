import {NEXT, PREV} from "../actions/actions";

export type CarouselType = {
    pos: number
    sliding: boolean
    dir: string
}

const initialState: CarouselType = {pos: 0, sliding: false, dir: NEXT};

const carousel = (state: any = initialState, {type, numItems}: any) => {
    switch (type) {
        case "reset":
            return initialState;
        case PREV:
            return {
                ...state,
                dir: PREV,
                sliding: true,
                pos: state.pos === 0 ? numItems - 1 : state.pos - 1
            };
        case NEXT:
            return {
                ...state,
                dir: NEXT,
                sliding: true,
                pos: state.pos === numItems - 1 ? 0 : state.pos + 1
            };
        case "stopSliding":
            return {...state, sliding: false};
        default:
            return state;
    }
}

export default carousel
