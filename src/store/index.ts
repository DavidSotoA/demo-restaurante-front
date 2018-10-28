import { combineReducers } from 'redux';
import { ShoppingCartState, shoppingCartReducer } from './shoppingCart';

export interface ApplicationState {
    shoppingCart: ShoppingCartState
}

export const rootReducer = combineReducers<ApplicationState>({
    shoppingCart: shoppingCartReducer
})
