import { 
    FETCHING_DATA_START,
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_FAILURE
} from '../actions'

const initialState = {
    data: null,
    isFetching: false,
    error: ''
}

export const rootReducer = ( state = initialState, action) => {
    switch(action.type) {
        case FETCHING_DATA_START: 
        return {
            ...state,
            isFetching: true
        };
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            };
        case FETCHING_DATA_FAILURE: 
        return {
            ...state,
            isFetching: false
        }
            default: 
            return state;

    }
}