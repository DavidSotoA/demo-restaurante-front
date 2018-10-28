import { Store, createStore } from 'redux';
import { ApplicationState, rootReducer } from './store';

export default function configureStore(
    
): Store<ApplicationState> {
    
    const store = createStore(
        rootReducer
    )

    return store;
}