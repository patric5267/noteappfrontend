import {configureStore} from  '@reduxjs/toolkit'
import authreducer from './reducers/authreducers'

const store = configureStore({
    reducer:{
       auth:authreducer
    }
})

export default store