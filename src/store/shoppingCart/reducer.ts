import {Reducer} from 'redux';
import {ShoppingCartState, ShoppingCartTypes} from './types';

const initialState: ShoppingCartState = {
    data: [
    ]
}

const reducer: Reducer<ShoppingCartState> = (state = initialState, action) => {
    switch (action.type) {
        case ShoppingCartTypes.ADD_ITEM: {
            return { ...state, data: [ ...state.data, action.payload ] }
        }
        default: {
            return state
        }
    }
}

export { reducer as shoppingCartReducer }