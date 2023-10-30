import {configureStore} from "@reduxjs/toolkit";
import todoslice from "./slices/todoSlice.jsx";
import alertslice from "./slices/alertSlice.jsx";
import themeslice from "./slices/themeSlice.jsx";

const Store = configureStore({
    reducer:{
        todos:todoslice,
        alerts:alertslice,
        themes:themeslice,
    }
})

export default Store;
