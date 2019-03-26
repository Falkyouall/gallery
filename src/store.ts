import {createStore} from 'redux'
import rootReducer from './reducer/reducers'

const configureStore = () => {
    const store = createStore(
        rootReducer,
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducer/reducers', () => {
            store.replaceReducer(rootReducer)
        })
    }

    return store
}

export default configureStore
