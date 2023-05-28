import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;

const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeIdType): typeof state => { // fix any

    // console.log(typeof state)
    // debugger
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id
            }


        default:
            return state
    }
}

type changeThemeIdType = {
    type: 'SET_THEME_ID',
    id: number
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any
