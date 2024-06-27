import {configureStore} "@reduxjs/toolkit";
import {ketoApi} from "../Redux/KetoApi"

export default configureStore({
    reducer: {
        [ketoApi.reducerpath] : ketoApi.reducer
    },
})
