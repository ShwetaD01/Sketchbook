const { configureStore } = require("@reduxjs/toolkit");
import MenuReducer from '../pages/slice/menuSlice';
import toolboxReducer from '../pages/slice/toolboxSlice';

 export const store= configureStore({
    reducer: {
        menu: MenuReducer,
        toolbox: toolboxReducer
    }
})