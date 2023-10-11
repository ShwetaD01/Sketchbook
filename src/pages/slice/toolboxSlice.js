const { MENU_ITEMS, COLORS } = require("@/constants");
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    [MENU_ITEMS.PENCIL] :{
        color: COLORS.BLACK,
        size: 3

    } ,
    [MENU_ITEMS.ERASER] :{
        color: COLORS.WHITE,
        size: 3
    },
    [MENU_ITEMS.UNDO]: {},
    [MENU_ITEMS.REDO]: {},
    [MENU_ITEMS.DOWNLOAD]: {}, 
   
}

const toolBoxSlice = createSlice({
    name: 'toolbox',
    initialState,
    reducers: {
        changeColour: (state, payload) => {
            state[action.payload.item].color = action.payload.color
        },
        changeBrushSize: (state, payload) => {
            state[action.payload.item].size = action.payload.size
        }


    }
})

export const {changeColour, changeBrushSize} =toolBoxSlice.actions;

export default toolBoxSlice.reducer;